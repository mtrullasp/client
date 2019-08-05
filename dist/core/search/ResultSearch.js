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
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var constants_1 = require("../../util/constants");
var ResultSearch = (function (_super) {
    __extends(ResultSearch, _super);
    function ResultSearch(props, context) {
        return _super.call(this, props, context) || this;
    }
    ResultSearch.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.List, { relaxed: true }, this.props.searchStore.results.map(function (item) {
            return (React.createElement(semantic_ui_react_1.List.Item, null,
                React.createElement(react_router_dom_1.Link, { className: "tresdtext", to: constants_1.ROUTE_PERFORMER_ALBUMS.replace(":idMN", item.itemCode) },
                    React.createElement(semantic_ui_react_1.Image, { src: item.itemImage, size: "tiny" }),
                    React.createElement(semantic_ui_react_1.List.Content, null,
                        React.createElement(semantic_ui_react_1.List.Header, { as: "a" }, item.itemType)),
                    React.createElement(semantic_ui_react_1.List.Content, null,
                        React.createElement(semantic_ui_react_1.List.Header, { as: "a" }, item.itemName)))));
        })));
    };
    ResultSearch = __decorate([
        mobx_react_1.observer,
        mobx_react_1.inject("searchStore")
    ], ResultSearch);
    return ResultSearch;
}(React.Component));
exports.default = ResultSearch;
