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
var ts_optchain_1 = require("ts-optchain");
var axios_1 = require("axios");
var declarative_js_1 = require("declarative-js");
var groupBy = declarative_js_1.Reducer.groupBy;
var Map = declarative_js_1.Reducer.Map;
var TGroupedMenuCount = (function () {
    function TGroupedMenuCount() {
    }
    return TGroupedMenuCount;
}());
exports.TGroupedMenuCount = TGroupedMenuCount;
var ComposerStore = (function () {
    function ComposerStore(geoStore, routerStore) {
        var _this = this;
        this.activeIndex = 0;
        this.composerNameFilter = null;
        this.composersRaw = [];
        this.activeComposerQuotes = [];
        this.worksFilter = "";
        this.orderByKey = "ranking";
        this.orderByDir = 1;
        this.activeGroupIdNacio = 0;
        this.isGroupedByNation = false;
        this.indexHover = -1;
        this.geoStore = geoStore;
        this.routerStore = routerStore;
        axios_1.default.get(constants_1.URL_WEB_API + "Composers").then(function (resp) {
            _this.composersRaw = resp.data.splice(0, constants_1.LIMIT_COMPOSERS);
        });
        var that = this;
        window.addEventListener("keydown", function (event) {
            if (routerStore.activeRouterPath.includes("composers/collection")) {
                var fer = function (callback) {
                    event.stopPropagation();
                    event.preventDefault();
                    callback();
                };
                if (event.key === "ArrowRight") {
                    fer(function () { return indexHoverAdd(1); });
                }
                if (event.key === "ArrowDown") {
                    fer(function () { return indexHoverAdd(constants_1.COMPOSER_NUMBER_COLS); });
                }
                if (event.key === "ArrowLeft") {
                    fer(function () { return indexHoverAdd(-1); });
                }
                if (event.key === "ArrowUp") {
                    fer(function () { return indexHoverAdd(-constants_1.COMPOSER_NUMBER_COLS); });
                }
                if (event.key === "Enter") {
                    fer(function () {
                        that.activeIndex = that.indexHover;
                        that.routerStore.go(constants_1.ROUTE_COMPOSERS_ITEM);
                    });
                }
            }
        });
        var indexHoverAdd = function (inc) {
            if (_this.indexHover + inc >= 0 &&
                _this.indexHover + inc < constants_1.LIMIT_COMPOSERS) {
                _this.indexHover += inc;
            }
        };
        mobx_1.reaction(function () { return _this.activeComposer; }, function (composer) {
            _this.worksFilter = "";
            if (!composer || _this.activeIndex === -1) {
                return;
            }
            _this.activeComposerQuotes = [];
            var URL_COMPOSER_QUOTES = constants_1.URL_WEB_API +
                "ComposerQuotes?idComposer=" +
                composer.IdComposer.toString();
            axios_1.default.get(URL_COMPOSER_QUOTES).then(function (resp) {
                _this.activeComposerQuotes = resp.data;
            });
            _this.activeComposerWorksWebApi = [];
            if (_this.source) {
                _this.source.cancel();
            }
            var CancelToken = axios_1.default.CancelToken;
            _this.source = CancelToken.source();
            var URL_COMPOSER_WORKS = constants_1.URL_WEB_API_DZK + "WorksByComposer?idComposerMN=" + composer.idMN;
            axios_1.default
                .get(URL_COMPOSER_WORKS, { cancelToken: _this.source.token })
                .then(function (resp) {
                _this.activeComposerWorksWebApi = resp.data;
            });
        });
    }
    ComposerStore.prototype.getCognomComposer = function (sortName) {
        var pos = sortName.indexOf(",");
        if (pos <= 0) {
            return "";
        }
        return sortName.substring(0, pos);
    };
    Object.defineProperty(ComposerStore.prototype, "lastNameComposer", {
        get: function () {
            var pos = ts_optchain_1.oc(this.activeComposer)
                .sort_name("")
                .indexOf(",");
            if (pos <= 0) {
                return "";
            }
            return this.activeComposer.sort_name.substring(0, pos);
        },
        enumerable: true,
        configurable: true
    });
    ComposerStore.prototype.getNomDePilaComposer = function (sortName) {
        var pos = sortName.indexOf(",");
        if (pos <= 0) {
            return "";
        }
        return sortName.substring(pos + 1);
    };
    Object.defineProperty(ComposerStore.prototype, "firstNameComposer", {
        get: function () {
            var pos = ts_optchain_1.oc(this.activeComposer)
                .sort_name("")
                .indexOf(",");
            if (pos <= 0) {
                return "";
            }
            return this.activeComposer.sort_name.substring(pos + 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposerStore.prototype, "activeComposerImgUrl", {
        get: function () {
            return ("http://MOISES-PC/PictureHeaderBio/" +
                ts_optchain_1.oc(this.activeComposer).IdComposer(-1) +
                ".jpg");
        },
        enumerable: true,
        configurable: true
    });
    ComposerStore.prototype.getComposerPicture = function (idComposer) {
        return "http://MOISES-PC/PictureHeaderBio/" + idComposer + ".jpg";
    };
    Object.defineProperty(ComposerStore.prototype, "activeComposerInfoNeixDefu", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposerStore.prototype, "composers", {
        get: function () {
            var _this = this;
            return this.composersRaw
                .filter(function (composer) {
                if (!_this.composerNameFilter) {
                    return true;
                }
                return composer.sort_name
                    .toLowerCase()
                    .includes(_this.composerNameFilter.toLowerCase());
            }, this)
                .filter(function (composer) {
                if (!_this.isGroupedByNation || _this.activeGroupIdNacio < 0) {
                    return true;
                }
                var nacio = _this.groupsNacio[_this.activeGroupIdNacio].nameMenu;
                return composer.nacio === nacio;
            }, this)
                .sort(function (a1, a2) {
                if (a1[_this.orderByKey] > a2[_this.orderByKey]) {
                    return _this.orderByDir;
                }
                if (a1[_this.orderByKey] < a2[_this.orderByKey]) {
                    return _this.orderByDir * -1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    ComposerStore.prototype.setNext = function () {
        this.activeIndex++;
    };
    ComposerStore.prototype.setPrevious = function () {
        this.activeIndex--;
    };
    Object.defineProperty(ComposerStore.prototype, "activeComposer", {
        get: function () {
            return this.composers[this.activeIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposerStore.prototype, "isNextable", {
        get: function () {
            return this.activeIndex < this.composers.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    ComposerStore.prototype.goNextComposer = function () {
        this.activeIndex++;
    };
    Object.defineProperty(ComposerStore.prototype, "isPreviousable", {
        get: function () {
            return this.activeIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    ComposerStore.prototype.goPreviousComposer = function () {
        this.activeIndex--;
    };
    ComposerStore.prototype.shuffle = function () {
        var _this = this;
        mobx_1.transaction(function () {
            _this.orderByKey = null;
            _this.composersRaw = ComposerStore.doShuffle(mobx_1.toJS(_this.composers));
        });
    };
    ComposerStore.doShuffle = function (array) {
        var counter = array.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };
    Object.defineProperty(ComposerStore.prototype, "activeComposerWorks", {
        get: function () {
            var _this = this;
            return this.activeComposerWorksWebApi
                .sort(function (a, b) {
                return b.performancesCount - a.performancesCount;
            })
                .filter(function (f) {
                return f.nameWork.toLowerCase().includes(_this.worksFilter.toLowerCase());
            });
        },
        enumerable: true,
        configurable: true
    });
    ComposerStore.prototype.setOrderBy = function (key) {
        if (key === this.orderByKey) {
            this.orderByDir *= -1;
        }
        this.orderByKey = key;
    };
    Object.defineProperty(ComposerStore.prototype, "groupsNacioRaw", {
        get: function () {
            return this.composersRaw.reduce(groupBy(function (t) { return t.nacio; }), Map());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposerStore.prototype, "groupsNacio", {
        get: function () {
            var grups = this.groupsNacioRaw;
            var keys = grups.keys();
            return keys.map(function (k, i) {
                var ret = {
                    idMenu: i,
                    countMenu: grups.get(k).length,
                    nameMenu: k
                };
                return ret;
            });
        },
        enumerable: true,
        configurable: true
    });
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
        mobx_1.action
    ], ComposerStore.prototype, "setNext", null);
    __decorate([
        mobx_1.action
    ], ComposerStore.prototype, "setPrevious", null);
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
        mobx_1.observable
    ], ComposerStore.prototype, "isGroupedByNation", void 0);
    __decorate([
        mobx_1.observable
    ], ComposerStore.prototype, "indexHover", void 0);
    return ComposerStore;
}());
exports.default = ComposerStore;
