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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_flip_move_1 = require("react-flip-move");
var react_container_dimensions_1 = require("react-container-dimensions");
var sc = require("react-stonecutter");
var mobx_react_1 = require("mobx-react");
var SpringGrid = sc.SpringGrid;
var keymap = {
    MOVE_LEFT: "left",
    MOVE_RIGHT: "right",
    MOVE_UP: "up",
    MOVE_DOWN: "down"
};
function isFunction(f) {
    return f instanceof Function;
}
var MasonryGrid = (function (_super) {
    __extends(MasonryGrid, _super);
    function MasonryGrid(props, context) {
        return _super.call(this, props, context) || this;
    }
    MasonryGrid.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_container_dimensions_1.default, null, function (_a) {
            var width = _a.width, height = _a.height;
            return _this.props.items.map(function (i) { return React.createElement(react_flip_move_1.default, null, i); });
        }));
    };
    MasonryGrid.defaultProps = {
        style: { overflowY: "auto", height: "100%" },
        gutter: 1,
        factorY: 1,
        gridEngine: "stonecutter",
        stiffness: 60,
        damping: 12
    };
    MasonryGrid = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], MasonryGrid);
    return MasonryGrid;
}(React.Component));
exports.default = MasonryGrid;
