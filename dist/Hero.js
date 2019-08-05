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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var paleta_1 = require("./styles/paleta");
var constants_1 = require("./util/constants");
var composer_name_style_1 = require("./styles/composer_name_style");
require("./widgets/MyText/MyText_Next.css");
var ReactRevealText = require("react-reveal-text");
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { show: false };
        setTimeout(function () { return _this.setState({ show: true }); }, 500);
        return _this;
    }
    Hero.prototype.render = function () {
        var _this = this;
        var lineHeight = "160px";
        return (React.createElement("div", { onClick: function () { return _this.props.history.push(constants_1.ROUTE_HOME_MENU); }, style: {
                width: "100%",
                left: 0,
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: 4
            } },
            React.createElement("div", { className: "banner-state text-center vertical-align banner-mozart" }),
            React.createElement("div", { style: {
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    color: paleta_1.default.color700,
                    opacity: 0.9,
                    fontWeight: 200,
                    margin: 0,
                    padding: 0
                } },
                React.createElement("h1", { style: {
                        fontSize: 80,
                        fontFamily: "MrAlex",
                        position: "relative",
                        top: 80,
                        left: 0,
                        textAlign: "left",
                        color: constants_1.SECOND_ACCENT_COLOR,
                        width: "40%"
                    }, className: "text-uppercase ls-40 pasajero fs-80" },
                    React.createElement("div", { style: __assign({}, composer_name_style_1.default, { fontSize: 170, color: constants_1.SECOND_ACCENT_COLOR, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto" }) },
                        React.createElement("div", { className: "tresd", style: { textAlign: "left" } },
                            React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 1000 }, "THE"))),
                    React.createElement("div", { className: "tresd", style: __assign({}, composer_name_style_1.default, { fontSize: 170, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 0.8 }) },
                        React.createElement("div", { className: "tresd", style: { textAlign: "left" } },
                            React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 1000 }, "CLASSICAL"))),
                    React.createElement("div", { style: __assign({}, composer_name_style_1.default, { fontSize: 170, color: constants_1.SECOND_ACCENT_COLOR, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 0.7 }) },
                        React.createElement("div", { className: "tresd", style: { textAlign: "left" } },
                            React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 1000 }, "EXPERIENCE")),
                        React.createElement("div", { style: __assign({}, composer_name_style_1.default, { width: "100%", fontSize: 22, color: constants_1.SECOND_ACCENT_COLOR, fontFamily: constants_1.ELEGANT_FONT, lineHeight: "40px", fontWeight: 900, height: "auto", marginTop: 150 }) },
                            React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 5000 }, "The Classical music streaming You were waiting for"),
                            React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 5000 }, "And much more...")))))));
    };
    return Hero;
}(React.Component));
exports.default = Hero;
