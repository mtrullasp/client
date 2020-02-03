import * as React from "react";
import AlbumTracksItem from "../views/album/tracks/AlbumItemDetail";
import AlbumStore from "../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import AlbumItemDetailRandom from "../views/album/tracks/AlbumItemDetailRandom";
import ErrorBoundary from "../util/ErrorBoundary";

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class RandomTracks extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    props.albumStore.getRandomTrack.call(props.albumStore);
  }

  render() {
    if (!this.props.albumStore.activeAlbum) {
      return null;
    }
    // return <span>{this.props.albumStore.activeAlbum.idAlbum}</span>
    return (
      <ErrorBoundary>
        <AlbumItemDetailRandom />
      </ErrorBoundary>
    );
  }
}

export default RandomTracks;
