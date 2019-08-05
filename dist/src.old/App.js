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
var constants_1 = require("./util/constants");
var mobx_react_1 = require("mobx-react");
var createMuiTheme_1 = require("@material-ui/core/styles/createMuiTheme");
var MuiThemeProvider_1 = require("@material-ui/core/styles/MuiThemeProvider");
var MyComposers_1 = require("./packages/composers/item/MyComposers");
var Loader_1 = require("./widgets/Loader.");
var Header_1 = require("./packages/layout/Header");
var ComposerWorks_1 = require("./packages/composers/subs/works/ComposerWorks");
var Hero_1 = require("./packages/layout/Hero");
var Composer_1 = require("./packages/composers/item/Composer");
var MyPerformers_1 = require("./packages/performers/collection/MyPerformers");
var ArtistDiscografy_1 = require("./packages/composers/item/ArtistDiscografy");
var Albums_1 = require("./packages/albums/collection/Albums");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var teal_1 = require("@material-ui/core/colors/teal");
var BlindTest_1 = require("./packages/quiz/BlindTest");
var MyPerformersInstruments_1 = require("./packages/performers/collection/MyPerformersInstruments");
var player_1 = require("./packages/player");
var Radio_1 = require("./packages/radio/Radio");
var KlassikRank_1 = require("./packages/klassikRank/KlassikRank");
var BackGroundImage_1 = require("./widgets/BackGroundImage");
var theme = createMuiTheme_1.default({
    palette: {
        primary: teal_1.default
    }
});
function NoMatch() {
    return (React.createElement("div", null,
        React.createElement("h3", null,
            "No match for ",
            React.createElement("code", null, "App.tsx"))));
}
var App = (function (_super) {
    __extends(App, _super);
    function App(props, context) {
        var _this = _super.call(this, props, context) || this;
        props.appState.setHistory(_this.props.history);
        setTimeout(props.appState.getFavoriteArtists, 1000);
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement(MuiThemeProvider_1.default, { theme: theme },
            React.createElement(React.Fragment, null,
                React.createElement(CssBaseline_1.default, null),
                React.createElement("div", null,
                    React.createElement(Loader_1.default, { isLoading: this.props.appState.isLoading },
                        React.createElement(BackGroundImage_1.default, { src: this.props.appState.activeImageBackGround },
                            React.createElement(Header_1.default, null),
                            React.createElement("section", { style: {
                                    position: "absolute",
                                    top: constants_1.HEADER_MENU_HEIGHT,
                                    left: 0,
                                    right: 0,
                                    height: constants_1.HEADER_TITLE_HEIGHT
                                } },
                                React.createElement(react_router_1.Switch, null,
                                    React.createElement(react_router_1.Route, { path: "/", exact: true, component: Hero_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_COMPOSERS, exact: true, component: MyComposers_1.default }),
                                    React.createElement(react_router_1.Route, { path: "/works/:IdComposer", exact: false, component: ComposerWorks_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_TRACKLIST, exact: true, component: player_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_COMPOSER, component: Composer_1.default, exact: false }, this.props.children),
                                    React.createElement(react_router_1.Route, { path: "/discografy/:IdArtist", exact: true, component: ArtistDiscografy_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_PERFORMERS, exact: true, component: MyPerformersInstruments_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_PERFORMERS_INSTRUMENT, exact: true, component: MyPerformers_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_CONDUCTORS, exact: true, component: MyPerformersInstruments_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_ENSEMBLES, exact: true, component: MyPerformersInstruments_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_ALBUMS, exact: true, component: Albums_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_ALBUMS_BY_TEXT, exact: true, component: Albums_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_ALBUMS_BY_ARTIST, exact: true, component: Albums_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_MB_DEEZER, exact: true, component: null }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_BLIND_TEST, exact: true, component: BlindTest_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_KLASSIC_RANK, exact: true, component: KlassikRank_1.default }),
                                    React.createElement(react_router_1.Route, { path: constants_1.ROUTE_RADIO, exact: true, component: Radio_1.default }),
                                    React.createElement(react_router_1.Route, { component: NoMatch })))))))));
    };
    App.defaultProps = {};
    App = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], App);
    return App;
}(React.Component));
exports.default = react_router_1.withRouter(App);
