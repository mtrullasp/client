// import { albumStore } from "../../core/stores/AppStore";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import DzTrack from "./DzTrack";
import * as Icon from "react-feather";
import dateToStr from "../dateToStr";
import {PlayerStore} from "../../../core/stores/PlayerStore";
import AlbumStore from "../../../core/stores/AlbumStore";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

interface IPropsDzFlowList {
  playerStore?: PlayerStore;
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
export default class DzFlowList extends React.Component<IPropsDzFlowList> {
  constructor(props: IPropsDzFlowList) {
    super(props);
    this.state = {
      playlist: [],
      track: null
    };
  }

  state: {
    playlist: Array<any>;
    track: any;
  };

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
    DZ.api("/user/me/flow", function(response) {
      thisReact.setState({
        playlist: thisReact.state.playlist.concat(response.data)
      });
      var ids = response.data.map(function(track) {
        return track.id;
      });
      DZ.player.addToQueue(ids);
    });
  }

  playTracks(track) {
    var id = track.id;
    var firstIndex = this.state.playlist.indexOf(
      this.state.playlist.find(function(o) {
        return o.id == id;
      })
    );
    var tracklist = this.state.playlist.map(function(track) {
      return track.id;
    });
    if (firstIndex !== null) {
      DZ.player.playTracks(tracklist, firstIndex);
    } else {
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
      var duration = dateToStr(song.duration);
      var icon =
        that.state.track === song ? (
          <Icon.Disc className="icon" />
        ) : (
          <Icon.Play className="icon" />
        );

      return (
        <li
          onClick={() => {

            this.props.playerStore.playTracks(
              this.props.albumStore.activeTracks.map(a => a.idDeezerTrack),
              index
            );
          }}
/*
          className={classNames({
            playing: that.state.track === song,
            song: true
          })}
*/
          key={song.idDeezerTrack}
        >
          <Row>
            <Col lg={11}>
              {icon}
              <span className="zong-title" title={song.title}>
                {song.credits}
                <br />
                {!!song.artist && (
                  <small className="artist" title={song.artist.name}>
                    {song.artist.name}
                  </small>
                )}
              </span>
            </Col>
            <Col>
              <span className="duration">{duration}</span>
            </Col>
          </Row>
        </li>
      );
    });

    return (
      <div className="content">
        <DzTrack track={this.state.track} />
        <div className="tracklist">
          <ul className="tracklist-content">
            {listItems}
            <li className="song">
              <span
                className="song-title"
                onClick={() => this.loadMoreTracks()}
              >
                <Icon.PlusCircle />
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
