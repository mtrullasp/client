"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var mobx_react_1 = require("mobx-react");
var AppStore_1 = require("./packages/core/stores/AppStore");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var ObjStore_1 = require("./packages/core/stores/ObjStore");
var appState = new AppStore_1.AppState();
appState.login();
var entState = new ObjStore_1.default(appState);
ReactDOM.render(React.createElement(mobx_react_1.Provider, { appState: appState, entState: entState },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.default, null))), document.getElementById("root"));
