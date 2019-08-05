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
var core_1 = require("@material-ui/core");
var PageTitle_1 = require("../layout/PageTitle");
var ObjectBrowser_1 = require("../../widgets/ObjectBrowser");
var mobx_react_1 = require("mobx-react");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var RadioPlayList_1 = require("./RadioPlayList");
var TabUnderlineStroke_1 = require("../../widgets/TabUnderlineStroke");
var constants_1 = require("../../util/constants");
var Radio = (function (_super) {
    __extends(Radio, _super);
    function Radio(props, context) {
        return _super.call(this, props, context) || this;
    }
    Radio.prototype.render = function () {
        var _this = this;
        var tagsCols = this.props.appState.radioStore.tags.map(function (t) {
            return (React.createElement(react_flexbox_grid_1.Col, { lg: true },
                React.createElement("span", null,
                    React.createElement(core_1.Button, { onClick: function () {
                            return _this.props.appState.radioStore.setTrackTag(_this.props.appState.activeTrack.idTrack, t.tag, !t.active);
                        }, size: "medium", variant: "extendedFab", fullWidth: true, color: t.active ? "primary" : "default" }, t.tag))));
        });
        var fontSize = 25;
        var items = [
            {
                id: "fa",
                text: "Full Aleatory Music",
                onClick: function () {
                    _this.props.appState.radioStore.tipusAleatory = "FullAlleatory";
                    _this.props.appState.radioStore.fullAleatoryOn = true;
                    _this.props.appState.radioStore.fullAleatoryOn = false;
                }
            },
            {
                id: "top100",
                text: "100 Top Composers Aleatory Music",
                onClick: function () {
                    _this.props.appState.radioStore.tipusAleatory = "top100";
                    _this.props.appState.radioStore.fullAleatoryOn = true;
                    _this.props.appState.radioStore.fullAleatoryOn = false;
                }
            },
            {
                id: "top200",
                text: "200 Top Composers Aleatory Music",
                onClick: function () {
                    _this.props.appState.radioStore.tipusAleatory = "top200";
                    _this.props.appState.radioStore.fullAleatoryOn = true;
                    _this.props.appState.radioStore.fullAleatoryOn = false;
                }
            },
            {
                id: "top300",
                text: "300 Top Composers Aleatory Music",
                onClick: function () {
                    _this.props.appState.radioStore.tipusAleatory = "top300";
                    _this.props.appState.radioStore.fullAleatoryOn = true;
                    _this.props.appState.radioStore.fullAleatoryOn = false;
                }
            }
        ];
        var content = (React.createElement("div", null,
            React.createElement("div", { style: {
                    position: "absolute",
                    right: constants_1.MARGIN_HORITZONTAL,
                    left: constants_1.MARGIN_HORITZONTAL
                } },
                React.createElement(TabUnderlineStroke_1.default, { style: { position: "absolute", right: 0 }, items: items, selectedItemId: "top100", direction: "vertical" }),
                React.createElement("span", { style: { position: "absolute", right: 200, top: 400 } },
                    "LABEL:",
                    " ",
                    this.props.appState.activeTrackLabelName)),
            React.createElement(RadioPlayList_1.default, null)));
        var header = null;
        return (React.createElement("div", { style: { width: "100%" } },
            React.createElement(PageTitle_1.default, { style: { backgroundColor: "rgba(255,255,255,0.6)" } }),
            React.createElement("div", { style: { position: "relative" } },
                React.createElement(ObjectBrowser_1.default, { header: header, content: content, style: {
                        left: constants_1.MARGIN_HORITZONTAL,
                        position: "absolute",
                        top: 0,
                        overflow: "hidden",
                        paddingTop: 0
                    } }))));
    };
    Radio.defaultProps = {};
    Radio = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], Radio);
    return Radio;
}(React.Component));
exports.default = Radio;
