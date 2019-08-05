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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var typestyle_1 = require("typestyle");
var constants_1 = require("../../../util/constants");
var MasonryGrid_1 = require("../../../widgets/MasonryGrid");
var FACTOR_Y = 1;
var AlbumsList = (function (_super) {
    __extends(AlbumsList, _super);
    function AlbumsList(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { indexHover: -1 };
        return _this;
    }
    AlbumsList.prototype.render = function () {
        var _this = this;
        if (!this.props.items) {
            return null;
        }
        var items = this.props.items.map(function (album, index) {
            return (React.createElement("li", { onClick: function (e) {
                    _this.props.onClick(album);
                }, onMouseEnter: function () {
                    return setTimeout(function () { return _this.setState({ indexHover: index }); }, 0);
                }, onMouseLeave: function () { return _this.setState({ indexHover: -1 }); }, key: album.idAlbum, className: typestyle_1.style({
                    cursor: "pointer",
                    left: constants_1.MARGIN_LEFT,
                    listStyleType: "none"
                }) + " bright-on-hover" },
                React.createElement("div", null,
                    React.createElement("img", { src: album.cover_big, alt: album.title, style: {
                            height: width * FACTOR_Y,
                            width: width,
                            border: !!album.idAllMusicAlbum ? "2px solid black" : "",
                            opacity: !!album.idAllMusicAlbum ? 1 : 0.3
                        } }),
                    React.createElement("footer", { style: {
                            position: "absolute",
                            bottom: 40,
                            fontSize: 30,
                            fontWeight: "bold",
                            color: "white"
                        } },
                        "AL: ",
                        album.idAllMusicAlbum))));
        });
        var numColumns = !!this.props.itemConfig
            ? this.props.itemConfig.masonryConfig.numColumns
            : constants_1.DEFAULT_NUM_MASONRY_COLUMNS;
        return (React.createElement(MasonryGrid_1.default, { gutter: 10, numColumns: 4, items: items, factorY: FACTOR_Y }));
    };
    return AlbumsList;
}(React.Component));
exports.default = AlbumsList;
