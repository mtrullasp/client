"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
const core_1 = require("@material-ui/core");
const constants_1 = require("../../../util/constants");
const MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
const FOOTER_HEIGHT = 80;
let Tracks = class Tracks extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { trackHover: -1 };
    }
    render() {
        if (!this.props.albumStore.activeTracks) {
            return null;
        }
        const fosc = 90;
        const items = this.props.albumStore.activeTracks.map((track, index) => {

            let credits = track.performers;
            if (!!credits) {
                credits = credits + " :";
            }
            return (<li className="list-tracks" key={index} style={{
                background: index === this.props.albumStore.activeTrackIndex
                    ? `rgba(${fosc}, ${fosc}, ${fosc}, 0.7)`
                    : "black",
                listStyle: "none",
                mixBlendMode: "difference",
                color: index === this.props.albumStore.activeTrackIndex ? "black" : "white"
            }}>
          <core_1.ListItem className={"song"} dense={false} style={{
                zIndex: 10000,
                fontFamily: constants_1.FONT_SLIM,
                fontSize: 40,
                color: "white",
                lineHeight: "15px",
                mixBlendMode: "difference"
            }} button component="ul" onClick={() => {
                this.props.albumStore.playTracks(this.props.albumStore.activeTracks.map(a => a.idDeezerTrack), index);
                /*
                if (
                  this.props.playerStore.playerIsPlaying &&
                  this.props.albumStore.activeTrackIndex === index
                ) {
                  this.props.albumStore.activeTrackIndex = -1;
                  this.props.playerStore.playerPause();
                } else {
                  this.props.albumStore.activeTrackIndex = index;
                }
  */
            }}>
            <div onMouseEnter={() => {
                this.setState({ trackHover: track.idDeezerTrack });
            }} onMouseLeave={() => {
                this.setState({ trackHover: -1 });
            }} style={{
                opacity: this.state.trackHover === track.idDeezerTrack ? 0.8 : 0.8,
                fontSize: 18,
                paddingRight: 40,
                marginLeft: 0,
                fontFamily: constants_1.ELEGANT_FONT,
                mixBlendMode: "difference"
            }}>
              {credits}{track.composer}: <b>{track.itemName}</b>
            </div>
            <div style={{
                position: "absolute",
                margin: 0,
                marginLeft: 10,
                right: 5,
                fontFamily: "Cousine",
                fontSize: 18,
                verticalAlign: "middle",
                color: "white"
            }}>
              {this.props.albumStore.secondsToTimeFormat(track.duration)}
            </div>
          </core_1.ListItem>
        </li>);
        });
        return (<MaxHeightContainer_1.default style={{
            fontFamily: constants_1.FONT_SLIM,
            position: "fixed",
            top: 120,
            right: 0,
            overflowY: "auto",
            width: "39%",
            mixBlendMode: "difference",
            zIndex: 1000
        }} footerHeight={FOOTER_HEIGHT}>
          {items}
        </MaxHeightContainer_1.default>);
    }
};
Tracks = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], Tracks);
exports.default = Tracks;
//# sourceMappingURL=index.jsx.map
