"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var groupBy = require("lodash.groupby");
var mobx_1 = require("mobx");
var AppStore_1 = require("./AppStore");
var constants_1 = require("../../../util/constants");
var AlbumState = (function () {
    function AlbumState(appState) {
        this.albumsFromApi = [];
        this.orderByDir = -1;
        this.groupByField = null;
        this.textSearch = null;
        this.appState = appState;
    }
    AlbumState.prototype.toogleOrderByField = function (field) {
        var _this = this;
        if (field === this.orderByField) {
            this.orderByDir *= -1;
        }
        else {
            mobx_1.transaction(function () {
                _this.orderByField = field;
                _this.orderByDir = -1;
            });
        }
    };
    AlbumState.prototype.toogleGroupByField = function (field) {
        if (field === this.groupByField) {
            this.groupByField = null;
        }
        else {
            this.groupByField = field;
        }
    };
    Object.defineProperty(AlbumState.prototype, "orderByFieldDir", {
        get: function () {
            return this.orderByField + " " + this.orderByDir.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumState.prototype, "orderByFieldDirSymbol", {
        get: function () {
            return this.orderByField === "shuffle"
                ? this.orderByField
                : this.orderByField + (this.orderByDir === 1 ? "&#x25B2" : "&#x25BC");
        },
        enumerable: true,
        configurable: true
    });
    AlbumState.prototype.shuffle = function () {
        this.orderByField = "shuffle";
        this.orderByDir *= -1;
    };
    Object.defineProperty(AlbumState.prototype, "albumsRaw", {
        get: function () {
            var _this = this;
            var resp = this.albumsFromApi;
            if (!!this.orderByField) {
                if (this.orderByFieldDir.startsWith("shuffle")) {
                    resp = AppStore_1.AppState.shuffle(mobx_1.toJS(resp));
                }
                else {
                    resp = resp.sort(function (a1, a2) {
                        if (a1[_this.orderByField] > a2[_this.orderByField]) {
                            return _this.orderByDir;
                        }
                        if (a1[_this.orderByField] < a2[_this.orderByField]) {
                            return _this.orderByDir * -1;
                        }
                        return a1.fans - a2.fans;
                    });
                }
            }
            return resp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumState.prototype, "albums", {
        get: function () {
            if (!this.albumsRaw) {
                return [];
            }
            return this.albumsRaw.sort(function (a, b) {
                return b.idAllMusicAlbum - a.idAllMusicAlbum;
            });
        },
        enumerable: true,
        configurable: true
    });
    AlbumState.prototype.searchByName = function (textSearch, goRoute) {
        var _this = this;
        if (goRoute === void 0) { goRoute = true; }
        if (textSearch === this.textSearch) {
            return;
        }
        this.textSearch = textSearch;
        var URL = constants_1.WEB_API_HOST + "api/albumsText?text=" + textSearch;
        return axios_1.default.get(URL).then(function (resp) {
            if (goRoute) {
                _this.appState.go(constants_1.ROUTE_ALBUMS_BY_TEXT.replace(":text", textSearch));
            }
            _this.orderByField = "prestige";
            _this.albumsFromApi = resp.data || [];
        });
    };
    AlbumState.prototype.searchByContributor = function (nameArtist, goRoute) {
        if (goRoute === void 0) { goRoute = true; }
        this.searchByName(nameArtist, goRoute);
    };
    Object.defineProperty(AlbumState.prototype, "groupByItem", {
        get: function () {
            var _this = this;
            var func = this.appState.myRouter.myRouterConfig
                .find(function (r) { return r.id === "albums"; })
                .actions.find(function (g) { return g.id === _this.groupByField; }).groupBy;
            if (func instanceof Function) {
                return func;
            }
            else {
                return this.groupByField;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumState.prototype, "albumsGroupedByField", {
        get: function () {
            var res = groupBy(this.albums, this.groupByField);
            return res;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], AlbumState.prototype, "albumsFromApi", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumState.prototype, "filterByName", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumState.prototype, "orderByField", void 0);
    __decorate([
        mobx_1.observable
    ], AlbumState.prototype, "orderByDir", void 0);
    __decorate([
        mobx_1.action
    ], AlbumState.prototype, "toogleOrderByField", null);
    __decorate([
        mobx_1.observable
    ], AlbumState.prototype, "groupByField", void 0);
    __decorate([
        mobx_1.action
    ], AlbumState.prototype, "toogleGroupByField", null);
    __decorate([
        mobx_1.computed
    ], AlbumState.prototype, "orderByFieldDir", null);
    __decorate([
        mobx_1.computed
    ], AlbumState.prototype, "orderByFieldDirSymbol", null);
    __decorate([
        mobx_1.action
    ], AlbumState.prototype, "shuffle", null);
    __decorate([
        mobx_1.computed
    ], AlbumState.prototype, "albumsRaw", null);
    __decorate([
        mobx_1.computed
    ], AlbumState.prototype, "albums", null);
    __decorate([
        mobx_1.observable
    ], AlbumState.prototype, "textSearch", void 0);
    __decorate([
        mobx_1.action
    ], AlbumState.prototype, "searchByName", null);
    __decorate([
        mobx_1.action
    ], AlbumState.prototype, "searchByContributor", null);
    __decorate([
        mobx_1.computed
    ], AlbumState.prototype, "groupByItem", null);
    __decorate([
        mobx_1.computed
    ], AlbumState.prototype, "albumsGroupedByField", null);
    return AlbumState;
}());
exports.AlbumState = AlbumState;
