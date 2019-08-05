"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
//import { connect } from "react-redux";
//import * as actions from "actions";
//import store from "store";
const helperFunctions_1 = require("../../../util/helperFunctions");
const rewind_1 = require("./rewind");
const forward_1 = require("./forward");
const mobx_react_1 = require("mobx-react");
require("../styles/style.css");
const const_1 = require("../../../lab/const");
const DZ = window.DZ;
const promise = new Promise((resolve, reject) => {
    true ? resolve("Stuff worked!") : reject(Error("It broke"));
});
let Controls = class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.setVolume = event => {
            const vol = this.getVolPercent(event);
            this.line.current.style.height = this.ball.current.style.bottom = vol + "%";
            DZ.player.setVolume(vol);
        };
        /*
        componentWillReceiveProps(nextProps) {
          if (this.props.track.id && nextProps.track !== this.props.track) {
            this.setState({ isPlaying: true });
          }
        }
      */
        this.changeIsPlaying = () => {
            this.setState({ isPlaying: !DZ.player.isPlaying() }, () => DZ.player.isPlaying() ? DZ.player.pause() : DZ.player.play());
        };
        this.changeTrack = () => {
            this.setState({
                isPlaying: true
            }, () => {
                DZ.player.pause();
                this.state.repeat
                    ? DZ.player.playTracks([this.props.track.id])
                    : helperFunctions_1.random(this.props);
            });
        };
        this.rewind = () => {
            /*
            this.setState(
              {
                isPlaying: true
              },
              () => {
                DZ.player.pause();
                const { prev } = this.props;
                if (prev.length) {
                  promise.then(
                    result => {
                      store.dispatch(actions.changeTrackAction(prev.slice(-1)[0]));
                      store.dispatch(actions.prevTrackAction(prev.slice(-1)[0]));
                      DZ.player.playTracks([this.props.track.id]);
                      searchArtistInfo(this.props.track);
                    },
                    err => console.log(err)
                  );
                } else {
                  random(this.props);
                }
              }
            );
        */
        };
        this.state = {
            repeat: false,
            mouseDown: false
        };
        this.progress = React.createRef();
        this.line = React.createRef();
        this.ball = React.createRef();
    }
    onMouseUp(event) {
        if (this.state.mouseDown) {
            this.setState({ mouseDown: false });
            this.setVolume(event);
        }
    }
    onMouseDown(event) {
        this.setState({ mouseDown: true });
        this.setVolume(event);
    }
    onMouseMove(event) {
        if (!this.state.mouseDown) {
            return;
        }
        this.setVolume(event);
    }
    onMouseLeave() {
        this.setState({ mouseDown: false });
    }
    getVolPercent({ currentTarget, clientY }) {
        const { top, bottom, height } = currentTarget.getBoundingClientRect();
        if (clientY <= top) {
            return 100;
        }
        if (clientY >= bottom) {
            return 0;
        }
        const vol = 100 - ((clientY - top) / height) * 100;
        if (vol <= 5.5) {
            return 0;
        }
        return vol;
    }
    render() {
        return (<div className="no_controls">
        <button>
          <img src={const_1.default.volume} alt=""/>
          <div className="volumeSlider" ref={this.progress} onMouseUp={ev => this.onMouseUp(ev)} onMouseDown={ev => this.onMouseDown(ev)} onMouseLeave={ev => this.onMouseLeave()} onMouseMove={ev => this.onMouseMove(ev)}>
            <div className="volumeSlider__lineWrapper">
              <div className="volumeSlider__bgLine"/>
              <div className="volumeSlider__currentLine" ref={this.line}/>
              <div className="volumeSlider__ball" ref={this.ball}/>
            </div>
          </div>
        </button>
        <button>
          <rewind_1.default onClick={this.props.albumStore.playerPrev()}/>
        </button>
        <button onClick={this.changeIsPlaying}>
          <img src={this.props.albumStore.playerIsPlaying
            ? "/assets/img/pause.png"
            : const_1.default.play} alt=""/>
        </button>
        <button>
          <forward_1.default onClick={() => {
            this.props.albumStore.playerNext();
        }}/>
        </button>
        <button>
          <img src={this.state.repeat ? const_1.default.repeatBlue : const_1.default.repeatWhite} onClick={() => {
            DZ.player.setRepeat(this.state.repeat ? 0 : 2);
            this.setState({ repeat: !this.state.repeat });
        }} alt=""/>
        </button>
      </div>);
    }
};
Controls = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], Controls);
const mapStateToProps = ({ track, prev, chosenPlaylist, album, flow, artist, artistPlaylist }) => ({
    track,
    prev,
    chosenPlaylist,
    album,
    flow,
    artist,
    artistPlaylist
});
exports.default = Controls;
//# sourceMappingURL=index.jsx.map
