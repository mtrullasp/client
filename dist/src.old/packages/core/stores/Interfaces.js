"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var date_fns_1 = require("date-fns");
var TComposer = (function () {
    function TComposer() {
    }
    return TComposer;
}());
exports.TComposer = TComposer;
var IComposerWork = (function () {
    function IComposerWork() {
    }
    return IComposerWork;
}());
exports.IComposerWork = IComposerWork;
var TDeezerAlbum = (function () {
    function TDeezerAlbum() {
    }
    Object.defineProperty(TDeezerAlbum.prototype, "release_year", {
        get: function () {
            return date_fns_1.getYear(date_fns_1.format(this.release_date)).toString();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.computed
    ], TDeezerAlbum.prototype, "release_year", null);
    return TDeezerAlbum;
}());
exports.TDeezerAlbum = TDeezerAlbum;
var TArtist = (function () {
    function TArtist() {
    }
    return TArtist;
}());
exports.TArtist = TArtist;
var TEnt = (function () {
    function TEnt() {
    }
    return TEnt;
}());
exports.TEnt = TEnt;
var ETypeAction;
(function (ETypeAction) {
    ETypeAction["search"] = "SEARCH";
    ETypeAction["filter"] = "FILTER";
    ETypeAction["order"] = "ORDER";
    ETypeAction["group"] = "GROUP";
    ETypeAction["shuffle"] = "SHUFFLE";
    ETypeAction["button"] = "BUTTON";
})(ETypeAction = exports.ETypeAction || (exports.ETypeAction = {}));
var TAction = (function () {
    function TAction() {
    }
    return TAction;
}());
exports.TAction = TAction;
var TMyRouterConfigItem = (function () {
    function TMyRouterConfigItem() {
    }
    return TMyRouterConfigItem;
}());
exports.TMyRouterConfigItem = TMyRouterConfigItem;
var TDeezerTrack = (function () {
    function TDeezerTrack() {
    }
    return TDeezerTrack;
}());
exports.TDeezerTrack = TDeezerTrack;
