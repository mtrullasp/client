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
var MySlider_1 = require("./widgets/MySlider");
var constants_1 = require("./util/constants");
var Icon = require("react-feather");
var Button3d_1 = require("./widgets/3dbutton/Button3d");
exports.HORITZONTAL_MARGIN = 100;
exports.TOP_NAME = 0;
exports.ABSOLUTE_MARGIN = 10;
var MARGE_LEFT = constants_1.MARGIN_HORITZONTAL + 0;
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
                        left: -100
                    } },
                    React.createElement(Button3d_1.default, { isIcon: true, childStyle: { padding: 0, width: 40, margin: 0 }, text: "arrow left", buttonHeight: 20, onClick: function () {
                            _this.props.history.goBack();
                        }, top: 0, left: 5 }),
                    React.createElement(Button3d_1.default, { isIcon: true, text: "home", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_HOME);
                        }, top: 0, left: 40 }),
                    React.createElement(Button3d_1.default, { isIcon: false, text: "Composers", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_COMPOSERS_COLLECTION);
                        }, top: 0, left: MARGE_LEFT - 18 }),
                    React.createElement(Button3d_1.default, { isIcon: false, text: "Performers", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_PERFORMERSROL_COLLECTION);
                        }, top: 0, left: MARGE_LEFT + 100 }),
                    React.createElement(Button3d_1.default, { isIcon: false, text: "My.Collection", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_PERFORMERSROL_COLLECTION);
                        }, top: 0, left: MARGE_LEFT + 280 }),
                    React.createElement(Button3d_1.default, { isIcon: false, text: "Playlists", buttonHeight: 20, onClick: function () {
                            _this.props.history.push(constants_1.ROUTE_PERFORMERSROL_COLLECTION);
                        }, top: 0, left: MARGE_LEFT + 420 })),
                React.createElement("div", { style: {
                        display: "inline",
                        position: "absolute",
                        top: 0,
                        left: MARGE_LEFT + 430
                    } },
                    React.createElement(Button3d_1.default, { isIcon: false, text: "Random", buttonHeight: 20, onClick: function () {
                            _this.props.albumStore.clickRandom();
                        }, top: 0, left: 0 })),
                React.createElement("div", { style: {
                        display: "inline",
                        position: "absolute",
                        top: 0,
                        left: MARGE_LEFT + 550,
                        width: 150
                    } },
                    React.createElement("span", null,
                        React.createElement("b", null, this.props.composerStore.RANDOM_NUM_COMPOSERS)),
                    " Composers",
                    React.createElement(MySlider_1.default, { style: { width: "100%" }, thumb: React.createElement(Icon.Circle, { className: "progress-circle" }), value: this.props.composerStore.RANDOM_NUM_COMPOSERS.toString(), max: 320, onChange: function (value) {
                            _this.props.composerStore.RANDOM_NUM_COMPOSERS = value.toString();
                        } })),
                React.createElement("div", { style: {
                        display: "inline",
                        width: 350,
                        position: "fixed",
                        right: 160
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
