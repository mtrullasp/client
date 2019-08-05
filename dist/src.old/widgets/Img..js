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
var Img = (function (_super) {
    __extends(Img, _super);
    function Img(props, context) {
        return _super.call(this, props, context) || this;
    }
    Img.prototype.render = function () {
        if (!this.props.src) {
            return null;
        }
        return (React.createElement("img", { id: this.props.id || "", src: this.props.src, style: { borderRadius: 6, width: this.props.width, height: this.props.height } }));
    };
    Img.defaultProps = {
        width: "auto",
        height: "auto"
    };
    return Img;
}(React.Component));
exports.default = Img;
