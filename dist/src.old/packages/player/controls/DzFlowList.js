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
var mobx_react_1 = require("mobx-react");
var React = require("react");
var Icon = require("../TrackListPlayerDFlow");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var DzTrack_1 = require("./DzTrack");
var dateToStr_1 = require("../dateToStr");
var DZ = window.DZ;
var DzFlowList = (function (_super) {
    __extends(DzFlowList, _super);
    function DzFlowList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            playlist: [],
            track: null
        };
        return _this;
    }
    DzFlowList.prototype.componentDidMount = function () {
        var thisReact = this;
    };
    DzFlowList.prototype.loadMoreTracks = function () {
        var thisReact = this;
        DZ.api("/user/me/flow", function (response) {
            thisReact.setState({
                playlist: thisReact.state.playlist.concat(response.data)
            });
            var ids = response.data.map(function (track) {
                return track.id;
            });
            DZ.player.addToQueue(ids);
        });
    };
    DzFlowList.prototype.playTracks = function (track) {
        var id = track.id;
        var firstIndex = this.state.playlist.indexOf(this.state.playlist.find(function (o) {
            return o.id == id;
        }));
        var tracklist = this.state.playlist.map(function (track) {
            return track.id;
        });
        if (firstIndex !== null) {
            DZ.player.playTracks(tracklist, firstIndex);
        }
        else {
            DZ.player.playTracks(tracklist);
        }
    };
    DzFlowList.prototype.render = function () {
        var _this = this;
        var songs = this.props.appState.activeTracks;
        if (!songs) {
            return null;
        }
        var that = this;
        var listItems = songs.map(function (song, index) {
            var duration = dateToStr_1.default(song.duration);
            var icon = that.state.track === song ? (React.createElement(Icon.Disc, { className: "icon" })) : (React.createElement(Icon.Play, { className: "icon" }));
            return (React.createElement("li", { onClick: function () {
                    _this.props.appState.playTracks(_this.props.appState.activeTracks.map(function (a) { return a.idTrack; }), index);
                }, className: classNames({
                    playing: that.state.track === song,
                    song: true
                }), key: song.idTrack },
                React.createElement(react_flexbox_grid_1.Row, null,
                    React.createElement(react_flexbox_grid_1.Col, { lg: 11 },
                        icon,
                        React.createElement("span", { className: "zong-title", title: song.title },
                            song.credits,
                            React.createElement("br", null),
                            !!song.artist && (React.createElement("small", { className: "artist", title: song.artist.name }, song.artist.name)))),
                    React.createElement(react_flexbox_grid_1.Col, null,
                        React.createElement("span", { className: "duration" }, duration)))));
        });
        return (React.createElement("div", { className: "content" },
            React.createElement(DzTrack_1.default, { track: this.state.track }),
            React.createElement("div", { className: "tracklist" },
                React.createElement("ul", { className: "tracklist-content" },
                    listItems,
                    React.createElement("li", { className: "song" },
                        React.createElement("span", { className: "song-title", onClick: function () { return _this.loadMoreTracks(); } },
                            React.createElement(Icon.PlusCircle, null)))))));
    };
    DzFlowList = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], DzFlowList);
    return DzFlowList;
}(React.Component));
exports.default = DzFlowList;
