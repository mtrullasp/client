import * as React from "react";
import DivInline from "../../widgets/DivInline.";
import {
  ELEGANT_FONT,
  FONT_SEMI_SLIM,
  FONT_SLIM,
  HEADER_FONT,
  TRUE_ACCENT_COLOR
} from "../../util/constants";
import "../../main.css";
import { LastNamePersona } from "./LastNamePersona";
import paleta from "../../styles/paleta";

interface IProps {
  firstName: string;
  lastName: string;
  AnyoNeix: string;
  AnyoDefu: string;
  CiutatNeix: string;
  CiutatDefu: string;
  PaisNeix: string;
  PaisDefu: string;
  onClick?: () => void;
}

const MARGIN_TOP = 40;
const FONT_SIZE = 100;

const HeadNameComposer = (props: IProps) => {
  return (
    <div onClick={() => props.onClick()}>
      <DivInline>
        <LastNamePersona
          minFontSize={120}
          maxFontSize={140}
          lastName={props.lastName}
          size={80}
          fontWeight={900}
          className={"tresd"}
        />
        <DivInline>
          <p
            style={{
              position: "relative",
              marginLeft: 20,
              top: 0,
              fontSize: 16,
              fontWeight: 400,
              color: "black"
            }}
          >
            {props.CiutatNeix} ({props.PaisNeix}), <b>{props.AnyoNeix}</b> <br/>
            {props.CiutatDefu} ({props.PaisDefu}), <b>{props.AnyoDefu}</b> ♰
          </p>
        </DivInline>
        <br />
        <div
          /*
                    onClick={() => {
                      this.props.appState.worksStore.toggleComposerWorksVisible();
                    }}
          */
          style={{
            textAlign: "right",
            right: 0,
            position: "relative",
            top: -25,
            fontFamily: ELEGANT_FONT,
            fontSize: 25,
            fontWeight: 500,
            margin: 0,
            marginLeft: 0,
            color: TRUE_ACCENT_COLOR,
            opacity: 1,
            lineHeight: "40px",
            display: "inline-block",
            textTransform: "none",
            letterSpacing: 0
          }}
        >
          {props.firstName}
        </div>
      </DivInline>
    </div>
  );
};

export default HeadNameComposer;
