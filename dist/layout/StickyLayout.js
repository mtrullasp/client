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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var menuStyle = {
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    marginBottom: "1em",
    marginTop: "4em",
    transition: "box-shadow 0.5s ease, padding 0.5s ease"
};
var fixedMenuStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};
var overlayStyle = {
    float: "left",
    margin: "0em 3em 1em 0em"
};
var fixedOverlayStyle = __assign({}, overlayStyle, { position: "fixed", top: "80px", zIndex: 10 });
var overlayMenuStyle = {
    position: "relative",
    left: 0,
    transition: "left 0.5s ease"
};
var fixedOverlayMenuStyle = __assign({}, overlayMenuStyle, { left: "800px" });
var LeftImage = function () { return (React.createElement(semantic_ui_react_1.Image, { floated: "left", size: "medium", src: "/images/wireframe/square-image.png", style: { margin: "2em 2em 2em -4em" } })); };
var RightImage = function () { return (React.createElement(semantic_ui_react_1.Image, { floated: "right", size: "medium", src: "/images/wireframe/square-image.png", style: { margin: "2em -4em 2em 2em" } })); };
var Paragraph = function () { return (React.createElement("p", null, [
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
    "tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ",
    "semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ",
    "ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ",
    "fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ",
    "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ",
    "neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ",
    "accumsan porttitor, facilisis luctus, metus"
].join(""))); };
var StickyLayout = (function (_super) {
    __extends(StickyLayout, _super);
    function StickyLayout(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            menuFixed: false,
            overlayFixed: false
        };
        _this.handleOverlayRef = function (c) {
            var overlayRect = _this.state.overlayRect;
            if (!overlayRect) {
                _this.setState({
                    overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
                });
            }
        };
        _this.stickOverlay = function () { return _this.setState({ overlayFixed: true }); };
        _this.stickTopMenu = function () { return _this.setState({ menuFixed: true }); };
        _this.unStickOverlay = function () { return _this.setState({ overlayFixed: false }); };
        _this.unStickTopMenu = function () { return _this.setState({ menuFixed: false }); };
        return _this;
    }
    StickyLayout.prototype.render = function () {
        var _a = this.state, menuFixed = _a.menuFixed, overlayFixed = _a.overlayFixed, overlayRect = _a.overlayRect;
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Visibility, { onBottomPassed: this.stickTopMenu, onBottomVisible: this.unStickTopMenu, once: false },
                React.createElement(semantic_ui_react_1.Menu, { borderless: true, fixed: menuFixed ? "top" : undefined, style: menuFixed ? fixedMenuStyle : menuStyle },
                    React.createElement(semantic_ui_react_1.Container, { text: true }, this.props.headerContent))),
            React.createElement(semantic_ui_react_1.Container, { text: true },
                _.times(3, function (i) { return (React.createElement(Paragraph, { key: i })); }),
                React.createElement(semantic_ui_react_1.Visibility, { offset: 80, once: false, onTopPassed: this.stickOverlay, onTopVisible: this.unStickOverlay, style: overlayFixed ? __assign({}, overlayStyle, overlayRect) : {} }),
                React.createElement("div", { ref: this.handleOverlayRef, style: overlayFixed ? fixedOverlayStyle : overlayStyle }, this.props.bodyContent))));
    };
    return StickyLayout;
}(React.Component));
exports.default = StickyLayout;
