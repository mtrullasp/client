import * as React from "react";
import paleta from "../styles/paleta";
import {
  ELEGANT_FONT,
  FONT_FAT,
  FONT_SEMI_SLIM,
  FONT_SLIM,
  ROUTE_HOME,
  ROUTE_HOME_MENU,
  TRUE_ACCENT_COLOR,
  SLIM_JOE,
  PSEUDO_BLACK,
  MARGIN_HORITZONTAL
} from "../util/constants";
import Header, { HORITZONTAL_MARGIN } from "../Header";
import { History } from "history";
import TextFit from "../widgets/TextFit/TextFit";
import composer_name_style from "../styles/composer_name_style";
import "../widgets/MyText/MyText_Next.css";
const ReactRevealText = require("react-reveal-text");
import { Image, Segment } from "semantic-ui-react";

const FONT_BIG_SIZE = 120;

interface IState {
  show: boolean;
}
interface IProps {
  history?: History;
}

const logos = (
  <div
    style={{
      display: "flex",
      padding: 10,
      margin: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: 800
    }}
  >
    <Image
      size={"tiny"}
      fluid={true}
      src={require("../assets/img/logos/Harmonia_Mundi_logo.png")}
    />
    <Image size={"tiny"} src={require("../assets/img/logos/Alpha.png")} />
    <Image
      size={"tiny"}
      src={require("../assets/img/logos/logo_analekta_noir.png")}
    />
    <Image size={"tiny"} src={require("../assets/img/logos/Naïve_logo.png")} />
    <Image size={"tiny"} src={require("../assets/img/logos/Genuin.png")} />
  </div>
);

class Hero extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { show: false };
    setTimeout(() => this.setState({ show: true }), 500);
  }

  state: IState;

  render() {
    /*return <MyMap/>;*/
    const lineHeight = "10px";
    return (
      <div style={{ position: "fixed", top: 0 }}>
        <div
          onClick={() => this.props.history.push(ROUTE_HOME_MENU)}
          style={{
            width: "100%",
            left: 0,
            textAlign: "center",
            verticalAlign: "middle"
          }}
        >
          <div className="banner-state text-center vertical-align banner-mozart" />
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              color: paleta.color900,
              opacity: 0.6,
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
                color: TRUE_ACCENT_COLOR,
                width: "40%"
              }}
              className="text-uppercase ls-40 pasajero fs-80"
            >
              <div
                style={{
                  ...composer_name_style,
                  fontSize: FONT_BIG_SIZE,
                  color: TRUE_ACCENT_COLOR,
                  fontFamily: "MrAlex",
                  lineHeight: lineHeight,
                  height: "auto",
                  opacity: 0.5
                }}
              >
                <div
                  className={"tresd"}
                  style={{
                    fontSize: "inherit",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                  <ReactRevealText show={this.state.show} transitionTime={1000}>
                    THE
                  </ReactRevealText>
                </div>
              </div>
              <div
                className={"tresd"}
                style={{
                  ...composer_name_style,
                  fontSize: FONT_BIG_SIZE,
                  fontFamily: "MrAlex",
                  lineHeight: lineHeight,
                  height: "auto",
                  opacity: 1
                }}
              >
                <div
                  className={"tresd"}
                  style={{
                    fontSize: "inherit",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                  <ReactRevealText show={this.state.show} transitionTime={1500}>
                    CLASSICAL
                  </ReactRevealText>
                </div>
              </div>
              <div
                style={{
                  ...composer_name_style,
                  fontSize: FONT_BIG_SIZE,
                  color: TRUE_ACCENT_COLOR,
                  fontFamily: "MrAlex",
                  lineHeight: lineHeight,
                  height: "auto",
                  opacity: 0.5
                }}
              >
                <div
                  className={"tresd"}
                  style={{
                    fontSize: "inherit",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                  <ReactRevealText show={this.state.show} transitionTime={2000}>
                    EXPERIENCE
                  </ReactRevealText>
                </div>
                <div
                  style={{
                    ...composer_name_style,
                    position: "fixed",
                    width: "100%",
                    fontSize: 20,
                    color: "black",
                    fontFamily: ELEGANT_FONT,
                    lineHeight: "20px",
                    fontWeight: 900,
                    height: "auto",
                    top: "unset",
                    left: MARGIN_HORITZONTAL + 60,
                    bottom: 150,
                    textTransform: "none"
                  }}
                >
                  <div style={{ opacity: 1, fontSize: 25, color: "black", lineHeight: "10px" }}>
                    <p style={{ color: "black", fill: "black", lineHeight: "10px" }}>
                      The Classical music streaming You were waiting for
                    </p>
                    <p>And much more...</p>
                  </div>
                </div>
                <div
                  style={{
                    filter: "grayscale(100%)",
                    opacity: 1,
                    height: "auto",
                    position: "fixed",
                    top: "unset",
                    bottom: 0,
                    left: MARGIN_HORITZONTAL
                  }}
                >
                  {logos}
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
      </div>
    );
  }
}

export default Hero;
