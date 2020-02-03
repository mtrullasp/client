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
var mobx_react_1 = require("mobx-react");
var constants_1 = require("../../util/constants");
var togglePlayer_1 = require("./togglePlayer");
var DzFlowList_1 = require("./controls/DzFlowList");
require("./playerBar.new.scss");
var TextFit_1 = require("../../widgets/TextFit/TextFit");
var semantic_ui_react_1 = require("semantic-ui-react");
var IconFeather = require("react-feather");
var ActiveCredits_1 = require("../../views/album/tracks/ActiveCredits");
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
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("routerStore"),
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
        return (React.createElement(IconFeather.Heart, { style: __assign(__assign(__assign({}, this.props.style), { color: "white", marginTop: 5 }), (this.props.albumStore.activeTrackIsFavorite
                ? { fill: "white" }
                : {})), onClick: function () {
                var _a;
                return _this.props.albumStore.toggleFavoriteTrack((_a = _this.props.albumStore.activeTrack) === null || _a === void 0 ? void 0 : _a.idTrack_DZ);
            } }));
    };
    FavBtn = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("routerStore"),
        mobx_react_1.inject("albumStore"),
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
        if (!this.props.albumStore.activeTrack) {
            return null;
        }
        return (!!this.props.albumStore.activeTrack &&
            !!this.props.albumStore.activeTrack.idMC && (React.createElement(IconFeather.Music, { className: "player-button", onClick: function () {
                var activeIdWork = _this.props.albumStore.activeTrack.idMC;
                var path = constants_1.ROUTE_KLASSIC_RANK.replace(":idMC", activeIdWork.toString()).replace(":numPart", "");
                _this.props.routerStore.go(path);
            } })));
    };
    VersionsBtn = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("routerStore"),
        mobx_react_1.inject("albumStore"),
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
        var activeTrack = this.props.albumStore.activeTrack;
        if (!activeTrack) {
            return "null";
        }
        return (React.createElement("div", null,
            React.createElement(TextFit_1.default, { text: this.props.albumStore.activeTrackComposer +
                    ": " +
                    this.props.albumStore.activeTrackWorkName, maxFontSize: 18 })));
    };
    InfoWorkSuperior = __decorate([
        mobx_react_1.inject("albumStore"),
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
        var _a;
        var activeTrack = this.props.albumStore.activeTrack;
        if (!activeTrack) {
            return null;
        }
        return (React.createElement("div", null,
            React.createElement(ActiveCredits_1.default, { credits: (_a = this.props.albumStore) === null || _a === void 0 ? void 0 : _a.activeTrackPrimaryCredits })));
    };
    InfoWorkInferior = __decorate([
        mobx_react_1.inject("albumStore"),
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
        window.DZ.Event.subscribe("player_play", function () {
            that.setState({ isPlaying: true });
        });
        window.DZ.Event.subscribe("player_paused", function () {
            that.setState({ isPlaying: false });
        });
    };
    DzPlayBtn.prototype.render = function () {
        var button = this.state.isPlaying ? (React.createElement(semantic_ui_react_1.Icon, { className: "pause", onClick: function () { return togglePlayer_1.default(); } })) : (React.createElement(semantic_ui_react_1.Icon, { className: "play", onClick: function () { return togglePlayer_1.default(); } }));
        return React.createElement("div", null, button);
    };
    return DzPlayBtn;
}(React.Component));
exports.DzPlayBtn = DzPlayBtn;
var DzPlayBtnNew = (function (_super) {
    __extends(DzPlayBtnNew, _super);
    function DzPlayBtnNew(props) {
        var _this = _super.call(this, props) || this;
        var that = _this;
        window.DZ.Event.subscribe("player_play", function () {
            that.setState({ isPlaying: true });
        });
        window.DZ.Event.subscribe("player_paused", function () {
            that.setState({ isPlaying: false });
        });
        _this.state = {
            isPlaying: false
        };
        return _this;
    }
    DzPlayBtnNew.prototype.render = function () {
        var className = this.state.isPlaying ? "pause" : "play";
        return (React.createElement(semantic_ui_react_1.Icon, { style: {
                color: "white",
                width: 20,
                cursor: "pointer",
                textAlign: "middle"
            }, size: "big", className: className, onClick: function () { return togglePlayer_1.default(); } }));
    };
    return DzPlayBtnNew;
}(React.Component));
exports.DzPlayBtnNew = DzPlayBtnNew;
exports.default = TrackListPlayerDFlow;
