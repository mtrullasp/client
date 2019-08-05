"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var axios_1 = require("axios");
var constants_1 = require("../../util/constants");
var GeoStore = (function () {
    function GeoStore() {
        var _this = this;
        this.ciutats = [];
        this.paisos = [];
        var URL_PAISOS = constants_1.URL_WEB_API + "api/paisos";
        var URL_CIUTATS = constants_1.URL_WEB_API + "api/ciutats";
        axios_1.default.get(URL_CIUTATS).then(function (resp) {
            _this.ciutats = resp.data;
        });
        axios_1.default.get(URL_PAISOS).then(function (resp) {
            _this.paisos = resp.data;
        });
    }
    __decorate([
        mobx_1.observable
    ], GeoStore.prototype, "ciutats", void 0);
    __decorate([
        mobx_1.observable
    ], GeoStore.prototype, "paisos", void 0);
    return GeoStore;
}());
exports.default = GeoStore;
