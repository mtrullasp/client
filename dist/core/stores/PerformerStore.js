"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var constants_1 = require("../../util/constants");
var mobx_1 = require("mobx");
var declarative_js_1 = require("declarative-js");
var groupBy = declarative_js_1.Reducer.groupBy;
var Map = declarative_js_1.Reducer.Map;
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
        mobx_1.reaction(function () { return _this.activePerformerId; }, function (idPerformer) {
            _this.performerRels = [];
            var URL_PERFORMER_RELS = constants_1.URL_WEB_API_DZK + "ArtistRelations?idMN=" + idPerformer;
            axios_1.default.get(URL_PERFORMER_RELS).then(function (resp) {
                debugger;
                _this.performerRels = resp.data;
            });
        });
    }
    PerformerStore.prototype.setActivePerformer = function (id) {
        var _this = this;
        this.activePerformerId = id;
        return axios_1.default.get(constants_1.URL_WEB_API_DZK + "PerformerById?id=" + id).then(function (resp) {
            debugger;
            _this.activePerformer = resp.data;
            _this.activePerformerId = id;
            return resp.data;
        });
    };
    Object.defineProperty(PerformerStore.prototype, "performerRelsGrouped", {
        get: function () {
            var ret = this.performerRels
                .sort(function (s1, s2) {
                return s1.nOrd - s2.nOrd;
            })
                .reduce(groupBy(function (t) { return t.relTipName; }), Map());
            debugger;
            return ret.entries();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.action
    ], PerformerStore.prototype, "setActivePerformer", null);
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
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "activePerformer", void 0);
    __decorate([
        mobx_1.observable
    ], PerformerStore.prototype, "performerRels", void 0);
    __decorate([
        mobx_1.computed
    ], PerformerStore.prototype, "performerRelsGrouped", null);
    return PerformerStore;
}());
exports.PerformerStore = PerformerStore;
