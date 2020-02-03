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
var react_router_1 = require("react-router");
var mobx_react_1 = require("mobx-react");
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
var KlassikRankPlayList_1 = require("../../album/playlist/KlassikRankPlayList");
var PlayerBar_new_1 = require("../../../moduls/player/PlayerBar.new");
var IMAGE_SIZE = 200;
var KlassikRank = (function (_super) {
    __extends(KlassikRank, _super);
    function KlassikRank(props, context) {
        var _this = _super.call(this, props, context) || this;
        props.albumStore.getKlassikRank(props.match.params["idMC"], props.match.params["idMCord"]);
        return _this;
    }
    KlassikRank.prototype.render = function () {
        if (!this.props.albumStore.klassikRank) {
            return null;
        }
        var tracks = this.props.albumStore.klassikRank.tracks.map(function (k) {
            return {
                imgCover: k.coverBig,
                name: k.albumName,
                idTrack_DZ: k.idTrack,
                duration: k.duration,
                mainArtists: k.mainArtists
            };
        });
        var works = [
            {
                workName: this.props.albumStore.klassikRank.workName,
                workItemOrder: this.props.albumStore.klassikRank.workItemOrder,
                workItemName: this.props.albumStore.klassikRank.workItemName,
                workComposerName: this.props.albumStore.klassikRank
                    .workComposerName,
                tracks: tracks
            }
        ];
        return (React.createElement(MaxHeightContainer_1.default, { style: { overflowY: "hidden" }, footerHeight: 100 },
            React.createElement(KlassikRankPlayList_1.default, { title: "", works: works }),
            React.createElement("div", { style: {
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 70,
                    overflow: "hidden",
                    background: "#eee",
                    opacity: 0.9
                } },
                React.createElement(PlayerBar_new_1.default, null))));
    };
    KlassikRank.defaultProps = {};
    KlassikRank = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], KlassikRank);
    return KlassikRank;
}(React.Component));
exports.default = react_router_1.withRouter(KlassikRank);
