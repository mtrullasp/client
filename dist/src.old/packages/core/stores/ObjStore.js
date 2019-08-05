"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var configObjects = new Map();
configObjects.set("composers", {
    lazyLoad: false,
    type: "a",
    includeTags: "composer. conductor, ensemble"
});
configObjects.set("performers", {
    lazyLoad: false,
    type: "a",
    includeTags: "classical"
});
var ObjState = (function () {
    function ObjState(appState) {
        this.mObjects = new Map();
        this.activeTypObject = "composer";
    }
    ObjState.prototype.clickEntOrderByField = function (arg0) {
        throw new Error("Method not implemented.");
    };
    ObjState.prototype.toggleEntOrderByDirection = function () {
        throw new Error("Method not implemented.");
    };
    ObjState.prototype.filterByEntNsme = function (arg0) {
        throw new Error("Method not implemented.");
    };
    __decorate([
        mobx_1.observable
    ], ObjState.prototype, "activeTypObject", void 0);
    __decorate([
        mobx_1.observable
    ], ObjState.prototype, "mObjects", void 0);
    return ObjState;
}());
var MusicalObjectModel = (function () {
    function MusicalObjectModel() {
    }
    return MusicalObjectModel;
}());
exports.default = ObjState;
