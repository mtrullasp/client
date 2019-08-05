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
var core_1 = require("@blueprintjs/core");
var constants_1 = require("../../../util/constants");
var semantic_ui_react_1 = require("semantic-ui-react");
require("../../../widgets/MyText/MyText_Next.css");
var react_scroll_into_view_if_needed_1 = require("react-scroll-into-view-if-needed");
var paleta_1 = require("../../../styles/paleta");
var MyPaper_1 = require("../../../widgets/MyPaper");
var LastNamePersona_1 = require("../../header/LastNamePersona");
var FACTOR_Y = 1.01;
var ComposerCollectionItem = (function (_super) {
    __extends(ComposerCollectionItem, _super);
    function ComposerCollectionItem(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerCollectionItem.prototype.render = function () {
        if (!this.props.composerStore.composers) {
            return null;
        }
        var composer = this.props.composer;
        var index = this.props.index;
        var width = this.props.width;
        var opacity = 0.3;
        if (true || this.props.composerStore.indexHover !== index) {
            return (React.createElement("div", { key: composer.idMN, className: "composer-item no-obackground-collection-items", style: {} },
                React.createElement(react_scroll_into_view_if_needed_1.default, { active: this.props.composerStore.indexHover === index },
                    React.createElement("div", { style: {
                            position: "relative",
                            top: 0,
                            left: 8,
                            bottom: 0,
                            marginBottom: 0,
                            overflow: "hidden",
                            opacity: 1
                        } },
                        React.createElement(core_1.Card, { elevation: 4, interactive: true, style: { padding: 0, margin: 0 } },
                            React.createElement(semantic_ui_react_1.Image, { src: this.props.composerStore.getComposerPicture(composer.IdComposer), alt: composer.name, style: {
                                    height: width * FACTOR_Y,
                                    width: "auto",
                                    opacity: this.props.composerStore.indexHover === index ? 1 : 1
                                } }),
                            React.createElement("div", { style: {
                                    color: "black",
                                    padding: 0,
                                    fontSize: 20,
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    fontWeight: 800
                                } },
                                React.createElement("div", { style: {
                                        maxWidth: "100%",
                                        maxHeight: "100%"
                                    } },
                                    React.createElement(semantic_ui_react_1.Grid.Row, null,
                                        React.createElement("div", { style: {
                                                position: "absolute",
                                                fontWeight: 900,
                                                textAlign: "center",
                                                textTransform: "uppercase",
                                                marginRight: 0,
                                                marginLeft: 0,
                                                fontSize: 22,
                                                left: 0,
                                                right: 0,
                                                bottom: -30,
                                                fontFamily: "Myriad Pro",
                                                opacity: 1,
                                                color: constants_1.ACCENT_COLOR
                                            } },
                                            React.createElement(LastNamePersona_1.LastNamePersona, { lastName: this.props.composerStore.getCognomComposer(composer.sort_name), opacity: this.props.composerStore.indexHover === index
                                                    ? 1
                                                    : 0.7, size: 30 }),
                                            React.createElement("div", { style: {
                                                    position: "relative",
                                                    top: -30,
                                                    fontFamily: constants_1.ELEGANT_FONT,
                                                    fontWeight: 900,
                                                    textTransform: "none",
                                                    color: paleta_1.default.color200,
                                                    fontSize: 16
                                                } }, this.props.composerStore.getNomDePilaComposer(composer.sort_name)))),
                                    React.createElement(semantic_ui_react_1.Grid.Row, null)),
                                React.createElement(semantic_ui_react_1.Grid.Row, null)))))));
        }
        else {
            return (React.createElement(MyPaper_1.default, { elevation: 5 },
                React.createElement(react_scroll_into_view_if_needed_1.default, { active: this.props.composerStore.indexHover === index },
                    React.createElement("div", { style: {
                            position: "relative",
                            top: 25,
                            left: 5,
                            width: "100%",
                            bottom: 0,
                            overflow: "hidden",
                            opacity: 1,
                            margin: 0,
                            padding: 10
                        } },
                        React.createElement(semantic_ui_react_1.Image, { src: this.props.composerStore.getComposerPicture(composer.IdComposer), alt: composer.name, style: {
                                padding: 0,
                                marginTop: 0,
                                height: width * FACTOR_Y,
                                width: "auto",
                                opacity: 1
                            } }),
                        React.createElement("div", { style: {
                                borderRadius: 0,
                                opacity: 1,
                                height: 20,
                                color: "black",
                                padding: 0,
                                fontSize: 20,
                                fontFamily: constants_1.ELEGANT_FONT,
                                fontWeight: 800
                            } },
                            React.createElement("div", { style: {
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    position: "relative",
                                    fontWeight: 800,
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    fontSize: 23,
                                    bottom: 10,
                                    width: "100%",
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    color: constants_1.ACCENT_COLOR
                                } },
                                React.createElement(semantic_ui_react_1.Grid, null,
                                    React.createElement(semantic_ui_react_1.Grid.Row, null,
                                        React.createElement("div", { style: {
                                                position: "absolute",
                                                fontWeight: 900,
                                                textAlign: "center",
                                                textTransform: "uppercase",
                                                marginRight: 0,
                                                marginLeft: 0,
                                                fontSize: 22,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                fontFamily: "Myriad Pro",
                                                color: "black"
                                            } },
                                            React.createElement(LastNamePersona_1.LastNamePersona, { lastName: this.props.composerStore.getCognomComposer(composer.sort_name), opacity: 1, size: 30 }),
                                            React.createElement("div", { style: {
                                                    position: "relative",
                                                    top: 0,
                                                    fontFamily: constants_1.ELEGANT_FONT,
                                                    fontWeight: 900,
                                                    textTransform: "none",
                                                    color: paleta_1.default.color900,
                                                    fontSize: 16
                                                } }, this.props.composerStore.getNomDePilaComposer(composer.sort_name))),
                                        React.createElement("div", null)),
                                    React.createElement(semantic_ui_react_1.Grid.Row, null))),
                            React.createElement(semantic_ui_react_1.Grid.Row, null))))));
        }
    };
    ComposerCollectionItem = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposerCollectionItem);
    return ComposerCollectionItem;
}(React.Component));
exports.default = ComposerCollectionItem;
