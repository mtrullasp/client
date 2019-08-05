"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const constants_1 = require("../util/constants");
const Header_1 = require("../Header");
class TitleBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div style={{
            fontSize: 20,
            color: constants_1.SECOND_ACCENT_COLOR,
            marginLeft: Header_1.HORITZONTAL_MARGIN,
            marginRight: Header_1.HORITZONTAL_MARGIN
        }}>
        {this.props.content}
      </div>);
    }
}
exports.default = TitleBar;
//# sourceMappingURL=TitleBar.jsx.map