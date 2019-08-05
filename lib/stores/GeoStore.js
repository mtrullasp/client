"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const axios_1 = require("axios");
const constants_1 = require("../util/constants");
class GeoStore {
    constructor() {
        this.ciutats = [];
        this.paisos = [];
        const URL_PAISOS = constants_1.URL_WEB_API + "api/paisos";
        const URL_CIUTATS = constants_1.URL_WEB_API + "api/ciutats";
        axios_1.default.get(URL_CIUTATS).then(resp => {
            this.ciutats = resp.data;
        });
        axios_1.default.get(URL_PAISOS).then(resp => {
            this.paisos = resp.data;
        });
    }
}
__decorate([
    mobx_1.observable
], GeoStore.prototype, "ciutats", void 0);
__decorate([
    mobx_1.observable
], GeoStore.prototype, "paisos", void 0);
exports.default = GeoStore;
//# sourceMappingURL=GeoStore.js.map