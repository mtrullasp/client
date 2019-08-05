"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const paleta_1 = require("./styles/paleta");
const constants_1 = require("./util/constants");
const Header_1 = require("./Header");
const composer_name_style_1 = require("./styles/composer_name_style");
const ReactRevealText = require("react-reveal-text");
class Hero extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { show: false };
        setTimeout(() => this.setState({ show: true }), 500);
    }
    render() {
        /*return <MyMap/>;*/
        const lineHeight = "160px";
        return (<div onClick={() => this.props.history.push(constants_1.ROUTE_HOME_MENU)} style={{
            width: "100%",
            left: 0,
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: 4
        }}>
        <div className="banner-state text-center vertical-align banner-mozart"/>
        <div style={{
            position: "absolute",
            top: 0,
            width: "100%",
            color: paleta_1.default.color700,
            opacity: 0.9,
            fontWeight: 200,
            margin: 0,
            padding: 0
        }}>
          <h1 style={{
            fontSize: 80,
            fontFamily: "MrAlex",
            position: "absolute",
            top: 20,
            left: Header_1.HORITZONTAL_MARGIN - 20,
            textAlign: "left",
            color: constants_1.SECOND_ACCENT_COLOR,
            width: "30%"
        }} className="text-uppercase ls-40 pasajero fs-80">
            <div style={Object.assign({}, composer_name_style_1.default, { fontSize: 170, color: constants_1.SECOND_ACCENT_COLOR, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto" })}>
              <ReactRevealText show={this.state.show} transitionTime={10000}>
                THE
              </ReactRevealText>
            </div>
            <div style={Object.assign({}, composer_name_style_1.default, { fontSize: 170, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 0.8 })}>
              <ReactRevealText show={this.state.show} transitionTime={10000}>
                CLASSICAL
              </ReactRevealText>
            </div>
            <div style={Object.assign({}, composer_name_style_1.default, { fontSize: 170, color: constants_1.SECOND_ACCENT_COLOR, fontFamily: "MrAlex", lineHeight: lineHeight, height: "auto", opacity: 0.7 })}>
              <ReactRevealText show={this.state.show} transitionTime={10000}>
                EXPERIENCE
              </ReactRevealText>

              <div style={Object.assign({}, composer_name_style_1.default, { fontSize: 25, color: constants_1.SECOND_ACCENT_COLOR, fontFamily: constants_1.ELEGANT_FONT, lineHeight: "40px", fontWeight: 300, height: "auto", marginTop: 200 })}>
                <ReactRevealText show={this.state.show} transitionTime={5000}>
                  The Classical music streaming You are waiting for
                </ReactRevealText>
                <ReactRevealText show={this.state.show} transitionTime={5000}>
                  And much more...
                </ReactRevealText>
              </div>
            </div>
          </h1>
        </div>
        
        
      </div>);
    }
}
exports.default = Hero;
//# sourceMappingURL=Hero.jsx.map