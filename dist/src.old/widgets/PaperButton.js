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
var core_1 = require("@material-ui/core");
var paleta_1 = require("../util/paleta");
var constants_1 = require("../util/constants");
var PaperButton = (function (_super) {
    __extends(PaperButton, _super);
    function PaperButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { isHover: false };
        return _this;
    }
    PaperButton.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Button, { variant: "extendedFab", onClick: this.props.onClick, onMouseEnter: function () {
                _this.setState({ isHover: true });
            }, onMouseLeave: function () {
                _this.setState({ isHover: false });
            }, style: __assign({ width: "auto", padding: this.props.padding, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.8, cursor: "pointer", color: this.state.isHover ? constants_1.PSEUDO_WHITE : constants_1.PSEUDO_BLACK, backgroundColor: this.state.isHover ? paleta_1.default.color600 : "transparent" }, this.props.style) },
            React.createElement("span", { style: { fontSize: this.props.contentFontSize } }, this.props.content)));
    };
    PaperButton.defaultProps = {
        elevationHover: 4,
        elevation: 0,
        paddingRight: 10,
        paddingLeft: 10,
        contentFontSize: 20,
        onClick: function () { },
        style: { lineHeight: "18px" }
    };
    return PaperButton;
}(React.Component));
exports.default = PaperButton;
