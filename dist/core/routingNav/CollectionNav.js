"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var CollectionNav = function (props) { return (React.createElement(semantic_ui_react_1.Button.Group, { basic: true, size: "small" },
    React.createElement(semantic_ui_react_1.Button, { disabled: !props.isEnabledPrevious, icon: "chevron left", onClick: function () { return props.onClickPrevious(); }, negative: true }),
    React.createElement(semantic_ui_react_1.Button, { disabled: !props.isEnabledNext, icon: "chevron right", onClick: function () { return props.onClickNext(); }, negative: true }))); };
exports.default = CollectionNav;
