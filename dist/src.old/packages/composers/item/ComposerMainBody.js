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
var typestyle_1 = require("typestyle");
var constants_1 = require("../../../util/constants");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
var ListComposerSocial_1 = require("../collection/ListComposerSocial");
var ListTopWorks_1 = require("../collection/ListTopWorks");
var mobx_react_1 = require("mobx-react");
var MyTimeLine_1 = require("../../../widgets/MyTimeLine");
var react_router_1 = require("react-router");
var ComposerItemInfo_1 = require("./ComposerItemInfo");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var paleta_1 = require("../../../util/paleta");
var ActionButton_1 = require("../../core/elements/ActionButton");
var MARGIN_LEFT = 60;
var ComposerMainBody = (function (_super) {
    __extends(ComposerMainBody, _super);
    function ComposerMainBody(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleSocialSelect = function (idComposer) {
            _this.props.appState.setActiveComposer(idComposer);
        };
        return _this;
    }
    ComposerMainBody.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: {
                backgroundColor: paleta_1.default.color200,
                color: constants_1.PSEUDO_BLACK
            } },
            React.createElement(react_flexbox_grid_1.Grid, { fluid: true, className: typestyle_1.style({
                    position: "absolute",
                    top: 0,
                    left: MARGIN_LEFT,
                    right: MARGIN_LEFT,
                    marginBottom: 0
                }) },
                React.createElement(react_flexbox_grid_1.Row, null,
                    React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                        React.createElement("div", { className: "pageContint artistDetall" },
                            React.createElement("div", { className: "artistDetail", style: {
                                    width: "100%",
                                    height: "100%",
                                    overflowY: "hidden"
                                } },
                                React.createElement("div", { style: {
                                        color: constants_1.PSEUDO_BLACK,
                                        fontFamily: constants_1.INFO_FONT,
                                        fontSize: 30,
                                        fontWeight: 100
                                    } },
                                    React.createElement(react_flexbox_grid_1.Row, null,
                                        React.createElement(react_flexbox_grid_1.Col, { lg: 4 },
                                            React.createElement(MaxHeightContainer_1.default, null,
                                                React.createElement(react_custom_scrollbars_1.default, { autoHide: true, style: { width: "100%" } },
                                                    React.createElement(ComposerItemInfo_1.default, { caption: "Biographical Timeline" },
                                                        React.createElement(MyTimeLine_1.default, { onClick: function (item) {
                                                                _this.props.appState.setActiveComposer(item.IdComposer);
                                                            }, className: "", items: this.props.appState.activeComposerTimeLine }))))),
                                        React.createElement(react_flexbox_grid_1.Col, { lg: 4 },
                                            React.createElement(ComposerItemInfo_1.default, { caption: "Top works", onMaximize: function () {
                                                    _this.props.appState.worksStore.isComposerWorksVisible = true;
                                                } },
                                                React.createElement(ListTopWorks_1.default, { topTracks: this.props.appState.composerTopTracks, trackPlaying: this.props.appState.topTrackIsPlaying, color: this.props.appState.activeComposerColor, onSelect: function (track) {
                                                        _this.props.appState.toggleTrack(track.id);
                                                    } }),
                                                React.createElement(ActionButton_1.default, { onClick: function () { }, style: { width: "50%" } },
                                                    React.createElement("span", null, "Show all Works")))),
                                        React.createElement(react_flexbox_grid_1.Col, { lg: 4 },
                                            React.createElement(react_flexbox_grid_1.Row, null,
                                                React.createElement(react_flexbox_grid_1.Col, { lg: 6 },
                                                    React.createElement(ComposerItemInfo_1.default, { caption: "Following" },
                                                        React.createElement(ListComposerSocial_1.default, { color: this.props.appState.activeComposerColor, onSelect: this.handleSocialSelect, composers: this.props.appState.activeComposerFollowing }))),
                                                React.createElement(react_flexbox_grid_1.Col, { lg: 6 },
                                                    React.createElement(ComposerItemInfo_1.default, { caption: "Followers" },
                                                        React.createElement(ListComposerSocial_1.default, { color: this.props.appState.activeComposerColor, onSelect: this.handleSocialSelect, composers: this.props.appState.activeComposerFollowers }))))))))))))));
    };
    ComposerMainBody = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], ComposerMainBody);
    return ComposerMainBody;
}(React.Component));
exports.default = react_router_1.withRouter(ComposerMainBody);
