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
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var Typography_1 = require("@material-ui/core/Typography");
var mobx_react_1 = require("mobx-react");
var react_router_1 = require("react-router");
var ListWorks = (function (_super) {
    __extends(ListWorks, _super);
    function ListWorks(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            hoverIndex: -1
        };
        return _this;
    }
    ListWorks.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.worksStore.activeListWorks) {
            return null;
        }
        var items = this.props.appState.worksStore.activeListWorks.map(function (w, i) {
            return (React.createElement(ListItem_1.default, { style: { cursor: "pointer" }, selected: _this.state.hoverIndex === i, onMouseEnter: function () {
                    _this.setState({ hoverIndex: i });
                }, onMouseLeave: function () {
                    _this.setState({ hoverIndex: -1 });
                }, onClick: function (e) {
                    debugger;
                    _this.props.appState.worksStore.setActiveWork(w);
                } },
                React.createElement(ListItemText_1.default, { style: { padding: 0 } },
                    React.createElement(Typography_1.default, { variant: "headline", gutterBottom: false },
                        React.createElement("b", null, w.YearComposed || "????"),
                        " ",
                        React.createElement("span", { style: { fontSize: 13, fontWeight: 500 } }, w.AgeOfComposerAt),
                        ": ",
                        w.Name))));
        });
        return (React.createElement(List_1.default, { dense: true, disablePadding: true }, items));
    };
    ListWorks.defaultProps = {};
    ListWorks = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], ListWorks);
    return ListWorks;
}(React.Component));
exports.default = react_router_1.withRouter(ListWorks);
