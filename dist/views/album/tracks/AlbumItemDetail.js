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
var PlayerBar_new_1 = require("../../../moduls/player/PlayerBar.new");
var semantic_ui_react_2 = require("semantic-ui-react");
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
var TitleBar_1 = require("../../../core/layout/TitleBar");
var ActiveCredits_1 = require("./ActiveCredits");
var MyPaper_1 = require("../../../widgets/MyPaper");
var react_router_1 = require("react-router");
var AlbumTags_1 = require("../toolbar/AlbumTags");
var html_react_parser_1 = require("html-react-parser");
var AlbumTracks_new_1 = require("./AlbumTracks.new");
var HyperText_1 = require("../../../widgets/HyperText/HyperText");
var AlbumItemDetail = (function (_super) {
    __extends(AlbumItemDetail, _super);
    function AlbumItemDetail(props, context) {
        var _this = _super.call(this, props, context) || this;
        props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
        return _this;
    }
    AlbumItemDetail.prototype.render = function () {
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
                    top: 80,
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
                    this.props.albumStore.activeTrack.name))));
        var lastIdMC = "";
        return (React.createElement("div", { style: {
                position: "relative",
                marginTop: 0
            } },
            React.createElement(TitleBar_1.default, { content: headerAlbum }),
            React.createElement("div", { style: { position: "relative", top: 30 } },
                React.createElement("div", { style: { padding: 10 } },
                    React.createElement(AlbumTags_1.default, { items: this.props.albumStore.albumTags })),
                React.createElement(semantic_ui_react_2.Grid, { columns: 16 },
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 7 },
                        !!this.props.albumStore.activeTrackWorkDesc ? (React.createElement("div", { style: {
                                height: "auto",
                                backgroundColor: "transparent",
                                backgroundBlendMode: "overlay",
                                backgroundRepeat: "no-repeat"
                            } },
                            React.createElement("p", { style: {
                                    marginRight: 40,
                                    marginLeft: 0
                                } },
                                React.createElement(HyperText_1.default, { text: React.createElement("div", { style: { marginRight: 0, fontSize: 16 } }, html_react_parser_1.default(this.props.albumStore.activeTrackWorkDesc)), onLink: function (href, e) {
                                        _this.props.composerStore.onHyperLink(href, e);
                                    } })),
                            React.createElement("p", null,
                                React.createElement("i", null,
                                    React.createElement("b", null, this.props.albumStore.activeTrackWorkDescAuthor))))) : (React.createElement(semantic_ui_react_2.Grid, { columns: 16 },
                            React.createElement(semantic_ui_react_2.Grid.Column, { width: 8 },
                                React.createElement(MyPaper_1.default, { elevation: 15, style: {
                                        width: "100%",
                                        height: "auto",
                                        top: -15,
                                        left: -15
                                    } },
                                    React.createElement(semantic_ui_react_1.Image, { fluid: true, label: aStore.activeAlbum.scoreImageCompare, src: aStore.activeAlbum.urlCover }))),
                            React.createElement(semantic_ui_react_2.Grid.Column, { width: 8 },
                                React.createElement(MyPaper_1.default, { elevation: 15, style: {
                                        width: "100%",
                                        height: "auto",
                                        top: -15,
                                        left: -15
                                    } },
                                    React.createElement(semantic_ui_react_1.Image, { fluid: true, label: aStore.activeAlbum.scoreImageCompare, src: aStore.activeAlbum.urlCoverAM }))))),
                        React.createElement("br", null),
                        React.createElement(ActiveCredits_1.default, { credits: this.props.albumStore.activeTrackCredits })),
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 9 },
                        React.createElement(MaxHeightContainer_1.default, { footerHeight: 88, style: { overflowY: "auto", paddingRight: 20 } }, React.createElement(AlbumTracks_new_1.default, null)))),
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
    AlbumItemDetail.defaultProps = {};
    AlbumItemDetail = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], AlbumItemDetail);
    return AlbumItemDetail;
}(React.Component));
exports.default = react_router_1.withRouter(AlbumItemDetail);
