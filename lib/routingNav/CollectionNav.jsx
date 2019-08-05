"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
const CollectionNav = (props) => (<semantic_ui_react_1.Button.Group basic size="small">
    <semantic_ui_react_1.Button disabled={!props.isEnabledPrevious} icon="chevron left" onClick={() => props.onClickPrevious()} negative/>
    <semantic_ui_react_1.Button disabled={!props.isEnabledNext} icon="chevron right" onClick={() => props.onClickNext()} negative/>
  </semantic_ui_react_1.Button.Group>);
exports.default = CollectionNav;
//# sourceMappingURL=CollectionNav.jsx.map