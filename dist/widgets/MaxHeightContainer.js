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
var ReactDOM = require("react-dom");
var jquery_1 = require("jquery");
var MaxHeightContainer = (function (_super) {
    __extends(MaxHeightContainer, _super);
    function MaxHeightContainer(props, context) {
        return _super.call(this, props, context) || this;
    }
    MaxHeightContainer.prototype.componentDidMount = function () {
        var $el = jquery_1.default(ReactDOM.findDOMNode(this));
        var offsetTop = $el.offset().top;
        $el.css("height", jquery_1.default(window).height() - offsetTop - (this.props.footerHeight || 0) + "px");
    };
    MaxHeightContainer.prototype.render = function () {
        return React.createElement("div", { style: this.props.style || {} }, this.props.children);
    };
    return MaxHeightContainer;
}(React.Component));
exports.default = MaxHeightContainer;
