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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_flip_toolkit_1 = require("react-flip-toolkit");
var constants_1 = require("../../util/constants");
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
var FlipMoveMasonryGrid = (function (_super) {
    __extends(FlipMoveMasonryGrid, _super);
    function FlipMoveMasonryGrid(props, context) {
        return _super.call(this, props, context) || this;
    }
    FlipMoveMasonryGrid.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_container_dimensions_1.default, null, function (_a) {
            var width = _a.width, height = _a.height;
            width +=
                _this.props.gutter * _this.props.numColumns +
                    constants_1.MARGIN_HORITZONTAL;
            return (React.createElement("div", { style: __assign({}, _this.props.style) },
                React.createElement(react_flip_toolkit_1.Flipper, { flipKey: _this.props.items }, (isFunction(_this.props.items)
                    ? _this.props.items(width / _this.props.numColumns, height / _this.props.numColumns)
                    : _this.props.items).map(function (i) { return (React.createElement(react_flip_toolkit_1.Flipped, { key: i, flipId: i.key },
                    React.createElement("div", { style: { display: "inline-block" } }, i))); }))));
        }));
    };
    FlipMoveMasonryGrid.defaultProps = {
        style: { overflowY: "auto", height: "100%" },
        gutter: 1,
        factorY: 1,
        gridEngine: "stonecutter",
        stiffness: 60,
        damping: 12
    };
    FlipMoveMasonryGrid = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], FlipMoveMasonryGrid);
    return FlipMoveMasonryGrid;
}(React.Component));
exports.default = FlipMoveMasonryGrid;
