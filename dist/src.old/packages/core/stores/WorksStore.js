"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var constants_1 = require("../../../util/constants");
var axios_1 = require("axios");
var WorksState = (function () {
    function WorksState(appState) {
        var _this = this;
        this.filterWorksByGenre = 0;
        this.filterWorksByType = 0;
        this.worksByTypeAsTreeMapUnits = "Duration";
        this.isComposerWorksVisible = false;
        this.appState = appState;
        mobx_1.reaction(function () { return _this.appState.activeComposerId; }, function (idComposer) {
            var URL_COMPOSER_WORKS = constants_1.WEB_API_HOST +
                "api/ComposerWorks?idComposer=" +
                idComposer.toString();
            return axios_1.default
                .get(URL_COMPOSER_WORKS)
                .then(function (resp) {
                debugger;
                _this.activeWorksWebApi = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.activeWork; }, function (work) {
            var URL_WORK_ALBUMS = constants_1.WEB_API_HOST + "api/ComposerWorkAlbums?idWork=" + work.IdWork;
            axios_1.default
                .get(URL_WORK_ALBUMS)
                .then(function (resp) {
                _this.activeWorkAlbumsList = resp.data;
            });
        });
        mobx_1.reaction(function () { return _this.appState.composers; }, function (composers) {
            var URL_COMPOSERS_COUNT_WORKS = constants_1.WEB_API_HOST + "api/ComposerWorksCount";
            var data = composers.map(function (c) { return c.IdComposer; });
            axios_1.default.post(URL_COMPOSERS_COUNT_WORKS, data).then(function (resp) {
                _this.composersWorksCount = null;
                setTimeout(function () {
                    _this.composersWorksCount = resp.data;
                }, 0);
            });
        });
        mobx_1.reaction(function () { return _this.appState.activeComposer; }, function (composer) {
            var URL_WORKS_BY_GENRE = constants_1.WEB_API_HOST +
                "api/ComposerWorksByGenre?idComposer=" +
                composer.IdComposer;
            axios_1.default.get(URL_WORKS_BY_GENRE).then(function (resp) {
                _this.worksByGenre = null;
                setTimeout(function () {
                    _this.worksByGenre = mobx_1.observable.array(resp.data);
                }, 0);
            });
        });
        mobx_1.reaction(function () { return _this.isComposerWorksVisible; }, function (isComposerWorksVisible) {
            if (!isComposerWorksVisible || !_this.appState.activeComposerId) {
                return;
            }
        });
    }
    Object.defineProperty(WorksState.prototype, "activeListWorks", {
        get: function () {
            var _this = this;
            debugger;
            if (!this.activeWorksWebApi) {
                return null;
            }
            if (!!this.filterWorksByType) {
                return this.activeWorksWebApi.Works.filter(function (w) { return w.IdType === _this.filterWorksByType; });
            }
            return this.activeWorksWebApi.Works;
        },
        enumerable: true,
        configurable: true
    });
    WorksState.prototype.loadTracksByWork = function (idWork, numPart) {
        var _this = this;
        var URL_TRACKS = constants_1.WEB_API_HOST +
            "api/TracksByIdWork?idWork=" +
            idWork +
            "&numPart=" +
            numPart;
        axios_1.default
            .get(URL_TRACKS)
            .then(function (resp) {
            _this.appState.activeKlassikRanks = resp.data;
        })
            .catch(function (error) { });
    };
    Object.defineProperty(WorksState.prototype, "worksFiltres", {
        get: function () {
            return this.appState.activeComposerId + "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksState.prototype, "composersWorksCountCount", {
        get: function () {
            return mobx_1.toJS(this.composersWorksCount).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksState.prototype, "composersAsNumWorksTreeMap", {
        get: function () {
            if (!this.composersWorksCount) {
                return null;
            }
            var children = this.composersWorksCount.map(function (obj) {
                return {
                    name: obj.Nom,
                    value: obj.NumberOfWorks
                };
            });
            return {
                name: "composers",
                children: children
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksState.prototype, "worksByTypeAsTreeMap", {
        get: function () {
            var _this = this;
            if (!this.activeWorksWebApi || !this.activeWorksWebApi.WorksByType) {
                return null;
            }
            var children = this.activeWorksWebApi.WorksByType.map(function (obj) {
                if (_this.worksByTypeAsTreeMapUnits === "NumberOfWorks") {
                    return {
                        name: obj.TypeName,
                        id: obj.IdType,
                        value: obj.NumberOfWorks
                    };
                }
                else {
                    return {
                        name: obj.TypeName,
                        id: obj.IdType,
                        value: obj.Duration
                    };
                }
            });
            return children;
        },
        enumerable: true,
        configurable: true
    });
    WorksState.prototype.filterWorkByKeyValue = function (kv) {
        this.filterWork = kv;
    };
    WorksState.prototype.toggleComposerWorksVisible = function () {
        this.isComposerWorksVisible = !this.isComposerWorksVisible;
    };
    WorksState.prototype.setActiveWork = function (work) {
        this.activeWork = work;
        var path = constants_1.ROUTE_COMPOSER.replace(":composerId", this.appState.activeComposerId.toString()) +
            "/workAlbums/" +
            this.activeWork.IdWork;
        this.appState.go(path);
    };
    Object.defineProperty(WorksState.prototype, "activePathIsWorkRecordings", {
        get: function () {
            return this.appState.activeRouterPath.startsWith("/recordings/");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "activeWorksWebApi", void 0);
    __decorate([
        mobx_1.computed
    ], WorksState.prototype, "activeListWorks", null);
    __decorate([
        mobx_1.action
    ], WorksState.prototype, "loadTracksByWork", null);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "filterWorksByGenre", void 0);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "filterWorksByType", void 0);
    __decorate([
        mobx_1.computed
    ], WorksState.prototype, "worksFiltres", null);
    __decorate([
        mobx_1.computed
    ], WorksState.prototype, "composersWorksCountCount", null);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "composersWorksCount", void 0);
    __decorate([
        mobx_1.computed
    ], WorksState.prototype, "composersAsNumWorksTreeMap", null);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "worksByGenre", void 0);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "worksByTypeAsTreeMapUnits", void 0);
    __decorate([
        mobx_1.computed
    ], WorksState.prototype, "worksByTypeAsTreeMap", null);
    __decorate([
        mobx_1.action
    ], WorksState.prototype, "filterWorkByKeyValue", null);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "filterWork", void 0);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "isComposerWorksVisible", void 0);
    __decorate([
        mobx_1.action
    ], WorksState.prototype, "toggleComposerWorksVisible", null);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "activeComposerWorks", void 0);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "activeWork", void 0);
    __decorate([
        mobx_1.observable
    ], WorksState.prototype, "activeWorkAlbumsList", void 0);
    __decorate([
        mobx_1.action
    ], WorksState.prototype, "setActiveWork", null);
    __decorate([
        mobx_1.computed
    ], WorksState.prototype, "activePathIsWorkRecordings", null);
    return WorksState;
}());
exports.WorksState = WorksState;
