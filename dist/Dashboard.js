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
var SearchInput_1 = require("./search/SearchInput");
var FavIcon_1 = require("./FavIcon");
var RouterRoot_1 = require("./routingNav/RouterRoot");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./lab/Layout");
exports.HORITZONTAL_MARGIN = 100;
exports.TOP_NAME = 0;
exports.ABSOLUTE_MARGIN = 10;
var DashBoard = (function (_super) {
    __extends(DashBoard, _super);
    function DashBoard(props, context) {
        return _super.call(this, props, context) || this;
    }
    DashBoard.prototype.render = function () {
        var headerContent = null;
        var bodyContent = null;
        if (!!this.props.composerStore &&
            !!this.props.composerStore.activeComposer) {
            var composer = this.props.composerStore.activeComposer;
            headerContent = (React.createElement("div", null,
                React.createElement("div", { style: {
                        position: "sticky",
                        top: 10,
                        left: 10,
                        width: 40,
                        height: 40
                    } },
                    React.createElement(FavIcon_1.default, null)),
                React.createElement("div", { style: {
                        position: "sticky",
                        top: 10,
                        left: exports.HORITZONTAL_MARGIN,
                        width: "50%"
                    } },
                    React.createElement(SearchInput_1.default, null))));
            bodyContent = (React.createElement("div", null,
                React.createElement(react_router_dom_1.BrowserRouter, null,
                    React.createElement(RouterRoot_1.default, null))));
        }
        return React.createElement(Layout_1.default, { headerContent: headerContent, bodyContent: bodyContent });
    };
    DashBoard = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], DashBoard);
    return DashBoard;
}(React.Component));
exports.default = DashBoard;
