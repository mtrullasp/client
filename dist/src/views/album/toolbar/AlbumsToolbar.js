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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_1 = require("mobx-react");
var typestyle_1 = require("typestyle");
var Search_1 = require("semantic-ui-react/dist/commonjs/modules/Search");
var constants_1 = require("../../../util/constants");
var react_router_1 = require("react-router");
var AlbumsToolbar = (function (_super) {
    __extends(AlbumsToolbar, _super);
    function AlbumsToolbar(props) {
        return _super.call(this, props) || this;
    }
    AlbumsToolbar.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Menu, { size: "small", compact: true },
                React.createElement(semantic_ui_react_1.Menu.Item, { header: true }, "Sort By"),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Date release", key: "ReleaseDate", onClick: function () { } }),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Shuffle", key: "shuffle", onClick: function () { return _this.props.albumStore.shuffle(); } })),
            React.createElement("span", { style: { marginRight: 20 } }),
            React.createElement(semantic_ui_react_1.Menu, { size: "small", compact: true },
                React.createElement(semantic_ui_react_1.Menu.Item, { header: true }, "Group By"),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Composer", key: "composer", onClick: function () {
                        _this.props.albumStore.isGroupedByComposer = !_this.props.albumStore
                            .isGroupedByComposer;
                    }, active: false }),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Performer", key: "perforrmer", onClick: function () {
                        _this.props.history.push(constants_1.ROUTE_COMPOSERS_COLLECTION_BY_NACIO);
                    }, active: false }),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Label", key: "label", onClick: function () {
                        _this.props.history.push(constants_1.ROUTE_COMPOSERS_COLLECTION_BY_NACIO);
                    }, active: false })),
            React.createElement("div", { style: { display: "inline-flex", marginRight: 10 } },
                React.createElement(Search_1.default, __assign({ showNoResults: false, input: {
                        className: typestyle_1.style({
                            borderColor: "black",
                            display: "inline-flex",
                            width: 200,
                            marginLeft: 20
                        }),
                        fluid: true,
                        placeholder: "Filter Albums"
                    }, minCharacters: 2, size: "small", category: true, onSearchChange: function (event, data) {
                    } }, this.props)))));
    };
    AlbumsToolbar = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], AlbumsToolbar);
    return AlbumsToolbar;
}(React.Component));
exports.default = react_router_1.withRouter(AlbumsToolbar);
