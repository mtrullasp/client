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
var semantic_ui_react_1 = require("semantic-ui-react");
var CollectionNav_1 = require("../../../core/routingNav/CollectionNav");
var react_router_dom_1 = require("react-router-dom");
var PlayerBar_new_1 = require("../../../moduls/player/PlayerBar.new");
var semantic_ui_react_2 = require("semantic-ui-react");
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
var Icon = require("react-feather");
var IconPlaying_1 = require("../../../moduls/player/controls/IconPlaying");
var TitleBar_1 = require("../../../core/layout/TitleBar");
var ActiveCredits_1 = require("./ActiveCredits");
var MyPaper_1 = require("../../../widgets/MyPaper");
var AlbumTracksItemOld = (function (_super) {
    __extends(AlbumTracksItemOld, _super);
    function AlbumTracksItemOld(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
        return _this;
    }
    AlbumTracksItemOld.prototype.render = function () {
        var _this = this;
        var headerAlbum = (React.createElement("div", null,
            React.createElement("div", { style: {
                    position: "fixed",
                    left: 10,
                    maxWidth: "100%",
                    display: "flex",
                    top: 60,
                    verticalAlign: "center"
                } },
                React.createElement(CollectionNav_1.default, { isEnabledNext: this.props.albumStore.isNextable, isEnabledPrevious: this.props.albumStore.isPreviousable, onClickNext: function () { return _this.props.albumStore.goNext(); }, onClickPrevious: function () { return _this.props.albumStore.goPrevious(); } }))));
        if (!this.props.albumStore.albumTracks) {
            return this.props.albumStore.activeAlbum.idMW;
        }
        return (React.createElement("div", { style: {
                position: "relative",
                marginTop: 0
            } },
            React.createElement(TitleBar_1.default, { content: headerAlbum }),
            React.createElement("div", { style: { position: "relative", top: 50 } },
                React.createElement(semantic_ui_react_2.Grid, { columns: 16 },
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 4 },
                        React.createElement(MyPaper_1.default, { elevation: 5, style: { width: "100%", height: "auto", top: -15, left: -15 } },
                            React.createElement(semantic_ui_react_1.Image, { fluid: true, src: this.props.albumStore.activeAlbum.urlCover })),
                        React.createElement(ActiveCredits_1.default, null)),
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 12 },
                        React.createElement(MaxHeightContainer_1.default, { footerHeight: 70, style: { overflowY: "auto" } },
                            React.createElement(semantic_ui_react_1.List, { size: "medium" }, this.props.albumStore.albumTracks &&
                                this.props.albumStore.albumTracks.map(function (at, index) {
                                    return (React.createElement(semantic_ui_react_1.List.Content, null,
                                        React.createElement("p", { style: {
                                                width: "auto",
                                                cursor: "pointer",
                                                fontWeight: _this.props.albumStore.trackIdIsPlaying ===
                                                    at.idDeezerTrack
                                                    ? 900
                                                    : "normal"
                                            } },
                                            React.createElement("h3", { style: { margin: 0 } }, at.nameMQ),
                                            React.createElement("div", { style: { paddingBottom: 5 }, onClick: function () {
                                                    return _this.props.albumStore.playTracks(index);
                                                } },
                                                React.createElement("div", { style: {
                                                        verticalAlign: "bottom",
                                                        display: "flex"
                                                    } },
                                                    React.createElement("div", { style: { opacity: 0.8, width: 30 } }, _this.props.albumStore.trackIdIsPlaying ===
                                                        at.idDeezerTrack ? (React.createElement(IconPlaying_1.default, null)) : (React.createElement(Icon.Play, null))),
                                                    React.createElement("div", { style: {
                                                            verticalAlign: "bottom",
                                                            display: "inline-block"
                                                        } },
                                                        at.idMC,
                                                        " ",
                                                        at.idMCord),
                                                    React.createElement("div", { style: {
                                                            verticalAlign: "bottom",
                                                            display: "inline-block"
                                                        } },
                                                        at.composer,
                                                        ".",
                                                        at.idMCord,
                                                        " ",
                                                        React.createElement(react_router_dom_1.NavLink, { to: "/versions/" +
                                                                at.idMC +
                                                                "/" +
                                                                at.idMCord }, at.itemName),
                                                        " "))))));
                                }))))),
                React.createElement("div", { style: {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 60,
                        overflow: "hidden"
                    } },
                    React.createElement(PlayerBar_new_1.default, null)))));
    };
    AlbumTracksItemOld.defaultProps = {};
    AlbumTracksItemOld = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], AlbumTracksItemOld);
    return AlbumTracksItemOld;
}(React.Component));
exports.default = AlbumTracksItemOld;
