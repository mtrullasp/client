"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./iconPlaying.css");
const constants_1 = require("../../../util/constants");
class IconPlaying extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs />
        <g id="icon-equalizer-anim" fill={constants_1.SECOND_ACCENT_COLOR}>
          <rect className="eq__bar" id="eq1" x={1} y={8} width={4} height={8}/>
          <rect className="eq__bar" id="eq2" x={6} y={1} width={4} height={15}/>
          <rect className="eq__bar" id="eq3" x={11} y={4} width={4} height={12}/>
        </g>
      </svg>);
    }
}
exports.default = IconPlaying;
//# sourceMappingURL=IconPlaying.jsx.map