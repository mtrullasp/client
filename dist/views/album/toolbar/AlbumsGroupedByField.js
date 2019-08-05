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
var GroupedMenuCount_1 = require("../../../core/layout/GroupedMenuCount");
var mobx_react_1 = require("mobx-react");
var AlbumsGroupedByField = (function (_super) {
    __extends(AlbumsGroupedByField, _super);
    function AlbumsGroupedByField(props, context) {
        return _super.call(this, props, context) || this;
    }
    AlbumsGroupedByField.prototype.render = function () {
        var _this = this;
        return (!!this.props.albumStore.groupByField && (React.createElement(GroupedMenuCount_1.default, { data: this.props.albumStore.groups, activeItem: this.props.albumStore.activeGroupFieldValue, onChange: function (idMenu) {
                _this.props.albumStore.activeGroupFieldValue = idMenu;
            } })));
    };
    AlbumsGroupedByField = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], AlbumsGroupedByField);
    return AlbumsGroupedByField;
}(React.Component));
exports.default = AlbumsGroupedByField;
