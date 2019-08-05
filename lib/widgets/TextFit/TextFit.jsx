"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function getFontSize(text, maxFontSize) {
    const length = text.length;
    const fontSize = Math.min(450 / Math.sqrt(text.length), maxFontSize);
    return fontSize;
}
function TextFit(props) {
    if (props.text === null) {
        return null;
    }
    const fontSize = getFontSize(props.text, props.maxFontSize);
    return (<div style={Object.assign({}, (props.style || {}), { fontSize: fontSize, width: "100%", lineHeight: fontSize + "px" })}>
      {props.text}
    </div>);
}
exports.default = TextFit;
//# sourceMappingURL=TextFit.jsx.map