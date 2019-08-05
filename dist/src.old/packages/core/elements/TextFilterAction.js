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
var typestyle_1 = require("typestyle");
var constants_1 = require("../../../util/constants");
var TextField_1 = require("@material-ui/core/TextField/TextField");
var TextFilterAction = (function (_super) {
    __extends(TextFilterAction, _super);
    function TextFilterAction(props, context) {
        return _super.call(this, props, context) || this;
    }
    TextFilterAction.prototype.render = function () {
        var _this = this;
        return (React.createElement(TextField_1.default, { placeholder: this.props.placeHolder, className: typestyle_1.style({
                width: "100%",
                fontSize: 30,
                fontFamily: constants_1.SLIM_JOE,
                lineHeight: "30px"
            }), margin: "none", onBlur: function (e) {
                debugger;
                if (e.target.value.length >= _this.props.minLenght) {
                    _this.props.onSearch(e.target.value);
                }
            } }));
    };
    TextFilterAction.defaultProps = {
        minLenght: 3
    };
    return TextFilterAction;
}(React.Component));
exports.default = TextFilterAction;
