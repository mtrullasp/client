"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { albumStore } from "../../core/stores/AppStore";
const mobx_react_1 = require("mobx-react");
const React = require("react");
const react_flexbox_grid_1 = require("react-flexbox-grid");
const DzTrack_1 = require("./DzTrack");
const Icon = require("react-feather");
const dateToStr_1 = require("../dateToStr");
var DZ = window.DZ;
let DzFlowList = class DzFlowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: [],
            track: null
        };
    }
    componentDidMount() {
        var thisReact = this;
        //this.loadMoreTracks();
        /*
        DZ.Event.subscribe('current_track', function(newTrack){
          var track = thisReact.state.playlist.find(function(o){
            return o.id == newTrack.track.id;
          });
          thisReact.setState({track: track});
    
          // Auto load next tracks when playing the last track
          var index = thisReact.state.playlist.indexOf(track);
          if (thisReact.state.playlist.length === index + 1 ){
            console.log('load more tracks');
            thisReact.loadMoreTracks();
          }
        });
    */
    }
    loadMoreTracks() {
        var thisReact = this;
        DZ.api("/user/me/flow", function (response) {
            thisReact.setState({
                playlist: thisReact.state.playlist.concat(response.data)
            });
            var ids = response.data.map(function (track) {
                return track.id;
            });
            DZ.player.addToQueue(ids);
        });
    }
    playTracks(track) {
        var id = track.id;
        var firstIndex = this.state.playlist.indexOf(this.state.playlist.find(function (o) {
            return o.id == id;
        }));
        var tracklist = this.state.playlist.map(function (track) {
            return track.id;
        });
        if (firstIndex !== null) {
            DZ.player.playTracks(tracklist, firstIndex);
        }
        else {
            DZ.player.playTracks(tracklist);
        }
    }
    render() {
        //if (this.props.albumStore.activeTracks.length > 0){
        var songs = this.props.albumStore.activeTracks;
        if (!songs) {
            return null;
        }
        var that = this;
        const listItems = songs.map((song, index) => {
            var duration = dateToStr_1.default(song.duration);
            var icon = that.state.track === song ? (<Icon.Disc className="icon"/>) : (<Icon.Play className="icon"/>);
            return (<li onClick={() => {
                this.props.albumStore.playTracks(this.props.albumStore.activeTracks.map(a => a.idDeezerTrack), index);
            }} 
            /*
                      className={classNames({
                        playing: that.state.track === song,
                        song: true
                      })}
            */
            key={song.idDeezerTrack}>
          <react_flexbox_grid_1.Row>
            <react_flexbox_grid_1.Col lg={11}>
              {icon}
              <span className="zong-title" title={song.title}>
                {song.credits}
                <br />
                {!!song.artist && (<small className="artist" title={song.artist.name}>
                    {song.artist.name}
                  </small>)}
              </span>
            </react_flexbox_grid_1.Col>
            <react_flexbox_grid_1.Col>
              <span className="duration">{duration}</span>
            </react_flexbox_grid_1.Col>
          </react_flexbox_grid_1.Row>
        </li>);
        });
        return (<div className="content">
        <DzTrack_1.default track={this.state.track}/>
        <div className="tracklist">
          <ul className="tracklist-content">
            {listItems}
            <li className="song">
              <span className="song-title" onClick={() => this.loadMoreTracks()}>
                <Icon.PlusCircle />
              </span>
            </li>
          </ul>
        </div>
      </div>);
    }
};
DzFlowList = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], DzFlowList);
exports.default = DzFlowList;
//# sourceMappingURL=DzFlowList.jsx.map
