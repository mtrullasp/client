"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var AlbumTags = (function (_super) {
    __extends(AlbumTags, _super);
    function AlbumTags(props, context) {
        return _super.call(this, props, context) || this;
    }
    AlbumTags.prototype.render = function () {
        return (!!this.props.items &&
            this.props.items.length &&
            this.props.items.map(function (item, index) {
                return (React.createElement(semantic_ui_react_1.Button, { as: "div", positive: false, labelPosition: "left", size: "mini", compact: true, circular: true },
                    React.createElement(semantic_ui_react_1.Label, { as: "a", size: "mini", color: "black" }, item.prompt),
                    React.createElement(semantic_ui_react_1.Button, { size: "mini", compact: true }, item.text),
                    React.createElement("span", { style: { width: 5 } })));
            }));
    };
    return AlbumTags;
}(React.Component));
exports.default = AlbumTags;
