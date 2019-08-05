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
var constants_1 = require("../../../util/constants");
var grid = require("mauerwerk");
var react_container_dimensions_1 = require("react-container-dimensions");
var Grid = grid.Grid;
var FACTOR_Y = 1;
var AlbumsGridList = (function (_super) {
    __extends(AlbumsGridList, _super);
    function AlbumsGridList(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { indexHover: -1 };
        return _this;
    }
    AlbumsGridList.prototype.render = function () {
        var _this = this;
        if (!this.props.items) {
            return null;
        }
        var GUTTER = 10;
        var numColumns = !!this.props.itemConfig
            ? this.props.itemConfig.masonryConfig.numColumns
            : constants_1.DEFAULT_NUM_MASONRY_COLUMNS;
        return (React.createElement(react_container_dimensions_1.default, null, function (_a) {
            var width = _a.width, height = _a.height;
            width -= constants_1.MARGIN_HORITZONTAL;
            return (React.createElement(Grid, { data: _this.props.items, keys: function (d) { return d.idAlbum; }, heights: function (d) { return width / 4; }, columns: 4, lockScroll: false, inactiveDelay: 300, style: { marginRight: constants_1.MARGIN_HORITZONTAL } }, function (data, maximized, toggle) { return (React.createElement("div", { style: { cursor: "pointer" }, onClick: function (e) {
                    e.stopPropagation();
                    _this.props.onClick(data);
                } },
                React.createElement("img", { src: data.cover_big, alt: data.title, style: {
                        height: width / 4 - GUTTER,
                        width: width / 4 - GUTTER,
                        opacity: !!data.idAllMusicAlbum ? 1 : 0.3
                    } }))); }));
        }));
    };
    return AlbumsGridList;
}(React.Component));
exports.default = AlbumsGridList;
