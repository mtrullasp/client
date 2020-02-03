import * as React from "react";
import "../playerBar.new.scss";
import { Icon } from "semantic-ui-react";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

export default class DzNextButtonNew extends React.Component {
  render() {
    return (
      <Icon
        style={{color: "white", width: 50, cursor: "pointer"}}
        size={"large"}
        className="step forward"
        onClick={() => DZ.player.next()}
      />
    );
  }
}
