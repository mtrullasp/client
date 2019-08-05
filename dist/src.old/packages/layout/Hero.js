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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var constants_1 = require("../../util/constants");
var paleta_1 = require("../../util/paleta");
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(props, context) {
        return _super.call(this, props, context) || this;
    }
    Hero.prototype.render = function () {
        return (React.createElement("div", { style: {
                width: "100%",
                left: 0,
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: 4
            } },
            React.createElement("div", { className: "banner-state text-center vertical-align banner-mozart" }),
            React.createElement("div", { style: {
                    position: "absolute",
                    top: 30,
                    width: "100%",
                    color: paleta_1.default.color700,
                    opacity: 0.7, fontWeight: 200,
                    margin: 0,
                    padding: 0
                } },
                React.createElement("h1", { className: "text-uppercase ls-40 pasajero fs-80" }, "THE CLASSICAL"),
                React.createElement("h1", { style: { marginTop: -80 }, className: "text-uppercase ls-40 pasajero fs-100" }, "EXPERIENCE")),
            React.createElement("div", null,
                React.createElement("h2", { className: "", style: {
                        fontWeight: 100,
                        fontFamily: constants_1.SLIM_JOE,
                        fontSize: 30,
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: "100%",
                        opacity: 1,
                        transition: "opacity 2s"
                    } },
                    "Come with us and immerse yourself ",
                    React.createElement("br", null),
                    " in the captivating world of Classical Music!"))));
    };
    return Hero;
}(React.Component));
exports.default = Hero;
