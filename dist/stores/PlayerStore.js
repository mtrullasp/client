"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var constants_1 = require("../util/constants");
var axios_1 = require("axios");
var DZ = window.DZ;
var PlayerStore = (function () {
    function PlayerStore() {
        var _this = this;
        this.activeTrackIsFavorite = false;
        this.playerIsPlaying = false;
        DZ.Event.subscribe("player_play", function () {
            _this.activeTrackIndex = DZ.player.getCurrentIndex();
        });
    }
    PlayerStore.prototype.goPlaylistTracks = function (playlistId) {
        if (!playlistId) {
            return;
        }
        DZ.player.playPlaylist(playlistId, false, 0);
    };
    PlayerStore.prototype.playTracks = function (tracks, numTrack) {
        this.tracks = tracks;
        this.activeTrack = numTrack;
        DZ.player.pause();
        DZ.player.playTracks(tracks, numTrack);
    };
    PlayerStore.prototype.toggleTrack = function (trackId) {
        if (trackId === this.trackIdIsPlaying) {
            this.trackIdIsPlaying = null;
            DZ.player.pause();
        }
        else {
            this.trackIdIsPlaying = trackId;
            DZ.player.playTracks([trackId]);
        }
        this.track;
    };
    PlayerStore.prototype.sliderPlayClicked = function (e) {
        var slider = $(e.delegateTarget);
        var x = e.clientX - slider.offset().left;
        var xMax = slider.width();
        DZ.player.seek((x / xMax) * 100);
    };
    PlayerStore.prototype.toggleFavoriteTrack = function (idTrack) {
        var URL = constants_1.WEB_API_HOST + "api/TrackFavorite";
        var data = { idTrack: idTrack, idUser: this.userId };
        this.activeTrackIsFavorite = !this.activeTrackIsFavorite;
        return axios_1.default.put(URL, data);
    };
    PlayerStore.prototype.secondsToTimeFormat = function (seconds) {
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
    PlayerStore.prototype.playerNext = function () {
        DZ.player.next();
    };
    PlayerStore.prototype.playerPrev = function () {
        DZ.player.prev();
    };
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "goPlaylistTracks", null);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "tracks", void 0);
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "playTracks", null);
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "toggleTrack", null);
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "sliderPlayClicked", null);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "trackIdIsPlaying", void 0);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "activeTrack", void 0);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "activeTrackIsFavorite", void 0);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "userId", void 0);
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "toggleFavoriteTrack", null);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "userid", void 0);
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "playerNext", null);
    __decorate([
        mobx_1.action
    ], PlayerStore.prototype, "playerPrev", null);
    __decorate([
        mobx_1.observable
    ], PlayerStore.prototype, "playerIsPlaying", void 0);
    return PlayerStore;
}());
exports.PlayerStore = PlayerStore;
