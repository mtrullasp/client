"use strict";
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
var DivInline_1 = require("../widgets/DivInline.");
var constants_1 = require("../util/constants");
require("../main.css");
var composer_name_style_1 = require("../styles/composer_name_style");
var MARGIN_TOP = 40;
var FONT_SIZE = 70;
var HeadNameComposer = function (props) {
    return (React.createElement("div", { onClick: function () { return props.onClick(); } },
        React.createElement(DivInline_1.default, null,
            React.createElement("div", { style: __assign({}, composer_name_style_1.default, { marginTop: 10, width: "auto" }), className: "tresd" }, props.lastName),
            React.createElement("div", { style: {
                    position: "relative",
                    top: 0,
                    fontFamily: constants_1.FONT_SLIM,
                    fontSize: FONT_SIZE / 2,
                    fontWeight: 900,
                    fontStyle: "normal",
                    margin: 0,
                    marginLeft: 10,
                    color: constants_1.SECOND_ACCENT_COLOR,
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
