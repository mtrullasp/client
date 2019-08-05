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
var mobx_react_1 = require("mobx-react");
var PageObject_1 = require("../../core/elements/PageObject");
var constants_1 = require("../../../util/constants");
var ActionBar_1 = require("../../core/elements/ActionBar");
var GroupedAlbumsList_1 = require("./GroupedAlbumsList");
var react_router_1 = require("react-router");
var AlbumsGridList_1 = require("./AlbumsGridList");
var Albums = (function (_super) {
    __extends(Albums, _super);
    function Albums(props, context) {
        var _this = _super.call(this, props, context) || this;
        debugger;
        if (!!_this.props.match.params.text) {
        }
        return _this;
    }
    Albums.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.myRouter.activeRouterConfigItem) {
            return null;
        }
        var actionBar = (React.createElement("div", { style: {
                height: 30,
                marginBottom: 10,
                marginTop: 5,
                marginLeft: 0,
                marginRight: constants_1.MARGIN_HORITZONTAL
            } },
            React.createElement(ActionBar_1.default, { actions: this.props.appState.myRouter.activeRouterConfigItem.actions })));
        var configItem = this.props.appState.myRouter.myRouterConfig.find(function (t) { return t.id === "albums"; });
        var onAlbumClick = function (p) {
            _this.props.appState.setActiveAlbum(p.idAlbum);
            _this.props.appState.go(constants_1.ROUTE_TRACKLIST);
        };
        var content = !!this.props.appState.albums.groupByField ? (React.createElement(GroupedAlbumsList_1.default, { onClick: onAlbumClick })) : (React.createElement(AlbumsGridList_1.default, { items: this.props.appState.albums.albums, onClick: onAlbumClick }));
        return (React.createElement(PageObject_1.default, { actionBar: actionBar, content: content, configItem: configItem, fontSize: 16 }));
    };
    Albums.defaultProps = {};
    Albums = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], Albums);
    return Albums;
}(React.Component));
exports.default = react_router_1.withRouter(Albums);
