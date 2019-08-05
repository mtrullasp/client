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
var ObjectBrowser_1 = require("../../../widgets/ObjectBrowser");
var PageTitle_1 = require("../../layout/PageTitle");
var constants_1 = require("../../../util/constants");
var typestyle_1 = require("typestyle");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var core_1 = require("@material-ui/core");
var AlbumsList_1 = require("../../albums/collection/AlbumsList");
var ArtistDiscografy = (function (_super) {
    __extends(ArtistDiscografy, _super);
    function ArtistDiscografy(props, context) {
        var _this = _super.call(this, props, context) || this;
        props.appState.activeIdArtistDiscografy = props.match.params.IdArtist.toString();
        return _this;
    }
    ArtistDiscografy.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.activeArtistDiscografy) {
            return null;
        }
        var configItem = this.props.appState.myRouter.myRouterConfig.find(function (t) { return t.id === "albums"; });
        var content = (React.createElement(AlbumsList_1.default, { itemConfig: configItem, items: this.props.appState.activeArtistDiscografy, onClick: function (p) {
                _this.props.appState.setActiveAlbum(p.idAlbum);
                _this.props.appState.go(constants_1.ROUTE_TRACKLIST);
            } }));
        var header = (React.createElement("div", { style: {
                overflow: "hidden",
                margin: 0,
                padding: 0,
                marginTop: 0,
                marginLeft: 0,
                height: 40
            } },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 2, className: typestyle_1.style({ top: -5 }) },
                    React.createElement(core_1.TextField, { id: "filtrecomposers", placeholder: "Filter by Name", className: typestyle_1.style({
                            width: "100%",
                            fontSize: 30,
                            fontFamily: constants_1.SLIM_JOE
                        }), margin: "none", onChange: function (e) {
                            _this.props.appState.filterByComposerNsme(e.target.value);
                        } })),
                React.createElement(react_flexbox_grid_1.Col, { lg: 10, className: typestyle_1.style({ top: 0 }) }, this.props.appState.composerOrderByFields.map(function (o, i) {
                    return i ===
                        _this.props.appState.composerOrderByFieldSelectedIndex ? (React.createElement("div", { style: {
                            cursor: "pointer",
                            fontSize: 16,
                            fontFamily: constants_1.ELEGANT_FONT,
                            fontWeight: "bold",
                            display: "inline",
                            marginLeft: 10
                        }, onClick: function () {
                            {
                                _this.props.appState.toggleComposerOrderByDirection();
                            }
                        } }, _this.props.appState.composerOrderPrompt)) : (React.createElement("span", { style: {
                            cursor: "pointer",
                            fontSize: 16,
                            fontFamily: constants_1.ELEGANT_FONT,
                            fontWeight: "normal",
                            marginLeft: 10
                        }, className: "boldOnHover", onClick: function () {
                            _this.props.appState.clickComposerOrderByField(o.Value);
                        } }, o.Desc));
                })))));
        return (React.createElement("div", null,
            React.createElement(PageTitle_1.default, null),
            React.createElement(ObjectBrowser_1.default, { header: header, content: content, style: {
                    position: "absolute",
                    right: 0
                } })));
    };
    ArtistDiscografy.defaultProps = {};
    ArtistDiscografy = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], ArtistDiscografy);
    return ArtistDiscografy;
}(React.Component));
exports.default = ArtistDiscografy;
