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
var semantic_ui_react_1 = require("semantic-ui-react");
var constants_1 = require("../../util/constants");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
var MasonryGrid_1 = require("../../widgets/MasonryGrid/MasonryGrid");
var paleta_1 = require("../../styles/paleta");
var PerformerCollection = (function (_super) {
    __extends(PerformerCollection, _super);
    function PerformerCollection(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { indexHover: -1 };
        return _this;
    }
    PerformerCollection.prototype.render = function () {
        var _this = this;
        if (!this.props.performerStore.performersRaw) {
            return null;
        }
        var items = function (width, height) {
            return _this.props.performerStore.performersRaw.map(function (pr, index) {
                var contentBase = function (opacity) {
                    return (React.createElement("div", { key: pr.idMN, onClick: function () {
                            _this.props.albumStore.activeArtistIdMN = pr.idMN;
                            _this.props.history.push(constants_1.ROUTE_ALBUMS_COLLECTION);
                        } },
                        React.createElement(semantic_ui_react_1.Image, { fluid: true, src: "http://127.0.1.0/PictureArtist/" + pr.idMN + ".jpg", alt: pr.nameMN, style: {
                                height: width,
                                width: width,
                                opacity: _this.state.indexHover === index ? opacity + 0.4 : opacity
                            } }),
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
                                        bottom: 10,
                                        textTransform: _this.state.indexHover === index ? "uppercase" : "none",
                                        fontFamily: constants_1.ELEGANT_FONT,
                                        fontWeight: 600,
                                        color: _this.state.indexHover === index
                                            ? paleta_1.default.color50
                                            : paleta_1.default.color50,
                                        fontSize: _this.state.indexHover === index ? 30 : 25,
                                        textAlign: "center"
                                    } }, pr.nameMN)),
                            React.createElement(react_flexbox_grid_1.Row, null))));
                };
                return (React.createElement("li", { onMouseEnter: function () {
                        _this.setState({ indexHover: index });
                    }, onMouseLeave: function () {
                        _this.setState({ indexHover: -1 });
                    }, onClick: function (e) {
                    }, key: pr.idMN, className: typestyle_1.style({
                        cursor: "pointer",
                        listStyleType: "none"
                    }) + " bright-on-hover grow" },
                    React.createElement("div", null, contentBase(0.6))));
            });
        };
        var images = this.props.performerStore.performersRaw.map(function (performer, index) {
            return {
                src: "http://127.0.1.0/PictureArtist/" + performer.idMN + ".jpg",
                thumbnail: "http://127.0.1.0/PictureArtist/" + performer.idMN + ".jpg",
                performer: performer,
                tags: [{ value: performer.nameMN, title: "" }]
            };
        });
        return (items && (React.createElement(MaxHeightContainer_1.default, { style: {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                overflowY: "auto"
            }, footerHeight: 30 },
            React.createElement("div", { style: { width: "100%", marginRight: constants_1.MARGIN_HORITZONTAL / 2, overflowY: "auto" } },
                React.createElement("div", { style: { position: "relative", top: 5 } }),
                React.createElement(MasonryGrid_1.default, { onClickThumbnail: function (item) {
                        _this.props.albumStore.activeArtistIdMN = item.performer.idMN;
                        _this.props.history.push(constants_1.ROUTE_ALBUMS_COLLECTION);
                    }, gridEngine: "react-masonry-component", gutter: 5, numColumns: constants_1.COMPOSER_NUMBER_COLS, items: images })))));
    };
    PerformerCollection = __decorate([
        mobx_react_1.inject("performerStore"),
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], PerformerCollection);
    return PerformerCollection;
}(React.Component));
exports.default = PerformerCollection;
