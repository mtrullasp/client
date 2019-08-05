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
var Button_1 = require("@material-ui/core/Button/Button");
var constants_1 = require("../../../util/constants");
var paleta_1 = require("../../../util/paleta");
var ActionButton = (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { isMouseHover: false };
        return _this;
    }
    ActionButton.prototype.render = function () {
        var _this = this;
        var backgroundColor;
        if (this.state.isMouseHover) {
            backgroundColor = this.props.primary ? paleta_1.default.color500 : "#ededed";
        }
        else {
            backgroundColor = this.props.primary ? paleta_1.default.color400 : "white";
        }
        return (React.createElement(Button_1.default, { onMouseEnter: function () { _this.setState({ isMouseHover: true }); }, onMouseLeave: function () { _this.setState({ isMouseHover: false }); }, variant: "text", color: "inherit", mini: true, size: "small", style: __assign({ borderRadius: 0, border: "solid 1px black", cursor: "pointer", fontFamily: constants_1.ELEGANT_FONT, display: "inline", marginLeft: 0, marginRight: 10, backgroundColor: backgroundColor, color: this.props.primary ? "white" : "black", boxShadow: "none" }, this.props.style), onClick: this.props.onClick }, this.props.children));
    };
    ActionButton.defaultProps = {
        onClick: function () { },
        primary: false,
        style: {}
    };
    return ActionButton;
}(React.Component));
exports.default = ActionButton;
