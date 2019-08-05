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
var ActiveCredits = (function (_super) {
    __extends(ActiveCredits, _super);
    function ActiveCredits(props, context) {
        return _super.call(this, props, context) || this;
    }
    ActiveCredits.prototype.render = function () {
        var _this = this;
        return (React.createElement("p", { style: { fontSize: 14 } }, this.props.albumStore.activeTrackCredits &&
            this.props.albumStore.activeTrackCredits.map(function (credit) {
                return (React.createElement(React.Fragment, null,
                    React.createElement("span", null, credit.creditTip),
                    " ",
                    React.createElement("a", { style: { cursor: "pointer" }, onClick: function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            _this.props.albumStore.activeArtistIdMN = credit.idMN;
                            _this.props.albumStore.activeArtistNameMN = credit.nameMN;
                            _this.props.routerStore.go("/performer/" + credit.idMN + "/albums");
                        } }, credit.creditValue),
                    ".",
                    " "));
            })));
    };
    ActiveCredits = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("routerStore"),
        mobx_react_1.observer
    ], ActiveCredits);
    return ActiveCredits;
}(React.Component));
exports.default = ActiveCredits;
