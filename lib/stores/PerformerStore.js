"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const constants_1 = require("../util/constants");
const mobx_1 = require("mobx");
class PerformerStore {
    constructor() {
        axios_1.default.get(constants_1.URL_WEB_API + "PerformerRols").then(resp => {
            this.performerRolsRaw = resp.data;
        });
        mobx_1.reaction(() => this.activePerformerIdRol, (idRol) => {
            axios_1.default.get(constants_1.URL_WEB_API + "PerformersByRol?idRol=" + idRol).then(resp => {

                this.performersRaw = resp.data;
            });
        });
    }
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
exports.PerformerStore = PerformerStore;
//# sourceMappingURL=PerformerStore.js.map
