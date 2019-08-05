"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DivInline_1 = require("../widgets/DivInline.");
const constants_1 = require("../util/constants");
require("../main.css");
const composer_name_style_1 = require("../styles/composer_name_style");
const MARGIN_TOP = 40;
const FONT_SIZE = 70;
const HeadNameComposer = (props) => {
    return (<div onClick={() => props.onClick()}>
      <DivInline_1.default>
        <span 
    /*
              onClick={() => {
                this.props.appState.worksStore.toggleComposerWorksVisible();
              }}
    */
    style={composer_name_style_1.default}>
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
        fontFamily: constants_1.FONT_SLIM,
        fontSize: FONT_SIZE,
        fontWeight: 400,
        fontStyle: "normal",
        margin: 0,
        color: constants_1.SECOND_ACCENT_COLOR,
        lineHeight: "60px",
        display: "inline-block",
        textTransform: "uppercase",
        letterSpacing: 0
    }}>
          {props.firstName}
        </span>
      </DivInline_1.default>
      <DivInline_1.default>
        <p style={{
        marginTop: 0,
        marginLeft: 40,
        fontSize: 14,
        fontWeight: 300,
        color: "black"
    }}>
          {props.infoNeixDefu}
        </p>
      </DivInline_1.default>
    </div>);
};
exports.default = HeadNameComposer;
//# sourceMappingURL=HeadNameComposer.jsx.map