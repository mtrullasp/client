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
var constants_1 = require("../../util/constants");
var react_router_1 = require("react-router");
var typestyle_1 = require("typestyle");
var ComposerWorksCollection = (function (_super) {
    __extends(ComposerWorksCollection, _super);
    function ComposerWorksCollection(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerWorksCollection.prototype.render = function () {
        var _this = this;
        debugger;
        var items = this.props.composerStore.activeComposerWorks
            .map(function (cw) {
            return (React.createElement(semantic_ui_react_1.List.Item, null,
                React.createElement(semantic_ui_react_1.List.Content, null,
                    React.createElement("div", { style: { cursor: "pointer", fontSize: 14, margin: 0, padding: 10, width: "100%" }, onClick: function () {
                            _this.props.albumStore.searchByWork(cw.idMC);
                            _this.props.history.push(constants_1.ROUTE_ALBUMS_COLLECTION);
                        } },
                        "at",
                        " ",
                        React.createElement("span", { style: { fontWeight: 900 } }, cw.atAgeOf < 1 ? "?" : cw.atAgeOf),
                        " (" + cw.composedDate + "): ",
                        React.createElement("span", { style: { fontSize: 15 } },
                            cw.nomMC,
                            " "),
                        React.createElement("span", { style: { fontSize: 15, fontWeight: 900 } },
                            "(",
                            cw.performancesCount,
                            ")")))));
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(semantic_ui_react_1.Search, __assign({ showNoResults: false, input: {
                    className: typestyle_1.style({ borderColor: "black" }),
                    fluid: true,
                    placeholder: "Filter works"
                }, minCharacters: 2, size: "small", category: true, onSearchChange: function (event, data) {
                    _this.props.composerStore.worksFilter = data.value;
                } }, this.props)),
            React.createElement(semantic_ui_react_1.List, { size: "medium", relaxed: false }, items)));
    };
    ComposerWorksCollection.defaultProps = {};
    ComposerWorksCollection = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], ComposerWorksCollection);
    return ComposerWorksCollection;
}(React.Component));
exports.default = react_router_1.withRouter(ComposerWorksCollection);
