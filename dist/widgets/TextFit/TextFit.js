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
function getFontSize(text, maxFontSize) {
    var length = text.length;
    var fontSize = Math.min(450 / Math.sqrt(text.length), maxFontSize);
    return fontSize;
}
function TextFit(props) {
    if (props.text === null) {
        return null;
    }
    var fontSize = getFontSize(props.text, props.maxFontSize);
    return (React.createElement("div", { style: __assign({}, (props.style || {}), { fontSize: fontSize, width: "100%", lineHeight: fontSize + "px" }) }, props.text));
}
exports.default = TextFit;
