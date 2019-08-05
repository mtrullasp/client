"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ComposerCollection_1 = require("../../views/composer/collection/ComposerCollection");
var react_router_1 = require("react-router");
var ComposerItem_1 = require("../../views/composer/ComposerItem");
var constants_1 = require("../../util/constants");
var AlbumCollection_1 = require("../../views/album/collection/AlbumCollection");
var AlbumTracksItem_1 = require("../../views/album/tracks/AlbumTracksItem");
var KlassikRank_1 = require("../../views/composerWork/klassikRank/KlassikRank");
var PerformerRolsCollection_1 = require("../../views/performer/collection/PerformerRolsCollection");
var Hero_1 = require("../../views/Hero");
var PerformerCollection_1 = require("../../views/performer/collection/PerformerCollection");
var mobx_react_1 = require("mobx-react");
var PerformerAlbumCollection_1 = require("../../views/album/collection/PerformerAlbumCollection");
var RandomTracks_1 = require("../../moduls/RandomTracks");
var ResultSearch_1 = require("../search/ResultSearch");
var RouterRoot = (function (_super) {
    __extends(RouterRoot, _super);
    function RouterRoot(props, context) {
        var _this = _super.call(this, props, context) || this;
        props.routerStore.setHistory(props.history);
        props.routerStore.setLocation(props.location);
        return _this;
    }
    RouterRoot.prototype.render = function () {
        return (React.createElement(react_router_1.Switch, null,
            React.createElement(react_router_1.Redirect, { from: "/menu", exact: true, to: constants_1.ROUTE_COMPOSERS_COLLECTION, push: true }),
            React.createElement(react_router_1.Route, { path: "/", exact: true, component: Hero_1.default }),
            React.createElement(react_router_1.Route, { path: "/menu", exact: true, component: ComposerCollection_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_COMPOSERS_ITEM, exact: true, component: ComposerItem_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_COMPOSERS_COLLECTION, exact: false, component: ComposerCollection_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_ALBUMS_COLLECTION, exact: true, component: AlbumCollection_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_ALBUM_TRACKS, exact: true, component: AlbumTracksItem_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_WORK_VERSIONS, exact: true, component: KlassikRank_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_PERFORMERSROL_COLLECTION, exact: true, component: PerformerRolsCollection_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_PERFORMER_COLLECTION, exact: true, component: PerformerCollection_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_PERFORMER_ALBUMS, exact: true, component: PerformerAlbumCollection_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_RANDOM_TRACK, exact: true, component: RandomTracks_1.default }),
            React.createElement(react_router_1.Route, { path: constants_1.ROUTE_SEARCH_RESULTS, exact: true, component: ResultSearch_1.default })));
    };
    RouterRoot = __decorate([
        mobx_react_1.inject("routerStore")
    ], RouterRoot);
    return RouterRoot;
}(React.Component));
exports.default = react_router_1.withRouter(RouterRoot);
