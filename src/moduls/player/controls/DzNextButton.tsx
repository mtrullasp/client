import * as React from "react";
import * as Icon from "react-feather";
import { inject } from "mobx-react";
import AlbumStore from "../../../core/stores/AlbumStore";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
export default class DzNextButton extends React.Component<IProps> {
  constructor(props: Readonly<IProps>) {
    super(props);
  }

  render() {
    return (
      <Icon.FastForward
        className="player-button little"
        onClick={() => this.props.albumStore.playerNext()}
      />
    );
  }
}

