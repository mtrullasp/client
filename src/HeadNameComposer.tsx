import * as React from "react";
import DivInline from "./widgets/DivInline.";
import {ACCENT_COLOR, FONT_FAT, FONT_SLIM} from "./util/constants";
import "./main.css";

interface IProps {
  firstName: string;
  lastName: string;
  infoNeixDefu: string;
  onClick: () => void;
}

const MARGIN_TOP = 40;
const FONT_SIZE = 80;

const HeadNameComposer = (props: IProps) => {
  return (
    <div onClick={() => props.onClick()}>
      <DivInline>
        <span
/*
          onClick={() => {
            this.props.appState.worksStore.toggleComposerWorksVisible();
          }}
*/
          style={{
            letterSpacing: 0,
            height: 80,
            fontFamily: FONT_FAT,
            fontSize: FONT_SIZE,
            fontWeight: 900,
            position: "relative",
            top: 0,
            margin: 0,
            marginLeft: 0,
            textShadow: "0 0 2px black",
            color: ACCENT_COLOR,
            lineHeight: "60px",
            display: "inline-block",
            textTransform: "uppercase"
          }}
        >
          {props.lastName}
        </span>
        <span
/*
          onClick={() => {
            this.props.appState.worksStore.toggleComposerWorksVisible();
          }}
*/
          style={{
            position: "relative",
            top: 0,
            fontFamily: FONT_SLIM,
            fontSize: FONT_SIZE,
            fontWeight: 100,
            fontStyle: "normal",
            margin: 0,
            color: "black",
            lineHeight: "60px",
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: 0
          }}
        >
          {props.firstName}
        </span>
      </DivInline>
      <DivInline>
        <p
          style={{
            marginTop: 0,
            marginLeft: 40,
            fontSize: 14,
            fontWeight: 300,
            color: "black"
          }}
        >
          {props.infoNeixDefu}
        </p>
      </DivInline>
    </div>
  );
};

export default HeadNameComposer;