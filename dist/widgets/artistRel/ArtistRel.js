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
var react_avatar_1 = require("react-avatar");
var DivInline_1 = require("../DivInline.");
var MaxHeightContainer_1 = require("../MaxHeightContainer");
var Header_1 = require("../../Header");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var OnHover3d_1 = require("../3dbutton/OnHover3d");
var ArtistRel = (function (_super) {
    __extends(ArtistRel, _super);
    function ArtistRel(props, context) {
        return _super.call(this, props, context) || this;
    }
    ArtistRel.prototype.render = function () {
        var _this = this;
        return (React.createElement(MaxHeightContainer_1.default, { footerHeight: Header_1.ABSOLUTE_MARGIN, style: { overflowY: "auto" } },
            React.createElement(react_custom_scrollbars_1.default, { autoHide: true },
                React.createElement(semantic_ui_react_1.List, { selection: true, verticalAlign: "middle", style: { margin: 20 } },
                    React.createElement(semantic_ui_react_1.List.Header, null,
                        React.createElement("h3", null, this.props.relTip || "Relacionats")),
                    React.createElement(semantic_ui_react_1.Divider, null),
                    this.props.rels
                        .filter(function (a) { return a.relTipName === _this.props.relTip; }, this)
                        .map(function (a, i) {
                        return (React.createElement(OnHover3d_1.default, null,
                            React.createElement(semantic_ui_react_1.List.Item, { onClick: function () {
                                    debugger;
                                    _this.props.goArtist(a.idArtistRel);
                                } },
                                React.createElement(DivInline_1.default, null,
                                    React.createElement(react_avatar_1.default, { style: { filter: "grayscale(100%)" }, size: "40px", round: true, src: _this.props.getImageArtist(a.idArtistRel), name: a.artistName })),
                                React.createElement(DivInline_1.default, { style: { marginLeft: 10 } },
                                    React.createElement(semantic_ui_react_1.List.Content, null,
                                        React.createElement(semantic_ui_react_1.List.Header, null, a.artistName))))));
                    })))));
    };
    ArtistRel = __decorate([
        mobx_react_1.inject("routerStore"),
        mobx_react_1.observer
    ], ArtistRel);
    return ArtistRel;
}(React.Component));
exports.default = ArtistRel;
