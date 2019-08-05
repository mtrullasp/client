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
var semanticUIReact = require("semantic-ui-react");
var Grid = semanticUIReact.Grid;
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout(props, context) {
        return _super.call(this, props, context) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement(Grid, { celled: true, padded: true, style: { height: "100vh" } },
            React.createElement(Grid.Row, { style: { height: "60px", position: "sticky" } },
                React.createElement(Grid.Column, null, this.props.headerContent)),
            React.createElement(Grid.Row, { style: { height: "100%" } },
                React.createElement(Grid.Column, { stretched: true }, this.props.bodyContent))));
    };
    Layout.defaultProps = {};
    return Layout;
}(React.Component));
exports.default = Layout;
