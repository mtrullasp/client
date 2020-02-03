import * as React from "react";
import { CSSProperties } from "react";
import { ACCENT_COLOR, FONT_FAT } from "../util/constants";

const MARGIN_TOP = 40;
const FONT_SIZE = 80;

const composer_name_style: CSSProperties = {
  letterSpacing: 0,
  height: 80,
  fontFamily: FONT_FAT,
  fontSize: FONT_SIZE * 1,
  fontWeight: 900,
  position: "relative",
  top: 0,
  margin: 0,
  marginLeft: -10,
  /*textShadow: "0 0 2px black",*/
  /*color: "#FEFEFA", /!*ACCENT_COLOR,*!/*/
  lineHeight: "20px",
  display: "inline-block",
  textTransform: "uppercase",
  textAlign: "left",
  zIndex: 10
};

export default composer_name_style;
