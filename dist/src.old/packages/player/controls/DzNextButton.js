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
var Icon = require("react-feather");
var DZ = window.DZ;
var DzNextButton = (function (_super) {
    __extends(DzNextButton, _super);
    function DzNextButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DzNextButton.prototype.render = function () {
        return (React.createElement(Icon.FastForward, { className: "player-button", onClick: function () { return DZ.player.next(); } }));
    };
    return DzNextButton;
}(React.Component));
exports.default = DzNextButton;
