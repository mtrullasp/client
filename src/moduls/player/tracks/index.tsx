import * as React from "react";
import { inject, observer } from "mobx-react";
import MasonryGrid from "../../../widgets/MasonryGrid/MasonryGrid";
import { Col } from "react-flexbox-grid";
import { ListItem, Paper } from "@material-ui/core";
import {
  ELEGANT_FONT,
  FONT_SEMI_SLIM,
  FONT_SLIM,
  SECONDARY_COLOR
} from "../../../util/constants";
//import Scrollbars from "react-custom-scrollbars";
import {PlayerStore} from "../../../core/stores/PlayerStore";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import AlbumStore from "../../../core/stores/AlbumStore";

const FOOTER_HEIGHT = 80;

interface IProps {
  playerStore?: PlayerStore;
    albumStore?: AlbumStore;
}
@inject("albumStore")
@inject("albumStore")
@observer
class Tracks extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { trackHover: -1 };
  }

  state: {
    trackHover: number;
  };

  render() {
    if (!this.props.albumStore.activeTracks) {
      return null;
    }
    const fosc = 90;
    const items = this.props.albumStore.activeTracks.map((track, index) => {
      debugger ;let credits = track.performers;
      if (!!credits) {
        credits = credits + " :";
      }
      return (
        <li
          className="list-tracks"
          key={index}
          style={{
            background:
              index === this.props.albumStore.activeTrackIndex
                ? `rgba(${fosc}, ${fosc}, ${fosc}, 0.7)`
                : "black",
            listStyle: "none",
            mixBlendMode: "difference",
            color:
              index === this.props.albumStore.activeTrackIndex ? "black" : "white"
          }}
        >
          <ListItem
            className={"song"}
            dense={false}
            style={{
              zIndex: 10000,
              fontFamily: FONT_SLIM,
              fontSize: 40,
              color: "white",
              lineHeight: "15px",
              mixBlendMode: "difference"
            }}
            button
            component="ul"
            onClick={() => {
              this.props.playerStore.playTracks(
                this.props.albumStore.activeTracks.map(a => a.idDeezerTrack),
                index
              );
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
            }}
          >
            <div
              onMouseEnter={() => {
                this.setState({ trackHover: track.idDeezerTrack });
              }}
              onMouseLeave={() => {
                this.setState({ trackHover: -1 });
              }}
              style={{
                opacity: this.state.trackHover === track.idDeezerTrack ? 0.8 : 0.8,
                fontSize: 18,
                paddingRight: 40,
                marginLeft: 0,
                fontFamily: ELEGANT_FONT,
                mixBlendMode: "difference"
              }}
            >
              {credits}{track.composer}: <b>{track.itemName}</b>
            </div>
            <div
              style={{
                position: "absolute",
                margin: 0,
                marginLeft: 10,
                right: 5,
                fontFamily: "Cousine",
                fontSize: 18,
                verticalAlign: "middle",
                color: "white"
              }}
            >
              {this.props.playerStore.secondsToTimeFormat(track.duration)}
            </div>
          </ListItem>
        </li>
      );
    });

    return (
        <MaxHeightContainer
          style={{
            fontFamily: FONT_SLIM,
            position: "fixed",
            top: 120,
            right: 0,
            overflowY: "auto",
            width: "39%",
            mixBlendMode: "difference",
            zIndex: 1000
          }}
          footerHeight={FOOTER_HEIGHT}
        >
          {items}
        </MaxHeightContainer>
    );
  }
}

export default Tracks;

