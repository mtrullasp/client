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
var react_router_1 = require("react-router");
var ComposersToolbar = (function (_super) {
    __extends(ComposersToolbar, _super);
    function ComposersToolbar(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposersToolbar.prototype.render = function () {
        var _this = this;
        var activeOrderKey = this.props.composerStore.orderByKey;
        var activeOrderDir = this.props.composerStore.orderByDir;
        var cs = this.props.composerStore;
        var iconaSort = function (key) {
            if (!key || !key.length) {
                return "";
            }
            if (activeOrderKey === key) {
                if (_this.props.composerStore.orderByDir === 1) {
                    return "sort descending";
                }
                else if (_this.props.composerStore.orderByDir === -1) {
                    return "sort ascending";
                }
            }
            return "";
        };
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Menu, { size: "tiny", compact: true, style: { backgroundColor: "white" } },
                React.createElement(semantic_ui_react_1.Menu.Item, { header: true }, "Sort By"),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Ranking", icon: iconaSort("ranking"), key: "ranking", onClick: function () { return _this.props.composerStore.setOrderBy("ranking"); }, active: activeOrderKey === "ranking" }),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Birth Date", key: "AnyoNeix", onClick: function () { return _this.props.composerStore.setOrderBy("AnyoNeix"); }, active: activeOrderKey === "AnyoNeix" }),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Shuffle", key: "shuffle", onClick: function () { return _this.props.composerStore.shuffle(); } })),
            React.createElement("span", { style: { marginRight: 20 } }),
            React.createElement(semantic_ui_react_1.Menu, { size: "tiny", compact: true, style: { backgroundColor: "white" } },
                React.createElement(semantic_ui_react_1.Menu.Item, { header: true }, "Group By"),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "Nation", key: "nation", onClick: function () {
                        _this.props.composerStore.isGroupedByNation = !_this.props
                            .composerStore.isGroupedByNation;
                    }, active: false })),
            React.createElement("div", { style: {
                    display: "inline-flex",
                    marginRight: 10
                } },
                React.createElement(Search_1.default, __assign({ showNoResults: false, input: {
                        className: typestyle_1.style({
                            borderColor: "black",
                            display: "inline-flex",
                            width: 200,
                            marginLeft: 20
                        }),
                        fluid: true,
                        placeholder: "Filter Composers",
                        backgroundColor: "white"
                    }, minCharacters: 2, size: "small", category: true, onSearchChange: function (event, data) {
                        _this.props.composerStore.composerNameFilter = data.value;
                    } }, this.props)))));
    };
    ComposersToolbar = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposersToolbar);
    return ComposersToolbar;
}(React.Component));
exports.default = react_router_1.withRouter(ComposersToolbar);
