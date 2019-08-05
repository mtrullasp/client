"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var ButtonBase_1 = require("@material-ui/core/ButtonBase");
var Typography_1 = require("@material-ui/core/Typography");
var transitions_1 = require("@material-ui/core/styles/transitions");
var withRoot_1 = require("./helpers/withRoot");
var styles = function (_a) {
    var _b;
    var breakpoints = _a.breakpoints, palette = _a.palette, spacing = _a.spacing;
    return styles_1.createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%"
        },
        image: (_b = {
                position: "relative",
                height: 200
            },
            _b[breakpoints.down("xs")] = {
                width: "100% !important",
                height: 100
            },
            _b["&:hover, &$focusVisible"] = {
                zIndex: 1,
                "& $imageBackdrop": {
                    opacity: 0.15
                },
                "& $imageMarked": {
                    opacity: 0
                },
                "& $imageTitle": {
                    border: "4px solid currentColor"
                }
            },
            _b),
        focusVisible: {},
        imageButton: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: palette.common.white
        },
        imageSrc: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundPosition: "center 40%"
        },
        imageBackdrop: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: palette.common.black,
            opacity: 0.4,
            transition: transitions_1.default.create("opacity")
        },
        imageTitle: {
            position: "relative",
            padding: spacing.unit * 2 + "px " + spacing.unit * 4 + "px " + (spacing.unit +
                6) + "px"
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: palette.common.white,
            position: "absolute",
            bottom: -2,
            left: "calc(50% - 9px)",
            transition: transitions_1.default.create("opacity")
        }
    });
};
function GhostButton(props) {
    debugger;
    var classes = props.classes;
    return (React.createElement("div", { className: classes.root },
        React.createElement(ButtonBase_1.default, { onClick: props.onClick, focusRipple: true, className: classes.image, focusVisibleClassName: classes.focusVisible, style: {
                width: props.width || "auto"
            } },
            React.createElement("span", { className: classes.imageButton },
                React.createElement(Typography_1.default, { component: "span", variant: "subheading", color: "inherit", className: classes.imageTitle },
                    this.props.content,
                    React.createElement("span", { className: classes.imageMarked })))),
        "))}"));
}
exports.default = withRoot_1.default(styles_1.withStyles(styles)(GhostButton));
