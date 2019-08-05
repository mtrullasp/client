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
var MaxHeightContainer_1 = require("../../../../widgets/MaxHeightContainer");
var react_router_1 = require("react-router");
var createBrowserHistory_1 = require("history/createBrowserHistory");
var WorksComposerMain_1 = require("./WorksComposerMain");
var WorkAlbums_1 = require("./WorkAlbums");
var constants_1 = require("../../../../util/constants");
var history = createBrowserHistory_1.default();
var ContainerDimensions = require("react-container-dimensions").default;
function NoMatch() {
    return (React.createElement("div", null,
        React.createElement("h3", null,
            "No match for ",
            React.createElement("code", null, "WorksComposer.tsx"))));
}
var WorksComposer = (function (_super) {
    __extends(WorksComposer, _super);
    function WorksComposer(props, context) {
        return _super.call(this, props, context) || this;
    }
    WorksComposer.prototype.render = function () {
        return (React.createElement(MaxHeightContainer_1.default, { style: { overflowY: "auto" } },
            React.createElement(react_router_1.Switch, null,
                React.createElement(react_router_1.Route, { path: constants_1.ROUTE_COMPOSER, component: WorksComposerMain_1.default, exact: true }),
                React.createElement(react_router_1.Route, { path: this.props.match.path + "/workAlbums/:idWork", component: WorkAlbums_1.default, exact: true }),
                React.createElement(react_router_1.Route, { component: NoMatch }))));
    };
    WorksComposer.defaultProps = {};
    WorksComposer = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], WorksComposer);
    return WorksComposer;
}(React.Component));
exports.default = react_router_1.withRouter(WorksComposer);
