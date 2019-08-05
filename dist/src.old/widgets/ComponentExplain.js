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
var ComponentExplain = (function (_super) {
    __extends(ComponentExplain, _super);
    function ComponentExplain(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComponentExplain.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "inline-block" } }, this.props.component),
            React.createElement("div", { style: { display: "inline-block", color: "black" } }, this.props.textExplain)));
    };
    return ComponentExplain;
}(React.Component));
exports.default = ComponentExplain;
