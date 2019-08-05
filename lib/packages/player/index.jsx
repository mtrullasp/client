"use strict";
/**
 * ALTERNATIVESS:
 *
 * https://github.com/retrofuturejosh/react-modular-audio-player
 *
 * https://codepen.io/maskit_jr/pen/YNWGqP
 *
 * Llista de molts Audio Players:
 * https://freefrontend.com/css-music-players/
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { Document, Page } from "react-pdf/dist/entry.webpack";
//import "../sass/style.css";
require("./styles/style.css");
const mobx_react_1 = require("mobx-react");
const tracks_1 = require("./tracks");
const react_flexbox_grid_1 = require("react-flexbox-grid");
const Typography_1 = require("@material-ui/core/Typography");
const constants_1 = require("../../util/constants");
require("./styles/TrackListPlayerDFlow.less");
const PlayerBar_1 = require("./PlayerBar");
const paleta_1 = require("../../styles/paleta");
// import ArtistsCreditsLinker from "./ArtistsCreditsLinker";
const FOOTER_HEIGHT = 60;
const POSITION_NEXT_PREV = 50;
let Player = class Player extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pdfNumPage: 1
        };
    }
    render() {
        const marginLeft = 10;
        const header = (<div>
          <div>
            <tracks_1.default />
            <div style={{ height: 80 }}>
              <react_flexbox_grid_1.Row>
                <react_flexbox_grid_1.Col lg={11}>
                  <div style={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            marginLeft: 60,
            lineHeight: "80px",
            width: "100%"
        }}>
                    <Typography_1.default style={{
            color: "black",
            fontFamily: constants_1.ELEGANT_FONT,
            fontSize: 35,
            fontWeight: 500
        }}>
        
                    </Typography_1.default>
                  </div>
                </react_flexbox_grid_1.Col>
              </react_flexbox_grid_1.Row>
              <react_flexbox_grid_1.Row>
                <div style={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            marginLeft: 70,
            lineHeight: 80,
            width: "100%"
        }}>
                  <div style={{
            color: paleta_1.default.color300,
            fontFamily: constants_1.ELEGANT_FONT,
            fontSize: 25,
            fontWeight: 500
        }}>
        
                  </div>
                </div>
              </react_flexbox_grid_1.Row>
            </div>
          </div>
      </div>);
        const content = (<div className="navy">
        <div className="wrapper">
          <div className="NavyPlayer">
            <div className="background" style={{
            position: "absolute",
            top: 80,
            overflowY: "hidden"
        }}/>
          </div>
        </div>
      </div>);
        return (<div>
        <div style={{
            position: "absolute",
            top: 80,
            bottom: 50,
            left: 0,
            right: 400,
            zIndex: 20000,
            width: "60%"
        }}>
          
          <footer style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: FOOTER_HEIGHT,
            lineHeight: "70px",
            backgroundColor: "whitesmoke",
            opacity: 0.6
        }}>
            <PlayerBar_1.default />
          </footer>
        </div>
        
      </div>);
    }
};
Player = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], Player);
exports.default = Player;
//# sourceMappingURL=index.jsx.map
