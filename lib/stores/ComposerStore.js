"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const constants_1 = require("../util/constants");
const ts_optchain_1 = require("ts-optchain");
const axios_1 = require("axios");
// import * as _ from "lodash";
const declarative_js_1 = require("declarative-js");
var groupBy = declarative_js_1.Reducer.groupBy;
var Map = declarative_js_1.Reducer.Map;
class TGroupedMenuCount {
}
exports.TGroupedMenuCount = TGroupedMenuCount;
class ComposerStore {
    constructor(geoStore, routerStore) {
        this.activeIndex = 0;
        this.composerNameFilter = null;
        this.composersRaw = [];
        // SUBS
        this.activeComposerQuotes = [];
        this.worksFilter = "";
        this.orderByKey = "ranking";
        this.orderByDir = 1;
        this.activeGroupIdNacio = 0;
        this.geoStore = geoStore;
        this.routerStore = routerStore;
        axios_1.default.get(constants_1.URL_WEB_API + "Composers").then(resp => {
            this.composersRaw = resp.data.splice(0, constants_1.LIMIT_COMPOSERS);
        });
        mobx_1.reaction(() => this.activeComposer, composer => {
            this.worksFilter = "";
            if (!composer || this.activeIndex === -1) {
                return;
            }
            /*
            this.activeComposerQuotes = [
              {
                content: "",
                contentSourceName: ""
              } as IComposerQuotes
            ];
    */
            this.activeComposerQuotes = [];
            const URL_COMPOSER_QUOTES = constants_1.URL_WEB_API +
                "ComposerQuotes?idComposer=" +
                composer.IdComposer.toString();
            axios_1.default.get(URL_COMPOSER_QUOTES).then(resp => {
                this.activeComposerQuotes = resp.data;
            });
            this.activeComposerWorksWebApi = [];
            const URL_COMPOSER_WORKS = constants_1.URL_WEB_API + "WorksByComposer?idComposerMN=" + composer.idMN;
            axios_1.default.get(URL_COMPOSER_WORKS).then(resp => {
                this.activeComposerWorksWebApi = resp.data;
            });
        });
    }
    getLastNameComposer(sortName) {
        const pos = sortName.indexOf(",");
        if (pos <= 0) {
            return "";
        }
        return sortName.substring(0, pos);
    }
    get lastNameComposer() {
        const pos = ts_optchain_1.oc(this.activeComposer)
            .sort_name("")
            .indexOf(",");
        if (pos <= 0) {
            return "";
        }
        return this.activeComposer.sort_name.substring(0, pos);
    }
    getFisrtNameComposer(sortName) {
        const pos = sortName.indexOf(",");
        if (pos <= 0) {
            return "";
        }
        return sortName.substring(pos + 1);
    }
    get firstNameComposer() {
        const pos = ts_optchain_1.oc(this.activeComposer)
            .sort_name("")
            .indexOf(",");
        if (pos <= 0) {
            return "";
        }
        return this.activeComposer.sort_name.substring(pos + 1);
    }
    get activeComposerImgUrl() {
        return ("http://localhost/PictureHeaderBio/" +
            ts_optchain_1.oc(this.activeComposer).IdComposer(-1) +
            ".jpg");
    }
    getComposerPicture(idComposer) {
        return "http://localhost/PictureHeaderBio/" + idComposer + ".jpg";
    }
    get activeComposerInfoNeixDefu() {
        return "";
        /*
        if (!this.activeComposer) {
          return null;
        }
        let llocNeix = "";
        let paisNeix = "";
        let ciutat: ICiutat;
    
        if (!!this.activeComposer.begin_area) {
          ciutat = this.geoStore.ciutats.find(
            c => c.IdCiutat === this.activeComposer.IdCiutatNeix
          );
          llocNeix = oc(ciutat).Nom("");
          paisNeix = oc(
            this.geoStore.paisos.find(p => p.IdPais === oc(ciutat).IdPais(-1))
          ).Nom("");
          llocNeix += " (" + paisNeix + ")";
        }
        let llocDefu = "";
        let paisDefu = "";
        let ciutatDefu: ICiutat;
        if (!!this.activeComposer.end_area) {
          ciutatDefu = this.geoStore.ciutats.find(
            c => c.IdCiutat === this.activeComposer.Id
          );
          llocDefu = oc(ciutatDefu).Nom("");
          paisDefu = oc(
            this.geoStore.paisos.find(p => p.IdPais === oc(ciutatDefu).IdPais(-1))
          ).Nom("");
          llocDefu += " (" + paisDefu + ")";
        }
        return (
          llocNeix +
          (!!llocNeix ? ", " : "") +
          this.activeComposer.AnyoNeix +
          (!!this.activeComposer.AnyoDefu
            ? " - " +
              this.activeComposer.AnyoDefu +
              (!!llocDefu ? ", " : "") +
              llocDefu
            : "")
        );
    */
    }
    get composers() {
        return this.composersRaw
            .filter((composer) => {
            if (!this.composerNameFilter) {
                return true;
            }
            return composer.sort_name
                .toLowerCase()
                .includes(this.composerNameFilter.toLowerCase());
        }, this)
            .filter((composer) => {
            if (!this.isGroupedByNation || this.activeGroupIdNacio < 0) {
                return true;
            }
            const nacio = this.groupsNacio[this.activeGroupIdNacio].nameMenu;
            return composer.nacio === nacio;
        }, this)
            .sort((a1, a2) => {
            if (a1[this.orderByKey] > a2[this.orderByKey]) {
                return this.orderByDir;
            }
            if (a1[this.orderByKey] < a2[this.orderByKey]) {
                return this.orderByDir * -1;
            }
            return 0;
        });
    }
    get activeComposer() {
        return this.composers[this.activeIndex];
    }
    get isNextable() {
        return this.activeIndex < this.composers.length - 1;
    }
    goNextComposer() {
        this.activeIndex++;
    }
    get isPreviousable() {
        return this.activeIndex > 0;
    }
    goPreviousComposer() {
        this.activeIndex--;
    }
    shuffle() {
        mobx_1.transaction(() => {
            // const index = this.activeIndex;
            // this.activeIndex = -1;
            this.orderByKey = null;
            this.composersRaw = ComposerStore.doShuffle(mobx_1.toJS(this.composers));
            // this.activeIndex = index;
            // alert("fet");
        });
    }
    static doShuffle(array) {
        let counter = array.length;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
    get activeComposerWorks() {
        return this.activeComposerWorksWebApi
            .sort((a, b) => {
            return b.performancesCount - a.performancesCount;
        })
            .filter(f => f.nomMC.toLowerCase().includes(this.worksFilter));
    }
    setOrderBy(key) {
        if (key === this.orderByKey) {
            this.orderByDir *= -1;
        }
        this.orderByKey = key;
    }
    get groupsNacioRaw() {
        return this.composersRaw.reduce(groupBy(t => t.nacio), Map());
        //return _.groupBy<Array<IComposer>>(this.composers, (t) => {t.nacio}) as Array<IComposer>
    }
    get groupsNacio() {
        const grups = this.groupsNacioRaw;
        const keys = grups.keys();
        return keys.map((k, i) => {
            const ret = {
                idMenu: i,
                countMenu: grups.get(k).length,
                nameMenu: k
            };
            return ret;
        });
        //const values = this.groupsNacioRaw.values();debugger ;
    }
    get isGroupedByNation() {
        return (this.routerStore.activeRouterPath === constants_1.ROUTE_COMPOSERS_COLLECTION_BY_NACIO);
    }
}
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "activeIndex", void 0);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "lastNameComposer", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "firstNameComposer", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "activeComposerImgUrl", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "activeComposerInfoNeixDefu", null);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "composerNameFilter", void 0);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "composersRaw", void 0);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "composers", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "activeComposer", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "isNextable", null);
__decorate([
    mobx_1.action
], ComposerStore.prototype, "goNextComposer", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "isPreviousable", null);
__decorate([
    mobx_1.action
], ComposerStore.prototype, "goPreviousComposer", null);
__decorate([
    mobx_1.action
], ComposerStore.prototype, "shuffle", null);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "activeComposerQuotes", void 0);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "worksFilter", void 0);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "activeComposerWorksWebApi", void 0);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "activeComposerWorks", null);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "orderByKey", void 0);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "orderByDir", void 0);
__decorate([
    mobx_1.action
], ComposerStore.prototype, "setOrderBy", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "groupsNacioRaw", null);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "groupsNacio", null);
__decorate([
    mobx_1.observable
], ComposerStore.prototype, "activeGroupIdNacio", void 0);
__decorate([
    mobx_1.computed
], ComposerStore.prototype, "isGroupedByNation", null);
exports.default = ComposerStore;
//# sourceMappingURL=ComposerStore.js.map