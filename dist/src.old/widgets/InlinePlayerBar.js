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
require("rc-slider/assets/index.css");
var React = require("react");
var rc_slider_1 = require("rc-slider");
var mobx_react_1 = require("mobx-react");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var Typography_1 = require("@material-ui/core/Typography");
var paleta_1 = require("../util/paleta");
var IconButton_1 = require("@material-ui/core/IconButton");
var InlinePlayerBar = (function (_super) {
    __extends(InlinePlayerBar, _super);
    function InlinePlayerBar(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleChange = function () { };
        return _this;
    }
    InlinePlayerBar.prototype.render = function () {
        var _this = this;
        if (!this.props.track) {
            return React.createElement("div", { style: { height: 40, marginBottom: 20 } });
        }
        return (React.createElement(react_flexbox_grid_1.Grid, { className: typestyle_1.style({ height: 40, width: "100%" }) },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(IconButton_1.default, { style: { fontSize: 25, width: 40, verticalAlign: "middle" }, className: "icon icon-previous-1", onClick: function () {
                                    _this.props.appState.playerPrev();
                                } })),
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(IconButton_1.default, { style: { fontSize: 40, width: 40, height: "auto" }, className: "icon " + this.props.appState.playerIsPlaying
                                    ? "icon-pause-1"
                                    : "icon-play-1", onClick: function (e) {
                                    e.stopPropagation();
                                    _this.props.appState.playerTogglePlay();
                                } })),
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(IconButton_1.default, { style: { fontSize: 25, width: 40 }, className: "icon icon-next-1", onClick: function () {
                                    _this.props.appState.playerNext();
                                } })))),
                React.createElement(react_flexbox_grid_1.Col, { lg: 10 },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement(Typography_1.default, { style: { color: paleta_1.default.color900, fontSize: this.props.fontSize } }, this.props.track.name))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement(rc_slider_1.default, { min: 0, max: this.props.track.duration, value: this.props.trackProgress, style: { width: "100%" } })))))));
    };
    InlinePlayerBar.defaultProps = {
        fontSize: 12
    };
    InlinePlayerBar = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], InlinePlayerBar);
    return InlinePlayerBar;
}(React.Component));
exports.default = InlinePlayerBar;
