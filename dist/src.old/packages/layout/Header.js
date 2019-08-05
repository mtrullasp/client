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
var MenuHeader_1 = require("../../widgets/MenuHeader");
var LogoBackButton_1 = require("./LogoBackButton");
var constants_1 = require("../../util/constants");
exports.BACKGROUND_HEADER_COLOR = "#7a7a7a";
exports.HEADER_HEIGHT = 30;
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(props, context) {
        return _super.call(this, props, context) || this;
    }
    Header.prototype.render = function () {
        var _this = this;
        return (React.createElement("header", { className: "l-header l-header_overlay", style: { left: 0, width: "100%", height: exports.HEADER_HEIGHT } },
            React.createElement("div", { className: "" },
                React.createElement("nav", { className: "", role: "navigation", "aria-label": "Primary Navigation", style: { height: exports.HEADER_HEIGHT } },
                    React.createElement(LogoBackButton_1.default, null),
                    React.createElement("div", { className: "col-md-10 col-xs-12 col-lg-10 nav-wrap", style: {
                            height: exports.HEADER_HEIGHT,
                            position: "fixed",
                            top: 4,
                            left: constants_1.MARGIN_HORITZONTAL - 15
                        } },
                        React.createElement(MenuHeader_1.default, null)),
                    " ",
                    React.createElement("span", { style: {
                            color: "black",
                            position: "absolute",
                            top: 30,
                            right: 500,
                            fontSize: 16
                        } }, this.props.appState.eventKey),
                    React.createElement("div", { className: "logo-brand", style: { marginLeft: 0, marginTop: 0, height: exports.HEADER_HEIGHT } },
                        React.createElement("div", { className: "logo-wrap local-scroll" },
                            React.createElement("p", { style: {
                                    color: "black",
                                    fontSize: 14,
                                    position: "fixed",
                                    top: 5,
                                    right: 105
                                } }, "powered by"),
                            React.createElement("a", { href: "https://www.deezer.com" },
                                React.createElement("img", { style: {
                                        height: 20,
                                        position: "fixed",
                                        top: 15,
                                        right: 10
                                    }, className: "header-logo", src: "/assets/img/DZ_Logo_CMYK.png", onClick: function (e) {
                                        _this.props.appState.goBack();
                                    }, alt: "logo" }))))))));
    };
    Header = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], Header);
    return Header;
}(React.Component));
exports.default = Header;
