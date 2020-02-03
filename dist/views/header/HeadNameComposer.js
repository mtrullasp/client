"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DivInline_1 = require("../../widgets/DivInline.");
var constants_1 = require("../../util/constants");
require("../../main.css");
var LastNamePersona_1 = require("./LastNamePersona");
var MARGIN_TOP = 40;
var FONT_SIZE = 100;
var HeadNameComposer = function (props) {
    return (React.createElement("div", { onClick: function () { return props.onClick(); } },
        React.createElement(DivInline_1.default, null,
            React.createElement(LastNamePersona_1.LastNamePersona, { minFontSize: 120, maxFontSize: 140, lastName: props.lastName, size: 80, fontWeight: 900, className: "tresd" }),
            React.createElement(DivInline_1.default, null,
                React.createElement("p", { style: {
                        position: "relative",
                        marginLeft: 20,
                        top: 0,
                        fontSize: 16,
                        fontWeight: 400,
                        color: "black"
                    } },
                    props.CiutatNeix,
                    " (",
                    props.PaisNeix,
                    "), ",
                    React.createElement("b", null, props.AnyoNeix),
                    " ",
                    React.createElement("br", null),
                    props.CiutatDefu,
                    " (",
                    props.PaisDefu,
                    "), ",
                    React.createElement("b", null, props.AnyoDefu),
                    " \u2670")),
            React.createElement("br", null),
            React.createElement("div", { style: {
                    textAlign: "right",
                    right: 0,
                    position: "relative",
                    top: -25,
                    fontFamily: constants_1.ELEGANT_FONT,
                    fontSize: 25,
                    fontWeight: 500,
                    margin: 0,
                    marginLeft: 0,
                    color: constants_1.TRUE_ACCENT_COLOR,
                    opacity: 1,
                    lineHeight: "40px",
                    display: "inline-block",
                    textTransform: "none",
                    letterSpacing: 0
                } }, props.firstName))));
};
exports.default = HeadNameComposer;
