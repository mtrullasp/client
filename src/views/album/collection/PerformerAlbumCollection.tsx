import * as React from "react";
import TitleBar from "../../../core/layout/TitleBar";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import ComposerCollection from "../../composer/collection/ComposerCollection";
import AlbumCollection from "./AlbumCollection";
import { PerformerStore } from "../../../core/stores/PerformerStore";

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class PerformerAlbumCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    const titleBar = (
      <h1>
        {this.props.albumStore.activeArtistNameMN}.{" "}
        <span style={{ fontWeight: 200 }}>Discography</span>
      </h1>
    );
    return (
      <div>
        <div>
          <TitleBar content={titleBar} />
        </div>
        <div>
          <AlbumCollection />
        </div>
      </div>
    );
  }
}

export default PerformerAlbumCollection;
