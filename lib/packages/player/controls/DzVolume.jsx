"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var DZ = window.DZ;
class DzVolume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: props.volume
        };
    }
    changeVolume(e) {
        DZ.player.setVolume(e.target.value);
    }
    render() {
        return <input type="range" onChange={this.changeVolume}/>;
    }
}
exports.default = DzVolume;
//# sourceMappingURL=DzVolume.jsx.map