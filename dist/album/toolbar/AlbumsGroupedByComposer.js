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
var GroupedMenuCount_1 = require("../../layout/GroupedMenuCount");
var mobx_react_1 = require("mobx-react");
var AlbumsGroupedByComposer = (function (_super) {
    __extends(AlbumsGroupedByComposer, _super);
    function AlbumsGroupedByComposer(props, context) {
        return _super.call(this, props, context) || this;
    }
    AlbumsGroupedByComposer.prototype.render = function () {
        var _this = this;
        return (this.props.albumStore.isGroupedByComposer && (React.createElement(GroupedMenuCount_1.default, { data: this.props.albumStore.groupsComposer, activeItem: this.props.albumStore.activeGroupIdComposer, onChange: function (idMenu) {
                _this.props.albumStore.activeGroupIdComposer = idMenu;
            } })));
    };
    AlbumsGroupedByComposer = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], AlbumsGroupedByComposer);
    return AlbumsGroupedByComposer;
}(React.Component));
exports.default = AlbumsGroupedByComposer;