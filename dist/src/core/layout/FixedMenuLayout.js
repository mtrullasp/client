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
var semantic_ui_react_1 = require("semantic-ui-react");
var constants_1 = require("../../util/constants");
var FixedMenuLayout = (function (_super) {
    __extends(FixedMenuLayout, _super);
    function FixedMenuLayout(props, context) {
        return _super.call(this, props, context) || this;
    }
    FixedMenuLayout.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { style: { minHeight: 40 } }, this.props.headerContent),
            React.createElement(semantic_ui_react_1.Divider, { fitted: true }),
            React.createElement("div", { style: {
                    position: "relative",
                    marginRight: 0,
                    marginLeft: constants_1.MARGIN_HORITZONTAL
                } }, this.props.bodyContent)));
    };
    return FixedMenuLayout;
}(React.Component));
exports.default = FixedMenuLayout;
