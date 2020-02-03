import * as React from "react";
//import * as Icon from "react-feather";
import { Icon } from "semantic-ui-react";
// import "../playerBar.new.scss";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

export default class DzPrevButtonNew extends React.Component {
  render() {
    return (
      <Icon
        style={{ color: "white", width: 40, marginLeft: 10, cursor: "pointer" }}
        onClick={() => DZ.player.prev()}
        className={"step backward"}
        size={"large"}
      />
    );
  }
}
