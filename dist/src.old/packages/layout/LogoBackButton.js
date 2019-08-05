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
var Header_1 = require("./Header");
var LogoBackButton = (function (_super) {
    __extends(LogoBackButton, _super);
    function LogoBackButton(props, context) {
        return _super.call(this, props, context) || this;
    }
    LogoBackButton.prototype.render = function () {
        var _this = this;
        var content;
        if (this.props.appState.canGoBack) {
            content = (React.createElement("div", null,
                React.createElement("i", { className: "material-icons", style: {
                        position: "fixed",
                        top: 0,
                        left: 2,
                        fontSize: 35,
                        cursor: "pointer"
                    }, onClick: function () {
                        _this.props.appState.goBack();
                    } }, "arrow_back"),
                React.createElement("i", { className: "material-icons", style: {
                        position: "fixed",
                        top: 0,
                        left: 35,
                        fontSize: 35,
                        cursor: "pointer"
                    }, onClick: function () {
                        _this.props.appState.goForward();
                    } }, "arrow_forward")));
        }
        else {
            content = (React.createElement("a", { href: "#home" },
                React.createElement("img", { style: { marginTop: -20 }, className: "header-logo", src: "/assets/img/logo/logo@2x.png", onClick: function (e) {
                        _this.props.appState.goBack();
                    }, alt: "logo" })));
        }
        return (React.createElement("div", { className: "logo-brand logo-wrap local-scroll", style: {
                marginLeft: 0,
                marginTop: -20,
                height: Header_1.HEADER_HEIGHT,
                width: 80
            } }, content));
    };
    LogoBackButton = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], LogoBackButton);
    return LogoBackButton;
}(React.Component));
exports.default = LogoBackButton;
