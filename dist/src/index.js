"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var mobx_react_1 = require("mobx-react");
var Header_1 = require("./Header");
var ComposerStore_1 = require("./core/stores/ComposerStore");
var GeoStore_1 = require("./core/stores/GeoStore");
var AlbumStore_1 = require("./core/stores/AlbumStore");
var RouterStore_1 = require("./core/stores/RouterStore");
var react_router_dom_1 = require("react-router-dom");
var RouterRoot_1 = require("./core/routingNav/RouterRoot");
var PerformerStore_1 = require("./core/stores/PerformerStore");
var FixedMenuLayout_1 = require("./core/layout/FixedMenuLayout");
var History_1 = require("History");
var AppStore_1 = require("../src.old/packages/core/stores/AppStore");
var ObjStore_1 = require("../src.old/packages/core/stores/ObjStore");
var history = History_1.createBrowserHistory();
var routerStore = new RouterStore_1.RouterStore();
var geoStore = new GeoStore_1.default();
var composerStore = new ComposerStore_1.default(geoStore, routerStore);
var performerStore = new PerformerStore_1.PerformerStore();
var albumStore = new AlbumStore_1.default(performerStore);
var appState = new AppStore_1.AppState(composerStore);
appState.login();
var entState = new ObjStore_1.default(appState);
var Group = (function () {
    function Group(key) {
        this.members = [];
        this.key = key;
    }
    return Group;
}());
ReactDOM.render(React.createElement(mobx_react_1.Provider, { composerStore: composerStore, albumStore: albumStore, routerStore: routerStore, performerStore: performerStore },
    React.createElement("div", { style: {
            overflow: "hidden",
            padding: 0,
            margin: 0,
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(" + require("./assets/img/fons.jpg") + ")",
            backgroundSize: "cover",
            backgroundOrigin: "border-box"
        } },
        React.createElement(react_router_dom_1.Router, { history: history },
            React.createElement("div", null,
                React.createElement(FixedMenuLayout_1.default, { headerContent: React.createElement(Header_1.default, null), bodyContent: React.createElement(RouterRoot_1.default, null) }))))), document.getElementById("root"));
