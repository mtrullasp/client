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
var helperFunctions_1 = require("../../../util/helperFunctions");
var rewind_1 = require("./rewind");
var forward_1 = require("./forward");
var mobx_react_1 = require("mobx-react");
require("../styles/style.css");
var const_1 = require("../../../lab/const");
var DZ = window.DZ;
var promise = new Promise(function (resolve, reject) {
    true ? resolve("Stuff worked!") : reject(Error("It broke"));
});
var Controls = (function (_super) {
    __extends(Controls, _super);
    function Controls(props) {
        var _this = _super.call(this, props) || this;
        _this.setVolume = function (event) {
            var vol = _this.getVolPercent(event);
            _this.line.current.style.height = _this.ball.current.style.bottom = vol + "%";
            DZ.player.setVolume(vol);
        };
        _this.changeIsPlaying = function () {
            _this.setState({ isPlaying: !DZ.player.isPlaying() }, function () {
                return DZ.player.isPlaying() ? DZ.player.pause() : DZ.player.play();
            });
        };
        _this.changeTrack = function () {
            _this.setState({
                isPlaying: true
            }, function () {
                DZ.player.pause();
                _this.state.repeat
                    ? DZ.player.playTracks([_this.props.track.id])
                    : helperFunctions_1.random(_this.props);
            });
        };
        _this.rewind = function () {
        };
        _this.state = {
            repeat: false,
            mouseDown: false
        };
        _this.progress = React.createRef();
        _this.line = React.createRef();
        _this.ball = React.createRef();
        return _this;
    }
    Controls.prototype.onMouseUp = function (event) {
        if (this.state.mouseDown) {
            this.setState({ mouseDown: false });
            this.setVolume(event);
        }
    };
    Controls.prototype.onMouseDown = function (event) {
        this.setState({ mouseDown: true });
        this.setVolume(event);
    };
    Controls.prototype.onMouseMove = function (event) {
        if (!this.state.mouseDown) {
            return;
        }
        this.setVolume(event);
    };
    Controls.prototype.onMouseLeave = function () {
        this.setState({ mouseDown: false });
    };
    Controls.prototype.getVolPercent = function (_a) {
        var currentTarget = _a.currentTarget, clientY = _a.clientY;
        var _b = currentTarget.getBoundingClientRect(), top = _b.top, bottom = _b.bottom, height = _b.height;
        if (clientY <= top) {
            return 100;
        }
        if (clientY >= bottom) {
            return 0;
        }
        var vol = 100 - ((clientY - top) / height) * 100;
        if (vol <= 5.5) {
            return 0;
        }
        return vol;
    };
    Controls.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "no_controls" },
            React.createElement("button", null,
                React.createElement("img", { src: const_1.default.volume, alt: "" }),
                React.createElement("div", { className: "volumeSlider", ref: this.progress, onMouseUp: function (ev) { return _this.onMouseUp(ev); }, onMouseDown: function (ev) { return _this.onMouseDown(ev); }, onMouseLeave: function (ev) { return _this.onMouseLeave(); }, onMouseMove: function (ev) { return _this.onMouseMove(ev); } },
                    React.createElement("div", { className: "volumeSlider__lineWrapper" },
                        React.createElement("div", { className: "volumeSlider__bgLine" }),
                        React.createElement("div", { className: "volumeSlider__currentLine", ref: this.line }),
                        React.createElement("div", { className: "volumeSlider__ball", ref: this.ball })))),
            React.createElement("button", null,
                React.createElement(rewind_1.default, { onClick: this.props.playerStore.playerPrev() })),
            React.createElement("button", { onClick: this.changeIsPlaying },
                React.createElement("img", { src: this.props.playerStore.playerIsPlaying
                        ? "/assets/img/pause.png"
                        : const_1.default.play, alt: "" })),
            React.createElement("button", null,
                React.createElement(forward_1.default, { onClick: function () {
                        _this.props.playerStore.playerNext();
                    } })),
            React.createElement("button", null,
                React.createElement("img", { src: this.state.repeat ? const_1.default.repeatBlue : const_1.default.repeatWhite, onClick: function () {
                        DZ.player.setRepeat(_this.state.repeat ? 0 : 2);
                        _this.setState({ repeat: !_this.state.repeat });
                    }, alt: "" }))));
    };
    Controls = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], Controls);
    return Controls;
}(React.Component));
var mapStateToProps = function (_a) {
    var track = _a.track, prev = _a.prev, chosenPlaylist = _a.chosenPlaylist, album = _a.album, flow = _a.flow, artist = _a.artist, artistPlaylist = _a.artistPlaylist;
    return ({
        track: track,
        prev: prev,
        chosenPlaylist: chosenPlaylist,
        album: album,
        flow: flow,
        artist: artist,
        artistPlaylist: artistPlaylist
    });
};
exports.default = Controls;
