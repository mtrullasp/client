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
require("./css/style.css");
var semantic_ui_react_1 = require("semantic-ui-react");
var Button3d = (function (_super) {
    __extends(Button3d, _super);
    function Button3d(props, context) {
        return _super.call(this, props, context) || this;
    }
    Button3d.prototype.render = function () {
        return (React.createElement("div", { className: "button3d-container", style: __assign({ position: "absolute", top: this.props.top, left: this.props.left, height: "unset", lineHeight: "0px", verticalAlign: "middle" }, this.props.style), onClick: this.props.onClick },
            React.createElement("li", { id: "LI_1" }, this.props.isIcon ? (React.createElement("a", { id: "A_2", style: __assign({}, this.props.childStyle) },
                React.createElement("span", { id: "SPAN_3", style: { width: 10, textAlign: "center" } },
                    React.createElement(semantic_ui_react_1.Icon, { name: this.props.text, size: this.props.size || "large", style: __assign({ marginTop: -10, textAlign: "center", position: "relative", left: -5, top: 2 }, this.props.iconStyle) })))) : (React.createElement("a", { id: "A_2", style: __assign({}, this.props.childStyle) },
                React.createElement("span", { id: "SPAN_3", style: __assign({}, this.props.childStyle) }, this.props.text))))));
    };
    return Button3d;
}(React.Component));
exports.default = Button3d;
