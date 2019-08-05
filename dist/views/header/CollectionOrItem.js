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
var CollectionOrItem = (function (_super) {
    __extends(CollectionOrItem, _super);
    function CollectionOrItem(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {};
        return _this;
    }
    CollectionOrItem.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Menu, { size: "tiny", compact: true, items: ["Collection"], onItemClick: this.props.onClick }));
    };
    CollectionOrItem.defaultProps = {};
    return CollectionOrItem;
}(React.Component));
exports.default = CollectionOrItem;
