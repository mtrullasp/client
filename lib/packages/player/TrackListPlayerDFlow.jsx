"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./styles/TrackListPlayerDFlow.less");
require("./styles/TrackListPlayerDFlow.overrides.less");
const Icon = require("react-feather");
const mobx_react_1 = require("mobx-react");
const constants_1 = require("../../util/constants");
const togglePlayer_1 = require("./togglePlayer");
const DzFlowList_1 = require("./controls/DzFlowList");
var DZ = window.DZ;
let TrackListPlayerDFlow = class TrackListPlayerDFlow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: "mtrullasp"
        };
    }
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
        return this.state.user ? (this.renderApp()) : (<div className="loader-container">
        <img className="logo" src="/dflow.svg" alt="logo"/>
        <div className="spinner-circle"/>
        <div className="loader">
          <div className="spinner"/>
          <div className="spinner"/>
        </div>
      </div>);
    }
    renderApp() {
        return (<div>
        <div style={{
            position: "relative",
            right: 0,
            width: "40%'"
        }}>
          <DzFlowList_1.default />
        </div>
      </div>);
    }
};
TrackListPlayerDFlow = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("routerStore"),
    mobx_react_1.observer
], TrackListPlayerDFlow);
let FavBtn = class FavBtn extends React.Component {
    render() {
        return (<Icon.Heart style={this.props.albumStore.activeTrackIsFavorite ? { fill: "black" } : {}} className="player-button" onClick={() => this.props.albumStore.toggleFavoriteTrack(this.props.albumStore.activeTrack.idDeezerTrack)}/>);
    }
};
FavBtn = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("routerStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], FavBtn);
exports.FavBtn = FavBtn;
let VersionsBtn = class VersionsBtn extends React.Component {
    render() {
        if (!this.props.albumStore.activeTrack) {
            return null;
        }
        return (!!this.props.albumStore.activeTrack &&
            !!this.props.albumStore.activeTrack.idMC && (<Icon.Music className="player-button" onClick={() => {
            const activeIdWork = this.props.albumStore.activeTrack.idMC;
            const path = constants_1.ROUTE_KLASSIC_RANK.replace(":idMC", activeIdWork.toString()).replace(":numPart", ""
            // this.props.albumStore.activeTrack.numPart.toString()
            );
            //this.props.playerStore.myRouter.tabActiveId = "klassikRank";
            this.props.routerStore.go(path);
        }}/>));
    }
};
VersionsBtn = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("routerStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], VersionsBtn);
exports.VersionsBtn = VersionsBtn;
let InfoWorkSuperior = class InfoWorkSuperior extends React.Component {
    render() {
        const activeTrack = this.props.albumStore.activeTrack;
        if (!activeTrack) {
            return null;
        }
        return (<div>
        {activeTrack.composer} <b>{activeTrack.itemName}</b>
      </div>);
    }
};
InfoWorkSuperior = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], InfoWorkSuperior);
exports.InfoWorkSuperior = InfoWorkSuperior;
let InfoWorkInferior = class InfoWorkInferior extends React.Component {
    render() {
        const activeTrack = this.props.albumStore.activeTrack;
        if (!activeTrack) {
            return null;
        }
        return <div>activeTrack.credits</div>;
    }
};
InfoWorkInferior = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], InfoWorkInferior);
exports.InfoWorkInferior = InfoWorkInferior;
class DzPlayBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }
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
        var button = this.state.isPlaying ? (<Icon.PauseCircle className="play-button" onClick={() => togglePlayer_1.default()}/>) : (<Icon.PlayCircle className="play-button" onClick={() => togglePlayer_1.default()}/>);
        return <div>{button}</div>;
    }
}
exports.DzPlayBtn = DzPlayBtn;
exports.default = TrackListPlayerDFlow;
//# sourceMappingURL=TrackListPlayerDFlow.jsx.map
