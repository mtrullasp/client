"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DivInline_1 = require("./widgets/DivInline.");
var constants_1 = require("./util/constants");
require("./main.css");
var composer_name_style_1 = require("./styles/composer_name_style");
var MARGIN_TOP = 40;
var FONT_SIZE = 80;
var HeadNameComposer = function (props) {
    return (React.createElement("div", { onClick: function () { return props.onClick(); } },
        React.createElement(DivInline_1.default, null,
            React.createElement("span", { style: composer_name_style_1.default }, props.lastName),
            React.createElement("span", { style: {
                    position: "relative",
                    top: 0,
                    fontFamily: constants_1.FONT_SLIM,
                    fontSize: FONT_SIZE,
                    fontWeight: 100,
                    fontStyle: "normal",
                    margin: 0,
                    color: "black",
                    lineHeight: "60px",
                    display: "inline-block",
                    textTransform: "uppercase",
                    letterSpacing: 0
                } }, props.firstName)),
        React.createElement(DivInline_1.default, null,
            React.createElement("p", { style: {
                    marginTop: 0,
                    marginLeft: 40,
                    fontSize: 14,
                    fontWeight: 300,
                    color: "black"
                } }, props.infoNeixDefu))));
};
exports.default = HeadNameComposer;
