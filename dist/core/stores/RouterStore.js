"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var RouterStore = (function () {
    function RouterStore() {
        this.menuIndex = -1;
    }
    RouterStore.prototype.setHistory = function (history) {
        var _this = this;
        if (!history) {
            return;
        }
        debugger;
        this.history = history;
        this.history.listen(function (ls) {
            _this.activeRouterPath = ls.pathname;
        });
    };
    RouterStore.prototype.setLocation = function (location) {
        this.location = location;
        this.activeRouterPath = location.pathname;
    };
    Object.defineProperty(RouterStore.prototype, "canGoBack", {
        get: function () {
            return !!this.history && this.history.length > 1;
        },
        enumerable: true,
        configurable: true
    });
    RouterStore.prototype.go = function (path) {
        this.history.push(path);
    };
    RouterStore.prototype.goBack = function () {
        this.history.goBack();
    };
    Object.defineProperty(RouterStore.prototype, "isRandom", {
        get: function () {
            return this.activeRouterPath.endsWith("random");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "setHistory", null);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "setLocation", null);
    __decorate([
        mobx_1.computed
    ], RouterStore.prototype, "canGoBack", null);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "go", null);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "goBack", null);
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "menuIndex", void 0);
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "activeRouterPath", void 0);
    __decorate([
        mobx_1.computed
    ], RouterStore.prototype, "isRandom", null);
    return RouterStore;
}());
exports.RouterStore = RouterStore;
