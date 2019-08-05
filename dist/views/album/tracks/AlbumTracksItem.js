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
var IconPlaying_1 = require("../../../moduls/player/controls/IconPlaying");
var TitleBar_1 = require("../../../core/layout/TitleBar");
var ActiveCredits_1 = require("./ActiveCredits");
var MyPaper_1 = require("../../../widgets/MyPaper");
var typestyle_1 = require("typestyle");
var paleta_1 = require("../../../styles/paleta");
var react_router_1 = require("react-router");
var AlbumTags_1 = require("../toolbar/AlbumTags");
var html_react_parser_1 = require("html-react-parser");
var AlbumTracksItem = (function (_super) {
    __extends(AlbumTracksItem, _super);
    function AlbumTracksItem(props, context) {
        var _this = this;
        debugger;
        _this = _super.call(this, props, context) || this;
        props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
        return _this;
    }
    AlbumTracksItem.prototype.render = function () {
        var _this = this;
        var aStore = this.props.albumStore;
        if (!this.props.albumStore.activeAlbum) {
            return null;
        }
        var headerAlbum = (React.createElement("div", null,
            React.createElement("div", { style: {
                    position: "fixed",
                    left: 10,
                    maxWidth: "100%",
                    display: "flex",
                    top: 55,
                    verticalAlign: "center"
                } },
                React.createElement(CollectionNav_1.default, { isEnabledNext: aStore.isNextable, isEnabledPrevious: aStore.isPreviousable, onClickNext: function () { return aStore.goNext(); }, onClickPrevious: function () { return aStore.goPrevious(); } })),
            React.createElement("div", { style: {
                    position: "absolute",
                    left: 0,
                    top: 0
                } },
                React.createElement("h1", { style: { display: "inline" } },
                    aStore.responseAlbumsTracks &&
                        aStore.responseAlbumsTracks.AlbumWorks &&
                        aStore.activeAlbum.nameMW,
                    " "),
                React.createElement("span", { style: { display: "inline" } }, this.props.albumStore.activeTrack &&
                    this.props.albumStore.activeTrack.name),
                React.createElement("code", { style: { display: "inline" } },
                    React.createElement("a", { href: "http://www.deezer.com/es/album/" +
                            aStore.activeAlbumMWdeezerLink, target: "_blank" }, "dz"),
                    " ",
                    React.createElement("a", { href: "https://api.deezer.com/album/" + aStore.activeAlbumMWdeezerLink, target: "_blank" }, "dzApi"),
                    " ",
                    React.createElement("a", { href: "sql://SELECT * FROM album WHERE idAlbum = " +
                            aStore.activeAlbum.idAlbum, target: "_blank" }, "SQL"),
                    " ",
                    React.createElement("a", { href: "http://www.allmusic.com/album/" + aStore.activeAlbum.idMW, target: "_blank" }, aStore.activeAlbum.idMW)))));
        return (React.createElement("div", { style: {
                position: "relative",
                marginTop: 0
            } },
            React.createElement(TitleBar_1.default, { content: headerAlbum }),
            React.createElement("div", { style: { position: "relative", top: 30 } },
                React.createElement("div", { style: { padding: 10 } },
                    React.createElement(AlbumTags_1.default, { items: this.props.albumStore.albumTags })),
                React.createElement(semantic_ui_react_2.Grid, { columns: 16 },
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 4 },
                        React.createElement(MyPaper_1.default, { elevation: 5, style: { width: "100%", height: "auto", top: -15, left: -15 } },
                            React.createElement(semantic_ui_react_1.Image, { fluid: true, src: aStore.activeAlbum.urlCover })),
                        React.createElement(ActiveCredits_1.default, null)),
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 12 },
                        React.createElement(MaxHeightContainer_1.default, { footerHeight: 70, style: { overflowY: "auto" } },
                            React.createElement("p", { style: { marginRight: 40, marginLeft: 0 } }, html_react_parser_1.default(this.props.albumStore.activeTrackWorkDesc)),
                            React.createElement("p", null,
                                React.createElement("i", null,
                                    React.createElement("b", null, this.props.albumStore.activeTrackWorkDescAuthor))),
                            React.createElement(semantic_ui_react_1.List, { size: "medium" }, aStore.responseAlbumsTracks &&
                                aStore.responseAlbumsTracks.AlbumWorks.map(function (at, index) {
                                    var tr = at;
                                    var iTr = index;
                                    return (React.createElement(semantic_ui_react_1.List.Content, { style: { marginBottom: 30 } },
                                        React.createElement("p", null,
                                            React.createElement("h3", { style: { margin: 0 } }, at.composerName)),
                                        React.createElement("p", { style: {
                                                marginLeft: 10,
                                                marginTop: -10,
                                                marginBottom: 0
                                            } },
                                            React.createElement("h4", null, at.nameWork)),
                                        React.createElement("p", { style: { marginLeft: 20 } },
                                            React.createElement("p", { className: "item", style: {
                                                    width: "auto",
                                                    cursor: "pointer",
                                                    margin: 0,
                                                    padding: 4,
                                                    fontWeight: _this.props.albumStore.trackIdIsPlaying ===
                                                        at.idTrack_DZ
                                                        ? 900
                                                        : "normal"
                                                } },
                                                React.createElement("div", { style: { paddingBottom: 5 } },
                                                    React.createElement("div", { style: {
                                                            verticalAlign: "bottom",
                                                            display: "flex"
                                                        }, onClick: function () {
                                                            _this.props.albumStore.playTracks(at.idrack_DZ_ord, iTr);
                                                        } },
                                                        React.createElement("div", { style: { opacity: 0.8, width: 30 } }, _this.props.albumStore
                                                            .trackIdIsPlaying === tr.idTrack_DZ ? (React.createElement(IconPlaying_1.default, null)) : (React.createElement(semantic_ui_react_1.Icon, { name: "play", className: typestyle_1.style({
                                                                color: paleta_1.default.color200,
                                                                $nest: {
                                                                    "&:hover": {
                                                                        color: paleta_1.default.color800
                                                                    }
                                                                }
                                                            }) }))),
                                                        React.createElement("div", { style: {
                                                                verticalAlign: "bottom",
                                                                display: "inline-block"
                                                            } },
                                                            tr.idMC,
                                                            " ",
                                                            tr.idMC_ord),
                                                        React.createElement("div", { style: {
                                                                verticalAlign: "bottom",
                                                                display: "inline-block"
                                                            } },
                                                            tr.idMC_ord,
                                                            " ",
                                                            React.createElement(react_router_dom_1.NavLink, { to: "/versions/" +
                                                                    tr.idMC +
                                                                    "/" +
                                                                    tr.idMC_ord }, tr.name),
                                                            " ")))))));
                                }))))),
                React.createElement("div", { style: {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 70,
                        overflow: "hidden",
                        background: "#eee",
                        opacity: 0.9
                    } },
                    React.createElement(PlayerBar_new_1.default, null)))));
    };
    AlbumTracksItem.defaultProps = {};
    AlbumTracksItem = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], AlbumTracksItem);
    return AlbumTracksItem;
}(React.Component));
exports.default = react_router_1.withRouter(AlbumTracksItem);
