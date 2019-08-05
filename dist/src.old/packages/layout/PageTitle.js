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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var constants_1 = require("../../util/constants");
var DivInline_1 = require("../../widgets/DivInline.");
var paleta_1 = require("../../util/paleta");
var MyIconButton_1 = require("../../widgets/MyIconButton");
var FONT_SIZE_PREV_NEXT = 50;
var PageTitle = (function (_super) {
    __extends(PageTitle, _super);
    function PageTitle(props, context) {
        return _super.call(this, props, context) || this;
    }
    PageTitle.prototype.render = function () {
        var _this = this;
        var movePrev = !!this.props.onMovePrevClick ? (React.createElement(MyIconButton_1.default, { style: {
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                zIndex: 1000,
                color: "black",
                display: "flex"
            }, onClick: function () { return _this.props.onMovePrevClick(); } },
            React.createElement("i", { className: "icon icon-arrow-67 bigPrevButton", style: {
                    alignSelf: "center",
                    fontSize: FONT_SIZE_PREV_NEXT,
                    color: "black"
                } }))) : null;
        var moveNext = !!this.props.onMoveNextClick ? (React.createElement(MyIconButton_1.default, { style: {
                height: "100%",
                width: "100%",
                zIndex: 10000,
                color: "black",
                display: "flex"
            }, onClick: function () { return _this.props.onMoveNextClick(); } },
            React.createElement("i", { className: "icon icon-arrow-68 bigNextButton", style: {
                    alignSelf: "center",
                    fontSize: FONT_SIZE_PREV_NEXT,
                    color: "black"
                } }))) : null;
        var content = !!this.props.children ? (React.createElement("div", null, this.props.children)) : (React.createElement("div", null,
            React.createElement("h1", { className: "text-uppercase", style: {
                    display: "inline-block",
                    fontFamily: constants_1.FONT_FAT,
                    fontSize: 70,
                    fontWeight: 800,
                    marginLeft: constants_1.MARGIN_HORITZONTAL,
                    color: paleta_1.default.color800,
                    position: "relative",
                    top: -15
                } }, this.props.appState.myRouter.activeTitle),
            this.props.appState.composersCount !== null && (React.createElement("span", { style: {
                    display: "inline-block",
                    fontSize: 18,
                    position: "relative",
                    bottom: 10,
                    left: 0,
                    color: paleta_1.default.color700,
                    fontFamily: constants_1.ELEGANT_FONT,
                    fontWeight: 700
                } }, this.props.appState.myRouter.activeCount))));
        var backColor = 255;
        var subHeader = !!this.props.appState.myRouter.activeRouterConfigItem
            .getSubTitle ? (React.createElement("section", { className: "page-title", style: {
                position: "relative",
                height: 36,
                lineHeight: "36px",
                left: 0,
                right: 0,
                top: 0,
                background: constants_1.HEADER_TITLE_BACKGROUND_COLOR,
                margin: 0,
                padding: 0
            } }, this.props.appState.myRouter.activeRouterConfigItem.getSubTitle())) : null;
        return (this.props.appState.isPageTitleVisible && (React.createElement("div", null,
            React.createElement("div", { style: {
                    display: "flex",
                    backgroundColor: constants_1.HEADER_TITLE_BACKGROUND_COLOR,
                    height: 80
                } },
                React.createElement(DivInline_1.default, null, movePrev),
                React.createElement(DivInline_1.default, { style: { width: "100%" } },
                    React.createElement("section", { className: "page-title", style: __assign({}, this.props.style, { position: "relative", top: 0, left: 0, right: 0, height: constants_1.HEADER_TITLE_HEIGHT, color: "black", backgroundColor: constants_1.HEADER_TITLE_BACKGROUND_COLOR }) }, content)),
                React.createElement(DivInline_1.default, null, moveNext)))));
    };
    PageTitle = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], PageTitle);
    return PageTitle;
}(React.Component));
exports.default = PageTitle;
