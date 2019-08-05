import * as React from "react";
import "../playerBar.new.scss";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

export default class DzNextButtonNew extends React.Component {
  render() {
    return (
      <button className="button ff"  onClick={() => DZ.player.next()}>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </button>
    );
  }
}
