import * as React from "react";
import paleta from "../styles/paleta";
import {
  ELEGANT_FONT,
  FONT_FAT,
  FONT_SEMI_SLIM,
  FONT_SLIM,
  ROUTE_HOME,
  ROUTE_HOME_MENU,
  SECOND_ACCENT_COLOR,
  SLIM_JOE
} from "../util/constants";
import { HORITZONTAL_MARGIN } from "../Header";
import { History } from "history";
import TextFit from "../widgets/TextFit/TextFit";
import composer_name_style from "../styles/composer_name_style";
import "../widgets/MyText/MyText_Next.css";
const ReactRevealText = require("react-reveal-text");

interface IState {
  show: boolean;
}
interface IProps {
  history?: History;
}
class Hero extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { show: false };
    setTimeout(() => this.setState({ show: true }), 500);
  }

  state: IState;

  render() {
    /*return <MyMap/>;*/
    const lineHeight = "160px";
    return (
      <div
        onClick={() => this.props.history.push(ROUTE_HOME_MENU)}
        style={{
          width: "100%",
          left: 0,
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: 4
        }}
      >
        <div className="banner-state text-center vertical-align banner-mozart" />
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            color: paleta.color700,
            opacity: 0.9,
            fontWeight: 200,
            margin: 0,
            padding: 0
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontFamily: "MrAlex",
              position: "relative",
              top: 80,
              left: 0,
              textAlign: "left",
              color: SECOND_ACCENT_COLOR,
              width: "40%"
            }}
            className="text-uppercase ls-40 pasajero fs-80"
          >
            <div
              style={{
                ...composer_name_style,
                fontSize: 170,
                color: SECOND_ACCENT_COLOR,
                fontFamily: "MrAlex",
                lineHeight: lineHeight,
                height: "auto"
              }}
            >
              <div className={"tresd"} style={{ textAlign: "left" }}>
                <ReactRevealText show={this.state.show} transitionTime={1000}>
                  THE
                </ReactRevealText>
              </div>
            </div>
            <div
              className={"tresd"}
              style={{
                ...composer_name_style,
                fontSize: 170,
                fontFamily: "MrAlex",
                lineHeight: lineHeight,
                height: "auto",
                opacity: 0.8
              }}
            >
              <div className={"tresd"} style={{ textAlign: "left" }}>
                <ReactRevealText show={this.state.show} transitionTime={1000}>
                  CLASSICAL
                </ReactRevealText>
              </div>
            </div>
            <div
              style={{
                ...composer_name_style,
                fontSize: 170,
                color: SECOND_ACCENT_COLOR,
                fontFamily: "MrAlex",
                lineHeight: lineHeight,
                height: "auto",
                opacity: 0.7
              }}
            >
              <div className={"tresd"} style={{ textAlign: "left" }}>
                <ReactRevealText show={this.state.show} transitionTime={1000}>
                  EXPERIENCE
                </ReactRevealText>
              </div>
              <div
                style={{
                  ...composer_name_style,
                  width: "100%",
                  fontSize: 22,
                  color: SECOND_ACCENT_COLOR,
                  fontFamily: ELEGANT_FONT,
                  lineHeight: "40px",
                  fontWeight: 900,
                  height: "auto",
                  marginTop: 150
                }}
              >
                <ReactRevealText show={this.state.show} transitionTime={5000}>
                  The Classical music streaming You were waiting for
                </ReactRevealText>
                <ReactRevealText show={this.state.show} transitionTime={5000}>
                  And much more...
                </ReactRevealText>
              </div>
            </div>
          </h1>
        </div>
        {/*
        <div>
          <h2
            className=""
            style={{
              fontWeight: 100,
              fontFamily: SLIM_JOE,
              fontSize: 30,
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              opacity: 1,
              transition: "opacity 2s"
            }}
          >
            Come with us and immerse yourself <br /> in the captivating world of
            Classical Music!
          </h2>
        </div>
*/}
        {/*
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 100
          }}
        >
          <Button
            variant={"outlined"}
            fullWidth={true}
            size={"large"}
            style={{ height: "100%" }}
          >
            <span
              style={{
                fontSize: 100,
                fontWeight: 400,
                fontFamily: BIG_JOHN,
                color: "4a4a49"

              }}
            >
              S T A R T
            </span>
          </Button>
        </div>
*/}
      </div>
    );
  }
}

export default Hero;
