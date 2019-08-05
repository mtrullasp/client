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
var typestyle_1 = require("typestyle");
var mobx_react_1 = require("mobx-react");
var MasonryGrid_1 = require("../../../widgets/MasonryGrid/MasonryGrid");
var constants_1 = require("../../../util/constants");
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
var ComposersToolbar_1 = require("../toolbar/ComposersToolbar");
var ComposersGroupedByNacio_1 = require("../toolbar/ComposersGroupedByNacio");
require("@material/elevation/dist/mdc.elevation.min.css");
var ComposerCollectionItem_1 = require("./ComposerCollectionItem");
var MyCollection_1 = require("../../../widgets/MyCollection/MyCollection");
require("../../../styles/portfolio.css");
var FACTOR_Y = 1.1;
var ComposerCollection = (function (_super) {
    __extends(ComposerCollection, _super);
    function ComposerCollection(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerCollection.prototype.render = function () {
        var _this = this;
        if (!this.props.composerStore.composers) {
            return null;
        }
        console.log("ComposerCollection");
        var items = function (width, height) {
            return _this.props.composerStore.composers.map(function (composer, index) {
                var contentBase = function (opacity) {
                    return (React.createElement(ComposerCollectionItem_1.default, { width: width, index: index, composer: composer }));
                };
                return (React.createElement("div", { onMouseEnter: function () {
                        _this.props.composerStore.indexHover = index;
                    }, onMouseLeave: function () {
                        _this.props.composerStore.indexHover = -1;
                    }, onClick: function (e) {
                        _this.props.composerStore.activeIndex = index;
                        _this.props.history.push(constants_1.ROUTE_COMPOSERS_ITEM);
                    }, onKeyDown: function (e) {
                        if (e.keyCode === 13) {
                            _this.props.composerStore.activeIndex = index;
                            _this.props.history.push(constants_1.ROUTE_COMPOSERS_ITEM);
                        }
                    }, key: composer.IdComposer, className: typestyle_1.style({
                        cursor: "pointer",
                        listStyleType: "none"
                    }) + " bright-on-hover grow" },
                    React.createElement("div", null, contentBase(0.6))));
            });
        };
        return (React.createElement(MyCollection_1.default, { headerContent: React.createElement(ComposersToolbar_1.default, null), asideLeftContent: this.props.composerStore.isGroupedByNation ? (React.createElement(ComposersGroupedByNacio_1.default, null)) : null, sectionContent: React.createElement(MaxHeightContainer_1.default, { style: {
                    position: "relative",
                    top: 10,
                    width: "100%"
                }, footerHeight: 50 },
                React.createElement(MaxHeightContainer_1.default, { style: {} },
                    React.createElement("div", { style: { margin: 0 } },
                        React.createElement(MasonryGrid_1.default, { gutter: 0, numColumns: constants_1.COMPOSER_NUMBER_COLS, items: items, factorY: FACTOR_Y })))) }));
    };
    ComposerCollection = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposerCollection);
    return ComposerCollection;
}(React.Component));
exports.default = ComposerCollection;
