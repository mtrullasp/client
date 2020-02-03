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
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_1 = require("mobx-react");
var IconPlaying_1 = require("../../../moduls/player/controls/IconPlaying");
var typestyle_1 = require("typestyle");
var paleta_1 = require("../../../styles/paleta");
var PlayListWork = (function (_super) {
    __extends(PlayListWork, _super);
    function PlayListWork(props, context) {
        return _super.call(this, props, context) || this;
    }
    PlayListWork.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var renderBlock = (React.createElement(semantic_ui_react_1.Table, { selectable: true, basic: "very", padded: true, compact: true },
            React.createElement(semantic_ui_react_1.Table.Header, null,
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.HeaderCell, { colSpan: "3" },
                        !!this.props.composerName && (React.createElement("h2", { onClick: function (e) {
                                _this.props.composerStore.setActiveComposerId(_this.props.composerId);
                                _this.props.composerStore.goArtist(_this.props.composerId);
                            }, style: { margin: 0, cursor: "pointer" } }, this.props.composerName)),
                        React.createElement("h3", { style: { margin: 0, padding: 0 } },
                            React.createElement("b", null,
                                this.props.work.workName,
                                ". "),
                            React.createElement("span", { style: { fontWeight: "normal" } }, this.props.work.workItemName))))),
            React.createElement(semantic_ui_react_1.Table.Body, null, (_b = (_a = this.props.work) === null || _a === void 0 ? void 0 : _a.tracks) === null || _b === void 0 ? void 0 : _b.map(function (t, iTr) {
                return (React.createElement(semantic_ui_react_1.Table.Row, { key: iTr, onClick: function () {
                        var _a, _b;
                        _this.props.albumStore.playTracks((_b = (_a = _this.props.work) === null || _a === void 0 ? void 0 : _a.tracks) === null || _b === void 0 ? void 0 : _b.map(function (tr) { return tr.idTrack_DZ; }), t.idrack_DZ_ord, iTr);
                    } },
                    React.createElement(semantic_ui_react_1.Table.Cell, { style: { width: 20, padding: 0 } },
                        React.createElement("div", { style: { opacity: 0.8 } }, _this.props.albumStore.trackIdIsPlaying === t.idTrack_DZ ? (React.createElement(IconPlaying_1.default, null)) : (React.createElement(semantic_ui_react_1.Icon, { name: "play", className: typestyle_1.style({
                                color: paleta_1.default.color200,
                                $nest: {
                                    "&:hover": {
                                        color: paleta_1.default.color800
                                    }
                                }
                            }) })))),
                    React.createElement(semantic_ui_react_1.Table.Cell, null,
                        React.createElement("h4", { style: {
                                fontWeight: _this.props.albumStore.trackIdIsPlaying === t.idTrack_DZ
                                    ? 900
                                    : 300
                            } }, t.name)),
                    React.createElement(semantic_ui_react_1.Table.Cell, { collapsing: true, textAlign: "right" },
                        React.createElement("h4", null, _this.props.albumStore.convertSecondsToTimeFormat(t.duration)))));
            }))));
        return renderBlock;
    };
    PlayListWork = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], PlayListWork);
    return PlayListWork;
}(React.Component));
var PlayList = (function (_super) {
    __extends(PlayList, _super);
    function PlayList(props, context) {
        return _super.call(this, props, context) || this;
    }
    PlayList.prototype.render = function () {
        debugger;
        var antComposerName = "";
        var composerName = "";
        return (React.createElement("div", null,
            React.createElement("section", null, this.props.works.map(function (w) {
                if (w.workComposerName === antComposerName) {
                    composerName = null;
                }
                else {
                    composerName = w.workComposerName;
                    antComposerName = composerName;
                }
                return React.createElement(PlayListWork, { work: w, composerName: composerName, composerId: w.workComposerId });
            }))));
    };
    return PlayList;
}(React.Component));
exports.default = PlayList;
