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
var styles_1 = require("@material-ui/core/styles");
var GridList_1 = require("@material-ui/core/GridList");
var GridListTile_1 = require("@material-ui/core/GridListTile");
var GridListTileBar_1 = require("@material-ui/core/GridListTileBar");
var ListSubheader_1 = require("@material-ui/core/ListSubheader");
var IconButton_1 = require("@material-ui/core/IconButton");
var Info_1 = require("@material-ui/icons/Info");
var constants_1 = require("../../../../util/constants");
var styles = function (theme) { return ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        position: "absolute",
        left: constants_1.MARGIN_HORITZONTAL,
        right: constants_1.MARGIN_HORITZONTAL,
        top: 20,
        bottom: 20
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
}); };
var TitlebarGridList = (function (_super) {
    __extends(TitlebarGridList, _super);
    function TitlebarGridList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showCoverDeezer: false
        };
        return _this;
    }
    TitlebarGridList.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.root, style: { overflowY: "auto" } },
            React.createElement(GridList_1.default, { cellHeight: 300, cols: 5, style: {
                    marginLeft: constants_1.MARGIN_HORITZONTAL,
                    marginRight: constants_1.MARGIN_HORITZONTAL
                } },
                React.createElement(GridListTile_1.default, { key: "Subheader", style: { height: "auto" } },
                    React.createElement(ListSubheader_1.default, { component: "div" },
                        "Work: ",
                        this.props.appState.worksStore.activeWork.Name)),
                !!this.props.appState.worksStore.activeWorkAlbumsList &&
                    this.props.appState.worksStore.activeWorkAlbumsList.map(function (tile) { return (React.createElement(GridListTile_1.default, { style: { cursor: "pointer" }, key: tile.urlCover, onClick: function (e) {
                            _this.setState({
                                showCoverDeezer: !_this.state.showCoverDeezer
                            });
                        } },
                        React.createElement("img", { src: _this.state.showCoverDeezer ? tile.cover_big : tile.urlCover, alt: tile.title }),
                        React.createElement(GridListTileBar_1.default, { title: tile.title, subtitle: React.createElement("span", null,
                                "by: ",
                                tile.labelCat), actionIcon: React.createElement("a", { href: tile.urlSource, target: "_blank" },
                                React.createElement(IconButton_1.default, { className: classes.icon },
                                    React.createElement(Info_1.default, null))) }))); }))));
    };
    TitlebarGridList = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], TitlebarGridList);
    return TitlebarGridList;
}(React.Component));
exports.default = styles_1.withStyles(styles)(TitlebarGridList);
