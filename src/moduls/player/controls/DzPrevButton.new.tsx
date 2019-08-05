import * as React from "react";
import * as Icon from "react-feather";
import "../playerBar.new.scss";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

export default class DzPrevButtonNew extends React.Component {
  render() {
    return (
      <button className="button rw"  onClick={() => DZ.player.prev()}>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </button>
    );
  }
}
