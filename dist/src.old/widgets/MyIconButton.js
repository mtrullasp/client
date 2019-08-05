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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DEFAULT_SIZE = 40;
var MyIconButton = (function (_super) {
    __extends(MyIconButton, _super);
    function MyIconButton(props, context) {
        return _super.call(this, props, context) || this;
    }
    MyIconButton.prototype.render = function () {
        return (React.createElement("div", { className: this.props.className || "", style: __assign({ cursor: "pointer", width: this.props.size || DEFAULT_SIZE, height: DEFAULT_SIZE }, (this.props.style || {})), onClick: this.props.onClick }, this.props.children));
    };
    return MyIconButton;
}(React.Component));
exports.default = MyIconButton;
