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
var mobx_react_1 = require("mobx-react/dist/mobx-react");
var HeadNameComposer_1 = require("../../header/HeadNameComposer");
var CollectionNav_1 = require("../../../core/routingNav/CollectionNav");
var mobx_react_2 = require("mobx-react");
var ComposerOne = (function (_super) {
    __extends(ComposerOne, _super);
    function ComposerOne(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {};
        return _this;
    }
    ComposerOne.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(HeadNameComposer_1.default, { firstName: this.props.composerStore.firstNameComposer, lastName: this.props.composerStore.lastNameComposer, infoNeixDefu: this.props.composerStore.activeComposerInfoNeixDefu }),
            React.createElement(CollectionNav_1.default, { isEnabledNext: this.props.composerStore.isNextable, isEnabledPrevious: this.props.composerStore.isPreviousable, onClickNext: function () { return _this.props.composerStore.goNextComposer(); }, onClickPrevious: function () {
                    return _this.props.composerStore.goPreviousComposer();
                } })));
    };
    ComposerOne.defaultProps = {};
    ComposerOne = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_2.observer
    ], ComposerOne);
    return ComposerOne;
}(React.Component));
exports.default = ComposerOne;
