import * as React from "react";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

interface IPropsDzVolume {
  volume: number;
}
export default class DzVolume extends React.Component<IPropsDzVolume> {
  constructor(props: IPropsDzVolume) {
    super(props);
    this.state = {
      volume: props.volume
    };
  }

  changeVolume(e) {
    DZ.player.setVolume(e.target.value);
  }

  render() {
    return <input type="range" onChange={this.changeVolume} />;
  }
}
