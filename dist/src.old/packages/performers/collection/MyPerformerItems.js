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
var constants_1 = require("../../../util/constants");
var typestyle_1 = require("typestyle");
var MasonryGrid_1 = require("../../../widgets/MasonryGrid");
var TextFit_1 = require("../../../widgets/TextFit/TextFit");
var mobx_react_1 = require("mobx-react");
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
        fontSize: 10,
        height: "10%",
        opacity: 0.5
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
}); };
var MyPerformerItems = (function (_super) {
    __extends(MyPerformerItems, _super);
    function MyPerformerItems(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { isHover: false };
        return _this;
    }
    MyPerformerItems.prototype.render = function () {
        var _this = this;
        var images = this.props.items.map(function (performer, index) {
            return {
                src: performer.picture_medium,
                thumbnail: performer.picture_medium,
                performer: performer,
                tags: [{ value: performer.name, title: "" }]
            };
        });
        var items = function (width, height) {
            return _this.props.items.map(function (performer, index) {
                return (React.createElement("li", { key: performer.idArtist, className: typestyle_1.style({
                        cursor: "pointer",
                        listStyleType: "none"
                    }) + " bright-on-hover", style: { opacity: !!performer.obj_tag ? 1 : 0.2 } },
                    React.createElement("img", { onClick: function (e) {
                            _this.props.onClick(performer);
                        }, src: performer.picture_medium, alt: performer.name, style: {
                            height: width,
                            width: "auto"
                        } }),
                    React.createElement("footer", { style: {
                            backgroundColor: "rgba(250, 250, 250, 0.3)",
                            color: "white",
                            padding: 5,
                            fontSize: 20,
                            fontFamily: constants_1.ELEGANT_FONT,
                            fontWeight: 800
                        } },
                        React.createElement("div", { style: {
                                height: 30,
                                position: "absolute",
                                left: constants_1.MARGIN_HORITZONTAL,
                                right: 0,
                                top: 10,
                                fontFamily: constants_1.ELEGANT_FONT,
                                fontWeight: 900,
                                textAlign: "center",
                                color: "white"
                            } }, !!performer.obj_tag &&
                            performer.obj_tag.length &&
                            performer.obj_tag
                                .map(function (t) { return t.tag; })
                                .reduce(function (pValue, cValue, i, init) {
                                return pValue + ", " + cValue;
                            })),
                        React.createElement("div", { style: {
                                height: 40,
                                position: "absolute",
                                left: constants_1.MARGIN_HORITZONTAL,
                                right: 0,
                                bottom: 0,
                                marginTop: 15,
                                fontWeight: 800,
                                textAlign: "center",
                                fontSize: 14,
                                opacity: 0.6,
                                backgroundColor: "black"
                            } },
                            React.createElement("div", { style: {
                                    fontFamily: constants_1.FONT_SEMI_SLIM,
                                    color: "white",
                                    backgroundColor: "black",
                                    backgroundBlendMode: "difference"
                                } },
                                React.createElement(TextFit_1.default, { maxFontSize: 16, text: performer.name }))),
                        React.createElement("div", { style: {
                                height: 10,
                                position: "absolute",
                                left: constants_1.MARGIN_HORITZONTAL,
                                right: 0,
                                bottom: 22,
                                fontFamily: constants_1.ELEGANT_FONT,
                                fontSize: 14,
                                fontWeight: 500,
                                textAlign: "center"
                            } }))));
            });
        };
        var NUM_COLUMNS = this.props.numberOfOclumns;
        return (React.createElement(MasonryGrid_1.default, { onClickThumbnail: function (item) {
                _this.props.onClick(item.performer);
            }, gridEngine: "react-grid-gallery", gutter: 1, numColumns: NUM_COLUMNS, items: images }));
    };
    MyPerformerItems = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], MyPerformerItems);
    return MyPerformerItems;
}(React.Component));
exports.default = MyPerformerItems;
