"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var constants_1 = require("../../util/constants");
var axios_1 = require("axios");
var EResultSearchType;
(function (EResultSearchType) {
    EResultSearchType[EResultSearchType["composer"] = 0] = "composer";
    EResultSearchType[EResultSearchType["performer"] = 1] = "performer";
    EResultSearchType[EResultSearchType["work"] = 2] = "work";
    EResultSearchType[EResultSearchType["track"] = 3] = "track";
})(EResultSearchType = exports.EResultSearchType || (exports.EResultSearchType = {}));
var SearchStore = (function () {
    function SearchStore(routerStore) {
        var _this = this;
        mobx_1.reaction(function () { return _this.searchText; }, function (text) {
            _this.results = [];
            var URL_RESULTS_SEARCH = constants_1.URL_WEB_API_DZK + "search?queryText=" + text;
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            axios_1.default
                .get(URL_RESULTS_SEARCH, {
                cancelToken: _this.source.token
            })
                .then(function (resp) {
                debugger;
                _this.results = resp.data;
                routerStore.go(constants_1.ROUTE_SEARCH_RESULTS);
            });
        });
    }
    SearchStore.prototype.searchByText = function (text) {
        this.searchText = text;
    };
    __decorate([
        mobx_1.observable
    ], SearchStore.prototype, "results", void 0);
    __decorate([
        mobx_1.observable
    ], SearchStore.prototype, "searchText", void 0);
    __decorate([
        mobx_1.action
    ], SearchStore.prototype, "searchByText", null);
    return SearchStore;
}());
exports.default = SearchStore;
