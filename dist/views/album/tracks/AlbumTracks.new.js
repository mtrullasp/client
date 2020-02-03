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
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_1 = require("react-router");
var PlayList_1 = require("../playlist/PlayList");
var AlbumTracksNew = (function (_super) {
    __extends(AlbumTracksNew, _super);
    function AlbumTracksNew(props, context) {
        var _this = _super.call(this, props, context) || this;
        props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
        return _this;
    }
    AlbumTracksNew.prototype.render = function () {
        var aStore = this.props.albumStore;
        if (!this.props.albumStore.activeAlbum ||
            !aStore.responseAlbumsTracks) {
            return null;
        }
        var lastIdMC = "";
        var countMC = 0;
        var works = aStore.responseAlbumsTracksAlbumWorksGrouped.map(function (tr, index) {
            return {
                workName: tr.nameWork,
                workItemOrder: tr.idMC_ord,
                workItemName: tr.nameWork,
                workComposerName: tr.composerName,
                workComposerId: tr.composerId,
                tracks: tr.tracks.map(function (t) {
                    return {
                        name: t.name,
                        duration: t.duration,
                        idTrack_DZ: t.idTrack_DZ
                    };
                })
            };
        });
        var renderTrack = (React.createElement("div", null,
            React.createElement(PlayList_1.default, { title: "", works: works })));
        return (React.createElement(semantic_ui_react_1.List, null,
            React.createElement(semantic_ui_react_1.List.Content, null,
                React.createElement("p", { className: "item", style: { marginLeft: 20 } }, renderTrack))));
    };
    AlbumTracksNew.defaultProps = {};
    AlbumTracksNew = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], AlbumTracksNew);
    return AlbumTracksNew;
}(React.Component));
exports.default = react_router_1.withRouter(AlbumTracksNew);
