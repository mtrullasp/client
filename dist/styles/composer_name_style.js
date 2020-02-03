"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../util/constants");
var MARGIN_TOP = 40;
var FONT_SIZE = 80;
var composer_name_style = {
    letterSpacing: 0,
    height: 80,
    fontFamily: constants_1.FONT_FAT,
    fontSize: FONT_SIZE * 1,
    fontWeight: 900,
    position: "relative",
    top: 0,
    margin: 0,
    marginLeft: -10,
    lineHeight: "20px",
    display: "inline-block",
    textTransform: "uppercase",
    textAlign: "left",
    zIndex: 10
};
exports.default = composer_name_style;
