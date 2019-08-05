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
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var react_router_1 = require("react-router");
var constants_1 = require("../../../util/constants");
var PageTitle_1 = require("../../layout/PageTitle");
var ObjectBrowser_1 = require("../../../widgets/ObjectBrowser");
var MyComposersItems_1 = require("./MyComposersItems");
var TextSearchAction_1 = require("../../core/elements/TextSearchAction");
var ActionButton_1 = require("../../core/elements/ActionButton");
var MyComposersTreeMap_1 = require("./MyComposersTreeMap");
var styles = function (theme) { return ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: "100%",
        height: "auto",
        overflowY: "auto"
    },
    gridTileBar: {
        fontSize: 9,
        height: "14%"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
}); };
var MyComposers = (function (_super) {
    __extends(MyComposers, _super);
    function MyComposers(props, context) {
        return _super.call(this, props, context) || this;
    }
    MyComposers.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var header = (React.createElement("div", { style: {
                overflow: "hidden",
                margin: 0,
                padding: 0,
                marginTop: 0,
                marginLeft: 0,
                height: 40,
                paddingTop: 10
            } },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 2, className: typestyle_1.style({ top: 0 }) },
                    React.createElement(TextSearchAction_1.default, { onSearch: function () { }, placeHolder: "Filter by Name", onChange: function (value) {
                            _this.props.appState.filterByComposerNsme(value);
                        } })),
                React.createElement(react_flexbox_grid_1.Col, { lg: 10, className: typestyle_1.style({ top: 0 }) }, this.props.appState.composerOrderByFields.map(function (o, i) {
                    return i ===
                        _this.props.appState.composerOrderByFieldSelectedIndex ? (React.createElement(ActionButton_1.default, { primary: true, onClick: function () {
                            {
                                _this.props.appState.toggleComposerOrderByDirection();
                            }
                        } }, _this.props.appState.composerOrderPrompt)) : (React.createElement(ActionButton_1.default, { onClick: function () {
                            _this.props.appState.clickComposerOrderByField(o.Value);
                        } }, o.Desc));
                })))));
        var content;
        if (this.props.appState.isComposersOrderByNation) {
            var groups_1 = this.props.appState.composersGroupedByNation;
            var items = Object.keys(groups_1).map(function (IdNacio) {
                return (React.createElement("div", null,
                    React.createElement("header", null,
                        React.createElement("div", { style: {
                                padding: 0,
                                width: "100%",
                                height: 30,
                                fontSize: 35,
                                fontWeight: 400,
                                backgroundColor: "transparent",
                                color: "black",
                                marginTop: 20,
                                paddingLeft: 0,
                                marginBottom: 0,
                                fontFamily: constants_1.ELEGANT_FONT,
                                lineHeight: "30px"
                            } },
                            groups_1[IdNacio][0].NomPais.toUpperCase(),
                            React.createElement("span", { className: "count" }, groups_1[IdNacio].length))),
                    React.createElement(MyComposersItems_1.default, { items: groups_1[IdNacio], onClick: function (e) { } })));
            });
            content = React.createElement("div", null, items);
        }
        else if (this.props.appState.isComposersOrderByNumOfWorks) {
            content = (React.createElement(MyComposersTreeMap_1.default, { id: "numWorks", width: 1500, height: 900, data: this.props.appState.worksStore.composersAsNumWorksTreeMap }));
        }
        else {
            content = (React.createElement(MyComposersItems_1.default, { items: this.props.appState.composers, onClick: function (composer) {
                    _this.props.appState.go(constants_1.ROUTE_COMPOSER.replace(":composerId", composer.IdComposer.toString()));
                } }));
        }
        return (React.createElement("div", null,
            React.createElement(PageTitle_1.default, null),
            React.createElement(ObjectBrowser_1.default, { overflowY: "auto", header: header, content: content, style: {
                    position: "absolute",
                    left: constants_1.MARGIN_HORITZONTAL,
                    right: 0,
                    top: 70,
                    overflow: "hidden",
                    paddingTop: 10
                } })));
    };
    MyComposers.defaultProps = {
        fontSize: 40
    };
    MyComposers = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], MyComposers);
    return MyComposers;
}(React.Component));
exports.default = react_router_1.withRouter(withStyles_1.default(styles)(MyComposers));
