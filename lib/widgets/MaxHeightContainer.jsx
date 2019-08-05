"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const jquery_1 = require("jquery");
window.$ = window.jQuery = jquery_1.default;
class MaxHeightContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        const $el = $(ReactDOM.findDOMNode(this));
        const offsetTop = $el.offset().top;
        $el.css("height", $(window).height() - offsetTop - (this.props.footerHeight || 0) + "px");
    }
    render() {
        return <div style={this.props.style || {}}>{this.props.children}</div>;
    }
}
exports.default = MaxHeightContainer;
//# sourceMappingURL=MaxHeightContainer.jsx.map