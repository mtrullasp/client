import * as React from "react";
import classNames from "classnames";
// import * as Icon from "react-feather";
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
// import { Store } from "@material-ui/icons";
import AlbumStore from "../../core/stores/AlbumStore";
import "./playerBar.new.scss";
import TextFit from "../../widgets/TextFit/TextFit";
import { Icon } from "semantic-ui-react";
import * as IconFeather from "react-feather";
import { CSSProperties } from "react";
import ActiveCredits from "../../views/album/tracks/ActiveCredits";
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
  style?: CSSProperties;
}
@inject("albumStore")
@inject("routerStore")
@inject("albumStore")
@observer
export class FavBtn extends React.Component<IFavBtnProps> {
  render() {
    return (
      <IconFeather.Heart
        style={{
          ...this.props.style,
          color: "white",
          marginTop: 5,
          ...(this.props.albumStore.activeTrackIsFavorite
            ? { fill: "white" }
            : {})
        }}
        /*className="player-button"*/
        onClick={() =>
          this.props.albumStore.toggleFavoriteTrack(
            this.props.albumStore.activeTrack?.idTrack_DZ
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
      !!this.props.albumStore.activeTrack.idMC && (
        <IconFeather.Music
          className="player-button"
          onClick={() => {
            const activeIdWork = this.props.albumStore.activeTrack.idMC;
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

    if (!activeTrack) {
      return "null";
    }
    return (
      <div>
        <TextFit
          text={
            this.props.albumStore.activeTrackComposer +
            ": " +
            this.props.albumStore.activeTrackWorkName
          }
          maxFontSize={18}
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
    return (
      <div>
        <ActiveCredits
          credits={this.props.albumStore?.activeTrackPrimaryCredits}
        />
      </div>
    );
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
      <Icon className="pause" onClick={() => togglePlayer()} />
    ) : (
      <Icon className="play" onClick={() => togglePlayer()} />
    );

    return <div>{button}</div>;
  }
}

interface IPropsDzPlayBtn {}
export class DzPlayBtnNew extends React.Component<IPropsDzPlayBtn> {
  constructor(props: IPropsDzPlayBtn) {
    super(props);
    var that = this;
    window.DZ.Event.subscribe("player_play", () => {
      that.setState({ isPlaying: true });
    });
    window.DZ.Event.subscribe("player_paused", () => {
      that.setState({ isPlaying: false });
    });
    this.state = {
      isPlaying: false
    };
  }

  state: {
    isPlaying: boolean;
  };

  render() {
    const className = this.state.isPlaying ? "pause" : "play";
    return (
      <Icon
        style={{
          color: "white",
          width: 20,
          cursor: "pointer",
          textAlign: "middle"
        }}
        size={"big"}
        className={className}
        onClick={() => togglePlayer()}
      />
    );
  }
}

export default TrackListPlayerDFlow;
