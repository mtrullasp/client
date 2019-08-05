"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Interfaces_1 = require("./Interfaces");
var constants_1 = require("../../../util/constants");
var axios_1 = require("axios");
var DZ = window.DZ;
var RadioStore = (function () {
    function RadioStore(appState) {
        var _this = this;
        this.runningGetNewTrack = false;
        this.activeRadioTrackListIndex = -1;
        this.radioTracksList = [];
        this.fullAleatoryOn = false;
        this.tagsDefault = [
            { tag: "BAD SOUND", active: false },
            { tag: "NO SOUND", active: false },
            { tag: "WRONG TITLE", active: false },
            { tag: "WRONG COMPOSER", active: false },
            { tag: "NO IMAGE", active: false },
            { tag: "CENSORED", active: false },
            { tag: "KIDS", active: false },
            { tag: "-VOLUM", active: false },
            { tag: "+VOLUM", active: false },
            { tag: "+PRESTIGE", active: false },
            { tag: "-PRESTIGE", active: false }
        ];
        this.tags = this.tagsDefault;
        this.appState = appState;
        var getNewTrack = function () {
            if (_this.runningGetNewTrack) {
                return;
            }
            var URL_RADIO = constants_1.WEB_API_HOST +
                "api/MusicBox?tipus=" +
                _this.tipusAleatory +
                "&numComposers=" +
                appState.composersCount;
            _this.runningGetNewTrack = true;
            axios_1.default.get(URL_RADIO).then(function (resp) {
                _this.runningGetNewTrack = false;
                _this.activeRadioTrackListIndex = -1;
                _this.radioTracksList.splice(0, 1);
                _this.radioTracksList.push(resp.data);
                _this.appState.setActiveTracklist(_this.radioTracksListAsTDeezerTrack);
                _this.activeRadioTrackListIndex = 0;
                _this.appState.playTracks(_this.appState.activeTracks.map(function (a) { return a.idTrack; }), true);
            });
        };
        DZ.Event.subscribe("track_end", function () {
            if (appState.isActiveRouterPath(constants_1.ROUTE_RADIO)) {
                getNewTrack();
            }
        });
        mobx_1.reaction(function () { return _this.fullAleatoryOn; }, function (on) {
            if (!on) {
                return;
            }
            getNewTrack();
        });
        mobx_1.reaction(function () { return _this.activeRadioTrack; }, function (track) {
            _this.tags = _this.tagsDefault;
        });
    }
    Object.defineProperty(RadioStore.prototype, "activeRadioTrack", {
        get: function () {
            if (this.activeRadioTrackListIndex < 0) {
                return null;
            }
            return this.radioTracksList[this.activeRadioTrackListIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioStore.prototype, "radioTracksListAsTDeezerTrack", {
        get: function () {
            if (!this.radioTracksList.length) {
                return null;
            }
            return this.radioTracksList.map(function (t) {
                var track = new Interfaces_1.TDeezerTrack();
                track.idTrack = t.IdTrack;
                track.composerName = t.ComposerName;
                track.title = t.TrackName;
                track.duration = 50;
                track.idDeezer = t.IdTrack;
                track.labelName = t.LabelName;
                return track;
            });
        },
        enumerable: true,
        configurable: true
    });
    RadioStore.prototype.setTrackTag = function (idTrack, tag, active) {
        var _this = this;
        var URL_POST_TRACK_TAG = constants_1.WEB_API_HOST + "api/TrackTag";
        var data = { idTrack: idTrack, tag: tag };
        return axios_1.default.post(URL_POST_TRACK_TAG, data).then(function (p) {
            _this.tags.find(function (t) { return t.tag === tag; }).active = !_this.tags.find(function (t) { return t.tag === tag; }).active;
            return p;
        });
    };
    __decorate([
        mobx_1.observable
    ], RadioStore.prototype, "runningGetNewTrack", void 0);
    __decorate([
        mobx_1.observable
    ], RadioStore.prototype, "activeRadioTrackListIndex", void 0);
    __decorate([
        mobx_1.computed
    ], RadioStore.prototype, "activeRadioTrack", null);
    __decorate([
        mobx_1.observable
    ], RadioStore.prototype, "radioTracksList", void 0);
    __decorate([
        mobx_1.computed
    ], RadioStore.prototype, "radioTracksListAsTDeezerTrack", null);
    __decorate([
        mobx_1.observable
    ], RadioStore.prototype, "tipusAleatory", void 0);
    __decorate([
        mobx_1.observable
    ], RadioStore.prototype, "fullAleatoryOn", void 0);
    __decorate([
        mobx_1.action
    ], RadioStore.prototype, "setTrackTag", null);
    __decorate([
        mobx_1.observable
    ], RadioStore.prototype, "tags", void 0);
    return RadioStore;
}());
exports.RadioStore = RadioStore;
