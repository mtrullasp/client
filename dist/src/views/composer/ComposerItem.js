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
var Header_1 = require("../../Header");
var HeadNameComposer_1 = require("../header/HeadNameComposer");
var QuotesCarousel_1 = require("./QuotesCarousel");
var mobx_react_1 = require("mobx-react");
var CollectionNav_1 = require("../../core/routingNav/CollectionNav");
var react_router_1 = require("react-router");
var ComposerWorksCollection_1 = require("../composerWork/collections/ComposerWorksCollection");
var MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
var ComposerItem = (function (_super) {
    __extends(ComposerItem, _super);
    function ComposerItem(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerItem.prototype.render = function () {
        var _this = this;
        var content = null;
        if (!!this.props.composerStore &&
            !!this.props.composerStore.activeComposer) {
            var composer = this.props.composerStore.activeComposer;
            content = (React.createElement("div", null,
                React.createElement("div", { style: {
                        position: "relative",
                        left: -90,
                        width: 80,
                        top: Header_1.TOP_NAME + 10,
                        verticalAlign: "center"
                    } },
                    React.createElement(CollectionNav_1.default, { isEnabledNext: this.props.composerStore.isNextable, isEnabledPrevious: this.props.composerStore.isPreviousable, onClickNext: function () { return _this.props.composerStore.goNextComposer(); }, onClickPrevious: function () {
                            return _this.props.composerStore.goPreviousComposer();
                        } })),
                React.createElement("div", { style: {
                        position: "absolute",
                        left: 0,
                        top: 0
                    } },
                    React.createElement(HeadNameComposer_1.default, { firstName: this.props.composerStore.firstNameComposer, lastName: this.props.composerStore.lastNameComposer, infoNeixDefu: this.props.composerStore.activeComposerInfoNeixDefu }),
                    React.createElement("div", { style: {
                            position: "relative",
                            top: 0,
                            left: 0,
                            width: "50%"
                        } },
                        React.createElement(QuotesCarousel_1.default, null))),
                React.createElement(MaxHeightContainer_1.default, null,
                    React.createElement("div", { style: {
                            position: "absolute",
                            left: 600,
                            top: 180,
                            right: 50,
                            bottom: 20,
                            overflowY: "auto"
                        } },
                        React.createElement(ComposerWorksCollection_1.default, null))),
                React.createElement("img", { style: {
                        opacity: 0.2,
                        position: "absolute",
                        top: 50,
                        left: -200,
                        width: "50%",
                        zIndex: 0
                    }, src: this.props.composerStore.activeComposerImgUrl })));
        }
        return React.createElement("div", null, content);
    };
    ComposerItem = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposerItem);
    return ComposerItem;
}(React.Component));
exports.default = react_router_1.withRouter(ComposerItem);
