"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Icon = require("react-feather");
var DZ = window.DZ;
class DzPrevButton extends React.Component {
    render() {
        return (<Icon.Rewind className="player-button little" onClick={() => DZ.player.prev()}/>);
    }
}
exports.default = DzPrevButton;
//# sourceMappingURL=DzPrevButton.jsx.map