import * as React from "react";
import { CSSProperties } from "react";
import { Size } from "./calcSize";

interface IProps {
  text: string;
  style?: CSSProperties;
  maxFontSize: number;
}

function getFontSize(text: string, maxFontSize: number) {
  const length = text.length;
  const fontSize = Math.min(450 / Math.sqrt(text.length), maxFontSize);
  return fontSize;
}
function TextFit(props: IProps) {
  if (props.text === null) {
    return null;
  }
  const fontSize = getFontSize(props.text, props.maxFontSize);
  return (
    <div
      style={{
        ...(props.style || {}),
        fontSize: fontSize,
        width: "100%",
        lineHeight: fontSize + "px"
      }}
    >
      {props.text}
    </div>
  );
}

export default TextFit;
