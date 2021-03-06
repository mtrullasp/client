import * as React from "react";
//import { connect } from "react-redux";
//import * as actions from "actions";
//import store from "store";
import { searchArtistInfo, random } from "../../../util/helperFunctions";
import Rewind from "./rewind";
import Forward from "./forward";
import { inject, observer } from "mobx-react";
import "../styles/style.css";
import { GridListTileBar } from "@material-ui/core";
import { PlayerStore } from "../../../core/stores/PlayerStore";
import icons from "../../../lab/const";
import { action, observable } from "mobx";

declare let window: any;
interface Window {
  DZ: any;
}
const DZ = window.DZ;

const promise = new Promise((resolve, reject) => {
  true ? resolve("Stuff worked!") : reject(Error("It broke"));
});

interface ITrack {
  id: string;
}
interface IControls {
  playerStore?: PlayerStore;
  prev?: any;
  track?: ITrack;
}
@inject("albumStore")
@observer
class Controls extends React.Component<IControls> {
  constructor(props: IControls) {
    super(props);
    this.state = {
      repeat: false,
      mouseDown: false
    };
    this.progress = React.createRef();
    this.line = React.createRef();
    this.ball = React.createRef();
  }

  progress: any;
  line: any;
  ball: any;

  state: {
    repeat: boolean;
    mouseDown: boolean;
  };

  setVolume = event => {
    const vol = this.getVolPercent(event);
    this.line.current.style.height = this.ball.current.style.bottom = vol + "%";
    DZ.player.setVolume(vol);
  };

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

  /*
  componentWillReceiveProps(nextProps) {
    if (this.props.track.id && nextProps.track !== this.props.track) {
      this.setState({ isPlaying: true });
    }
  }
*/

  changeIsPlaying = () => {
    this.setState({ isPlaying: !DZ.player.isPlaying() }, () =>
      DZ.player.isPlaying() ? DZ.player.pause() : DZ.player.play()
    );
  };

  changeTrack = () => {
    this.setState(
      {
        isPlaying: true
      },
      () => {
        DZ.player.pause();
        this.state.repeat
          ? DZ.player.playTracks([this.props.track.id])
          : random(this.props);
      }
    );
  };

  rewind = () => {
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

  render() {
    return (
      <div className="no_controls">
        <button>
          <img src={icons.volume} alt="" />
          <div
            className="volumeSlider"
            ref={this.progress}
            onMouseUp={ev => this.onMouseUp(ev)}
            onMouseDown={ev => this.onMouseDown(ev)}
            onMouseLeave={ev => this.onMouseLeave()}
            onMouseMove={ev => this.onMouseMove(ev)}
          >
            <div className="volumeSlider__lineWrapper">
              <div className="volumeSlider__bgLine" />
              <div className="volumeSlider__currentLine" ref={this.line} />
              <div className="volumeSlider__ball" ref={this.ball} />
            </div>
          </div>
        </button>
        <button>
          <Rewind onClick={this.props.playerStore.playerPrev()} />
        </button>
        <button onClick={this.changeIsPlaying}>
          <img
            src={
              this.props.playerStore.playerIsPlaying
                ? "/assets/img/pause.png"
                : icons.play
            }
            alt=""
          />
        </button>
        <button>
          <Forward
            onClick={() => {
              this.props.playerStore.playerNext();
            }}
          />
        </button>
        <button>
          <img
            src={this.state.repeat ? icons.repeatBlue : icons.repeatWhite}
            onClick={() => {
              DZ.player.setRepeat(this.state.repeat ? 0 : 2);
              this.setState({ repeat: !this.state.repeat });
            }}
            alt=""
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({
  track,
  prev,
  chosenPlaylist,
  album,
  flow,
  artist,
  artistPlaylist
}) => ({
  track,
  prev,
  chosenPlaylist,
  album,
  flow,
  artist,
  artistPlaylist
});

export default Controls;
