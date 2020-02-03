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
var constants_1 = require("../../../util/constants");
var semantic_ui_react_1 = require("semantic-ui-react");
require("../../../widgets/MyText/MyText_Next.css");
var react_scroll_into_view_if_needed_1 = require("react-scroll-into-view-if-needed");
var MyPaper_1 = require("../../../widgets/MyPaper");
var LastNamePersona_1 = require("../../header/LastNamePersona");
var FACTOR_Y = 1.01;
var CARD_HEIGHT = 300;
var ComposerCollectionItem = (function (_super) {
    __extends(ComposerCollectionItem, _super);
    function ComposerCollectionItem(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerCollectionItem.prototype.render = function () {
        var _this = this;
        if (!this.props.composerStore.composers) {
            return null;
        }
        var composer = this.props.composer;
        var index = this.props.index;
        var width = this.props.width;
        var itemSegment = function (opacity) {
            var _a, _b;
            return (React.createElement("div", { key: composer.idMN, className: "composer-item no-obackground-collection-items", style: { borderRadius: 50 }, onClick: function () {
                    _this.props.onClick(composer);
                } },
                React.createElement(react_scroll_into_view_if_needed_1.default, { active: _this.props.composerStore.indexHover === index },
                    React.createElement("div", { style: {
                            padding: 0,
                            margin: 0,
                            borderColor: "#fcfcfc",
                            borderRadius: 30
                        } },
                        React.createElement("div", { style: {} },
                            React.createElement("img", { className: "composer-image", src: _this.props.composerStore.getComposerPicture(composer.IdComposer), alt: composer.name, style: {
                                    height: width * FACTOR_Y,
                                    width: "auto",
                                    opacity: opacity
                                } })),
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
                                            fontWeight: 500,
                                            textAlign: "center",
                                            textTransform: "uppercase",
                                            marginRight: 0,
                                            marginLeft: 0,
                                            fontSize: 20,
                                            left: 0,
                                            right: 0,
                                            bottom: -55,
                                            fontFamily: "Myriad Pro",
                                            opacity: 1,
                                            color: constants_1.ACCENT_COLOR
                                        } },
                                        React.createElement(LastNamePersona_1.LastNamePersona, { lastName: _this.props.composerStore.getCognomComposer(composer.sort_name), opacity: _this.props.composerStore.indexHover === index ? 1 : 1, size: 25, fontWeight: 800 }),
                                        React.createElement("div", { style: {
                                                position: "relative",
                                                top: -60,
                                                fontFamily: constants_1.ELEGANT_FONT,
                                                fontWeight: 900,
                                                textTransform: "none",
                                                fontSize: 16
                                            } },
                                            _this.props.composerStore.getNomDePilaComposer(composer.sort_name),
                                            React.createElement("br", null),
                                            React.createElement("span", { style: { marginTop: -10, fontSize: 13 } }, (_a = composer) === null || _a === void 0 ? void 0 :
                                                _a.AnyoNeix,
                                                " -",
                                                " ", (_b = composer) === null || _b === void 0 ? void 0 :
                                                _b.AnyoDefu,
                                                " \u2670")))),
                                React.createElement(semantic_ui_react_1.Grid.Row, null)),
                            React.createElement(semantic_ui_react_1.Grid.Row, null))))));
        };
        if (this.props.composerStore.indexHover !== index) {
            return itemSegment(0.3);
        }
        else {
            return (React.createElement(MyPaper_1.default, { elevation: 20, style: { opacity: 1, padding: 0, borderRadius: 30 } }, itemSegment(1)));
        }
    };
    ComposerCollectionItem = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposerCollectionItem);
    return ComposerCollectionItem;
}(React.Component));
exports.default = ComposerCollectionItem;
