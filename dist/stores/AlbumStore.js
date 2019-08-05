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
var mobx_1 = require("mobx");
var axios_1 = require("axios");
var constants_1 = require("../util/constants");
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
    function AlbumStore(performeStore) {
        var _this = this;
        this.activeArtistIdMN = "";
        this.activeArtistNameMN = "";
        this.worksFets = true;
        this.albums = [];
        this.klassikRankWebApi = [];
        this.activeTrackIsFavorite = false;
        this.playerIsPlaying = false;
        this.isGroupedByComposer = false;
        this.activeGroupIdComposer = -1;
        DZ.Event.subscribe("current_track", function (track, evt_name) {
            debugger;
            _this.trackIdIsPlaying = Number(track.track.id);
        });
        mobx_1.reaction(function () { return _this.activeAlbum; }, function (activeAlbum) {
            if (_this.source) {
                _this.source.cancel();
            }
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            var zen = "";
            var URL_ALBUM_TRACKS = constants_1.URL_WEB_API_DZK + "AlbumTracks" + zen + "?idAlbum=" + activeAlbum.idAlbum;
            axios_1.default
                .get(URL_ALBUM_TRACKS, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                _this.responseAlbumsTracks = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.urlAlbumsByWork; }, function (url) {
            _this.albums = [];
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            axios_1.default
                .get(url, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                debugger;
                _this.albums = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.activeArtistIdMN; }, function (idMN) {
            _this.albums = [];
            var URL_ALBUMS = constants_1.URL_WEB_API_DZK + "artistAlbums?idMNparam=" + idMN;
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            axios_1.default
                .get(URL_ALBUMS, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                debugger;
                _this.albums = resp.data;
            });
        });
    }
    AlbumStore.prototype.searchByText = function (text) {
        var _this = this;
        this.albums = [];
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
            _this.albums = resp.data;
        });
    };
    Object.defineProperty(AlbumStore.prototype, "urlAlbumsByWork", {
        get: function () {
            return (constants_1.URL_WEB_API_DZK +
                "AlbumsByWork" + constants_1.ZEN + "?idMC=" +
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
    Object.defineProperty(AlbumStore.prototype, "albumTracksRaw", {
        get: function () {
            if (!this.responseAlbumsTracks) {
                return null;
            }
            return this.responseAlbumsTracks.AlbumTracks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "albumTracks", {
        get: function () {
            if (!this.albumTracksRaw) {
                return null;
            }
            var nameMQant = "";
            return this.albumTracksRaw.map(function (a) {
                if (a.nameMQ === nameMQant) {
                    return __assign({}, a, { nameMQ: "" });
                }
                nameMQant = a.nameMQ;
                return a;
            });
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
            return this.albums.indexOf(this.activeAlbum);
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.shuffle = function () {
        this.albums = ComposerStore_1.default.doShuffle(mobx_1.toJS(this.albums));
    };
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
        var URL_KLASSIKRANK_TRACKS = constants_1.URL_WEB_API_DZK + "WorkVersions" + constants_1.ZEN + "?idMC=" + idMC + "&idMCord=" + idMCord;
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
            return this.responseAlbumsTracks.AlbumTracks.map(function (t) { return t.idDeezerTrack; });
        },
        enumerable: true,
        configurable: true
    });
    AlbumStore.prototype.playTracks = function (initIndexTrack) {
        DZ.player.pause();
        debugger;
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
    Object.defineProperty(AlbumStore.prototype, "allComposersAlbums", {
        get: function () {
            var _a;
            return (_a = new Array()).concat.apply(_a, this.albums.map(function (m) { return m.composers; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "groupsComposerRaw", {
        get: function () {
            return this.allComposersAlbums.reduce(groupBy(function (t) { return t.idComposerMN; }), Map());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumStore.prototype, "groupsComposer", {
        get: function () {
            var grups = this.groupsComposerRaw;
            var keys = grups.keys();
            return keys.map(function (k, i) {
                var ret = {
                    idMenu: i,
                    countMenu: grups.get(k).length,
                    nameMenu: k
                };
                return ret;
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeArtistIdMN", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeArtistNameMN", void 0);
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
    ], AlbumStore.prototype, "albums", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albumTracksRaw", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "albumTracks", null);
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
        mobx_1.observable
    ], AlbumStore.prototype, "activeTrack", void 0);
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
    ], AlbumStore.prototype, "allComposersAlbums", null);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "groupsComposerRaw", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "isGroupedByComposer", void 0);
    __decorate([
        mobx_1.computed
    ], AlbumStore.prototype, "groupsComposer", null);
    __decorate([
        mobx_1.observable
    ], AlbumStore.prototype, "activeGroupIdComposer", void 0);
    return AlbumStore;
}());
exports.default = AlbumStore;
