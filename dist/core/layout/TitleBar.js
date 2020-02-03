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
var constants_1 = require("../../util/constants");
var TitleBar = (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar(props, context) {
        return _super.call(this, props, context) || this;
    }
    TitleBar.prototype.render = function () {
        return (React.createElement("div", { style: {
                fontSize: 20,
                color: constants_1.TRUE_ACCENT_COLOR
            } }, this.props.content));
    };
    return TitleBar;
}(React.Component));
exports.default = TitleBar;
