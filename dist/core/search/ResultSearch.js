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
var MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
var react_lazy_load_1 = require("react-lazy-load");
var ResultSearch = (function (_super) {
    __extends(ResultSearch, _super);
    function ResultSearch(props, context) {
        return _super.call(this, props, context) || this;
    }
    ResultSearch.prototype.render = function () {
        var _this = this;
        var tableItems = this.props.searchStore.resultsOrd
            .filter(function (f) { return true || !!f.itemImage; })
            .map(function (item, i) {
            return (React.createElement(semantic_ui_react_1.Table.Row, { style: { paddingRight: 20, cursor: "pointer" }, onClick: function () {
                    _this.props.albumStore.activeArtistNameMN = item.itemName;
                    if (item.itemType === "Performer") {
                        _this.props.performerStore
                            .setActivePerformer(item.itemCode.toString())
                            .then(function () {
                            _this.props.routerStore.go(constants_1.ROUTE_PERFORMER.replace(":idMN", item.itemCode));
                        });
                    }
                    else if (item.itemType === "Album") {
                        _this.props.albumStore.setActiveAlbumById(Number(item.itemCode));
                        _this.props.routerStore.go(constants_1.ROUTE_ALBUM_TRACKS.replace(":idAlbum", item.itemCode));
                    }
                } },
                React.createElement(semantic_ui_react_1.Table.Cell, null,
                    " ",
                    item.itemImage && React.createElement(semantic_ui_react_1.Image, { src: item.itemImage, size: "tiny" })),
                React.createElement(semantic_ui_react_1.Table.Cell, null,
                    React.createElement("h4", null, item.itemType)),
                React.createElement(semantic_ui_react_1.Table.Cell, null,
                    React.createElement("h4", { style: { fontWeight: 400 } }, item.itemName))));
        });
        return (!!tableItems.length && (React.createElement(react_lazy_load_1.default, null,
            React.createElement(MaxHeightContainer_1.default, { style: { overflowY: "auto" } },
                React.createElement(semantic_ui_react_1.Segment, { floated: "right", style: { width: "40%" }, compact: true, padded: false },
                    React.createElement(semantic_ui_react_1.Table, { sortable: true, basic: "very", selectable: true },
                        React.createElement(semantic_ui_react_1.Table.Body, null, tableItems)))))));
    };
    ResultSearch = __decorate([
        mobx_react_1.observer,
        mobx_react_1.inject("searchStore"),
        mobx_react_1.inject("routerStore"),
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("performerStore")
    ], ResultSearch);
    return ResultSearch;
}(React.PureComponent));
exports.default = ResultSearch;
