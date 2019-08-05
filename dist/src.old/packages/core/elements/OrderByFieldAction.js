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
var constants_1 = require("../../../util/constants");
var ActionButton_1 = require("./ActionButton");
var OrderByFieldAction = (function (_super) {
    __extends(OrderByFieldAction, _super);
    function OrderByFieldAction(props, context) {
        return _super.call(this, props, context) || this;
    }
    OrderByFieldAction.prototype.render = function () {
        var _this = this;
        return this.props.active ? (React.createElement(ActionButton_1.default, { primary: this.props.primary, onClick: function () {
                _this.props.onClick(_this.props.id);
            } }, this.props.desc)) : (React.createElement("span", { style: {
                cursor: "pointer",
                fontSize: 12,
                fontFamily: constants_1.ELEGANT_FONT,
                fontWeight: "normal",
                marginLeft: 2
            }, onClick: function () { return _this.props.onClick(_this.props.id); } }, this.props.desc));
    };
    OrderByFieldAction.defaultProps = {
        primary: false
    };
    return OrderByFieldAction;
}(React.Component));
exports.default = OrderByFieldAction;
