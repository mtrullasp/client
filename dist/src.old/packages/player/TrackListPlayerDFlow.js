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
require("./styles/TrackListPlayerDFlow.less");
require("./styles/TrackListPlayerDFlow.overrides.less");
var Icon = require("react-feather");
var mobx_react_1 = require("mobx-react");
var constants_1 = require("../../util/constants");
var togglePlayer_1 = require("./togglePlayer");
var DzFlowList_1 = require("./controls/DzFlowList");
var DZ = window.DZ;
var TrackListPlayerDFlow = (function (_super) {
    __extends(TrackListPlayerDFlow, _super);
    function TrackListPlayerDFlow(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            user: "mtrullasp"
        };
        return _this;
    }
    TrackListPlayerDFlow.prototype.componentDidMount = function () {
        var thisReact = this;
    };
    TrackListPlayerDFlow.prototype.render = function () {
        return this.state.user ? (this.renderApp()) : (React.createElement("div", { className: "loader-container" },
            React.createElement("img", { className: "logo", src: "/dflow.svg", alt: "logo" }),
            React.createElement("div", { className: "spinner-circle" }),
            React.createElement("div", { className: "loader" },
                React.createElement("div", { className: "spinner" }),
                React.createElement("div", { className: "spinner" }))));
    };
    TrackListPlayerDFlow.prototype.renderApp = function () {
        return (React.createElement("div", null,
            React.createElement("div", { style: {
                    position: "relative",
                    right: 0,
                    width: "40%'"
                } },
                React.createElement(DzFlowList_1.default, null))));
    };
    TrackListPlayerDFlow = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], TrackListPlayerDFlow);
    return TrackListPlayerDFlow;
}(React.Component));
var FavBtn = (function (_super) {
    __extends(FavBtn, _super);
    function FavBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FavBtn.prototype.render = function () {
        var _this = this;
        return (React.createElement(Icon.Heart, { style: this.props.appState.activeTrackIsFavorite ? { fill: "black" } : {}, className: "player-button", onClick: function () {
                return _this.props.appState.toggleFavoriteTrack(_this.props.appState.activeTrack.idTrack);
            } }));
    };
    FavBtn = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], FavBtn);
    return FavBtn;
}(React.Component));
exports.FavBtn = FavBtn;
var VersionsBtn = (function (_super) {
    __extends(VersionsBtn, _super);
    function VersionsBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VersionsBtn.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.activeTrack) {
            return null;
        }
        return (!!this.props.appState.activeTrack &&
            !!this.props.appState.activeTrack.idWork && (React.createElement(Icon.Music, { className: "player-button", onClick: function () {
                var activeIdWork = _this.props.appState.activeTrack.idWork;
                var path = constants_1.ROUTE_KLASSIC_RANK.replace(":idWork", activeIdWork.toString()).replace(":numPart", _this.props.appState.activeTrack.numPart.toString());
                _this.props.appState.myRouter.tabActiveId = "klassikRank";
                _this.props.appState.go(path);
            } })));
    };
    VersionsBtn = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], VersionsBtn);
    return VersionsBtn;
}(React.Component));
exports.VersionsBtn = VersionsBtn;
var InfoWorkSuperior = (function (_super) {
    __extends(InfoWorkSuperior, _super);
    function InfoWorkSuperior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoWorkSuperior.prototype.render = function () {
        var activeTrack = this.props.appState.activeTrack;
        if (!activeTrack) {
            return null;
        }
        return (React.createElement("div", null,
            activeTrack.composerName,
            " ",
            React.createElement("b", null, activeTrack.title)));
    };
    InfoWorkSuperior = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], InfoWorkSuperior);
    return InfoWorkSuperior;
}(React.Component));
exports.InfoWorkSuperior = InfoWorkSuperior;
var InfoWorkInferior = (function (_super) {
    __extends(InfoWorkInferior, _super);
    function InfoWorkInferior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoWorkInferior.prototype.render = function () {
        var activeTrack = this.props.appState.activeTrack;
        if (!activeTrack) {
            return null;
        }
        return React.createElement("div", null, "activeTrack.credits");
    };
    InfoWorkInferior = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], InfoWorkInferior);
    return InfoWorkInferior;
}(React.Component));
exports.InfoWorkInferior = InfoWorkInferior;
var DzPlayBtn = (function (_super) {
    __extends(DzPlayBtn, _super);
    function DzPlayBtn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isPlaying: false
        };
        return _this;
    }
    DzPlayBtn.prototype.componentDidMount = function () {
        var that = this;
        DZ.Event.subscribe("player_play", function () {
            that.setState({ isPlaying: true });
        });
        DZ.Event.subscribe("player_paused", function () {
            that.setState({ isPlaying: false });
        });
    };
    DzPlayBtn.prototype.render = function () {
        var button = this.state.isPlaying ? (React.createElement(Icon.PauseCircle, { className: "play-button", onClick: function () { return togglePlayer_1.default(); } })) : (React.createElement(Icon.PlayCircle, { className: "play-button", onClick: function () { return togglePlayer_1.default(); } }));
        return React.createElement("div", null, button);
    };
    return DzPlayBtn;
}(React.Component));
exports.DzPlayBtn = DzPlayBtn;
exports.default = TrackListPlayerDFlow;
