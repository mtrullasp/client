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
        this.location = {};
        this.match = {};
        this.history = {};
    }
    RouterStore.prototype.setRoute = function (location, match, history) {
        this.location = location;
        this.match = match;
        this.history = history;
    };
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "location", void 0);
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "match", void 0);
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "history", void 0);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "setRoute", null);
    return RouterStore;
}());
exports.default = new RouterStore();
