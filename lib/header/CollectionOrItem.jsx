"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
class CollectionOrItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (<semantic_ui_react_1.Menu size="small" compact={true} items={["Collection"]} onItemClick={this.props.onClick}/>);
    }
}
CollectionOrItem.defaultProps = {};
exports.default = CollectionOrItem;
//# sourceMappingURL=CollectionOrItem.jsx.map