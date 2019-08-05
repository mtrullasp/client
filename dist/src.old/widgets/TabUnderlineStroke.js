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
require("./TabUnderlineStroke.less");
var TabUnderlineStroke = (function (_super) {
    __extends(TabUnderlineStroke, _super);
    function TabUnderlineStroke(props, context) {
        return _super.call(this, props, context) || this;
    }
    TabUnderlineStroke.prototype.render = function () {
        var _this = this;
        var style = this.props.direction === "horitzontal"
            ? { fontSize: this.props.fontSize, top: 0 }
            : { fontSize: this.props.fontSize, display: "block" };
        var items = this.props.items.map(function (im, ix) {
            return (React.createElement("li", { style: style, onClick: function (event) {
                    im.onClick(ix);
                } },
                React.createElement("a", { className: im.id === _this.props.selectedItemId ? "selected" : "" }, im.text)));
        });
        return (React.createElement("div", { style: this.props.style, className: "tab-underline-stroke" },
            React.createElement("nav", { className: "stroke" },
                React.createElement("ul", null, items))));
    };
    TabUnderlineStroke.defaultProps = {
        fontSize: 20,
        direction: "horitzontal",
        style: {}
    };
    return TabUnderlineStroke;
}(React.Component));
exports.default = TabUnderlineStroke;
