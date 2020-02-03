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
require("../playerBar.new.scss");
var mobx_react_1 = require("mobx-react");
var MySlider_1 = require("../../../widgets/MySlider");
var DzProgressNew = (function (_super) {
    __extends(DzProgressNew, _super);
    function DzProgressNew(props, context) {
        return _super.call(this, props, context) || this;
    }
    DzProgressNew.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "info pr", style: {
                display: "inline-flex",
                position: "relative",
                top: 10,
                width: "100%"
            } },
            React.createElement("div", { className: "time", style: { display: "inline-flex", width: "100%" } },
                React.createElement("span", { className: "current-time", style: {
                        display: "inline-flex",
                        marginRight: 10,
                        fontSize: 12,
                        color: "white"
                    } }, this.props.albumStore.activeTrackPositionTime),
                React.createElement(MySlider_1.default, { max: this.props.albumStore.activeTrackDuration, value: this.props.albumStore.activeTrackPosition, step: 0.1, onChange: function (value) {
                        _this.props.albumStore.setDzSeek(value);
                    } }),
                React.createElement("span", { className: "duration", style: {
                        display: "inline-flex",
                        marginLeft: 10,
                        fontSize: 12,
                        color: "white"
                    } }, this.props.albumStore.activeTrackDurationTime))));
    };
    DzProgressNew = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], DzProgressNew);
    return DzProgressNew;
}(React.Component));
exports.default = DzProgressNew;
