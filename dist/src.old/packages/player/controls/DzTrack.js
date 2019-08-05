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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DzTrack = (function (_super) {
    __extends(DzTrack, _super);
    function DzTrack(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            btnText: "Play",
            isPlaying: false
        };
        return _this;
    }
    DzTrack.prototype.render = function () {
        if (this.props.track) {
            var that = this;
            var containerStyle = {
                backgroundImage: "url(" + this.props.track.album.cover_medium + ")"
            };
            document.title =
                this.props.track.title +
                    " - " +
                    this.props.track.artist.name +
                    " - Dflow";
            return (React.createElement("div", { className: "track" },
                React.createElement("div", { className: "background-container", style: containerStyle }),
                React.createElement("div", { className: "album-container" },
                    React.createElement("div", { className: "album" },
                        React.createElement("img", { className: classNames({
                                spin: that.state.isPlaying,
                                "album-art": true
                            }), src: this.props.track.album.cover_medium, alt: "Album Art" })),
                    React.createElement("div", null,
                        React.createElement("div", null,
                            React.createElement("h3", { className: "trackTitle", title: this.props.track.title }, this.props.track.title),
                            React.createElement("h4", { className: "trackArtist", title: this.props.track.artist.name }, this.props.track.artist.name))))));
        }
        return React.createElement("div", null);
    };
    return DzTrack;
}(React.Component));
exports.default = DzTrack;
