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
var shufflejs_1 = require("shufflejs");
var ShuffleMasonryGrid = (function (_super) {
    __extends(ShuffleMasonryGrid, _super);
    function ShuffleMasonryGrid(props, context) {
        return _super.call(this, props, context) || this;
    }
    ShuffleMasonryGrid.prototype.render = function () {
        return (React.createElement(shufflejs_1.default, null));
    };
    return ShuffleMasonryGrid;
}(React.Component));
exports.default = ShuffleMasonryGrid;
