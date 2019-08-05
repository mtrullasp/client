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
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
var core_1 = require("@material-ui/core");
var constants_1 = require("../../../util/constants");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var FOOTER_HEIGHT = 80;
var Tracks = (function (_super) {
    __extends(Tracks, _super);
    function Tracks(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { trackHover: -1 };
        return _this;
    }
    Tracks.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.activeTracks) {
            return null;
        }
        var fosc = 90;
        var items = this.props.appState.activeTracks.map(function (track, index) {
            debugger;
            var credits = track.credits;
            if (!!credits) {
                credits = credits + " :";
            }
            return (React.createElement("li", { className: "list-tracks", key: index, style: {
                    background: index === _this.props.appState.activeTrackIndex
                        ? "rgba(" + fosc + ", " + fosc + ", " + fosc + ", 0.7)"
                        : "black",
                    listStyle: "none",
                    mixBlendMode: "difference",
                    color: index === _this.props.appState.activeTrackIndex ? "black" : "white"
                } },
                React.createElement(core_1.ListItem, { className: "song", dense: false, style: {
                        zIndex: 10000,
                        fontFamily: constants_1.FONT_SLIM,
                        fontSize: 40,
                        color: "white",
                        lineHeight: "15px",
                        mixBlendMode: "difference"
                    }, button: true, component: "div", onClick: function () {
                        _this.props.appState.playTracks(_this.props.appState.activeTracks.map(function (a) { return a.idTrack; }), index);
                    } },
                    React.createElement("div", { onMouseEnter: function () {
                            _this.setState({ trackHover: track.idTrack });
                        }, onMouseLeave: function () {
                            _this.setState({ trackHover: -1 });
                        }, style: {
                            opacity: _this.state.trackHover === track.idTrack ? 0.8 : 0.8,
                            fontSize: 18,
                            paddingRight: 40,
                            marginLeft: 0,
                            fontFamily: constants_1.ELEGANT_FONT,
                            mixBlendMode: "difference"
                        } },
                        credits,
                        track.composerName,
                        ": ",
                        React.createElement("b", null, track.title)),
                    React.createElement("div", { style: {
                            position: "absolute",
                            margin: 0,
                            marginLeft: 10,
                            right: 5,
                            fontFamily: "Cousine",
                            fontSize: 18,
                            verticalAlign: "middle",
                            color: "white"
                        } }, _this.props.appState.secondsToTimeFormat(track.duration)))));
        });
        return (React.createElement(react_custom_scrollbars_1.default, { className: "tracklist", autoHide: true, autoHideTimeout: 1000, autoHideDuration: 200 },
            React.createElement("p", null, "Some great content..."),
            ">",
            React.createElement(MaxHeightContainer_1.default, { style: {
                    fontFamily: constants_1.FONT_SLIM,
                    position: "fixed",
                    top: 120,
                    right: 0,
                    overflowY: "auto",
                    width: "39%",
                    mixBlendMode: "difference",
                    zIndex: 1000
                }, footerHeight: FOOTER_HEIGHT }, items)));
    };
    Tracks = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], Tracks);
    return Tracks;
}(React.Component));
exports.default = Tracks;
