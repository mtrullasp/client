"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
var _ = require("lodash");
var mobx_1 = require("mobx");
var ts_debounce_1 = require("ts-debounce");
var constants_1 = require("../../../util/constants");
var $ = require("jquery");
var axios_1 = require("axios");
var keyboard_manager_1 = require("keyboard-manager");
var AlbumStore_1 = require("./AlbumStore");
var MyRouter_1 = require("../routing/MyRouter");
var constants_2 = require("../../../util/constants");
var RadioStore_1 = require("./RadioStore");
var WorksStore_1 = require("./WorksStore");
var translate = require("translate");
var DZ = window.DZ;
var UPC_CODE_LENGHT = 13;
function isNumeric(str) {
    return parseFloat(str).toString() == str;
}
exports.isNumeric = isNumeric;
function refinaSearchAlbums(searchedAlbums, str, recursive) {
    if (!searchedAlbums) {
        return null;
    }
    var cometes = extractText(str);
    if (!cometes) {
        var parts = str.split(/[ \(,\)]+/);
        if (recursive) {
            parts.find(function (p) {
                if (isNumeric(p)) {
                    return !!refinaSearchAlbums(searchedAlbums, p, false);
                }
            });
        }
    }
    else {
        return searchedAlbums.filter(function (a) {
            var delims = [" ", ",", ".", ";", "\n"];
            return !!delims.find(function (delim) {
                if (a.name.toLowerCase().indexOf(cometes.toLowerCase() + delim) >= 0) {
                    return true;
                }
                return false;
            });
        });
    }
}
exports.refinaSearchAlbums = refinaSearchAlbums;
function extractText(str) {
    var ret = "";
    if (/"/.test(str)) {
        ret = str.match(/"(.*?)"/)[1];
    }
    else {
        ret = "";
    }
    return ret;
}
exports.extractText = extractText;
var AppState = (function () {
    function AppState(composerStore) {
        var _this = this;
        var _a;
        this.isComposer = function (artistId) {
            return false;
        };
        this.userPlayListSortField = "title";
        this.composersFromApi = [];
        this.composerOrderByFields = [
            {
                Value: "ranking",
                Desc: "Order by Ranking"
            },
            {
                Value: "AnyoNeix",
                Desc: "Order by Date of Birth"
            },
            {
                Value: "Nom",
                Desc: "Order by Name"
            },
            {
                Value: "numOfWorks",
                Desc: "Order by Works"
            },
            {
                Value: "numOfRecordings",
                Desc: "Order by Recordings"
            },
            {
                Value: "IdNacio",
                Desc: "Group by Birth Nation"
            },
            {
                Value: "shuffle",
                Desc: "Shuffle"
            }
        ];
        this.performerOrderByFields = [
            {
                Value: "Nom",
                Desc: "Order by Title"
            },
            {
                Value: "numOfRecordings",
                Desc: "Order by Recordings"
            },
            {
                Value: "shuffle",
                Desc: "Shuffle"
            }
        ];
        this.albumOrderByFields = [
            {
                Value: "fans",
                Desc: "Order by Ranking"
            },
            {
                Value: "AnyoNeix",
                Desc: "Order by Publish Date"
            },
            {
                Value: "Nom",
                Desc: "Order by Title"
            },
            {
                Value: "shuffle",
                Desc: "Shuffle"
            }
        ];
        this.composerOrderByFieldSelectedIndex = 0;
        this.performerOrderByFieldSelectedIndex = 0;
        this.composerOrderByDirection = 1;
        this.performerOrderByDirection = 1;
        this.isPlayHover = false;
        this.APP_ID = "272642";
        this.activeRouterPath = "/";
        this.isPageApagada = false;
        this.tabMyMusica = [constants_1.ROUTE_PERFORMERS, constants_1.ROUTE_PLAYLISTS];
        this.showOnlyComposers = true;
        this.activePreviousTrack = null;
        this.imageSide = "hifiAnticFix.gif";
        this.playerIsPlaying = false;
        this.trackProgress = 20;
        this.activeComposerId = 1;
        this.isLoading = false;
        this.composerAlbumsOffset = 0;
        this.searchStrict = true;
        this.normalizeForSearch = function (s) {
            return s;
        };
        this.heightPageTitle = 60;
        this.quizBlindTestQuestions = [];
        this.textButtonGenerateBlindTest = "Generate";
        this.isGeneratingBlindTest = false;
        this.activeComposerQuotes = [];
        this.activeTrackIsFavorite = false;
        this.composerTabs = [
            {
                text: "Overview",
                id: "overview",
                onClick: function () {
                    _this.composerTabSelectedIndex = 0;
                }
            },
            {
                text: "Timeline Biography",
                id: "timeline",
                onClick: function () {
                    _this.composerTabSelectedIndex = 1;
                }
            },
            {
                text: "Works",
                id: "works",
                onClick: function () {
                    _this.composerTabSelectedIndex = 2;
                }
            },
            {
                text: "Connections",
                id: "externalLinks",
                onClick: function () {
                    _this.composerTabSelectedIndex = 3;
                }
            },
            {
                text: "External Links",
                id: "externalLinks",
                onClick: function () {
                    _this.composerTabSelectedIndex = 4;
                }
            }
        ];
        this.composerTabSelectedIndex = 0;
        this.getSatelits();
        this.myRouter = new MyRouter_1.MyRouter(this);
        this.albums = new AlbumStore_1.AlbumState(this);
        this.radioStore = new RadioStore_1.RadioStore(this);
        this.worksStore = new WorksStore_1.WorksState(this);
        var URL_INSTRUMENTS = constants_2.WEB_API_HOST + "api/ArtistInstruments?tag=performers";
        axios_1.default.get(URL_INSTRUMENTS).then(function (resp) {
            _this.performersInstruments = resp.data;
        });
        var that = this;
        window.addEventListener("keydown", ts_debounce_1.debounce(function (event) {
            _this.eventKey = "";
            _this.setEventKey(event.key);
            if (_this.activeRouterPath.includes("musicbox") &&
                (event.key === "MediaTrackNext" || event.key === "ArrowRight")) {
                event.preventDefault();
                event.stopImmediatePropagation();
                _this.radioStore.fullAleatoryOn = true;
                _this.radioStore.fullAleatoryOn = false;
            }
            else if (_this.activeRouterPath.includes("musicbox") &&
                event.key === "ArrowUp") {
                event.preventDefault();
                event.stopImmediatePropagation();
                _this.toggleFavoriteTrack(_this.activeTrack.idTrack);
            }
            else if (event.key === "MediaTrackNext") {
                event.preventDefault();
                event.stopImmediatePropagation();
                _this.playerNext();
                _this.playerPlay();
            }
            if (event.key === "MediaTrackPrevious") {
                _this.playerPrev();
                _this.playerPlay();
            }
            if (event.key === "Escape") {
                _this.playerPause();
                _this.goBack();
            }
        }));
        var keyboard = new keyboard_manager_1.Keyboard();
        var shortcutNext = keyboard_manager_1.stringifyKey(constants_1.NEXT_TRACK_KEY);
        var shortcutPrev = keyboard_manager_1.stringifyKey(constants_1.PREV_TRACK_KEY);
        keyboard.addListener(keyboard_manager_1.createShortcuts((_a = {},
            _a[shortcutNext] = function (e) { return _this.playerNext(); },
            _a[shortcutPrev] = function (e) { return _this.playerPrev(); },
            _a)));
        window.addEventListener("keydown", keyboard.getHandler, false);
        this.userPerformersFromApi = [];
        DZ.Event.subscribe("player_play", function () {
            _this.activeTrackIndex = DZ.player.getCurrentIndex();
            _this.imageSide = "hifiAntic.gif";
        });
        DZ.Event.subscribe("player_paused", function () {
            _this.imageSide = "hifiAnticFix.gif";
        });
        DZ.Event.subscribe("player_position", function (resp) {
            _this.trackProgress = resp[0];
        });
        var URL_ALBUMS = constants_2.WEB_API_HOST + "api/albums";
        axios_1.default.get(URL_ALBUMS).then(function (resp) {
            _this.albumsCountWebApi = resp.data;
        });
        mobx_1.reaction(function () { return _this.activeIdInstrument; }, function (idInstrument) {
            var URL = constants_2.WEB_API_HOST + "api/artistByInstrument?idInstrument=" + idInstrument;
            axios_1.default
                .get(URL)
                .then(function (resp) {
                debugger;
                _this.userPerformersFromApi = resp.data;
            })
                .catch(function (error) { });
        });
        mobx_1.reaction(function () { return _this.userId; }, function (user) {
            debugger;
            _this.getComposers();
            _this.getComposersFollows();
            _this.isLoading = true;
            DZ.api("user/me/playlists?limit=10000", function (list) {
                _this.isLoading = false;
                _this.userPlaylistsFromApi = list.data;
            });
        });
        mobx_1.reaction(function () { return _this.activeTrack; }, function (track) {
            if (!track) {
                return;
            }
            var URL_TrackFavorite = constants_2.WEB_API_HOST +
                "api/TrackFavorite?idTrack=" +
                track.idTrack.toString() +
                "&idUser=" +
                _this.userId;
            axios_1.default.get(URL_TrackFavorite).then(function (resp) {
                _this.activeTrackIsFavorite = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.textButtonGenerateBlindTest; }, function (text) {
            if (_this.isGeneratingBlindTest) {
                var textBase_1 = "Generating Blind Test";
                var punts_1 = "";
                if (text.endsWith("...")) {
                    punts_1 = "";
                }
                else if (text.endsWith("..")) {
                    punts_1 = "...";
                }
                else if (text.endsWith(".")) {
                    punts_1 = "..";
                }
                else {
                    punts_1 = ".";
                }
                setTimeout(function () {
                    _this.textButtonGenerateBlindTest = textBase_1 + punts_1;
                }, 100);
            }
        });
        mobx_1.reaction(function () { return _this.activeTracks; }, function (activeTracks) {
            if (!activeTracks) {
                return;
            }
            _this.playTracks(activeTracks.map(function (t) {
                return t.idTrack;
            }), 0);
        });
        mobx_1.reaction(function () { return _this.activeComposer; }, function (composer) {
            if (!composer) {
                return;
            }
            var URL_COMPOSER_TOP_TRACKS = constants_2.WEB_API_HOST +
                "api/ComposerTopTracks?idComposerKlassica=" +
                composer.IdComposer.toString() +
                "&count=10";
            axios_1.default.get(URL_COMPOSER_TOP_TRACKS).then(function (resp) {
                _this.composerTopTracks = resp.data.map(function (t) {
                    return __assign({}, t, { id: t.idTrack });
                });
            });
            var URL_COMPOSER_TIMELINE = constants_2.WEB_API_HOST +
                "api/ComposerTimeLine?idComposer=" +
                composer.IdComposer.toString();
            axios_1.default.get(URL_COMPOSER_TIMELINE).then(function (resp) {
                _this.activeComposerTimeLine = resp.data;
            });
            _this.activeComposerQuotes = [
                {
                    content: composer.HeaderQuote,
                    contentSourceName: composer.HeaderQuoteAutor
                }
            ];
            var URL_COMPOSER_QUOTES = constants_2.WEB_API_HOST +
                "api/ComposerQuotes?idComposer=" +
                composer.IdComposer.toString();
            axios_1.default.get(URL_COMPOSER_QUOTES).then(function (resp) {
                _this.activeComposerQuotes = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.composers; }, function (composers) {
            composers.forEach(function (composer) {
                composer.PictureMediumURLLocal =
                    "http://127.0.0.1/PictureMedium/" + composer.IdComposer + ".jpg";
            });
        });
        mobx_1.reaction(function () { return _this.activeAlbumId; }, function (albumId) {
            _this.activeTracksSource = null;
            var URL_TRACKS = constants_2.WEB_API_HOST + "api/tracks?idAlbum=" + albumId;
            axios_1.default
                .get(URL_TRACKS)
                .then(function (resp) {
                _this.activeTracksSource = resp.data;
            })
                .catch(function (error) { });
        });
        mobx_1.reaction(function () { return _this.activeIdArtistDiscografy; }, function (activeIdArtistDiscografy) {
            _this.activeArtistDiscografy = null;
            var URL_DISCOGRAFY = constants_2.WEB_API_HOST +
                "api/albums?idArtist=" +
                _this.activeIdArtistDiscografyNoKlass +
                "&idArtistKlass=" +
                _this.activeIdArtistDiscografyKlass;
            axios_1.default.get(URL_DISCOGRAFY).then(function (resp) {
                _this.activeArtistDiscografy = resp.data;
                _this.albums.albumsFromApi = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.activeTrack; }, function (track) {
            _this.activePreviousTrack = track;
        });
        mobx_1.reaction(function () { return _this.activeTracksSource; }, function (tracks) {
            if (!!_this.activePreviousTrack && !!tracks) {
                try {
                    var FuzzySet = window["FuzzySet"];
                    var a_1 = FuzzySet();
                    a_1.add(_this.activePreviousTrack.workName);
                    var idMaxSimilarTrack_1;
                    var maxSimilarity_1 = 0;
                    tracks.forEach(function (t, index) {
                        var level = a_1.get(t.workName)[0][0];
                        if (level > maxSimilarity_1) {
                            maxSimilarity_1 = level;
                            idMaxSimilarTrack_1 = index;
                        }
                    });
                    _this.activeTrackIndex = idMaxSimilarTrack_1;
                }
                catch (error) { }
            }
            else {
                _this.activeTrackIndex = 0;
            }
        });
        mobx_1.reaction(function () { return _this.activeComposerId; }, function (idTrack) { });
    }
    AppState.prototype.setEventKey = function (eventKey) {
        var _this = this;
        setTimeout(function () {
            _this.eventKey = "";
        }, 500);
        this.eventKey = eventKey;
    };
    Object.defineProperty(AppState.prototype, "isActiveInput", {
        get: function () {
            return document.activeElement.tagName.toLowerCase() === "input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performersInstrumentsFiltered", {
        get: function () {
            var _this = this;
            if (!this.performersInstruments) {
                return null;
            }
            return this.performersInstruments.filter(function (f) {
                return f.tag === _this.myRouter.activeRouterConfigItem.tagType && f.active;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeIdArtistDiscografyKlass", {
        get: function () {
            if (this.activeIdArtistDiscografy.startsWith("a")) {
                return "0";
            }
            return this.activeIdArtistDiscografy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeIdArtistDiscografyNoKlass", {
        get: function () {
            if (!this.activeIdArtistDiscografy.startsWith("a")) {
                return "0";
            }
            return this.activeIdArtistDiscografy.substring(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeArtist", {
        get: function () {
            return this.userPerformers[this.activeIdArtistDiscografy];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeArtistName", {
        get: function () {
            if (!this.activeArtist) {
                return "";
            }
            return this.activeArtist.name;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.getComposers = function () {
        var _this = this;
        var URL_COMPOSERS = constants_2.WEB_API_HOST + "api/composers";
        return axios_1.default
            .get(URL_COMPOSERS)
            .then(function (resp) {
            debugger;
            _this.composersFromApi = resp.data;
        })
            .catch(function (error) {
            alert("error");
        });
    };
    AppState.prototype.getFavoriteArtists = function () {
        var _this = this;
        DZ.api("user/me/artists?limit=2000", function (performers) {
            var result = "";
            performers.data.forEach(function (a) {
                result += a.id.toString() + ",";
            });
            _this.favoriteArtists = result;
        });
    };
    AppState.prototype.getSatelits = function () {
        var _this = this;
        var URL_PAISOS = constants_2.WEB_API_HOST + "api/paisos";
        var URL_CIUTATS = constants_2.WEB_API_HOST + "api/ciutats";
        axios_1.default.get(URL_CIUTATS).then(function (resp) {
            _this.ciutats = resp.data;
        });
        axios_1.default.get(URL_PAISOS).then(function (resp) {
            _this.paisos = resp.data;
        });
    };
    AppState.prototype.playerNext = function () {
        DZ.player.next();
    };
    AppState.prototype.playerPrev = function () {
        DZ.player.prev();
    };
    Object.defineProperty(AppState.prototype, "userPerformersFromApiResolt", {
        get: function () {
            var _this = this;
            if (!this.userPerformersFromApi) {
                return null;
            }
            return this.userPerformersFromApi.map(function (artist) {
                return __assign({}, artist, { isComposer: _this.isComposer(artist.idArtist) });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "userPerformers", {
        get: function () {
            var _this = this;
            if (!this.userPerformersFromApiResolt) {
                return [];
            }
            var performerResults = this.userPerformersFromApiResolt
                .filter(function (artist) {
                return parseInt(String(artist.idInstrument)) == _this.idInstrumentArtist;
            })
                .filter(function (artist) {
                return !_this.composers.find(function (c) { return c.IdDeezer === artist.idArtist; });
            })
                .filter(function (artist) {
                if (!_this.artistNameFilter) {
                    return true;
                }
                return artist.name
                    .toLowerCase()
                    .includes(_this.artistNameFilter.toLowerCase());
            })
                .sort(function (a1, a2) {
                if (a1.begin_date_year > a2.begin_date_year) {
                    return -1;
                }
                if (a1.begin_date_year < a2.begin_date_year) {
                    return 1;
                }
                return 0;
            });
            if (this.performerOrderByFieldAndDirection.startsWith("shuffle.")) {
                return AppState.shuffle(performerResults);
            }
            return performerResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performersGroupedByInstrument", {
        get: function () {
            return _.groupBy(this.userPerformers, "IdInstrument");
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.getArtistPhoto = function (artist, defaultPhoto) {
        return defaultPhoto;
    };
    Object.defineProperty(AppState.prototype, "userPlaylists", {
        get: function () {
            var _this = this;
            if (!this.userPlaylistsFromApi) {
                return [];
            }
            var sortBy = this.userPlayListSortField;
            return this.userPlaylistsFromApi
                .filter(function (playlist) {
                if (!_this.artistNameFilter) {
                    return true;
                }
                return playlist.title
                    .toLowerCase()
                    .includes(_this.artistNameFilter.toLowerCase());
            })
                .sort(function (a1, a2) {
                if (a1[sortBy] > a2[sortBy]) {
                    return -1;
                }
                if (a1[sortBy] < a2[sortBy]) {
                    return 1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performersCount", {
        get: function () {
            if (!this.userPerformers) {
                return null;
            }
            return this.userPerformers.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performersByInstrumentCount", {
        get: function () {
            if (!this.performersInstrumentsFiltered) {
                return null;
            }
            return this.performersInstrumentsFiltered.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composersCount", {
        get: function () {
            if (!this.composers) {
                return null;
            }
            return this.composers.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "playlistsCount", {
        get: function () {
            if (!this.userPlaylistsFromApi) {
                return null;
            }
            return this.userPlaylistsFromApi.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "isComposersOrderByNation", {
        get: function () {
            return this.composerOrderByField === "IdNacio";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "isComposersOrderByNumOfWorks", {
        get: function () {
            return this.composerOrderByField === "numOfWorks";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composersGroupedByNation", {
        get: function () {
            return _.groupBy(this.composers, "IdNacio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composerOrderByField", {
        get: function () {
            return this.composerOrderByFields[this.composerOrderByFieldSelectedIndex]
                .Value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composerOrderByFieldAndDirection", {
        get: function () {
            return (this.composerOrderByFields[this.composerOrderByFieldSelectedIndex].Value +
                "." +
                this.composerOrderByDirection);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performerOrderByFieldAndDirection", {
        get: function () {
            return (this.performerOrderByFields[this.performerOrderByFieldSelectedIndex]
                .Value +
                "." +
                this.performerOrderByDirection);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composerOrderByDesc", {
        get: function () {
            return this.composerOrderByFields[this.composerOrderByFieldSelectedIndex]
                .Desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performerOrderByDesc", {
        get: function () {
            return this.performerOrderByFields[this.performerOrderByFieldSelectedIndex]
                .Desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composerOrderByFieldsAltres", {
        get: function () {
            var _this = this;
            return this.composerOrderByFields.filter(function (o) { return o.Value !== _this.composerOrderByField; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composerOrderPrompt", {
        get: function () {
            return this.composerOrderByDesc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "performerOrderPrompt", {
        get: function () {
            return this.performerOrderByDesc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composerOrderByDirectionPrompt", {
        get: function () {
            return this.composerOrderByDirection === 1 ? "\u25B2" : "\u25BC";
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.toggleComposerOrderByDirection = function () {
        this.composerOrderByDirection *= -1;
    };
    AppState.prototype.clickComposerOrderByField = function (newField) {
        this.composerOrderByFieldSelectedIndex = this.composerOrderByFields.findIndex(function (o) { return o.Value === newField; });
    };
    AppState.prototype.clickPerformerOrderByField = function (newField) {
        this.performerOrderByFieldSelectedIndex = this.performerOrderByFields.findIndex(function (o) { return o.Value === newField; });
    };
    Object.defineProperty(AppState.prototype, "composersAll", {
        get: function () {
            return this.composersFromApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "composers", {
        get: function () {
            var _this = this;
            var sortBy = this.composerOrderByField;
            var composersResults = this.composersFromApi
                .slice(0, constants_1.LIMIT_COMPOSERS)
                .filter(function (composer) {
                if (!_this.composerNameFilter) {
                    return true;
                }
                return composer.Nom.toLowerCase().includes(_this.composerNameFilter.toLowerCase());
            })
                .sort(function (a1, a2) {
                if (a1[sortBy] > a2[sortBy]) {
                    return _this.composerOrderByDirection;
                }
                if (a1[sortBy] < a2[sortBy]) {
                    return _this.composerOrderByDirection * -1;
                }
                return 0;
            });
            if (this.composerOrderByFieldAndDirection.startsWith("shuffle.")) {
                return AppState.shuffle(composersResults);
            }
            return composersResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "userId", {
        get: function () {
            if (!this.user) {
                return null;
            }
            return this.user.id;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.setPlayHover = function (hover) {
        this.isPlayHover = hover;
        this.statusPlay = hover ? "Here we go!" : "";
    };
    AppState.prototype.login = function () {
        var _this = this;
        this.user = { id: 1, name: "Moises" };
        return;
        DZ.login(function (response) {
            if (response.authResponse) {
                console.log("Welcome!  Fetching your information.... ");
                DZ.api("/user/me", function (user) {
                    _this.user = user;
                    console.log("Good to see you, " + user.name + ".");
                });
            }
            else {
                console.log("User cancelled login or did not fully authorize.");
            }
        }, { perms: "basic_access,email" });
    };
    AppState.prototype.setHistory = function (history) {
        var _this = this;
        this.history = history;
        this.history.listen(function (ls) {
            _this.activeRouterPath = ls.pathname;
        });
    };
    AppState.prototype.isActiveRouterPath = function (path) {
        return path === this.activeRouterPath;
    };
    Object.defineProperty(AppState.prototype, "isRouteRoot", {
        get: function () {
            return this.activeRouterPath === "/";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "isPageTitleVisible", {
        get: function () {
            return !this.isRouteRoot && !this.isPageApagada;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.go = function (path) {
        if (this.history.location.pathname === path) {
            return;
        }
        this.history.push(path);
    };
    AppState.prototype.goComposer = function (idComposer) {
        var path = constants_1.ROUTE_COMPOSER.replace(":composerId", idComposer.toString());
        if (this.history.location.pathname === path) {
            return;
        }
        this.history.push(path);
    };
    AppState.prototype.goArtistTracks = function (artistId) {
        this.history.push("/Me/IDeezerArtist/" + artistId.toString() + "/IDeezerTracks");
    };
    Object.defineProperty(AppState.prototype, "canGoBack", {
        get: function () {
            return !this.isRouteRoot;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.goBack = function () {
        this.history.goBack();
    };
    AppState.prototype.goForward = function () {
        this.history.goForward();
    };
    AppState.prototype.goHome = function () {
        this.go(constants_1.ROUTE_HOME);
    };
    AppState.prototype.goPlaylistTracks = function (playlistId) {
        if (!playlistId) {
            return;
        }
        DZ.player.playPlaylist(playlistId, false, 0);
    };
    AppState.prototype.playTracks = function (tracks, numTrack) {
        DZ.player.pause();
        DZ.player.playTracks(tracks, numTrack);
    };
    AppState.prototype.toggleTrack = function (trackId) {
        if (trackId === this.trackIdIsPlaying) {
            this.trackIdIsPlaying = null;
            DZ.player.pause();
        }
        else {
            this.trackIdIsPlaying = trackId;
            DZ.player.playTracks([trackId]);
        }
    };
    AppState.prototype.sliderPlayClicked = function (e) {
        var slider = $(e.delegateTarget);
        var x = e.clientX - slider.offset().left;
        var xMax = slider.width();
        DZ.player.seek((x / xMax) * 100);
    };
    AppState.prototype.filterByArtistNsme = function (artistNameFilter) {
        this.artistNameFilter = artistNameFilter;
    };
    AppState.prototype.filterByComposerNsme = function (artistNameFilter) {
        this.composerNameFilter = artistNameFilter || this.composerNameFilter;
    };
    AppState.prototype.filterByPerformerNsme = function (artistNameFilter) {
        this.artistNameFilter = artistNameFilter;
    };
    AppState.prototype.setMyMusicActiveIindex = function (index) {
        this.go(this.tabMyMusica[index]);
        this.myMusicActiveIndex = index;
    };
    AppState.prototype.setActivePlaylist = function (id) {
        this.activePlayListId = id;
    };
    AppState.prototype.setActiveTracklist = function (tracks) {
        var _this = this;
        mobx_1.transaction(function () {
            _this.activeTracksSource = tracks;
        });
    };
    AppState.prototype.goActivePlayList = function (id) {
        this.go(constants_1.ROUTE_PLAYLIST.replace(":playlistId", id.toString()));
    };
    AppState.prototype.goActiveAlbum = function () {
        this.go(constants_1.ROUTE_ALBUM.replace(":albumId", this.activeAlbum.idAlbum.toString()));
    };
    Object.defineProperty(AppState.prototype, "activeAlbum", {
        get: function () {
            var _this = this;
            if (!this.albums || !this.albums.albums) {
                return null;
            }
            var index = this.albums.albums.findIndex(function (c) { return c.idAlbum === _this.activeAlbumId; });
            return this.albums.albums[index];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activePlaylist", {
        get: function () {
            var _this = this;
            return this.userPlaylists.find(function (pl) { return pl.id === _this.activePlayListId; });
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.toggleComposer = function (artistId) {
    };
    AppState.prototype.setFotos = function () {
        this.fotos = JSON.stringify(this.userPerformersFromApi.map(function (artist) {
            return { id: artist.idArtist, foto: artist.picture_medium };
        }));
    };
    Object.defineProperty(AppState.prototype, "listIdArtists", {
        get: function () {
            if (!this.userPerformersFromApi) {
                return "";
            }
            var resp = "";
            this.userPerformersFromApi.forEach(function (u) {
                resp += u.idArtist.toString() + ", ";
            });
            return resp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeTracks", {
        get: function () {
            if (!this.activeTracksSource) {
                return null;
            }
            return this.activeTracksSource.map(function (t) {
                return __assign({}, t, { id: t.idDeezer });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeKlassikRanksOrdered", {
        get: function () {
            return this.activeKlassikRanks.sort(function (s1, s2) {
                return s1.nOrder - s2.nOrder;
            });
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.toogleKlassikRanks = function (index1, index2) {
        var _this = this;
        mobx_1.transaction(function () {
            var valIndex1 = _this.activeKlassikRanks[index1].nOrder;
            _this.activeKlassikRanks[index1].nOrder = _this.activeKlassikRanks[index2].nOrder;
            _this.activeKlassikRanks[index2].nOrder = valIndex1;
        });
    };
    Object.defineProperty(AppState.prototype, "activeTrackLabelName", {
        get: function () {
            if (!this.activeTrack) {
                return "NO ACTIVE TRACK";
            }
            return this.activeTrack.labelName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeTrack", {
        get: function () {
            if (!this.activeTracks) {
                return null;
            }
            return this.activeTracks[this.activeTrackIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeAlbumArtistName", {
        get: function () {
            if (!this.activeAlbum) {
                return null;
            }
            return this.activeAlbum.artistName;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.setActiveAlbum = function (albumId) {
        this.activeAlbumId = albumId;
    };
    AppState.prototype.setActiveAlbumById = function (id) {
        this.activeAlbumId = id;
    };
    Object.defineProperty(AppState.prototype, "imageSizeOverlay", {
        get: function () {
            if (this.playerIsPlaying) {
                return "pause.png";
            }
            else {
                return "transparentPlay.jpg";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.playerPlay = function () {
        DZ.player.play();
    };
    AppState.prototype.playerTogglePlay = function () {
        if (this.playerIsPlaying) {
            this.playerPause();
            this.playerIsPlaying = false;
        }
        else {
            this.playerPlay();
            this.playerIsPlaying = true;
        }
    };
    AppState.prototype.playerPause = function () {
        DZ.player.pause();
        DZ.Event;
    };
    AppState.prototype.playerPlayPlaylist = function (playlistId, autoPlay, index) {
        DZ.player.playPlaylist(playlistId, false, index);
    };
    AppState.prototype.playerPlayAlbum = function (albumId, autoPlay, index) {
        DZ.player.playAlbum(albumId, index);
        this.playerPlay();
    };
    AppState.prototype.playerChangeIndex = function (index) {
        this.activeTrackIndex = index;
        this.playerPlayAlbum(this.activeAlbumId, false, index);
    };
    Object.defineProperty(AppState.prototype, "trackBackGroundOpacityProgress", {
        get: function () {
            var factor = (100 / this.trackTotalTime) * this.trackProgress;
            return ((1 - 0.2) / 100) * factor + 0.2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "trackTotalTime", {
        get: function () {
            if (!this.activeTrack) {
                return 0;
            }
            return this.activeTrack.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "isEntornDiscover", {
        get: function () {
            return this.history.location.pathname.startsWith("/discover");
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.updateImatgeURL = function (IdComposer, PictureMediumURL) {
        var URL_PHOTO = constants_2.WEB_API_HOST + "api/ComposerPhoto";
        return axios_1.default.put(URL_PHOTO, {
            IdComposer: IdComposer,
            PictureMediumURL: PictureMediumURL
        });
    };
    Object.defineProperty(AppState.prototype, "activeComposer", {
        get: function () {
            debugger;
            if (this.activeComposerId < 0) {
                return null;
            }
            return this.composers.find(function (c) { return c.IdComposer === 5; });
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.moveToPrevComposer = function () {
        var _this = this;
        var index = this.composers.findIndex(function (c) { return c.IdComposer === _this.activeComposerId; });
        this.activeComposerId = this.composers[index - 1].IdComposer;
    };
    AppState.prototype.moveToNextComposer = function () {
        var _this = this;
        var index = this.composers.findIndex(function (c) { return c.IdComposer === _this.activeComposerId; });
        this.activeComposerId = this.composers[index + 1].IdComposer;
    };
    AppState.prototype.moveToNextAlbum = function () {
        var _this = this;
        var index = this.albums.albums.findIndex(function (c) { return c.idAlbum === _this.activeAlbumId; });
        this.activeAlbumId = this.albums.albums[index + 1].idAlbum;
    };
    AppState.prototype.moveToPrevAlbum = function () {
        var _this = this;
        var index = this.albums.albums.findIndex(function (c) { return c.idAlbum === _this.activeAlbumId; });
        this.activeAlbumId = this.albums.albums[index - 1].idAlbum;
    };
    AppState.prototype.setActiveComposer = function (id) {
        this.activeComposerId = id;
    };
    Object.defineProperty(AppState.prototype, "activeComposerPictureHeaderBioURL", {
        get: function () {
            if (!this.activeComposer) {
                return "";
            }
            return ("http://127.0.0.1/PictureHeaderBio/" + this.activeComposerId + ".jpg");
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.secondsToTimeFormat = function (seconds) {
        try {
            var ret = new Date(seconds * 1000).toISOString().substr(11, 8);
            return ret.startsWith("00:") ? ret.substr(3) : ret;
        }
        catch (_a) {
            if (!seconds) {
                return "";
            }
            return seconds.toString();
        }
    };
    AppState.prototype.unFavoritePlayList = function (idPlayList) {
        var _this = this;
        DZ.api("user/me/playlists", "DELETE", { playlist_id: idPlayList }, function (response) {
            console.log("PlayList Unfavorited");
            _this.userPlaylistsFromApi.slice(_this.userPlaylistsFromApi.findIndex(function (p) { return p.id === idPlayList; }), 1);
        });
    };
    Object.defineProperty(AppState.prototype, "activeComposerFollowers", {
        get: function () {
            var _this = this;
            try {
                if (!this.composerFollows) {
                    return [];
                }
                return this.composerFollows
                    .filter(function (c) { return c.IdComposerFollowed === _this.activeComposerId; })
                    .map(function (c) {
                    return {
                        IdComposer: c.IdComposer,
                        Nom: _this.getIComposerAllById(c.IdComposer).Nom,
                        ImgAvatarUrl: _this.getIComposerAllById(c.IdComposer)
                            .PictureMediumURL
                    };
                });
            }
            catch (e) {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerFollowing", {
        get: function () {
            var _this = this;
            if (!this.composerFollows) {
                return [];
            }
            return this.composerFollows
                .filter(function (c) { return c.IdComposer === _this.activeComposerId; })
                .map(function (c) {
                return {
                    IdComposer: c.IdComposerFollowed,
                    Nom: _this.getIComposerAllById(c.IdComposerFollowed).Nom,
                    ImgAvatarUrl: _this.getIComposerAllById(c.IdComposerFollowed)
                        .PictureMediumURL
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.getIComposerById = function (id) {
        return this.composers.find(function (c) { return c.IdComposer === id; });
    };
    AppState.prototype.getIComposerAllById = function (id) {
        return this.composersAll.find(function (c) { return c.IdComposer === id; });
    };
    AppState.prototype.getComposersFollows = function () {
        var _this = this;
        var URL_FOLLOWS = constants_2.WEB_API_HOST + "api/composersFollows";
        return axios_1.default.get(URL_FOLLOWS).then(function (resp) {
            _this.composerFollows = resp.data;
        });
    };
    Object.defineProperty(AppState.prototype, "activeComposerNomNom", {
        get: function () {
            if (!this.activeComposer) {
                return null;
            }
            var p = this.activeComposer.Nom.indexOf(",");
            return this.activeComposer.Nom.substring(p + 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerNomCognom", {
        get: function () {
            if (!this.activeComposer) {
                return null;
            }
            var p = this.activeComposer.Nom.indexOf(",");
            return this.activeComposer.Nom.substring(0, p);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerInfoNeixDefu", {
        get: function () {
            var _this = this;
            if (!this.activeComposer) {
                return null;
            }
            var llocNeix = "";
            var paisNeix = "";
            var ciutat;
            if (!!this.activeComposer.IdCiutatNeix) {
                ciutat = this.ciutats.find(function (c) { return c.IdCiutat === _this.activeComposer.IdCiutatNeix; });
                llocNeix = !!ciutat && !!ciutat.Nom ? ciutat.Nom : "";
                paisNeix = this.paisos.find(function (p) { return p.IdPais === ciutat.IdPais; }).Nom;
                llocNeix += " (" + paisNeix + ")";
            }
            var llocDefu = "";
            var paisDefu = "";
            var ciutatDefu;
            if (!!this.activeComposer.IdCiutatDefu) {
                ciutatDefu = this.ciutats.find(function (c) { return c.IdCiutat === _this.activeComposer.IdCiutatDefu; });
                llocDefu = ciutatDefu.Nom;
                paisDefu = this.paisos.find(function (p) { return p.IdPais === ciutatDefu.IdPais; }).Nom;
                llocDefu += " (" + paisDefu + ")";
            }
            return (llocNeix +
                (!!llocNeix ? ", " : "") +
                this.activeComposer.AnyoNeix +
                (!!this.activeComposer.AnyoDefu
                    ? " - " +
                        this.activeComposer.AnyoDefu +
                        (!!llocDefu ? ", " : "") +
                        llocDefu
                    : ""));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "infoComposerLeftMargin", {
        get: function () {
            if (!this.activeComposer || !this.activeComposer.HeaderQuote) {
                return "";
            }
            var token = "right:";
            if (this.activeComposer.HeaderQuote.startsWith(token)) {
                var p2 = this.activeComposer.HeaderQuote.indexOf(":", token.length);
                return this.activeComposer.HeaderQuote.substring(token.length, p2);
            }
            return "80px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerHeaderQuote", {
        get: function () {
            if (!this.activeComposer || !this.activeComposer.HeaderQuote) {
                return "";
            }
            var token = "right:";
            if (this.activeComposer.HeaderQuote.startsWith(token)) {
                var p2 = this.activeComposer.HeaderQuote.indexOf(":", token.length);
                return this.activeComposer.HeaderQuote.substring(p2 + 1);
            }
            return this.activeComposer.HeaderQuote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerPictureHeaderBioURLOverrides", {
        get: function () {
            if (!this.activeComposer) {
                return {};
            }
            if (!this.activeComposer.PictureHeaderBioURLOverrides) {
                return {};
            }
            try {
                return JSON.parse(this.activeComposer.PictureHeaderBioURLOverrides);
            }
            catch (error) {
                return {};
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerBackgroundSize", {
        get: function () {
            if (!this.activeComposer) {
                return "";
            }
            return ("auto 100%");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerBackgroundPosition", {
        get: function () {
            if (!this.activeComposer) {
                return "";
            }
            return ("center 20%");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerImageFilter", {
        get: function () {
            if (!this.activeComposer) {
                return "";
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerImageTransform", {
        get: function () {
            if (!this.activeComposer) {
                return "";
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "activeComposerColor", {
        get: function () {
            if (!this.activeComposer) {
                return "";
            }
            return constants_1.PSEUDO_BLACK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "fitxaComposers", {
        get: function () {
            return !!this.activeComposer;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.setTopTrackIsPlaying = function (track) {
        this.topTrackIsPlaying = track;
    };
    Object.defineProperty(AppState.prototype, "searchedAlbums", {
        get: function () {
            return this.searchedAlbumsRaw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "searchedTrack", {
        get: function () {
            if (!this.searchedTracksRaw) {
                return null;
            }
            return this.searchedTracksRaw[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "textSearchedNormalized", {
        get: function () {
            var str = this.textSearched
                .replace("ç", "c")
                .replace(/[^\w\s]|_/g, "")
                .replace(/\s+/g, " ");
            var words = str.split(" ");
            return this.normalizeForSearch(words.map(function (w) { return pluralize.singular(w); }).join(" "));
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.searchByText = function (text) {
        var _this = this;
        this.textSearched = text;
        DZ.api("search/album?q=" + this.textSearchedNormalized + "&limit=1000", function (resp) {
            _this.searchedAlbumsRaw = resp.data;
            DZ.api("album/" + resp.data[0].id, function (respAlbum) {
                _this.searchedAlbumsRaw[0].name = respAlbum.upc;
                _this.upc = respAlbum.upc;
            });
        });
    };
    AppState.prototype.searchByCode = function (code) {
        var _this = this;
        DZ.api("album/upc:" + code + "&strict=on", function (resp) {
            _this.textSearched = "";
            _this.searchedAlbumsRaw = [resp];
        });
    };
    AppState.prototype.searchTrackByCode = function (code) {
        var _this = this;
        DZ.api("track/isrc:" + code, function (resp) {
            _this.searchedTracksRaw = [resp];
        });
    };
    Object.defineProperty(AppState.prototype, "activeArtistDiscografyCount", {
        get: function () {
            if (!this.activeArtistDiscografy) {
                return 0;
            }
            return this.activeArtistDiscografy.length;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.TDeezertrgetImageNation = function (idNation) {
        return "http://127.0.0.1/PictureNations/" + idNation.toString() + ".jpg";
    };
    AppState.prototype.searchAlbumAtMusicBrainz = function (key, value) {
        var _this = this;
        var URL_RELEASES = constants_2.WEB_API_HOST + "api/releases?key=" + key + "&value=" + value;
        return axios_1.default.get(URL_RELEASES).then(function (r) {
            _this.releases = mobx_1.observable.array(r.data);
            _this.releases.forEach(function (r) {
                r.validatedDeezer = false;
            });
        });
    };
    AppState.prototype.getReleasesByComposer = function (idComposer, quants) {
        var _this = this;
        var URL_RELEASES = constants_2.WEB_API_HOST +
            "api/Releases?idComposer=" +
            idComposer +
            "&quants=" +
            quants;
        return axios_1.default.get(URL_RELEASES).then(function (r) {
            _this.Releases = mobx_1.observable.array(r.data);
        });
    };
    AppState.prototype.validaReleasesToDeezer = function (count) {
        this.Releases.forEach(function (r, k) {
            setTimeout(function () {
                DZ.api("album/upc:" + r.upc, function (resp) {
                    r.idAlbum = !!resp.error ? -1 : resp.id;
                    r.upc += " ";
                });
            }, 500 * k);
        });
    };
    AppState.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Object.defineProperty(AppState.prototype, "pageTitle", {
        get: function () {
            return this.myRouter.activeTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppState.prototype, "albumsCount", {
        get: function () {
            return this.albums.albums.length || this.albumsCountWebApi;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.genQuizBlindTestQuestions = function (numQuestions, numComposers) {
        var _this = this;
        this.setActiveTracklist(null);
        this.isGeneratingBlindTest = true;
        this.textButtonGenerateBlindTest = "Generating BlindTest";
        var URL_BLIND_TEST = constants_2.WEB_API_HOST +
            "api/QuizBlindTest?numQuestions=" +
            numQuestions.toString() +
            "&numComposers=" +
            numComposers.toString();
        return axios_1.default.get(URL_BLIND_TEST).then(function (r) {
            _this.textButtonGenerateBlindTest = "Generate Blind Test";
            _this.isGeneratingBlindTest = false;
            _this.quizBlindTestQuestions = mobx_1.observable.array(r.data);
            _this.setActiveTracklist(_this.quizBlindTestQuestions.map(function (q) {
                return {
                    idDeezer: q.IdDeezerTracck,
                    title: q.WorkName
                };
            }));
        });
    };
    Object.defineProperty(AppState.prototype, "factorWidthHeightPerformers", {
        get: function () {
            if (this.myRouter.activeRouterConfigItem.tagType === "ensembles") {
                return 1.2;
            }
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.goAlbumsByText = function (text) {
        this.albums.searchByName(text);
    };
    Object.defineProperty(AppState.prototype, "activeImageBackGround", {
        get: function () {
            var _this = this;
            if (!this.myRouter || !this.myRouter.myRouterConfig) {
                return "none";
            }
            if (!this.myRouter.tabActiveId) {
                return "none";
            }
            try {
                return this.myRouter.myRouterConfig.find(function (r) { return r.id === _this.myRouter.tabActiveId; }).backgroundImage;
            }
            catch (e) {
                return "none";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.toggleFavoriteTrack = function (idTrack) {
        var URL = constants_2.WEB_API_HOST + "api/TrackFavorite";
        var data = { idTrack: idTrack, idUser: this.userId };
        this.activeTrackIsFavorite = !this.activeTrackIsFavorite;
        return axios_1.default.put(URL, data);
    };
    Object.defineProperty(AppState.prototype, "composerTabSelectedId", {
        get: function () {
            return this.composerTabs[this.composerTabSelectedIndex].id;
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.getSplit = function (text, separator, index) {
        try {
            return text.split(separator)[index];
        }
        catch (e) {
            return text;
        }
    };
    AppState.prototype.getPictureComposer = function (idComposer) {
        return "http://127.0.0.1/PictureMedium/" + idComposer + ".jpg";
    };
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setEventKey", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "eventKey", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "isActiveInput", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "performersInstruments", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performersInstrumentsFiltered", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "myRouter", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "albums", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeDiscografyArtistName", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeIdArtistDiscografy", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeIdArtistDiscografyKlass", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeIdArtistDiscografyNoKlass", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeArtist", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeArtistName", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "getComposers", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "getFavoriteArtists", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "favoriteArtists", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "user", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerNext", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerPrev", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "userPerformersFromApi", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "userPerformersFromApiResolt", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "idInstrumentArtist", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "userPerformers", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performersGroupedByInstrument", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "userPlayListSortField", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "userPlaylistsFromApi", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "userPlaylists", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performersCount", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performersByInstrumentCount", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "albumsCountWebApi", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composersCount", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "playlistsCount", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composersFromApi", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerOrderByFields", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "performerOrderByFields", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "albumOrderByFields", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "isComposersOrderByNation", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "isComposersOrderByNumOfWorks", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composersGroupedByNation", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerOrderByFieldSelectedIndex", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "performerOrderByFieldSelectedIndex", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerOrderByField", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerOrderByFieldAndDirection", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performerOrderByFieldAndDirection", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerOrderByDesc", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performerOrderByDesc", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerOrderByFieldsAltres", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerOrderPrompt", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "performerOrderPrompt", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerOrderByDirection", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "performerOrderByDirection", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerOrderByDirectionPrompt", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "toggleComposerOrderByDirection", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "clickComposerOrderByField", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "clickPerformerOrderByField", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composersAll", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composers", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "userId", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "isPlayHover", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setPlayHover", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "statusPlay", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "login", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "APP_ID", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "artistIdActive", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setHistory", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeRouterPath", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "isRouteRoot", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "isPageTitleVisible", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "isPageApagada", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "go", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goComposer", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goArtistTracks", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "canGoBack", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goBack", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "canGoForward", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goForward", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goHome", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goPlaylistTracks", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playTracks", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "toggleTrack", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "sliderPlayClicked", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "filterByArtistNsme", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "artistNameFilter", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "filterByComposerNsme", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "filterByPerformerNsme", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerNameFilter", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "myMusicActiveIndex", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setMyMusicActiveIindex", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setActivePlaylist", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setActiveTracklist", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goActivePlayList", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goActiveAlbum", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeAlbum", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activePlaylist", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "showOnlyComposers", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "toggleComposer", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "fotos", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setFotos", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "listIdArtists", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activePlayListId", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeTracksSource", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeTracks", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeTrackIndex", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeKlassikRanks", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeKlassikRanksOrdered", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "toogleKlassikRanks", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeTrackLabelName", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeTrack", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activePreviousTrack", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeAlbumId", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeAlbumArtistName", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setActiveAlbum", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setActiveAlbumById", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "imageSide", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "imageSizeOverlay", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "playerIsPlaying", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerPlay", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerTogglePlay", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "trackIdIsPlaying", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerPause", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerPlayPlaylist", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerPlayAlbum", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "playerChangeIndex", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "trackProgress", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "trackBackGroundOpacityProgress", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "trackTotalTime", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "isEntornDiscover", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "updateImatgeURL", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeComposerId", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposer", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "moveToPrevComposer", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "moveToNextComposer", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "moveToNextAlbum", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "moveToPrevAlbum", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setActiveComposer", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerPictureHeaderBioURL", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "isLoading", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "titolSeccio", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "unFavoritePlayList", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerFollows", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerFollowers", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerFollowing", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "ciutats", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "paisos", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerNomNom", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerNomCognom", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerInfoNeixDefu", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "infoComposerLeftMargin", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerHeaderQuote", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerPictureHeaderBioURLOverrides", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerBackgroundSize", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerBackgroundPosition", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerImageFilter", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerImageTransform", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeComposerColor", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "fitxaComposers", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerAlbumsFromApi", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerAlbumsOffset", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerTopTracks", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "topTrackIsPlaying", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "setTopTrackIsPlaying", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "searchedAlbums", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "searchedTracksRaw", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "searchedTrack", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "searchedAlbumsRaw", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "albumAmpliat", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "searchStrict", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "upc", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "textSearched", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "textSearchedNormalized", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "searchByText", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "searchByCode", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "searchTrackByCode", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeComposerTimeLine", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeComposerWorkReleases", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeArtistDiscografy", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeArtistDiscografyCount", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "releases", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "searchAlbumAtMusicBrainz", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "Releases", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "getReleasesByComposer", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "validaReleasesToDeezer", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "pageTitle", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "breadCrumbs", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "albumsCount", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "heightPageTitle", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "quizBlindTestQuestions", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "genQuizBlindTestQuestions", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "textButtonGenerateBlindTest", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "isGeneratingBlindTest", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeIdInstrument", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "factorWidthHeightPerformers", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeComposerQuotes", void 0);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "goAlbumsByText", null);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "activeImageBackGround", null);
    __decorate([
        mobx_1.action
    ], AppState.prototype, "toggleFavoriteTrack", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "activeTrackIsFavorite", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerTabs", void 0);
    __decorate([
        mobx_1.computed
    ], AppState.prototype, "composerTabSelectedId", null);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "composerTabSelectedIndex", void 0);
    return AppState;
}());
exports.AppState = AppState;
