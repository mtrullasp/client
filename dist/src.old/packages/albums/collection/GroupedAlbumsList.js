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
var constants_1 = require("../../../util/constants");
var AlbumsList_1 = require("./AlbumsList");
var GroupedAlbumsList = (function (_super) {
    __extends(GroupedAlbumsList, _super);
    function GroupedAlbumsList(props, context) {
        return _super.call(this, props, context) || this;
    }
    GroupedAlbumsList.prototype.render = function () {
        var _this = this;
        var groupField = this.props.appState.albums.groupByField;
        var groups = this.props.appState.albums.albumsGroupedByField;
        var items = Object.keys(groups).map(function (idGroup) {
            return (React.createElement("div", null,
                React.createElement("header", null,
                    React.createElement("div", { style: {
                            padding: 0,
                            width: "100%",
                            fontSize: 35,
                            fontWeight: 400,
                            backgroundColor: "transparent",
                            color: "black",
                            marginTop: 20,
                            paddingLeft: 0,
                            marginBottom: 0,
                            fontFamily: constants_1.ELEGANT_FONT,
                        } },
                        idGroup,
                        React.createElement("span", { className: "count" }, groups[idGroup].length),
                        React.createElement(AlbumsList_1.default, { items: groups[idGroup], onClick: _this.props.onClick })))));
        });
        return (React.createElement("div", { style: { position: "absolute", left: 0, right: 0, overflowY: "hidden" } }, items));
    };
    GroupedAlbumsList = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], GroupedAlbumsList);
    return GroupedAlbumsList;
}(React.Component));
exports.default = GroupedAlbumsList;
