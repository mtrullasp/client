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
var TrackListPlayerDFlow_1 = require("./TrackListPlayerDFlow");
require("./playerBar.new.scss");
var DzPrevButton_new_1 = require("./controls/DzPrevButton.new");
var DzNextButton_new_1 = require("./controls/DzNextButton.new");
var semantic_ui_react_1 = require("semantic-ui-react");
var DzProgress_new_1 = require("./controls/DzProgress.new");
var constants_1 = require("../../util/constants");
var mobx_react_1 = require("mobx-react");
var react_router_dom_1 = require("react-router-dom");
var PlayerBar = (function (_super) {
    __extends(PlayerBar, _super);
    function PlayerBar(props, context) {
        return _super.call(this, props, context) || this;
    }
    PlayerBar.prototype.render = function () {
        var _a, _b;
        var track = this.props.albumStore.activeTrack;
        return (React.createElement("div", { style: { backgroundColor: constants_1.PLAYER_BAR_COLOR } },
            "}>",
            React.createElement(semantic_ui_react_1.Grid, { className: "player", style: { height: "100%" } },
                React.createElement(semantic_ui_react_1.Grid.Row, { columns: 4 },
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: 3, className: "pr", style: { marginTop: 0 } },
                        React.createElement("div", { style: { marginLeft: 0, marginTop: -10 }, className: "" +
                                (this.props.albumStore.playerIsPlaying ? "playing" : "paused") },
                            React.createElement(DzPrevButton_new_1.default, null),
                            React.createElement(TrackListPlayerDFlow_1.DzPlayBtnNew, null),
                            React.createElement(DzNextButton_new_1.default, null),
                            React.createElement(TrackListPlayerDFlow_1.FavBtn, { style: { display: "inline-block", marginLeft: 40, position: "relative", top: 10 } }),
                            React.createElement(react_router_dom_1.Link, { style: { display: "inline-block", marginLeft: 20, marginTop: "-15px", color: "white" }, to: constants_1.ROUTE_WORK_VERSIONS.replace(":idMC", (_a = track) === null || _a === void 0 ? void 0 : _a.idMC).replace(":idMCord", (_b = track) === null || _b === void 0 ? void 0 : _b.idMC_ord.toString()) }, "+Versions"))),
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: 5 },
                        React.createElement(DzProgress_new_1.default, null)),
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: 8 },
                        React.createElement(semantic_ui_react_1.Grid.Row, { columns: 16 },
                            React.createElement(semantic_ui_react_1.Grid.Column, { width: 16 },
                                React.createElement("div", { style: {
                                        display: "block",
                                        marginTop: -10,
                                        fontSize: 11,
                                        color: "white"
                                    } },
                                    React.createElement(TrackListPlayerDFlow_1.InfoWorkSuperior, null)),
                                React.createElement("div", { style: {
                                        display: "block",
                                        fontSize: 14,
                                        color: "white",
                                        marginTop: 10
                                    } },
                                    React.createElement(TrackListPlayerDFlow_1.InfoWorkInferior, null)))))))));
    };
    PlayerBar.defaultProps = {
        showPrevious: true,
        showNext: true
    };
    PlayerBar = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], PlayerBar);
    return PlayerBar;
}(React.Component));
exports.default = PlayerBar;
