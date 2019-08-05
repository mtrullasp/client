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
var Interfaces_1 = require("../stores/Interfaces");
var TMyRouterItem = (function () {
    function TMyRouterItem() {
    }
    return TMyRouterItem;
}());
exports.TMyRouterItem = TMyRouterItem;
var fnNull = function () {
    return null;
};
var MyRouter = (function () {
    function MyRouter(appState) {
        var _this = this;
        this.myRouterConfig = [
            {
                id: "composers",
                menuTitle: "Composers",
                title: "Composers",
                routePath: constants_1.ROUTE_COMPOSERS,
                count: function () {
                    return _this.appState.composersCount;
                }
            },
            {
                id: "performers",
                menuTitle: "Performers",
                title: "Performers by Instrument",
                routePath: constants_1.ROUTE_PERFORMERS,
                count: function () {
                    return _this.appState.performersByInstrumentCount;
                },
                tagType: "performers"
            },
            {
                id: "performersInstrument",
                title: "Performers by Instrument",
                routePath: constants_1.ROUTE_PERFORMERS_INSTRUMENT,
                count: function () {
                    return _this.appState.performersByInstrumentCount;
                },
                tagType: "performers"
            },
            {
                id: "conductors",
                menuTitle: "Conductors",
                title: "Conductors",
                routePath: constants_1.ROUTE_CONDUCTORS,
                tagType: "conductors",
                count: function () {
                    return _this.appState.performersCount;
                },
                includeTags: ["conductor"]
            },
            {
                id: "ensembles",
                menuTitle: "Ensembles",
                title: "Ensembles by Type",
                routePath: constants_1.ROUTE_ENSEMBLES,
                count: function () {
                    return _this.appState.performersCount;
                },
                tagType: "ensembles"
            },
            {
                id: "instruments",
                count: fnNull,
                menuTitle: "Instruments",
                title: "Instruments",
                routePath: constants_1.ROUTE_BLIND_TEST
            },
            {
                id: "albums",
                menuTitle: "Albums",
                title: "Albums",
                routePath: constants_1.ROUTE_ALBUMS,
                count: function () {
                    return _this.appState.albumsCount;
                },
                masonryConfig: { numColumns: 5 },
                actions: [
                    {
                        type: Interfaces_1.ETypeAction.search,
                        id: "name",
                        desc: "Search by Name",
                        span: 3,
                        onExec: function (name) {
                            _this.appState.albums.searchByName(name);
                        }
                    },
                    {
                        type: Interfaces_1.ETypeAction.order,
                        id: "prestige",
                        desc: "Order by Rating",
                        onExec: function (id) {
                            _this.appState.albums.toogleOrderByField(id);
                        }
                    },
                    {
                        type: Interfaces_1.ETypeAction.order,
                        id: "duration",
                        desc: "Order by Duration",
                        onExec: function (id) {
                            _this.appState.albums.toogleOrderByField(id);
                        }
                    },
                    {
                        type: Interfaces_1.ETypeAction.order,
                        id: "release_date",
                        desc: "Group by Release Year",
                        groupBy: function (value) {
                            return Number(value.release_date.substr(0, 4));
                        },
                        onExec: function (id) {
                            _this.appState.albums.toogleGroupByField(id);
                        }
                    },
                    {
                        type: Interfaces_1.ETypeAction.order,
                        id: "groupByComposer",
                        desc: "Group by Composer",
                        onExec: function (id) {
                            _this.appState.albums.toogleGroupByField("nomComposer");
                        }
                    },
                    {
                        type: Interfaces_1.ETypeAction.order,
                        id: "groupByLabel",
                        desc: "Group by Label",
                        onExec: function (id) {
                            _this.appState.albums.toogleGroupByField("label");
                        }
                    },
                    {
                        type: Interfaces_1.ETypeAction.shuffle,
                        id: "shuffle",
                        desc: "Shuffle",
                        onExec: function (id) {
                            _this.appState.albums.shuffle();
                        }
                    }
                ]
            },
            {
                id: "fav",
                count: function () {
                    return null;
                },
                menuTitle: "Fav",
                title: "Fav",
                routePath: constants_1.ROUTE_FAVS
            },
            {
                id: "playlists",
                count: function () {
                    return _this.appState.playlistsCount;
                },
                menuTitle: "PlayLists",
                title: "PlayLists",
                routePath: constants_1.ROUTE_PLAYLISTS
            },
            {
                id: "klassikRank",
                count: function () {
                    if (!_this.appState.activeKlassikRanks) {
                        return 0;
                    }
                    return _this.appState.activeKlassikRanks.length;
                },
                menuTitle: "KlassikRanks™",
                title: "KlassikRank",
                routePath: constants_1.ROUTE_KLASSIC_RANK
            },
            {
                id: "stories",
                count: function () {
                    return 0;
                },
                menuTitle: "Stories",
                title: "Stories",
                routePath: constants_1.ROUTE_PLAYLISTS
            },
            {
                id: "search",
                count: fnNull,
                menuTitle: "Search",
                title: "Search",
                routePath: constants_1.ROUTE_SEARCH
            },
            {
                id: "Radio",
                count: fnNull,
                menuTitle: "Radio",
                title: "Radio",
                routePath: constants_1.ROUTE_RADIO,
                backgroundImage: "../assets/img/retroRadio.jpg"
            },
            {
                id: "quiz",
                count: fnNull,
                menuTitle: "Quiz",
                title: "Quiz",
                routePath: constants_1.ROUTE_BLIND_TEST
            }
        ];
        this.appState = appState;
    }
    Object.defineProperty(MyRouter.prototype, "filterByKindArtist", {
        get: function () {
            if (this.tabActiveId === "composers") {
                return "Filter by Composer";
            }
            else if (this.tabActiveId === "performers") {
                return "Filter by IDeezerArtist";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyRouter.prototype, "myRouterMenuConfig", {
        get: function () {
            return this.myRouterConfig.filter(function (r) { return !!r.menuTitle; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyRouter.prototype, "activeRouterConfigItem", {
        get: function () {
            var _this = this;
            return this.myRouterConfig.find(function (r) { return r.id === _this.tabActiveId; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyRouter.prototype, "activeIncludeTags", {
        get: function () {
            var item = this.activeRouterConfigItem;
            return !!item ? item.includeTags || [] : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyRouter.prototype, "activeExcludeTags", {
        get: function () {
            var item = this.activeRouterConfigItem;
            return !!item ? item.excludeTags || [] : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyRouter.prototype, "activeTitle", {
        get: function () {
            if (!this.activeRouterConfigItem) {
                return "";
            }
            return this.activeRouterConfigItem.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyRouter.prototype, "activeCount", {
        get: function () {
            if (!this.activeRouterConfigItem) {
                return 0;
            }
            return this.activeRouterConfigItem.count();
        },
        enumerable: true,
        configurable: true
    });
    MyRouter.prototype.setTabId = function (id) {
        this.tabActiveId = id;
        this.appState.go(this.activeRouterConfigItem.routePath);
    };
    __decorate([
        mobx_1.observable
    ], MyRouter.prototype, "tabActiveId", void 0);
    __decorate([
        mobx_1.action
    ], MyRouter.prototype, "set", void 0);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "filterByKindArtist", null);
    __decorate([
        mobx_1.observable
    ], MyRouter.prototype, "myRouterConfig", void 0);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "myRouterMenuConfig", null);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "activeRouterConfigItem", null);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "activeIncludeTags", null);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "activeExcludeTags", null);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "activeTitle", null);
    __decorate([
        mobx_1.computed
    ], MyRouter.prototype, "activeCount", null);
    __decorate([
        mobx_1.action
    ], MyRouter.prototype, "setTabId", null);
    return MyRouter;
}());
exports.MyRouter = MyRouter;
