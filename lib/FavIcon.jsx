"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
const fav = require("./img/favicon.png");
class FavIcon extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div onClick={this.props.onClick} style={{ cursor: "pointer" }}>
        <semantic_ui_react_1.Image src={fav} fluid/>
      </div>);
    }
}
exports.default = FavIcon;
//# sourceMappingURL=FavIcon.jsx.map