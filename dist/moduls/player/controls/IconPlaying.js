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
require("./iconPlaying.css");
var constants_1 = require("../../../util/constants");
var IconPlaying = (function (_super) {
    __extends(IconPlaying, _super);
    function IconPlaying(props, context) {
        return _super.call(this, props, context) || this;
    }
    IconPlaying.prototype.render = function () {
        return (React.createElement("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
            React.createElement("defs", null),
            React.createElement("g", { id: "icon-equalizer-anim", fill: constants_1.TRUE_ACCENT_COLOR },
                React.createElement("rect", { className: "eq__bar", id: "eq1", x: 1, y: 8, width: 4, height: 8 }),
                React.createElement("rect", { className: "eq__bar", id: "eq2", x: 6, y: 1, width: 4, height: 15 }),
                React.createElement("rect", { className: "eq__bar", id: "eq3", x: 11, y: 4, width: 4, height: 12 }))));
    };
    return IconPlaying;
}(React.Component));
exports.default = IconPlaying;
