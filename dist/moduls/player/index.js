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
require("./styles/style.css");
var mobx_react_1 = require("mobx-react");
var tracks_1 = require("./tracks");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var Typography_1 = require("@material-ui/core/Typography");
var constants_1 = require("../../util/constants");
require("./styles/TrackListPlayerDFlow.less");
var PlayerBar_1 = require("./PlayerBar");
var paleta_1 = require("../../styles/paleta");
var FOOTER_HEIGHT = 60;
var POSITION_NEXT_PREV = 50;
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            pdfNumPage: 1
        };
        return _this;
    }
    Player.prototype.render = function () {
        var marginLeft = 10;
        var header = (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(tracks_1.default, null),
                React.createElement("div", { style: { height: 80 } },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 11 },
                            React.createElement("div", { style: {
                                    marginTop: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    marginLeft: 60,
                                    lineHeight: "80px",
                                    width: "100%"
                                } },
                                React.createElement(Typography_1.default, { style: {
                                        color: "black",
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        fontSize: 35,
                                        fontWeight: 500
                                    } })))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement("div", { style: {
                                marginTop: 0,
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: 70,
                                lineHeight: 80,
                                width: "100%"
                            } },
                            React.createElement("div", { style: {
                                    color: paleta_1.default.color300,
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    fontSize: 25,
                                    fontWeight: 500
                                } })))))));
        var content = (React.createElement("div", { className: "navy" },
            React.createElement("div", { className: "wrapper" },
                React.createElement("div", { className: "NavyPlayer" },
                    React.createElement("div", { className: "background", style: {
                            position: "absolute",
                            top: 80,
                            overflowY: "hidden"
                        } })))));
        return (React.createElement("div", null,
            React.createElement("div", { style: {
                    position: "absolute",
                    top: 80,
                    bottom: 50,
                    left: 0,
                    right: 400,
                    zIndex: 20000,
                    width: "60%"
                } },
                React.createElement("footer", { style: {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: FOOTER_HEIGHT,
                        lineHeight: "70px",
                        backgroundColor: "whitesmoke",
                        opacity: 0.6
                    } },
                    React.createElement(PlayerBar_1.default, null)))));
    };
    Player = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], Player);
    return Player;
}(React.Component));
exports.default = Player;
