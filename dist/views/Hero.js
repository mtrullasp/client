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
var paleta_1 = require("../styles/paleta");
var constants_1 = require("../util/constants");
var composer_name_style_1 = require("../styles/composer_name_style");
require("../widgets/MyText/MyText_Next.css");
var ReactRevealText = require("react-reveal-text");
var semantic_ui_react_1 = require("semantic-ui-react");
var FONT_BIG_SIZE = 120;
var logos = (React.createElement("div", { style: {
        display: "flex",
        padding: 10,
        margin: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: 800
    } },
    React.createElement(semantic_ui_react_1.Image, { size: "tiny", fluid: true, src: require("../assets/img/logos/Harmonia_Mundi_logo.png") }),
    React.createElement(semantic_ui_react_1.Image, { size: "tiny", src: require("../assets/img/logos/Alpha.png") }),
    React.createElement(semantic_ui_react_1.Image, { size: "tiny", src: require("../assets/img/logos/logo_analekta_noir.png") }),
    React.createElement(semantic_ui_react_1.Image, { size: "tiny", src: require("../assets/img/logos/Naïve_logo.png") }),
    React.createElement(semantic_ui_react_1.Image, { size: "tiny", src: require("../assets/img/logos/Genuin.png") })));
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
        var lineHeight = "10px";
        return (React.createElement("div", { style: { position: "fixed", top: 0 } },
            React.createElement("div", { onClick: function () { return _this.props.history.push(constants_1.ROUTE_HOME_MENU); }, style: {
                    width: "100%",
                    left: 0,
                    textAlign: "center",
                    verticalAlign: "middle"
                } },
                React.createElement("div", { className: "banner-state text-center vertical-align banner-mozart" }),
                React.createElement("div", { style: {
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        color: paleta_1.default.color900,
                        opacity: 0.6,
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
                            color: constants_1.TRUE_ACCENT_COLOR,
                            width: "40%"
                        }, className: "text-uppercase ls-40 pasajero fs-80" },
                        React.createElement("div", { style: __assign(__assign({}, composer_name_style_1.default), { fontSize: FONT_BIG_SIZE, color: constants_1.TRUE_ACCENT_COLOR, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 0.5 }) },
                            React.createElement("div", { className: "tresd", style: {
                                    fontSize: "inherit",
                                    textAlign: "left",
                                    color: "black"
                                } },
                                React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 1000 }, "THE"))),
                        React.createElement("div", { className: "tresd", style: __assign(__assign({}, composer_name_style_1.default), { fontSize: FONT_BIG_SIZE, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 1 }) },
                            React.createElement("div", { className: "tresd", style: {
                                    fontSize: "inherit",
                                    textAlign: "left",
                                    color: "black"
                                } },
                                React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 1500 }, "CLASSICAL"))),
                        React.createElement("div", { style: __assign(__assign({}, composer_name_style_1.default), { fontSize: FONT_BIG_SIZE, color: constants_1.TRUE_ACCENT_COLOR, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 0.5 }) },
                            React.createElement("div", { className: "tresd", style: {
                                    fontSize: "inherit",
                                    textAlign: "left",
                                    color: "black"
                                } },
                                React.createElement(ReactRevealText, { show: this.state.show, transitionTime: 2000 }, "EXPERIENCE")),
                            React.createElement("div", { style: __assign(__assign({}, composer_name_style_1.default), { position: "fixed", width: "100%", fontSize: 20, color: "black", fontFamily: constants_1.ELEGANT_FONT, lineHeight: "20px", fontWeight: 900, height: "auto", top: "unset", left: constants_1.MARGIN_HORITZONTAL + 60, bottom: 150, textTransform: "none" }) },
                                React.createElement("div", { style: { opacity: 1, fontSize: 25, color: "black", lineHeight: "10px" } },
                                    React.createElement("p", { style: { color: "black", fill: "black", lineHeight: "10px" } }, "The Classical music streaming You were waiting for"),
                                    React.createElement("p", null, "And much more..."))),
                            React.createElement("div", { style: {
                                    filter: "grayscale(100%)",
                                    opacity: 1,
                                    height: "auto",
                                    position: "fixed",
                                    top: "unset",
                                    bottom: 0,
                                    left: constants_1.MARGIN_HORITZONTAL
                                } }, logos)))))));
    };
    return Hero;
}(React.Component));
exports.default = Hero;
