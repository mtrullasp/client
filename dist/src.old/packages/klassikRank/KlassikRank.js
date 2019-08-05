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
var constants_1 = require("../../util/constants");
var ActionBar_1 = require("../core/elements/ActionBar");
var react_router_1 = require("react-router");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var paleta_1 = require("../../util/paleta");
var IconButton_1 = require("@material-ui/core/IconButton");
var ExpandLess_1 = require("@material-ui/icons/ExpandLess");
var ExpandMore_1 = require("@material-ui/icons/ExpandMore");
var PageObject_1 = require("../core/elements/PageObject");
var KlassikRank = (function (_super) {
    __extends(KlassikRank, _super);
    function KlassikRank(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (!!_this.props.match.params.idWork) {
            _this.props.appState.worksStore.loadTracksByWork(_this.props.match.params.idWork, _this.props.match.params.numPart);
        }
        return _this;
    }
    KlassikRank.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.myRouter.activeRouterConfigItem) {
            return null;
        }
        if (!this.props.appState.activeKlassikRanks) {
            return null;
        }
        var actionBar = (React.createElement("div", { style: {
                height: 30,
                marginBottom: 10,
                marginTop: 5,
                marginLeft: 0,
                marginRight: 0
            } },
            React.createElement(ActionBar_1.default, { actions: this.props.appState.myRouter.activeRouterConfigItem.actions })));
        var configItem = this.props.appState.myRouter.myRouterConfig.find(function (t) { return t.id === "klassikRank"; });
        var onAlbumClick = function (p) {
            _this.props.appState.setActiveAlbum(p.idAlbum);
            _this.props.appState.go(constants_1.ROUTE_TRACKLIST);
        };
        var items = this.props.appState.activeKlassikRanksOrdered.map(function (k, index) {
            return (React.createElement(react_flexbox_grid_1.Row, { className: typestyle_1.style({ marginBottom: 5 }) },
                React.createElement(react_flexbox_grid_1.Col, { lg: 1, className: typestyle_1.style({
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }) },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(IconButton_1.default, { onClick: function () {
                                    _this.props.appState.toogleKlassikRanks(index, index - 1);
                                } },
                                React.createElement(ExpandLess_1.default, null)))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, null,
                            React.createElement("span", { style: {
                                    color: paleta_1.default.color200,
                                    fontFamily: constants_1.FONT_FAT,
                                    fontSize: 40,
                                    fontWeight: 600
                                } }, k.nOrder))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(IconButton_1.default, { onClick: function () {
                                    _this.props.appState.toogleKlassikRanks(index, index + 1);
                                } },
                                React.createElement(ExpandMore_1.default, null))))),
                React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                    React.createElement("img", { onClick: function () {
                            _this.props.appState.playTracks(_this.props.appState.activeTracks.map(function (a) { return a.idTrack; }), index);
                        }, src: k.coverMedium, style: { width: "100%", height: "auto", cursor: "pointer" } })),
                React.createElement(react_flexbox_grid_1.Col, { lg: 8 },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement("span", { style: {
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    fontSize: 20,
                                    fontWeight: 700
                                } }, k.albumName))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement("span", { style: {
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    fontSize: 20,
                                    fontWeight: 500
                                } }, k.title))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement("span", { style: {
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    fontSize: 18,
                                    fontWeight: 300
                                } },
                                React.createElement("i", null, k.mainArtists)))))));
        });
        var content = React.createElement("div", null, items);
        return (React.createElement(PageObject_1.default, { actionBar: actionBar, content: content, configItem: configItem, fontSize: 16 }));
    };
    KlassikRank.defaultProps = {};
    KlassikRank = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], KlassikRank);
    return KlassikRank;
}(React.Component));
exports.default = react_router_1.withRouter(KlassikRank);
