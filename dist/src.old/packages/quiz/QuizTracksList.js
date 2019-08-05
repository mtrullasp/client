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
var react_flexbox_grid_1 = require("react-flexbox-grid");
var core_1 = require("@material-ui/core");
var constants_1 = require("../../util/constants");
var paleta_1 = require("../../util/paleta");
var MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
var FOOTER_HEIGHT = 60;
var QuizTracksList = (function (_super) {
    __extends(QuizTracksList, _super);
    function QuizTracksList(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { trackHover: -1 };
        return _this;
    }
    QuizTracksList.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.quizBlindTestQuestions) {
            return null;
        }
        var items = this.props.appState.quizBlindTestQuestions.map(function (track, index) {
            return (React.createElement("li", { className: "list-tracks", key: index, style: {
                    listStyle: "none",
                    mixBlendMode: "difference",
                    color: "black"
                } },
                React.createElement(core_1.ListItem, { dense: false, style: {
                        zIndex: 10000,
                        fontFamily: constants_1.FONT_SEMI_SLIM,
                        fontSize: 40,
                        color: index === _this.props.appState.activeTrackIndex
                            ? "white"
                            : "black",
                        lineHeight: "15px",
                        mixBlendMode: "difference",
                        backgroundColor: index === _this.props.appState.activeTrackIndex
                            ? "white"
                            : "white"
                    }, button: true, component: "div", onClick: function () {
                        _this.props.appState.playTracks(_this.props.appState.activeTracks.map(function (a) { return a.idTrack; }), index);
                    } },
                    React.createElement("div", { onMouseEnter: function () {
                            _this.setState({ trackHover: track.IdDeezerTracck });
                        }, onMouseLeave: function () {
                            _this.setState({ trackHover: -1 });
                        }, style: {
                            opacity: _this.state.trackHover === track.IdComposer ? 1 : 1,
                            fontSize: 20,
                            paddingRight: 40,
                            marginLeft: 0,
                            fontFamily: constants_1.ELEGANT_FONT,
                            color: index === _this.props.appState.activeTrackIndex
                                ? "white"
                                : "black",
                            mixBlendMode: "difference",
                            fontWeight: index === _this.props.appState.activeTrackIndex ? 900 : 400
                        } },
                        React.createElement(react_flexbox_grid_1.Row, null,
                            React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                                React.createElement("div", { style: {
                                        display: "inline-block",
                                        color: index === _this.props.appState.activeTrackIndex
                                            ? "white"
                                            : "black"
                                    } },
                                    React.createElement("b", { style: {
                                            fontSize: 24,
                                            fontFamily: constants_1.ELEGANT_FONT,
                                            fontWeight: 100
                                        } },
                                        React.createElement("b", { style: { fontSize: 26 } }, track.NameComposer),
                                        ":",
                                        " ",
                                        track.WorkName,
                                        " ",
                                        track.IdComposer)))),
                        React.createElement(react_flexbox_grid_1.Row, null,
                            React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                                React.createElement("div", { style: {
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        fontWeight: 100,
                                        fontSize: 22,
                                        marginLeft: 20,
                                        marginTop: 4,
                                        color: index === _this.props.appState.activeTrackIndex
                                            ? "white"
                                            : paleta_1.default.color200
                                    } }, track.mainArtistName)))),
                    React.createElement("div", { style: {
                            position: "absolute",
                            margin: 0,
                            marginLeft: 10,
                            right: 5,
                            fontFamily: "Cousine",
                            fontSize: 24,
                            verticalAlign: "middle",
                            color: "black"
                        } }))));
        });
        return (React.createElement(MaxHeightContainer_1.default, { style: {
                fontFamily: constants_1.FONT_SLIM,
                position: "fixed",
                top: 60,
                right: 0,
                left: 0,
                bottom: 0,
                overflowY: "auto",
                width: "100%",
                mixBlendMode: "difference",
                zIndex: 1000
            }, footerHeight: FOOTER_HEIGHT }, items));
    };
    QuizTracksList = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], QuizTracksList);
    return QuizTracksList;
}(React.Component));
exports.default = QuizTracksList;
