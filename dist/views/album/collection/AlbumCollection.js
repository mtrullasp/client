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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MasonryGrid_1 = require("../../../widgets/MasonryGrid/MasonryGrid");
var constants_1 = require("../../../util/constants");
var mobx_react_1 = require("mobx-react");
var react_router_1 = require("react-router");
var MaxHeightContainer_1 = require("../../../widgets/MaxHeightContainer");
require("img-2");
var AlbumsToolbar_1 = require("../toolbar/AlbumsToolbar");
var MyCollection_1 = require("../../../widgets/MyCollection/MyCollection");
require("../../../styles/elevation.css");
var CollectionCounter_1 = require("../../../core/collections/CollectionCounter");
var AlbumsGroupedByField_1 = require("../toolbar/AlbumsGroupedByField");
var MyPaper_1 = require("../../../widgets/MyPaper");
var react_lazy_images_1 = require("react-lazy-images");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var DivInline_1 = require("../../../widgets/DivInline.");
var FACTOR_Y = 1.1;
var ALBUMS_NUMBER_COLS = 4;
var SIZE_RECT = 350;
var AlbumCollection = (function (_super) {
    __extends(AlbumCollection, _super);
    function AlbumCollection(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (!!props.match.params["idMN"]) {
            props.albumStore.activeArtistIdMN = props.match.params["idMN"];
        }
        return _this;
    }
    AlbumCollection.prototype.render = function () {
        var _this = this;
        if (!this.props.albumStore.albums) {
            return null;
        }
        var items = function (width, height) {
            return _this.props.albumStore.albums.map(function (a) {
                return (React.createElement("div", { className: "four wide column", key: a.idAlbum, style: { cursor: "pointer", marginTop: 0 }, onClick: function () {
                        _this.props.history.push(constants_1.ROUTE_ALBUM_TRACKS.replace(":idAlbum", a.idAlbum.toString()));
                    } },
                    React.createElement(MyPaper_1.default, { elevation: 15 },
                        React.createElement(react_lazy_images_1.LazyImage, { src: a.urlCover, placeholder: function (_a) {
                                var imageProps = _a.imageProps, ref = _a.ref;
                                return React.createElement("img", { ref: ref });
                            }, actual: function (_a) {
                                var imageProps = _a.imageProps;
                                return (React.createElement("div", { className: "LazyImage-Actual" },
                                    React.createElement("img", __assign({}, imageProps))));
                            }, style: {
                                height: width,
                                width: "auto"
                            } }))));
            });
        };
        return (React.createElement(MyCollection_1.default, { asideLeftContent: !!this.props.albumStore.groupByField ? React.createElement(AlbumsGroupedByField_1.default, null) : null, sectionContent: React.createElement(MaxHeightContainer_1.default, null,
                React.createElement(react_custom_scrollbars_1.default, { autoHide: true, hideTracksWhenNotNeeded: true, thumbSize: 50 },
                    React.createElement("div", { style: {
                            width: "100%"
                        } },
                        React.createElement(MaxHeightContainer_1.default, null,
                            React.createElement(MasonryGrid_1.default, { style: { margin: 10 }, gutter: 15, numColumns: this.props.albumStore.numColumsAlbums, items: items, factorY: FACTOR_Y }))))), headerContent: React.createElement("div", null,
                React.createElement(DivInline_1.default, null,
                    React.createElement(CollectionCounter_1.default, { itemsCount: this.props.albumStore.albumsCount, itemsDesc: "albums." })),
                React.createElement(DivInline_1.default, null,
                    React.createElement(AlbumsToolbar_1.default, null))) }));
    };
    AlbumCollection.defaultProps = {};
    AlbumCollection = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("routerStore"),
        mobx_react_1.observer
    ], AlbumCollection);
    return AlbumCollection;
}(React.Component));
exports.default = react_router_1.withRouter(AlbumCollection);
