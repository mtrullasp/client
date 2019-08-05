import * as React from "react";
import * as Icon from "react-feather";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

export default class DzPrevButton extends React.Component {
  render() {
    return (
      <Icon.Rewind className="player-button little" onClick={() => DZ.player.prev()} />
    );
  }
}
