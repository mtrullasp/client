import composer_name_style from "../../styles/composer_name_style";
import * as React from "react";
import { ColorProperty, FontSizeProperty } from "csstype";
import { TLength } from "typestyle/lib/types";
import {
  ACCENT_COLOR,
  HEADER_TITLE_BACKGROUND_COLOR, INTENSE_ACCENT_COLOR,
  PLAYER_BAR_COLOR, PSEUDO_BLACK, SECONDARY_COLOR, TOOLBAR_COLOR,
  TRUE_ACCENT_COLOR
} from "../../util/constants";
import paleta from "../../styles/paleta";
import TextFit from "../../widgets/TextFit/TextFit";
import FitText = require("react-fittext");

export function LastNamePersona(props: {
  lastName: string;
  size: FontSizeProperty<TLength>;
  opacity?: number;
  fontWeight?: number;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
}) {
  return (
    <div
      style={{
        ...composer_name_style,
        marginTop: 0,
        width: "auto",
        fontSize: props.size || 100,
        opacity: props.opacity || 1,
        color: "#641c34",
        borderColor: "black",
        fontWeight: props.fontWeight || 600
      }}
      className={props.className || ""}
    >
      <FitText
        maxFontSize={props.maxFontSize || 30}
        minFontSize={props.minFontSize || 20}
      >
        <div>{props.lastName}</div>
      </FitText>
    </div>
  );
}
