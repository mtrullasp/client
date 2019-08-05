import composer_name_style from "../../styles/composer_name_style";
import * as React from "react";
import { ColorProperty, FontSizeProperty } from "csstype";
import { TLength } from "typestyle/lib/types";
import { ACCENT_COLOR } from "../../util/constants";
import paleta from "../../styles/paleta";

export function LastNamePersona(props: {
  lastName: string;
  size: FontSizeProperty<TLength>;
  opacity: number;
}) {
  return (
    <div
      style={{
        ...composer_name_style,
        marginTop: 0,
        width: "auto",
        fontSize: props.size,
        opacity: props.opacity,
        color: "whitesmoke"  //ACCENT_COLOR
      }}
      className={"tresd2"}
    >
      {props.lastName}
    </div>
  );
}
