"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var axios_1 = require("axios");
var constants_1 = require("../../util/constants");
var ComposerStore_1 = require("./ComposerStore");
var declarative_js_1 = require("declarative-js");
var groupBy = declarative_js_1.Reducer.groupBy;
var Map = declarative_js_1.Reducer.Map;
var DZ = window.DZ;
var TDeezerTrack = (function () {
    function TDeezerTrack() {
    }
    return TDeezerTrack;
}());
exports.TDeezerTrack = TDeezerTrack;
var AlbumStore = (function () {
    function AlbumStore(performeStore, routerStore) {
        var _this = this;
        this.activeArtistIdMN = "";
        this.activeArtistNameMN = "";
        this.activeTrackPosition = 0;
        this.activeTrackDuration = 0;
        this.worksFets = true;
        this.albumsRaw = [];
        this.orderByKey = "";
        this.orderByDir = 1;
        this.klassikRankWebApi = [];
        this.activeTrackIsFavorite = false;
        this.playerIsPlaying = false;
        this.groupByField = null;
        this.activeGroupFieldValue = "";
        var that = this;
        window.addEventListener("keydown", function (event) {
            var fer = function (callback) {
                event.stopPropagation();
                event.preventDefault();
                callback();
            };
            if (routerStore.activeRouterPath.endsWith("/tracks")) {
                if (event.key === "ArrowRight") {
                    fer(function () { return that.playerNext(); });
                }
                if (event.key === "ArrowLeft") {
                    fer(function () { return that.playerPrev(); });
                }
            }
            else if (routerStore.activeRouterPath.endsWith("/random")) {
                if (event.key === "ArrowRight") {
                    fer(function () { return that.getRandomTrack(); });
                }
            }
        });
        DZ.Event.subscribe("current_track", function (track, evt_name) {
            debugger;
            _this.trackIdIsPlaying = Number(track.track.id);
        });
        DZ.Event.subscribe("track_end", function (track, evt_name) {
            if (routerStore.activeRouterPath.endsWith("/random")) {
                _this.getRandomTrack();
            }
        });
        DZ.Event.subscribe("player_position", function (position, evt_name) {
            _this.activeTrackPosition = position[0];
            _this.activeTrackDuration = position[1];
        });
        mobx_1.reaction(function () { return _this.activeAlbum; }, function (activeAlbum) {
            if (_this.source) {
                _this.source.cancel();
            }
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            var zen = "";
            var URL_ALBUM_TRACKS = constants_1.URL_WEB_API_DZK +
                "AlbumWorks" +
                zen +
                "?idAlbum=" +
                activeAlbum.idAlbum;
            debugger;
            axios_1.default
                .get(URL_ALBUM_TRACKS, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                _this.responseAlbumsTracks = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.urlAlbumsByWork; }, function (url) {
            debugger;
            _this.albumsRaw = [];
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            axios_1.default
                .get(url, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                debugger;
                _this.albumsRaw = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.activeArtistIdMN; }, function (idMN) {
            _this.albumsRaw = [];
            var URL_ALBUMS = constants_1.URL_WEB_API_DZK + "artistAlbums?idMNparam=" + idMN;
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            axios_1.default
                .get(URL_ALBUMS, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                debugger;
                _this.albumsRaw = resp.data;
            });
        });
    }
    Object.defineProperty(AlbumStore.prototype, "activeTrackPositionTime", {
        get: function () {
            return this.secondsToTimeFormat(this.activeTrackPosition);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "activeTrackDurationTime", {
        get: function () {
            return this.secondsToTimeFormat(this.activeTrackDuration);
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.searchByText = function (text) {
        var _this = this;
        this.albumsRaw = [];
        if (this.source) {
            this.source.cancel();
        }
        var CancelToken = axios_1.default.CancelToken;
        this.source = CancelToken.source();
        axios_1.default
            .get(constants_1.URL_WEB_API + "AlbumsByText?text=" + text, {
            cancelToken: this.source.token
        })
            .then(function (resp) {
            _this.albumsRaw = resp.data;
        });
    };
    Object.defineProperty(AlbumStore.prototype, "urlAlbumsByWork", {
        get: function () {
            return (constants_1.URL_WEB_API_DZK +
                "AlbumsByWork" +
                constants_1.ZEN +
                "?idWork=" +
                this.activeMCWorks +
                "&fets=" +
                this.worksFets);
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.searchByWork = function (idMC) {
        this.activeMCWorks = idMC;
    };
    AlbumStore.prototype.setWoroksFets = function (fets) {
        this.worksFets = fets;
    };
    AlbumStore.prototype.getRandomTrack = function () {
        var _this = this;
        var URL_RANDOM_TRACK = constants_1.URL_WEB_API_DZK + "RandomTrack?numComposers=40";
        axios_1.default.get(URL_RANDOM_TRACK).then(function (resp) {
            debugger;
            _this.responseAlbumsTracks = resp.data;
            _this.activeAlbum = _this.responseAlbumsTracks.Album;
            _this.playTracks(_this.responseAlbumsTracks.Track.idWorkOrd, 0);
        });
    };
    AlbumStore.prototype.setActiveAlbum = function (album) {
        this.activeAlbum = album;
    };
    AlbumStore.prototype.setActiveAlbumById = function (idAlbum) {
        this.activeAlbum = this.albums.find(function (a) { return a.idAlbum === idAlbum; });
    };
    Object.defineProperty(AlbumStore.prototype, "activeAlbumMWdeezerLink", {
        get: function () {
            if (!this.activeAlbum) {
                return "";
            }
            return "" + this.activeAlbum.idDeezer;
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.setOrderByKey = function (order) {
        if (order === this.orderByKey) {
            this.orderByDir *= -1;
        }
        else {
            this.orderByKey = order;
        }
    };
    Object.defineProperty(AlbumStore.prototype, "albumsCount", {
        get: function () {
            return !!this.albums ? this.albums.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "albums", {
        get: function () {
            var _this = this;
            return mobx_1.toJS(this.albumsRaw)
                .filter(function (al) {
                if (!_this.groupByField || _this.activeGroupFieldValue === "") {
                    return true;
                }
                return al[_this.groupByField] === _this.activeGroupFieldValue;
            }, this)
                .sort(function (a1, a2) {
                if (a1[_this.orderByKey] > a2[_this.orderByKey]) {
                    return _this.orderByDir;
                }
                if (a1[_this.orderByKey] < a2[_this.orderByKey]) {
                    return _this.orderByDir * -1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "albumTracksRaw", {
        get: function () {
            if (!this.responseAlbumsTracks) {
                return null;
            }
            return this.responseAlbumsTracks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "albumCreditRaw", {
        get: function () {
            if (!this.responseAlbumsTracks) {
                return null;
            }
            return this.responseAlbumsTracks.AlbumCredits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "isNextable", {
        get: function () {
            return this.activeIndex < this.albums.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.goNext = function () {
        debugger;
        this.activeAlbum = this.albums[this.activeIndex + 1];
    };
    Object.defineProperty(AlbumStore.prototype, "isPreviousable", {
        get: function () {
            return this.activeIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.goPrevious = function () {
        this.activeAlbum = this.albums[this.activeIndex - 1];
    };
    Object.defineProperty(AlbumStore.prototype, "activeIndex", {
        get: function () {
            var _this = this;
            return this.albums.findIndex(function (a) { return a.idAlbum === _this.activeAlbum.idAlbum; });
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.shuffle = function () {
        var _this = this;
        mobx_1.transaction(function () {
            _this.orderByKey = "";
            _this.albumsRaw = ComposerStore_1.default.doShuffle(mobx_1.toJS(_this.albumsRaw));
        });
    };
    Object.defineProperty(AlbumStore.prototype, "activeTrack", {
        get: function () {
            var _this = this;
            debugger;
            if (!this.trackIdIsPlaying) {
                return null;
            }
            return this.responseAlbumsTracks.AlbumWorks.find(function (t) { return t.idTrack_DZ === _this.trackIdIsPlaying; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "activeTrackComposer", {
        get: function () {
            if (!this.activeTrack) {
                return "";
            }
            var idWork = this.activeTrack.idMC;
            var albumWork = this.responseAlbumsTracks.AlbumWorks.find(function (a) { return a.idMC === idWork; });
            return albumWork.composerName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "activeTrackWorkName", {
        get: function () {
            if (!this.activeTrack) {
                return "";
            }
            var idWork = this.activeTrack.idMC;
            var albumWork = this.responseAlbumsTracks.AlbumWorks.find(function (a) { return a.idMC === idWork; });
            return albumWork.nameWork;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "activeTrackWorkDesc", {
        get: function () {
            if (!this.activeTrack) {
                return "";
            }
            var idWork = this.activeTrack.idMC;
            var albumWork = this.responseAlbumsTracks.AlbumWorks.find(function (a) { return a.idMC === idWork; });
            return albumWork.description || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "activeTrackWorkDescAuthor", {
        get: function () {
            if (!this.activeTrack) {
                return "";
            }
            var idWork = this.activeTrack.idMC;
            var albumWork = this.responseAlbumsTracks.AlbumWorks.find(function (a) { return a.idMC === idWork; });
            return albumWork.descriptionAuthor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "activeTrackCredits", {
        get: function () {
            if (!this.albumCreditRaw) {
                return null;
            }
            return this.albumCreditRaw
                .filter(function (f) { return f.isMusical; })
                .map(function (c) {
                return {
                    idMN: c.idMN,
                    nameMN: c.nameMN,
                    creditTip: c.nameCredit,
                    creditValue: c.nameMN
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.getKlassikRank = function (idMC, idMCord) {
        var _this = this;
        var URL_KLASSIKRANK_TRACKS = constants_1.URL_WEB_API_DZK +
            "WorkVersions" +
            constants_1.ZEN +
            "?idMC=" +
            idMC +
            "&idMCord=" +
            idMCord;
        axios_1.default.get(URL_KLASSIKRANK_TRACKS).then(function (resp) {
            _this.klassikRankWebApi = resp.data;
        });
    };
    AlbumStore.prototype.goPlaylistTracks = function (playlistId) {
        if (!playlistId) {
            return;
        }
        DZ.player.playPlaylist(playlistId, false, 0);
    };
    Object.defineProperty(AlbumStore.prototype, "tracks", {
        get: function () {
            debugger;
            var ret = mobx_1.toJS(this.responseAlbumsTracks.AlbumWorks);
            return ret.map(function (t) { return t.idTrack_DZ; });
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.playTracks = function (workOrd, initIndexTrack) {
        debugger;
        DZ.player.pause();
        DZ.player.playTracks(this.tracks, initIndexTrack);
    };
    AlbumStore.prototype.toggleTrack = function (track) {
    };
    AlbumStore.prototype.sliderPlayClicked = function (e) {
        var slider = $(e.delegateTarget);
        var x = e.clientX - slider.offset().left;
        var xMax = slider.width();
        DZ.player.seek((x / xMax) * 100);
    };
    AlbumStore.prototype.toggleFavoriteTrack = function (idTrack) {
        var URL = constants_1.WEB_API_HOST + "api/TrackFavorite";
        var data = { idTrack: idTrack, idUser: this.userId };
        this.activeTrackIsFavorite = !this.activeTrackIsFavorite;
        return axios_1.default.put(URL, data);
    };
    AlbumStore.prototype.secondsToTimeFormat = function (seconds) {
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
    AlbumStore.prototype.playerNext = function () {
        debugger;
        DZ.player.next();
    };
    AlbumStore.prototype.playerPrev = function () {
        DZ.player.prev();
    };
    Object.defineProperty(AlbumStore.prototype, "isGroupedByComposer", {
        get: function () {
            return this.groupByField === "composers";
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.setGroupByField = function (groupField) {
        if (this.groupByField === groupField) {
            this.groupByField = null;
        }
        else {
            this.groupByField = groupField;
        }
    };
    Object.defineProperty(AlbumStore.prototype, "groupsRaw", {
        get: function () {
            var _this = this;
            return this.albumsRaw.reduce(groupBy(function (t) { return t[_this.groupByField]; }), Map());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "groups", {
        get: function () {
            var grups = this.groupsRaw;
            var keys = grups.keys();
            return keys
                .map(function (k, i) {
                var ret = {
                    idMenu: i,
                    countMenu: grups.get(k).length,
                    nameMenu: k
                };
                return ret;
            })
                .sort(function (a, b) {
                return b.countMenu - a.countMenu;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "groupsSorted", {
        get: function () {
            return this.groups.sort(function (a, b) {
                return b.countMenu - a.countMenu;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "numColumsAlbums", {
        get: function () {
            if (!this.groupByField) {
                return 4;
            }
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "albumTags", {
        get: function () {
            if (!this.responseAlbumsTracks) {
                return null;
            }
            var genres = __spread(new Set(this.responseAlbumsTracks.AlbumWorks.map(function (item) { return item.workGenre; })));
            var genresTag = genres.map(function (g) {
                return { text: g, linkTo: g, prompt: "genre" };
            });
            return __spread([
                { prompt: "label", text: this.activeAlbum.label }
            ], genresTag);
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.setDzSeek = function (value) {
        console.log(value);
        DZ.player.seek((value / this.activeTrackDuration) * 100);
    };
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeArtistIdMN", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeArtistNameMN", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeTrackPosition", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackPositionTime", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeTrackDuration", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackDurationTime", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "searchByText", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "urlAlbumsByWork", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeMCWorks", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "searchByWork", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "setWoroksFets", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "worksFets", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "getRandomTrack", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "setActiveAlbum", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "setActiveAlbumById", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeAlbum", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeAlbumMWdeezerLink", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "responseAlbumsTracks", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "albumsRaw", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "orderByKey", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "orderByDir", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "setOrderByKey", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albumsCount", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albums", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albumTracksRaw", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albumCreditRaw", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "isNextable", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "goNext", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "isPreviousable", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "goPrevious", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeIndex", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "shuffle", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrack", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackComposer", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackWorkName", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackWorkDesc", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackWorkDescAuthor", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "activeTrackCredits", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "klassikRankWebApi", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "getKlassikRank", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "goPlaylistTracks", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "tracks", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "playTracks", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "toggleTrack", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "sliderPlayClicked", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "trackIdIsPlaying", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeTrackIsFavorite", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "userId", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "toggleFavoriteTrack", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "userid", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "playerNext", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "playerPrev", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "playerIsPlaying", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "isGroupedByComposer", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "groupByField", void 0);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "setGroupByField", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeGroupFieldValue", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "groupsRaw", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "groups", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "groupsSorted", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "numColumsAlbums", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albumTags", null);
    __decorate([
        mobx_1.action
    ], AlbumStore.prototype, "setDzSeek", null);
    return AlbumStore;
}());
exports.default = AlbumStore;
