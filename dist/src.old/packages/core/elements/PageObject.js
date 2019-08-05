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
var constants_1 = require("../../../util/constants");
var ObjectBrowser_1 = require("../../../widgets/ObjectBrowser");
var PageTitle_1 = require("../../layout/PageTitle");
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
        overflowY: "auto",
        overflowX: "hidden"
    },
    gridTileBar: {
        fontSize: 9,
        height: "14%"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
}); };
var PageObject = (function (_super) {
    __extends(PageObject, _super);
    function PageObject(props, context) {
        return _super.call(this, props, context) || this;
    }
    PageObject.prototype.render = function () {
        var classes = this.props.classes;
        var NUMBER_COLS = 8;
        var header = (React.createElement("div", { style: { minHeight: 42 } }, this.props.actionBar));
        return (React.createElement("div", { style: {} },
            this.props.showPageTitle && React.createElement(PageTitle_1.default, null),
            React.createElement(ObjectBrowser_1.default, { header: header, content: this.props.content, style: {
                    overflow: "hidden",
                    position: "absolute",
                    left: constants_1.MARGIN_HORITZONTAL,
                    right: 0
                } })));
    };
    PageObject.defaultProps = {
        fontSize: 40,
        showPageTitle: true
    };
    PageObject = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], PageObject);
    return PageObject;
}(React.Component));
exports.default = PageObject;
