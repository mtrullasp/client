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
require("../../assets/fonts/Myriad/style.css");
require("./MyText.css");
require("./MyText_Next.css");
var MyText = (function (_super) {
    __extends(MyText, _super);
    function MyText(props, context) {
        return _super.call(this, props, context) || this;
    }
    MyText.prototype.render = function () {
        return (React.createElement("span", { className: "h1 tresdtext " + this.props.additionalClasName }, this.props.text));
    };
    return MyText;
}(React.Component));
exports.default = MyText;
