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
var Header_1 = require("../../Header");
var HeadNameComposer_1 = require("../header/HeadNameComposer");
var QuotesCarousel_1 = require("./QuotesCarousel");
var mobx_react_1 = require("mobx-react");
var CollectionNav_1 = require("../../core/routingNav/CollectionNav");
var DivInline_1 = require("../../widgets/DivInline.");
var react_router_1 = require("react-router");
var constants_1 = require("../../util/constants");
var ComposerWorksCollection_1 = require("../composerWork/collections/ComposerWorksCollection");
var MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
var semantic_ui_react_1 = require("semantic-ui-react");
var ArtistRel_1 = require("../../widgets/artistRel/ArtistRel");
var html_react_parser_1 = require("html-react-parser");
var HyperText_1 = require("../../widgets/HyperText/HyperText");
var renderprops_1 = require("react-spring/renderprops");
var MARGE_LEFT = constants_1.MARGIN_HORITZONTAL;
var ComposerItem = (function (_super) {
    __extends(ComposerItem, _super);
    function ComposerItem(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { visible: true };
        return _this;
    }
    ComposerItem.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var content = null;
        var visible = this.state.visible;
        var cs = this.props.composerStore;
        if (!!this.props.composerStore &&
            !!this.props.composerStore.activeComposer) {
            var tabsContent_1 = (React.createElement(MaxHeightContainer_1.default, null,
                React.createElement("div", { style: {
                        left: 0,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: "100%",
                        bottom: 20,
                        overflowY: "auto",
                        zIndex: 100
                    } },
                    React.createElement(ComposerWorksCollection_1.default, null))));
            var panes = [
                {
                    menuItem: "Biography",
                    render: function () { return (React.createElement(HyperText_1.default, { onLink: function (href, e) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (_this.props.composerStore.onHyperLink(href, e)) {
                            }
                        }, text: React.createElement("div", { style: { marginRight: 0, fontSize: 17 } }, html_react_parser_1.default(_this.props.composerStore.activeComposer.Bio + "")) })); }
                },
                {
                    menuItem: "Works",
                    render: function () { return (React.createElement("div", { style: { position: "relative", top: -10 } }, tabsContent_1)); }
                },
                {
                    menuItem: "Connections",
                    render: function () { return (React.createElement("div", null,
                        React.createElement(DivInline_1.default, { style: { width: "25%", verticalAlign: "top" } },
                            React.createElement(ArtistRel_1.default, { relTip: "Influenced by", getImageArtist: cs.getImageArtist, goArtist: cs.goArtist.bind(_this.props.composerStore), rels: cs.composerRels })),
                        React.createElement(DivInline_1.default, { style: { width: "25%", verticalAlign: "top" } },
                            React.createElement(ArtistRel_1.default, { relTip: "Followed by", getImageArtist: cs.getImageArtist, goArtist: cs.goArtist.bind(_this.props.composerStore), rels: cs.composerRels })),
                        React.createElement(DivInline_1.default, { style: { width: "25%", verticalAlign: "top" } },
                            React.createElement(ArtistRel_1.default, { relTip: "Similar to", getImageArtist: cs.getImageArtist, goArtist: cs.goArtist.bind(_this.props.composerStore), rels: cs.composerRels })))); }
                },
                {
                    menuItem: "Timeline",
                    render: function () { return React.createElement("div", null, "Timeline"); }
                },
            ];
            var tabs = (React.createElement(semantic_ui_react_1.Tab, { renderActiveOnly: true, menu: { secondary: true, pointing: true }, panes: panes, style: { marginRight: 100 } }));
            var composer = this.props.composerStore.activeComposer;
            content = (React.createElement("div", { style: { marginTop: 10 } },
                React.createElement("div", { style: {
                        position: "absolute",
                        left: 0,
                        width: 80,
                        top: Header_1.TOP_NAME,
                        verticalAlign: "center"
                    } },
                    React.createElement("div", { style: { position: "absolute", left: -MARGE_LEFT + 10, top: 10 } },
                        React.createElement(CollectionNav_1.default, { isEnabledNext: this.props.composerStore.isNextable, isEnabledPrevious: this.props.composerStore.isPreviousable, onClickNext: function () { return _this.props.composerStore.goNextComposer(); }, onClickPrevious: function () {
                                return _this.props.composerStore.goPreviousComposer();
                            } }))),
                React.createElement("div", { style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 20
                    } },
                    React.createElement(HeadNameComposer_1.default, { firstName: this.props.composerStore.firstNameComposer, lastName: this.props.composerStore.lastNameComposer, AnyoNeix: (_c = (_b = (_a = this.props.composerStore) === null || _a === void 0 ? void 0 : _a.activeComposer) === null || _b === void 0 ? void 0 : _b.AnyoNeix) === null || _c === void 0 ? void 0 : _c.toString(), AnyoDefu: (_f = (_e = (_d = this.props.composerStore) === null || _d === void 0 ? void 0 : _d.activeComposer) === null || _e === void 0 ? void 0 : _e.AnyoDefu) === null || _f === void 0 ? void 0 : _f.toString(), CiutatNeix: (_h = (_g = this.props.composerStore) === null || _g === void 0 ? void 0 : _g.activeComposer) === null || _h === void 0 ? void 0 : _h.CiutatNeix, CiutatDefu: (_k = (_j = this.props.composerStore) === null || _j === void 0 ? void 0 : _j.activeComposer) === null || _k === void 0 ? void 0 : _k.CiutatDefu, PaisNeix: (_m = (_l = this.props.composerStore) === null || _l === void 0 ? void 0 : _l.activeComposer) === null || _m === void 0 ? void 0 : _m.PaisNeix, PaisDefu: (_p = (_o = this.props.composerStore) === null || _o === void 0 ? void 0 : _o.activeComposer) === null || _p === void 0 ? void 0 : _p.PaisDefu }),
                    React.createElement("div", { style: {
                            position: "relative",
                            top: -20,
                            right: constants_1.MARGIN_LEFT,
                            left: 0,
                            marginRight: constants_1.MARGIN_LEFT
                        } },
                        React.createElement(QuotesCarousel_1.default, null))),
                React.createElement(MaxHeightContainer_1.default, null,
                    React.createElement("div", { style: {
                            position: "absolute",
                            left: 0,
                            top: 260,
                            bottom: 20,
                            overflowY: "hidden",
                            zIndex: 100,
                            right: 0
                        } },
                        React.createElement("div", null, tabs))),
                React.createElement(renderprops_1.Spring, { key: (_r = (_q = this.props.composerStore) === null || _q === void 0 ? void 0 : _q.activeComposer) === null || _r === void 0 ? void 0 : _r.idMN, from: { opacity: 0 }, to: { opacity: 0.25 }, config: { duration: 1500 } }, function (props) { return (React.createElement("img", { style: {
                        opacity: props.opacity,
                        position: "absolute",
                        top: -80,
                        left: -300,
                        width: "40%",
                        zIndex: 0,
                        userSelect: "none"
                    }, src: _this.props.composerStore.activeComposerImgUrl })); })));
        }
        return React.createElement("div", null, content);
    };
    ComposerItem = __decorate([
        mobx_react_1.inject("composerStore"),
        mobx_react_1.observer
    ], ComposerItem);
    return ComposerItem;
}(React.Component));
exports.default = react_router_1.withRouter(ComposerItem);
