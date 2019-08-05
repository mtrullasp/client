"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
class ComposersWorksPerformers extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (<semantic_ui_react_1.Menu size="small" compact={true} activeIndex={this.props.activeIndex} items={["Composers", "Works", "Performers"]} onItemClick={this.props.onItemClick}/>);
    }
}
ComposersWorksPerformers.defaultProps = {};
exports.default = ComposersWorksPerformers;
//# sourceMappingURL=ComposersWorksPerformers.jsx.map