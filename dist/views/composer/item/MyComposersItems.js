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
var react_flexbox_grid_1 = require("react-flexbox-grid");
var constants_1 = require("../../../util/constants");
var typestyle_1 = require("typestyle");
var MasonryGrid_1 = require("../../../widgets/MasonryGrid");
var tf = require("react-textfit");
var Textfit = tf.Textfit;
var mobx_react_1 = require("mobx-react");
var FACTOR_Y = 1.2;
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
        fontSize: 10,
        height: "10%",
        opacity: 0.5
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
}); };
var MyComposersItems = (function (_super) {
    __extends(MyComposersItems, _super);
    function MyComposersItems(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { indexHover: -1 };
        return _this;
    }
    MyComposersItems.prototype.render = function () {
        var _this = this;
        if (!this.props.items) {
            return null;
        }
        var items = function (width, height) {
            return _this.props.items.map(function (composer, index) {
                return (React.createElement("li", { onMouseEnter: function () {
                        _this.setState({ indexHover: index });
                    }, onMouseLeave: function () {
                        _this.setState({ indexHover: -1 });
                    }, onClick: function (e) {
                        e.stopPropagation();
                        _this.props.onClick(composer);
                    }, key: composer.IdComposer, className: typestyle_1.style({
                        cursor: "pointer",
                        listStyleType: "none"
                    }) + " bright-on-hover grow" },
                    React.createElement("div", null,
                        React.createElement("img", { src: composer.PictureMediumURLLocal, alt: composer.Nom, style: { height: width * FACTOR_Y, width: width } }),
                        React.createElement("footer", { style: {
                                backgroundColor: "rgba(250, 250, 250, 0.3)",
                                color: "black",
                                padding: 5,
                                fontSize: 20,
                                fontFamily: constants_1.ELEGANT_FONT,
                                fontWeight: 800
                            } },
                            React.createElement(react_flexbox_grid_1.Row, null,
                                React.createElement("div", { style: {
                                        opacity: 0.9,
                                        height: 20,
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        bottom: 45,
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        fontWeight: 600,
                                        fontSize: 16,
                                        textAlign: "center"
                                    } }, _this.props.appState.getSplit(composer.Nom, ",", 1))),
                            React.createElement(react_flexbox_grid_1.Row, null,
                                React.createElement("div", { style: {
                                        width: "100%",
                                        marginRight: 5,
                                        marginLeft: 5,
                                        opacity: 0.9,
                                        height: 25,
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        bottom: 28,
                                        fontSize: 14,
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        fontWeight: 800,
                                        textAlign: "center",
                                        textTransform: "uppercase"
                                    } },
                                    React.createElement(Textfit, { min: 20, max: 25, mode: "single", forceSingleModeWidth: true, throttle: 30, autoResize: true }, _this.props.appState.getSplit(composer.Nom, ",", 0)))),
                            React.createElement(react_flexbox_grid_1.Row, null),
                            React.createElement("div", { style: {
                                    height: 8,
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    bottom: 15,
                                    fontFamily: constants_1.ELEGANT_FONT,
                                    fontSize: 14,
                                    fontWeight: 800,
                                    textAlign: "center",
                                    margin: 5
                                } },
                                composer.AnyoNeix,
                                " - ",
                                composer.AnyoDefu)))));
            });
        };
        return (React.createElement(MasonryGrid_1.default, { gutter: 10, numColumns: constants_1.COMPOSER_NUMBER_COLS, items: items, factorY: FACTOR_Y }));
    };
    MyComposersItems = __decorate([
        mobx_react_1.inject("appState")
    ], MyComposersItems);
    return MyComposersItems;
}(React.Component));
exports.default = MyComposersItems;
