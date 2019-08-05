import * as React from "react";
import DivInline from "../../widgets/DivInline.";
import { FONT_SLIM, SECOND_ACCENT_COLOR } from "../../util/constants";
import "../../main.css";
import { LastNamePersona } from "./LastNamePersona";
import paleta from "../../styles/paleta";

interface IProps {
  firstName: string;
  lastName: string;
  infoNeixDefu: string;
  onClick?: () => void;
}

const MARGIN_TOP = 40;
const FONT_SIZE = 70;

const HeadNameComposer = (props: IProps) => {
  return (
    <div onClick={() => props.onClick()}>
      <DivInline>
        <LastNamePersona
          lastName={props.lastName}
          size={80}
        />
        <div
          /*
                    onClick={() => {
                      this.props.appState.worksStore.toggleComposerWorksVisible();
                    }}
          */
          style={{
            position: "relative",
            top: 0,
            fontFamily: FONT_SLIM,
            fontSize: FONT_SIZE / 2,
            fontWeight: 900,
            fontStyle: "normal",
            margin: 0,
            marginLeft: 10,
            color: SECOND_ACCENT_COLOR,
            lineHeight: "60px",
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: 0
          }}
        >
          {props.firstName}
        </div>
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
