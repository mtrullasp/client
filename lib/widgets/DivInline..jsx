"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class DivInline extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div style={Object.assign({ display: "inline-block" }, this.props.style)} className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </div>);
    }
}
DivInline.defaultProps = {
    style: {},
    className: "",
    onClick: null
};
exports.default = DivInline;
//# sourceMappingURL=DivInline..jsx.map