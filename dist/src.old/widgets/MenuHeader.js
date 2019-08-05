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
var TabUnderlineStroke_1 = require("./TabUnderlineStroke");
var MenuHeader = (function (_super) {
    __extends(MenuHeader, _super);
    function MenuHeader(props, context) {
        return _super.call(this, props, context) || this;
    }
    MenuHeader.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.myRouter) {
            return null;
        }
        var items = this.props.appState.myRouter.myRouterMenuConfig.map(function (r) {
            return {
                id: r.id,
                text: r.menuTitle,
                onClick: function () {
                    _this.props.appState.myRouter.setTabId(r.id);
                }
            };
        });
        return (React.createElement("div", { style: { position: "relative", top: -15 } },
            React.createElement(TabUnderlineStroke_1.default, { fontSize: 14, selectedItemId: this.props.appState.myRouter.tabActiveId, items: items })));
    };
    MenuHeader = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], MenuHeader);
    return MenuHeader;
}(React.Component));
exports.default = MenuHeader;
