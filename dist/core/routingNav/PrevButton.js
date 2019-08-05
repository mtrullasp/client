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
require("./PrevButton.css");
var PrevButton = (function (_super) {
    __extends(PrevButton, _super);
    function PrevButton(props, context) {
        return _super.call(this, props, context) || this;
    }
    PrevButton.prototype.render = function () {
        return (React.createElement("div", { id: "DIV_1" },
            React.createElement("div", { id: "DIV_2" }),
            React.createElement("svg", { id: "svg_3" },
                React.createElement("rect", { id: "rect_4" }),
                React.createElement("rect", { id: "rect_5" }),
                React.createElement("rect", { id: "rect_6" }),
                React.createElement("circle", { id: "circle_7" }))));
    };
    return PrevButton;
}(React.Component));
exports.default = PrevButton;
