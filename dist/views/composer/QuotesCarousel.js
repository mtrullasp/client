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
var react_swipeable_views_1 = require("react-swipeable-views");
var react_swipeable_views_utils_1 = require("react-swipeable-views-utils");
var TextFit_1 = require("../../widgets/TextFit/TextFit");
var constants_1 = require("../../util/constants");
var AutoPlaySwipeableViews = react_swipeable_views_utils_1.autoPlay(react_swipeable_views_1.default);
var QuotesCarousel = (function (_super) {
    __extends(QuotesCarousel, _super);
    function QuotesCarousel(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            selectedIndex: 0
        };
        _this.handleChangeIndex = function (index) {
            _this.setState({ selectedIndex: index });
        };
        return _this;
    }
    QuotesCarousel.prototype.render = function () {
        var selectedIndex = this.state.selectedIndex;
        var style = { width: "100%", height: 100 };
        var items = this.props.composerStore.activeComposerQuotes.map(function (q) {
            return (React.createElement("div", null,
                React.createElement(TextFit_1.default, { maxFontSize: 20, text: q.content.trimRight() + " " }),
                React.createElement("div", { style: {
                        fontSize: 14,
                        fontWeight: 700,
                        height: 25,
                        color: constants_1.SECOND_ACCENT_COLOR
                    } },
                    "\u2014 ",
                    q.contentSourceName.trimRight())));
        });
        return (React.createElement(AutoPlaySwipeableViews, { index: selectedIndex, onChangeIndex: this.handleChangeIndex, interval: 10000 }, items));
    };
    QuotesCarousel.defaultProps = {};
    QuotesCarousel = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], QuotesCarousel);
    return QuotesCarousel;
}(React.Component));
exports.default = QuotesCarousel;
