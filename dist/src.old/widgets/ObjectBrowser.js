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
var MaxHeightContainer_1 = require("./MaxHeightContainer");
var ObjectBrowser = (function (_super) {
    __extends(ObjectBrowser, _super);
    function ObjectBrowser(props, context) {
        return _super.call(this, props, context) || this;
    }
    ObjectBrowser.prototype.render = function () {
        return (React.createElement("section", { style: __assign({ left: 0, right: 0 }, this.props.style) },
            React.createElement("header", null, this.props.header),
            React.createElement(MaxHeightContainer_1.default, { style: { overflowY: this.props.overflowY, overflowX: "hidden" } }, this.props.content),
            React.createElement("article", { className: "list-objects" }),
            this.props.footer));
    };
    ObjectBrowser.defaultProps = {
        header: null,
        footer: null,
        overflowY: "auto",
    };
    return ObjectBrowser;
}(React.Component));
exports.default = ObjectBrowser;
