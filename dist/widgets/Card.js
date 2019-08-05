"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var styled_components_1 = require("styled-components");
var react_flip_toolkit_1 = require("react-flip-toolkit");
var animejs_1 = require("animejs");
var BaseComponents_1 = require("../BaseComponents");
var Components_1 = require("./Components");
var iconBaseStyles_1 = require("../iconBaseStyles");
var IndexGrid = styled_components_1.default(BaseComponents_1.BaseGridList)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  grid-auto-rows: 3rem;\n  ", " & {\n    grid-template-columns: repeat(3, 5rem);\n    grid-gap: 2rem;\n    margin-bottom: 2rem;\n  }\n  ", " & {\n    grid-template-columns: repeat(6, 5rem);\n    grid-gap: 3rem;\n\n    svg {\n      max-height: 4rem;\n    }\n  }\n"], ["\n  width: 100%;\n  grid-auto-rows: 3rem;\n  ", " & {\n    grid-template-columns: repeat(3, 5rem);\n    grid-gap: 2rem;\n    margin-bottom: 2rem;\n  }\n  ", " & {\n    grid-template-columns: repeat(6, 5rem);\n    grid-gap: 3rem;\n\n    svg {\n      max-height: 4rem;\n    }\n  }\n"])), Components_1.CardGrid + '[display="grid"]', Components_1.CardGrid + '[display="list"]');
var IndexListItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var Card = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  transition: box-shadow 0.5s;\n  background-color: white;\n  overflow: hidden;\n  position: relative;\n  will-change: transform;\n  svg {\n    will-change: transform;\n  }\n"], ["\n  height: 100%;\n  transition: box-shadow 0.5s;\n  background-color: white;\n  overflow: hidden;\n  position: relative;\n  will-change: transform;\n  svg {\n    will-change: transform;\n  }\n"])));
var CardContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  will-change: transform;\n  ", " & {\n    flex-direction: column;\n    padding: 1.5rem;\n  }\n  ", " & {\n    flex-direction: row;\n    padding: 1rem;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  will-change: transform;\n  ", " & {\n    flex-direction: column;\n    padding: 1.5rem;\n  }\n  ", " & {\n    flex-direction: row;\n    padding: 1rem;\n  }\n"])), Components_1.CardGrid + '[display="grid"]', Components_1.CardGrid + '[display="list"]');
var Description = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-width: 280px;\n  text-align: right;\n  text-decoration: none !important;\n  color: black;\n\n  > *:last-child {\n    margin-bottom: 0 !important;\n  }\n"], ["\n  min-width: 280px;\n  text-align: right;\n  text-decoration: none !important;\n  color: black;\n\n  > *:last-child {\n    margin-bottom: 0 !important;\n  }\n"])));
var ListFlex = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", " & {\n    display: block;\n  }\n  ", " & {\n    display: flex;\n    > div:first-of-type {\n      margin-right: 1rem;\n    }\n  }\n\n  justify-content: flex-end;\n  > * {\n    margin-bottom: 0.5rem;\n  }\n"], ["\n  ", " & {\n    display: block;\n  }\n  ", " & {\n    display: flex;\n    > div:first-of-type {\n      margin-right: 1rem;\n    }\n  }\n\n  justify-content: flex-end;\n  > * {\n    margin-bottom: 0.5rem;\n  }\n"])), Components_1.CardGrid + '[display="grid"]', Components_1.CardGrid + '[display="list"]');
var CardHeader = styled_components_1.default.h2(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n"], ["\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n"])));
var IconCount = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: inline-block;\n  font-weight: bold;\n"], ["\n  display: inline-block;\n  font-weight: bold;\n"])));
var Price = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var IconSetCard = (function (_super) {
    __extends(IconSetCard, _super);
    function IconSetCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onStart = function (el, prevLocation, currentLocation) {
            if (prevLocation.location.pathname.match(_this.props.setKey) &&
                currentLocation.location.pathname === "/") {
                ;
                el.querySelectorAll("[data-fade-in]").slice().forEach(function (el) { return (el.style.opacity = "0"); });
                el.style.zIndex = "5";
            }
        };
        _this.onComplete = function (el, prevLocation, currentLocation) {
            if (currentLocation.location.pathname === "/" &&
                prevLocation.location.pathname.match(_this.props.setKey)) {
                animejs_1.default({
                    targets: el.querySelectorAll("[data-fade-in]"),
                    opacity: [0, 1],
                    translateY: [15, 0],
                    delay: function (el, i) { return i * 70 + 300; },
                    easing: "easeOutSine",
                    duration: 350
                });
                el.style.zIndex = "";
            }
        };
        _this.onDelayedAppear = function (el, index) {
            animejs_1.default({
                targets: el,
                opacity: [0, 1],
                scale: [0.9, 1],
                easing: "easeOutSine",
                delay: index * 40,
                duration: 400
            });
        };
        _this.onExit = function (el, index, removeElement) {
            animejs_1.default({
                targets: el,
                opacity: 0,
                scale: 0.9,
                easing: "easeOutSine",
                duration: 400,
                delay: index * 40,
                complete: removeElement
            });
        };
        _this.navigate = function () {
            _this.props.navigate(_this.props.setKey);
        };
        _this.shouldFlip = function (prev, current) {
            var sort1 = current.location.search.match(/sort=([^&]+)/) &&
                current.location.search.match(/sort=([^&]+)/)[1];
            var sort2 = prev.location.search.match(/sort=([^&]+)/) &&
                prev.location.search.match(/sort=([^&]+)/)[1];
            return sort1 === sort2;
        };
        return _this;
    }
    IconSetCard.prototype.render = function () {
        var _this = this;
        var _a = this.props, setKey = _a.setKey, icons = _a.icons, iconCount = _a.iconCount;
        return (react_1.default.createElement(react_flip_toolkit_1.Flipped, { flipId: setKey, stagger: true, onStartImmediate: this.onStart, onComplete: this.onComplete, onDelayedAppear: this.onDelayedAppear, onExit: this.onExit, shouldInvert: this.shouldFlip },
            react_1.default.createElement(Card, { onClick: this.navigate },
                react_1.default.createElement(react_flip_toolkit_1.Flipped, { inverseFlipId: setKey },
                    react_1.default.createElement(CardContent, null,
                        react_1.default.createElement(IndexGrid, null, icons.filter(function (obj) { return obj.highlighted; }).map(function (_a) {
                            var Icon = _a.Icon, id = _a.id;
                            return (react_1.default.createElement(IndexListItem, { key: id },
                                react_1.default.createElement(react_flip_toolkit_1.Flipped, { flipId: id, shouldFlip: _this.shouldFlip },
                                    react_1.default.createElement(Icon, { style: iconBaseStyles_1.default }))));
                        })),
                        react_1.default.createElement(Description, { ref: function (el) { return (_this.description = el); } },
                            react_1.default.createElement(react_flip_toolkit_1.Flipped, { flipId: setKey + "-title", translate: true, shouldFlip: this.shouldFlip },
                                react_1.default.createElement(CardHeader, { "data-fade-in": true },
                                    setKey[0].toUpperCase() + setKey.slice(1),
                                    " Icons")),
                            react_1.default.createElement(ListFlex, null,
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(react_flip_toolkit_1.Flipped, { flipId: setKey + "-count", translate: true, shouldFlip: this.shouldFlip },
                                        react_1.default.createElement(IconCount, { "data-fade-in": true },
                                            iconCount,
                                            " icons"))),
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(react_flip_toolkit_1.Flipped, { flipId: setKey + "-price", translate: true, shouldFlip: this.shouldFlip },
                                        react_1.default.createElement(Price, { "data-fade-in": true },
                                            "$",
                                            iconCount / 2))))))))));
    };
    IconSetCard.propTypes = {
        setKey: prop_types_1.default.string,
        highlightedIcons: prop_types_1.default.array,
        iconCount: prop_types_1.default.number
    };
    return IconSetCard;
}(react_1.PureComponent));
exports.default = IconSetCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
