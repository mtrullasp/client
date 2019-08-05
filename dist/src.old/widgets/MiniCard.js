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
var Divider_1 = require("@material-ui/core/es/Divider/Divider");
var constants_1 = require("../util/constants");
var MiniCard = (function (_super) {
    __extends(MiniCard, _super);
    function MiniCard(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { isMouseHover: false };
        return _this;
    }
    MiniCard.prototype.render = function () {
        var _this = this;
        var color = 240;
        return (React.createElement("div", { className: "minicard " + this.props.itemType, style: {
                background: "transparent",
                color: constants_1.PSEUDO_BLACK,
                minHeight: 80,
                border: "1px solid f0f0f0"
            }, onMouseEnter: function () {
                _this.setState({ isMouseHover: true });
            }, onMouseLeave: function () {
                _this.setState({ isMouseHover: false });
            }, onClick: this.props.onClick },
            React.createElement("header", null,
                React.createElement("p", { style: {
                        position: "relative",
                        top: 8,
                        color: constants_1.PSEUDO_BLACK,
                        fontWeight: 800,
                        fontSize: 16,
                        display: "inline-block",
                        verticalAlign: "middle"
                    } },
                    React.createElement("div", null, this.props.headerTitle))),
            React.createElement(Divider_1.default, null),
            React.createElement("section", { style: { marginTop: 0, marginLeft: 0, fontSize: 16 } }, this.props.children)));
    };
    MiniCard.defaultProps = {
        elevation: 0
    };
    return MiniCard;
}(React.Component));
exports.default = MiniCard;
