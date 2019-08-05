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
var SearchInput_1 = require("./core/search/SearchInput");
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
var constants_1 = require("./util/constants");
var Button3d_1 = require("./widgets/3dbutton/Button3d");
exports.HORITZONTAL_MARGIN = 100;
exports.TOP_NAME = 0;
exports.ABSOLUTE_MARGIN = 10;
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { fets: true };
        return _this;
    }
    Header.prototype.render = function () {
        var _this = this;
        if (!this.props.history) {
            return null;
        }
        var headerContent = null;
        var bodyContent = null;
        var composer = this.props.composerStore.activeComposer;
        headerContent = (React.createElement("div", { style: { backgroundColor: "whitesmoke" } },
            React.createElement("div", { style: {
                    zIndex: 10000,
                    position: "absolute",
                    top: 5,
                    left: exports.HORITZONTAL_MARGIN,
                    right: exports.HORITZONTAL_MARGIN
                } },
                React.createElement("div", { style: {
                        display: "inline",
                        position: "absolute",
                        top: 0,
                        left: 0
                    } },
                    React.createElement(Button3d_1.default, { text: "Composers", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_COMPOSERS_COLLECTION);
                        }, top: 0, left: 60 }),
                    React.createElement(Button3d_1.default, { text: "Performers", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_PERFORMERSROL_COLLECTION);
                        }, top: 0, left: 220 })),
                React.createElement("div", { style: {
                        display: "inline",
                        position: "absolute",
                        top: 0,
                        left: 470
                    } },
                    React.createElement(Button3d_1.default, { text: "Random", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_RANDOM_TRACK);
                        }, top: 0, left: 0 })),
                React.createElement("div", { style: {
                        display: "inline",
                        width: 350,
                        position: "absolute",
                        right: 50
                    } },
                    React.createElement(SearchInput_1.default, null),
                    " ")),
            React.createElement("div", { style: {
                    zIndex: 10000,
                    cursor: "pointer",
                    position: "fixed",
                    top: 5,
                    right: 10,
                    opacity: 1
                } },
                "powered by",
                React.createElement(semantic_ui_react_1.Image, { size: "tiny", src: require("./assets/img/new_deezer_Logo.png") }))));
        return headerContent;
    };
    Header = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("routerStore"),
        mobx_react_1.observer
    ], Header);
    return Header;
}(React.Component));
exports.default = react_router_dom_1.withRouter(Header);
