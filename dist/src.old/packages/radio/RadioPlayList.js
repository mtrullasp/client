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
var mobx_react_1 = require("mobx-react");
var PlayerBar_1 = require("../player/PlayerBar");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var core_1 = require("@material-ui/core");
var typestyle_1 = require("typestyle");
var constants_1 = require("../../util/constants");
var RadioPlayList = (function (_super) {
    __extends(RadioPlayList, _super);
    function RadioPlayList(props, context) {
        return _super.call(this, props, context) || this;
    }
    RadioPlayList.prototype.render = function () {
        var track = this.props.appState.radioStore.activeRadioTrack;
        if (!track) {
            return null;
        }
        var tagStyle = {
            fontSize: 18,
            marginRight: 10,
            marginBottom: 10
        };
        return (React.createElement("div", { style: { position: "fixed", bottom: 0, width: "50%" } },
            React.createElement(react_flexbox_grid_1.Grid, { fluid: true },
                React.createElement(react_flexbox_grid_1.Row, null,
                    React.createElement(react_flexbox_grid_1.Col, { lg: 12, className: typestyle_1.style({}) },
                        React.createElement(core_1.Paper, { elevation: 4, style: {} },
                            React.createElement("img", { style: {
                                    background: "transparent",
                                    position: "fixed",
                                    left: constants_1.MARGIN_HORITZONTAL,
                                    top: constants_1.MARGIN_CONTENT_VERTICAL,
                                    height: "auto",
                                    width: "50%",
                                    bottom: 0
                                }, src: track.CoverBig })))),
                React.createElement(react_flexbox_grid_1.Row, { className: typestyle_1.style({
                        padding: 10,
                        margin: 0,
                        backgroundColor: "white",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.9
                    }) },
                    React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                        React.createElement(PlayerBar_1.default, { showNext: false, showPrevious: false })),
                    React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                        React.createElement(react_flexbox_grid_1.Row, null,
                            React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                                React.createElement("span", { style: {
                                        fontSize: 20,
                                        fontWeight: 600,
                                        alignItems: "left"
                                    } }, track.ComposerName))),
                        React.createElement(react_flexbox_grid_1.Row, null,
                            React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                                React.createElement("span", { style: {
                                        fontSize: 20,
                                        fontWeight: 900,
                                        alignItems: "Left"
                                    } }, track.TrackName))))))));
    };
    RadioPlayList.defaultProps = {};
    RadioPlayList = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], RadioPlayList);
    return RadioPlayList;
}(React.Component));
exports.default = RadioPlayList;
