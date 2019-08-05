import * as React from "react";
import AlbumTracksItem from "../views/album/tracks/AlbumTracksItem";
import AlbumStore from "../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class RandomTracks extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    props.albumStore.getRandomTrack();
  }

  render() {
    return <AlbumTracksItem />;
  }
}

export default RandomTracks;
