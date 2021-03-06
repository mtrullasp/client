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
var FACTOR_Y = 1;
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
        var items = this.props.albumStore.albums.map(function (a) {
            return (React.createElement("div", { style: { cursor: "pointer", marginTop: 0 }, onClick: function () {
                    _this.props.history.push(constants_1.ROUTE_ALBUM_TRACKS.replace(":idAlbum", a.idAlbum.toString()));
                } },
                React.createElement("div", { className: "card-5" },
                    React.createElement("img", { src: a.urlCover, style: { width: SIZE_RECT, height: SIZE_RECT } }))));
        });
        return (React.createElement(MyCollection_1.default, { asideLeftContent: null, sectionContent: React.createElement(MaxHeightContainer_1.default, { style: { overflowY: "hidden" } },
                React.createElement("div", { style: {
                        overflowY: "hidden"
                    } },
                    React.createElement(CollectionCounter_1.default, { items: items }),
                    React.createElement(MasonryGrid_1.default, { gutter: 5, numColumns: ALBUMS_NUMBER_COLS, items: items, factorY: FACTOR_Y }))), headerContent: React.createElement(AlbumsToolbar_1.default, null) }));
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
