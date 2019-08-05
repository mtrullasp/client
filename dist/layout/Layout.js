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
var lodash_1 = require("lodash");
var react_1 = require("react");
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
var LeftImage = function () { return (react_1.default.createElement(semantic_ui_react_1.Image, { floated: "left", size: "medium", src: "/images/wireframe/square-image.png", style: { margin: "2em 2em 2em -4em" } })); };
var RightImage = function () { return (react_1.default.createElement(semantic_ui_react_1.Image, { floated: "right", size: "medium", src: "/images/wireframe/square-image.png", style: { margin: "2em -4em 2em 2em" } })); };
var Paragraph = function () { return (react_1.default.createElement("p", null, [
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
    function StickyLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            menuFixed: false,
            overlayFixed: false
        };
        _this.handleOverlayRef = function (c) {
            var overlayRect = _this.state.overlayRect;
            if (!overlayRect) {
                _this.setState({
                    overlayRect: lodash_1.default.pick(c.getBoundingClientRect(), "height", "width")
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
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("style", null, "\n          html, body {\n            background: #fff;\n          }\n        "),
            react_1.default.createElement(semantic_ui_react_1.Container, { text: true, style: { marginTop: "2em" } },
                react_1.default.createElement(semantic_ui_react_1.Header, { as: "h1" }, "Sticky Example"),
                react_1.default.createElement("p", null, "This example shows how to use lazy loaded images, a sticky menu, and a simple text container")),
            react_1.default.createElement(semantic_ui_react_1.Visibility, { onBottomPassed: this.stickTopMenu, onBottomVisible: this.unStickTopMenu, once: false },
                react_1.default.createElement(semantic_ui_react_1.Menu, { borderless: true, fixed: menuFixed ? "top" : undefined, style: menuFixed ? fixedMenuStyle : menuStyle },
                    react_1.default.createElement(semantic_ui_react_1.Container, { text: true },
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                            react_1.default.createElement(semantic_ui_react_1.Image, { size: "mini", src: "/logo.png" })),
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { header: true }, "Project Name"),
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { as: "a" }, "Blog"),
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { as: "a" }, "Articles"),
                        react_1.default.createElement(semantic_ui_react_1.Menu.Menu, { position: "right" },
                            react_1.default.createElement(semantic_ui_react_1.Dropdown, { text: "Dropdown", pointing: true, className: "link item" },
                                react_1.default.createElement(semantic_ui_react_1.Dropdown.Menu, null,
                                    react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, null, "List Item"),
                                    react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, null, "List Item"),
                                    react_1.default.createElement(semantic_ui_react_1.Dropdown.Divider, null),
                                    react_1.default.createElement(semantic_ui_react_1.Dropdown.Header, null, "Header Item"),
                                    react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, null,
                                        react_1.default.createElement("i", { className: "dropdown icon" }),
                                        react_1.default.createElement("span", { className: "text" }, "Submenu"),
                                        react_1.default.createElement(semantic_ui_react_1.Dropdown.Menu, null,
                                            react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, null, "List Item"),
                                            react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, null, "List Item"))),
                                    react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, null, "List Item"))))))),
            react_1.default.createElement(semantic_ui_react_1.Container, { text: true },
                lodash_1.default.times(3, function (i) { return (react_1.default.createElement(Paragraph, { key: i })); }),
                react_1.default.createElement(semantic_ui_react_1.Visibility, { offset: 80, once: false, onTopPassed: this.stickOverlay, onTopVisible: this.unStickOverlay, style: overlayFixed ? __assign({}, overlayStyle, overlayRect) : {} }),
                react_1.default.createElement("div", { ref: this.handleOverlayRef, style: overlayFixed ? fixedOverlayStyle : overlayStyle },
                    react_1.default.createElement(semantic_ui_react_1.Menu, { icon: "labeled", style: overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle, vertical: true },
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                            react_1.default.createElement(semantic_ui_react_1.Icon, { name: "twitter" }),
                            "Twitter"),
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                            react_1.default.createElement(semantic_ui_react_1.Icon, { name: "facebook" }),
                            "Share"),
                        react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                            react_1.default.createElement(semantic_ui_react_1.Icon, { name: "mail" }),
                            "Email"))),
                lodash_1.default.times(3, function (i) { return (react_1.default.createElement(Paragraph, { key: i })); }),
                react_1.default.createElement(LeftImage, null),
                react_1.default.createElement(Paragraph, null),
                react_1.default.createElement(RightImage, null),
                lodash_1.default.times(4, function (i) { return (react_1.default.createElement(Paragraph, { key: i })); }),
                react_1.default.createElement(LeftImage, null),
                react_1.default.createElement(Paragraph, null),
                react_1.default.createElement(RightImage, null),
                lodash_1.default.times(2, function (i) { return (react_1.default.createElement(Paragraph, { key: i })); })),
            react_1.default.createElement(semantic_ui_react_1.Segment, { inverted: true, style: { margin: "5em 0em 0em", padding: "5em 0em" }, vertical: true },
                react_1.default.createElement(semantic_ui_react_1.Container, { textAlign: "center" },
                    react_1.default.createElement(semantic_ui_react_1.Grid, { columns: 4, divided: true, stackable: true, inverted: true },
                        react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
                            react_1.default.createElement(semantic_ui_react_1.Grid.Column, null,
                                react_1.default.createElement(semantic_ui_react_1.Header, { inverted: true, as: "h4", content: "Group 1" }),
                                react_1.default.createElement(semantic_ui_react_1.List, { link: true, inverted: true },
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link One"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Two"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Three"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Four"))),
                            react_1.default.createElement(semantic_ui_react_1.Grid.Column, null,
                                react_1.default.createElement(semantic_ui_react_1.Header, { inverted: true, as: "h4", content: "Group 2" }),
                                react_1.default.createElement(semantic_ui_react_1.List, { link: true, inverted: true },
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link One"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Two"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Three"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Four"))),
                            react_1.default.createElement(semantic_ui_react_1.Grid.Column, null,
                                react_1.default.createElement(semantic_ui_react_1.Header, { inverted: true, as: "h4", content: "Group 3" }),
                                react_1.default.createElement(semantic_ui_react_1.List, { link: true, inverted: true },
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link One"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Two"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Three"),
                                    react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a" }, "Link Four"))),
                            react_1.default.createElement(semantic_ui_react_1.Grid.Column, null,
                                react_1.default.createElement(semantic_ui_react_1.Header, { inverted: true, as: "h4", content: "Footer Header" }),
                                react_1.default.createElement("p", null, "Extra space for a call to action inside the footer that could help re-engage users.")))),
                    react_1.default.createElement(semantic_ui_react_1.Divider, { inverted: true, section: true }),
                    react_1.default.createElement(semantic_ui_react_1.Image, { src: "/logo.png", centered: true, size: "mini" }),
                    react_1.default.createElement(semantic_ui_react_1.List, { horizontal: true, inverted: true, divided: true, link: true, size: "small" },
                        react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a", href: "#" }, "Site Map"),
                        react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a", href: "#" }, "Contact Us"),
                        react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a", href: "#" }, "Terms and Conditions"),
                        react_1.default.createElement(semantic_ui_react_1.List.Item, { as: "a", href: "#" }, "Privacy Policy"))))));
    };
    return StickyLayout;
}(react_1.Component));
exports.default = StickyLayout;
