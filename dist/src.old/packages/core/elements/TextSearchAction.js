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
var TextField_1 = require("@material-ui/core/TextField/TextField");
var TextSearchAction = (function (_super) {
    __extends(TextSearchAction, _super);
    function TextSearchAction(props, context) {
        return _super.call(this, props, context) || this;
    }
    TextSearchAction.prototype.trigger = function (value) {
        if (value.length >= this.props.minLenght) {
            this.props.onSearch();
        }
    };
    TextSearchAction.prototype.render = function () {
        var _this = this;
        return (React.createElement(TextField_1.default, { autoComplete: "off", style: {
                margin: 0,
                marginRight: 5,
                padding: 0,
                fontSize: 24,
                width: "100%",
                top: 10
            }, value: this.props.value, placeholder: this.props.placeHolder, id: "search", type: "search", margin: "normal", onBlur: this.props.onSearch, onKeyDown: function (e) {
                if (e.keyCode === 13) {
                    _this.props.onSearch();
                }
            }, onChange: function (e) {
                _this.props.onChange(e.target.value);
            } }));
    };
    TextSearchAction.defaultProps = {
        minLenght: 3
    };
    return TextSearchAction;
}(React.Component));
exports.default = TextSearchAction;
