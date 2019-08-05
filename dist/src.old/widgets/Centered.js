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
require("../styles/centered.css");
var Centered = (function (_super) {
    __extends(Centered, _super);
    function Centered(props, context) {
        return _super.call(this, props, context) || this;
    }
    Centered.prototype.render = function () {
        return (React.createElement("div", { className: "centered-div" },
            React.createElement("p", null, this.props.children)));
    };
    return Centered;
}(React.Component));
exports.default = Centered;
