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
var composer_name_style_1 = require("../../styles/composer_name_style");
var React = require("react");
var FitText = require("react-fittext");
function LastNamePersona(props) {
    return (React.createElement("div", { style: __assign(__assign({}, composer_name_style_1.default), { marginTop: 0, width: "auto", fontSize: props.size || 100, opacity: props.opacity || 1, color: "#641c34", borderColor: "black", fontWeight: props.fontWeight || 600 }), className: props.className || "" },
        React.createElement(FitText, { maxFontSize: props.maxFontSize || 30, minFontSize: props.minFontSize || 20 },
            React.createElement("div", null, props.lastName))));
}
exports.LastNamePersona = LastNamePersona;
