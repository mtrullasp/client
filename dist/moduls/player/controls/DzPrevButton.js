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
var DzPrevButton = (function (_super) {
    __extends(DzPrevButton, _super);
    function DzPrevButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DzPrevButton.prototype.render = function () {
        return (React.createElement(Icon.Rewind, { className: "player-button little", onClick: function () { return DZ.player.prev(); } }));
    };
    return DzPrevButton;
}(React.Component));
exports.default = DzPrevButton;
