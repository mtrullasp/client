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
var MasonryGrid_1 = require("../../../widgets/MasonryGrid");
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
var MyPerformerInstrumentsItems = (function (_super) {
    __extends(MyPerformerInstrumentsItems, _super);
    function MyPerformerInstrumentsItems(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { isHover: false };
        return _this;
    }
    MyPerformerInstrumentsItems.prototype.render = function () {
        var _this = this;
        var images = this.props.items.map(function (performer, index) {
            return {
                src: performer.picture_url,
                thumbnail: performer.picture_url,
                performer: performer,
                tags: [{ value: performer.name, title: "" }]
            };
        });
        return (React.createElement(MasonryGrid_1.default, { onClickThumbnail: function (item) {
                _this.props.onClick(item.performer);
            }, gridEngine: "react-masonry-component", gutter: 4, numColumns: this.props.numColumns, items: images }));
    };
    return MyPerformerInstrumentsItems;
}(React.Component));
exports.default = MyPerformerInstrumentsItems;
