"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const constants_1 = require("../util/constants");
const axios_1 = require("axios");
var DZ = window.DZ;
class PlayerStore {
    constructor() {
        this.activeTrackIsFavorite = false;
        this.playerIsPlaying = false;
        DZ.Event.subscribe("player_play", () => {
            this.activeTrackIndex = DZ.player.getCurrentIndex();
        });
    }
    goPlaylistTracks(playlistId) {
        //this.history.push("http://127.0.0.1:3000/Me/Playlist/1600104235/Tracks")
        if (!playlistId) {
            return;
        }
        DZ.player.playPlaylist(playlistId, false, 0);
        //this.history.push("/Me/Playlist/" + playlistId.toString() + "/IDeezerTracks");
    }
    playTracks(tracks, numTrack) {
        this.tracks = tracks;
        this.activeTrack = numTrack;
        DZ.player.pause();
        DZ.player.playTracks(tracks, numTrack);
    }
    toggleTrack(trackId) {
        if (trackId === this.trackIdIsPlaying) {
            this.trackIdIsPlaying = null;
            DZ.player.pause();
        }
        else {
            this.trackIdIsPlaying = trackId;
            DZ.player.playTracks([trackId]);
        }
    }
    sliderPlayClicked(e) {
        var slider = $(e.delegateTarget);
        var x = e.clientX - slider.offset().left;
        var xMax = slider.width();
        DZ.player.seek((x / xMax) * 100);
    }
    toggleFavoriteTrack(idTrack) {
        const URL = constants_1.WEB_API_HOST + "api/TrackFavorite";
        const data = { idTrack: idTrack, idUser: this.userId };
        this.activeTrackIsFavorite = !this.activeTrackIsFavorite;
        return axios_1.default.put(URL, data);
    }
    secondsToTimeFormat(seconds) {
        try {
            const ret = new Date(seconds * 1000).toISOString().substr(11, 8);
            return ret.startsWith("00:") ? ret.substr(3) : ret;
        }
        catch (_a) {
            if (!seconds) {
                return "";
            }
            return seconds.toString();
        }
    }
    /*
      @computed get activeTrackIndex(): number {
        if (!this.tracks) {
          return null;
        }
        return this.tracks.findIndex(((t) t === this.activeTrack));
      }
    */
    playerNext() {
        //const index = this.activeTrackIndex + 1;debugger ;
        //this.playerChangeIndex(index);
        //this.activeTrack = index;
        DZ.player.next();
    }
    playerPrev() {
        // const index = this.activeTrackIndex - 1;
        // this.playerChangeIndex(index);
        DZ.player.prev();
    }
}
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
exports.PlayerStore = PlayerStore;
//# sourceMappingURL=PlayerStore.js.map