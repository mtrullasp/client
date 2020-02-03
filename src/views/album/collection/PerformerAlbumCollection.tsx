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
    return (
      <div>
        <AlbumCollection />
      </div>
    );
  }
}

export default PerformerAlbumCollection;
