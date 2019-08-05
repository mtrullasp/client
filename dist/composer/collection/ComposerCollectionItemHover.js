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
var react_flexbox_grid_1 = require("react-flexbox-grid");
var mobx_react_1 = require("mobx-react");
var constants_1 = require("../../util/constants");
var semantic_ui_react_1 = require("semantic-ui-react");
require("@material/elevation/dist/mdc.elevation.min.css");
var react_scroll_into_view_if_needed_1 = require("react-scroll-into-view-if-needed");
var FACTOR_Y = 1.2;
var ComposerCollectionItemHover = (function (_super) {
    __extends(ComposerCollectionItemHover, _super);
    function ComposerCollectionItemHover(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerCollectionItemHover.prototype.render = function () {
        if (!this.props.composerStore.composers) {
            return null;
        }
        return React.createElement("p", null, "COMPONENT ITEM HOVE");
        var composer = this.props.composer;
        var index = this.props.index;
        var width = this.props.width;
        var opacity = 1;
        return (React.createElement("div", { key: composer.idMN, style: { margin: 0 } },
            React.createElement(react_scroll_into_view_if_needed_1.default, { active: true },
                React.createElement("div", { style: {
                        position: "relative",
                        top: 10,
                        bottom: -10,
                        opacity: 1
                    }, className: "mdc-elevation--z5" },
                    React.createElement(semantic_ui_react_1.Image, { src: this.props.composerStore.getComposerPicture(composer.IdComposer), alt: composer.name, style: {
                            height: width * FACTOR_Y * 1.1,
                            width: "auto",
                            opacity: 1
                        } }),
                    React.createElement("footer", { style: {
                            backgroundColor: "rgba(250, 250, 250, 0.3)",
                            color: "black",
                            padding: 5,
                            fontSize: 20,
                            fontFamily: constants_1.ELEGANT_FONT,
                            fontWeight: 800
                        } },
                        React.createElement("div", { style: {
                                backgroundColor: "lightgray",
                                maxWidth: "100%",
                                maxHeight: "100%"
                            } },
                            React.createElement(react_flexbox_grid_1.Row, null,
                                React.createElement("div", { style: {
                                        opacity: 0.7,
                                        height: 20,
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        margin: 5,
                                        bottom: 10,
                                        textTransform: this.props.composerStore.indexHover === index
                                            ? "uppercase"
                                            : "none",
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        fontWeight: 600,
                                        color: this.props.composerStore.indexHover === index
                                            ? constants_1.SECOND_ACCENT_COLOR
                                            : "inherited",
                                        fontSize: 20,
                                        textAlign: "center"
                                    } }, this.props.composerStore.getNomDePilaComposer(composer.sort_name))),
                            React.createElement(react_flexbox_grid_1.Row, null,
                                React.createElement("div", { style: {
                                        position: "absolute",
                                        fontWeight: 800,
                                        textAlign: "center",
                                        textTransform: "uppercase",
                                        marginRight: 0,
                                        marginLeft: 0,
                                        fontSize: 55,
                                        left: 10,
                                        right: 10,
                                        bottom: 35,
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        color: constants_1.ACCENT_COLOR
                                    } }, this.props.composerStore.getCognomComposer(composer.sort_name)))),
                        React.createElement(react_flexbox_grid_1.Row, null),
                        React.createElement("div", { style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 15,
                                fontFamily: constants_1.ELEGANT_FONT,
                                fontSize: 14,
                                fontWeight: 800,
                                textAlign: "center",
                                margin: 0
                            } },
                            composer.begin_date_year,
                            " ",
                            composer.end_date_year))))));
    };
    ComposerCollectionItemHover = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposerCollectionItemHover);
    return ComposerCollectionItemHover;
}(React.Component));
exports.default = ComposerCollectionItemHover;
