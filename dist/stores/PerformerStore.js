"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var constants_1 = require("../util/constants");
var mobx_1 = require("mobx");
var PerformerStore = (function () {
    function PerformerStore() {
        var _this = this;
        axios_1.default
            .get(constants_1.URL_WEB_API_DZK + "PerformerRols")
            .then(function (resp) {
            debugger;
            _this.performerRolsRaw = resp.data;
        });
        mobx_1.reaction(function () { return _this.activePerformerIdRol; }, function (idRol) {
            axios_1.default
                .get(constants_1.URL_WEB_API_DZK + "PerformersByRol?idRol=" + idRol)
                .then(function (resp) {
                _this.performersRaw = resp.data;
            });
        });
    }
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "performersRaw", void 0);
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "performerRolsRaw", void 0);
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "performerAlbumsRaw", void 0);
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "activePerformerIdRol", void 0);
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "activePerformerId", void 0);
    return PerformerStore;
}());
exports.PerformerStore = PerformerStore;
