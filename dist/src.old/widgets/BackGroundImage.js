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
var BackGroundImage = (function (_super) {
    __extends(BackGroundImage, _super);
    function BackGroundImage(props, context) {
        return _super.call(this, props, context) || this;
    }
    BackGroundImage.prototype.render = function () {
        return (React.createElement("div", null,
            !!this.props.src && React.createElement("div", { style: {
                    backgroundImage: "url(" + this.props.src + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    opacity: this.props.opacity,
                    backgroundBlendMode: "difference"
                } }),
            React.createElement("div", null, this.props.children)));
    };
    BackGroundImage.defaultProps = {
        opacity: 0.8
    };
    return BackGroundImage;
}(React.Component));
exports.default = BackGroundImage;
