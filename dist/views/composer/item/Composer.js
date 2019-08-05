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
var react_router_1 = require("react-router");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var tf = require("react-textfit");
var Textfit = tf.Textfit;
var constants_1 = require("../../../util/constants");
var ComposerMainBody_1 = require("./ComposerMainBody");
var core_1 = require("@material-ui/core");
var react_swipeable_views_1 = require("react-swipeable-views");
var WorksComposer_1 = require("../subs/works/WorksComposer");
var react_router_dom_1 = require("react-router-dom");
var DivInline_1 = require("../../../widgets/DivInline.");
var PageSubTitle_1 = require("../../../core/layout/PageSubTitle");
var QuotesCarousel_1 = require("../QuotesCarousel");
var paleta_1 = require("../../../styles/paleta");
var POSITION_NEXT_PREV = 50;
var FONT_SIZE_PREV_NEXT = 50;
var Composer = (function (_super) {
    __extends(Composer, _super);
    function Composer(props, context) {
        var _this = _super.call(this, props, context) || this;
        var composerId = parseFloat(_this.props.match.params["composerId"]);
        props.appState.setActiveComposer(composerId);
        return _this;
    }
    Composer.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.activeComposer) {
            return null;
        }
        var LEFT_MARGIN = this.props.appState.infoComposerLeftMargin;
        return (React.createElement("div", { className: "imatge-bio" },
            React.createElement("img", { src: this.props.appState.activeComposerPictureHeaderBioURL, style: {
                    pointerEvents: "none",
                    position: "fixed",
                    height: "120%",
                    opacity: 0.12,
                    top: 80,
                    right: -150
                }, className: "vignette" }),
            React.createElement("div", null,
                React.createElement(core_1.Divider, null),
                React.createElement(react_router_dom_1.NavLink, { onMovePrevClick: function () { return _this.props.appState.moveToPrevComposer(); }, onMoveNextClick: function () { return _this.props.appState.moveToNextComposer(); } },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement(react_flexbox_grid_1.Row, null,
                                React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                                    React.createElement(DivInline_1.default, null,
                                        React.createElement("span", { onClick: function () {
                                                _this.props.appState.worksStore.toggleComposerWorksVisible();
                                            }, style: {
                                                height: 80,
                                                left: 30,
                                                fontFamily: constants_1.FONT_FAT,
                                                fontSize: 75,
                                                fontWeight: 900,
                                                position: "relative",
                                                top: 0,
                                                margin: 0,
                                                marginLeft: 0,
                                                color: "black",
                                                lineHeight: "80px",
                                                display: "inline-block",
                                                textTransform: "uppercase"
                                            } }, this.props.appState.activeComposerNomCognom),
                                        React.createElement("span", { onClick: function () {
                                                _this.props.appState.worksStore.toggleComposerWorksVisible();
                                            }, style: {
                                                position: "relative",
                                                top: 0,
                                                left: 30,
                                                fontFamily: constants_1.FONT_SLIM,
                                                fontSize: 66,
                                                fontWeight: 100,
                                                fontStyle: "normal",
                                                margin: 0,
                                                color: "black",
                                                lineHeight: "60px",
                                                display: "inline-block",
                                                textTransform: "uppercase"
                                            } }, this.props.appState.activeComposerNomNom)),
                                    React.createElement(DivInline_1.default, null,
                                        React.createElement("p", { style: {
                                                marginTop: 0,
                                                marginLeft: 40,
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: constants_1.PSEUDO_BLACK
                                            } }, this.props.appState.activeComposerInfoNeixDefu))))))),
                React.createElement(PageSubTitle_1.default, null,
                    React.createElement("h1", { style: {
                            marginLeft: 0,
                            marginRight: 0,
                            background: "#fcfcfc"
                        } },
                        React.createElement(core_1.Divider, null),
                        React.createElement("div", { style: {
                                fontFamily: constants_1.ELEGANT_FONT,
                                margin: 0,
                                padding: 5,
                                marginTop: 0,
                                marginLeft: 200 + constants_1.MARGIN_HORITZONTAL,
                                marginRight: 100,
                                height: "25%",
                                color: paleta_1.default.color900,
                                fontWeight: 400
                            } },
                            React.createElement(QuotesCarousel_1.default, null)),
                        React.createElement(core_1.Divider, null))),
                React.createElement(core_1.Avatar, { src: this.props.appState.activeComposer.PictureMediumURL, style: {
                        position: "absolute",
                        top: 90,
                        left: 100,
                        width: 130,
                        height: 130,
                        filter: "grayscale(100%)"
                    } }),
                React.createElement("div", { style: {
                        position: "relative",
                        top: -30,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: "whitesmoke"
                    } },
                    React.createElement("div", { style: { position: "relative", top: 0, left: 20 } },
                        React.createElement(TabUnderlineStroke, { fontSize: 14, style: { textTransform: "none" }, items: this.props.appState.composerTabs, selectedItemId: this.props.appState.composerTabSelectedId }),
                        React.createElement(core_1.Divider, null),
                        React.createElement(react_swipeable_views_1.default, { index: this.props.appState.composerTabSelectedIndex },
                            React.createElement("div", null,
                                React.createElement(MaxHeightContainer, null,
                                    React.createElement("div", { style: { position: "relative", top: 0 } },
                                        React.createElement(ComposerMainBody_1.default, null)))),
                            React.createElement("div", null,
                                React.createElement("span", null, "timeline")),
                            React.createElement("div", null,
                                React.createElement(WorksComposer_1.default, null))))))));
    };
    Composer = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], Composer);
    return Composer;
}(React.Component));
exports.default = react_router_1.withRouter(Composer);
