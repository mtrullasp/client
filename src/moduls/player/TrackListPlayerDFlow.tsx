import * as React from "react";
import classNames from "classnames";
import * as Icon from "react-feather";
import { DebounceInput } from "react-debounce-input";
import Mousetrap from "mousetrap";
import { inject, observer } from "mobx-react";
import { Row, Col } from "react-flexbox-grid";
import { Button, ListItem } from "@material-ui/core";
import { render } from "react-dom";
import { ROUTE_KLASSIC_RANK } from "../../util/constants";
import togglePlayer from "./togglePlayer";
import DzFlowList from "./controls/DzFlowList";
import { RouterStore } from "../../core/stores/RouterStore";
import { Store } from "@material-ui/icons";
import AlbumStore from "../../core/stores/AlbumStore";
import "./playerBar.new.scss";
import TextFit from "../../widgets/TextFit/TextFit";
//import "../../../node_modules/react-jinke-music-player/assets/index.css";
//const MusicPlayerObjects = require("react-jinke-music-player");debugger ;
//const CircleProcessBar = MusicPlayerObjects.CircleProcessBar;

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

interface IProps {
  subTitle?: string;
  albumStore?: AlbumStore;
  routerStore?: RouterStore;
}
@inject("albumStore")
@inject("routerStore")
@observer
class TrackListPlayerDFlow extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      user: "mtrullasp"
    };
  }

  state: {
    user: string;
  };

  componentDidMount() {
    var thisReact = this;

    /*
    DZ.init({
      'appId': '255682',
      'channelUrl': 'http://dflow.surge.sh/',
      'player' : {
        onload : function(){
          DZ.player.setRepeat(1);
        }
      }
    });
    DZ.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        DZ.api('/user/me', function(response) {
          console.log('Good to see you, ' + response.workName + '.');
          thisReact.setState({user: response});
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {perms: 'basic_access,email'});
*/

    /*
    Mousetrap.bind(['space','k'], function(){
      togglePlayer();
    });

    Mousetrap.bind(['j', 'left'], function(){
      DZ.player.prev();
    });

    Mousetrap.bind(['l', 'right'], function(){
      DZ.player.next();
    });
*/
  }

  render() {
    return this.state.user ? (
      this.renderApp()
    ) : (
      <div className="loader-container">
        <img className="logo" src="/dflow.svg" alt="logo" />
        <div className="spinner-circle" />
        <div className="loader">
          <div className="spinner" />
          <div className="spinner" />
        </div>
      </div>
    );
  }

  renderApp() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            right: 0,
            width: "40%'"
          }}
        >
          <DzFlowList />
        </div>
      </div>
    );
  }
}

interface IFavBtnProps {
  routerStore?: RouterStore;
  albumStore?: AlbumStore;
}
@inject("albumStore")
@inject("routerStore")
@inject("albumStore")
@observer
export class FavBtn extends React.Component<IFavBtnProps> {
  render() {
    return (
      <Icon.Heart
        style={
          this.props.albumStore.activeTrackIsFavorite ? { fill: "black" } : {}
        }
        className="player-button"
        onClick={() =>
          this.props.albumStore.toggleFavoriteTrack(
            this.props.albumStore.activeTrack.idDeezerTrack
          )
        }
      />
    );
  }
}

interface IVersionsProps {
  routerStore?: RouterStore;
  albumStore?: AlbumStore;
}
@inject("albumStore")
@inject("routerStore")
@inject("albumStore")
@observer
export class VersionsBtn extends React.Component<IVersionsProps> {
  render() {
    if (!this.props.albumStore.activeTrack) {
      return null;
    }
    return (
      !!this.props.albumStore.activeTrack &&
      !!this.props.albumStore.activeTrack.idWork && (
        <Icon.Music
          className="player-button"
          onClick={() => {
            const activeIdWork = this.props.albumStore.activeTrack.idWork;
            const path = ROUTE_KLASSIC_RANK.replace(
              ":idMC",
              activeIdWork.toString()
            ).replace(
              ":numPart",
              ""
              // this.props.albumStore.activeTrack.numPart.toString()
            );
            //this.props.playerStore.myRouter.tabActiveId = "klassikRank";
            this.props.routerStore.go(path);
          }}
        />
      )
    );
  }
}

export interface IInfoWorkSuperior {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
export class InfoWorkSuperior extends React.Component<IInfoWorkSuperior> {
  render() {
    const activeTrack = this.props.albumStore.activeTrack;
    debugger;
    if (!activeTrack) {
      return "null";
    }
    return (
      <div>
        <TextFit
          text={
            this.props.albumStore.activeTrackComposer +
            ": " +
            this.props.albumStore.activeTrackWorkName +
            " " +
            activeTrack.title
          }
          maxFontSize={20}
        ></TextFit>
      </div>
    );
  }
}

export interface IInfoWorkInferior {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
export class InfoWorkInferior extends React.Component<IInfoWorkInferior> {
  render() {
    const activeTrack = this.props.albumStore.activeTrack;
    if (!activeTrack) {
      return null;
    }
    return <div>activeTrack.credits</div>;
  }
}

interface IPropsDzPlayBtn {}
export class DzPlayBtn extends React.Component<IPropsDzPlayBtn> {
  constructor(props: IPropsDzPlayBtn) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  state: {
    isPlaying: boolean;
  };

  componentDidMount() {
    var that = this;
    window.DZ.Event.subscribe("player_play", () => {
      that.setState({ isPlaying: true });
    });

    window.DZ.Event.subscribe("player_paused", () => {
      that.setState({ isPlaying: false });
    });
  }

  render() {
    var button = this.state.isPlaying ? (
      <Icon.PauseCircle
        className="play-button"
        onClick={() => togglePlayer()}
      />
    ) : (
      <Icon.PlayCircle className="play-button" onClick={() => togglePlayer()} />
    );

    return <div>{button}</div>;
  }
}

interface IPropsDzPlayBtn {}
export class DzPlayBtnNew extends React.Component<IPropsDzPlayBtn> {
  constructor(props: IPropsDzPlayBtn) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  state: {
    isPlaying: boolean;
  };

  componentDidMount() {
    var that = this;
    window.DZ.Event.subscribe("player_play", () => {
      that.setState({ isPlaying: true });
    });

    window.DZ.Event.subscribe("player_paused", () => {
      that.setState({ isPlaying: false });
    });
  }

  render() {
    return (
      <button className="button play-pause" onClick={() => togglePlayer()}>
        <div className="arrow" />
      </button>
    );
  }
}

export default TrackListPlayerDFlow;
