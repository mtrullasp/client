"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var Avatar_1 = require("@material-ui/core/Avatar");
var mobx_react_1 = require("mobx-react");
var Paper_1 = require("@material-ui/core/Paper");
var styles = function (theme) { return ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "transparent"
    },
    primaryText: {
        marginLeft: 5,
        display: "inline-flex",
        fontSize: 13
    },
    header: {
        fontSize: 18,
        lineHeight: "25px",
        marginTop: "-5px"
    },
    avatar: {
        paddingTop: 0,
        top: 2,
        display: "inline-flex",
        width: 30,
        height: 30
    }
}); };
function ListComposerSocial(props) {
    if (!props.composers || !props.composers.length) {
        return null;
    }
    var classes = props.classes;
    var items = props.composers.map(function (c) {
        return (React.createElement("div", { onClick: function () {
                props.onSelect(c.IdComposer);
            }, className: "item-social-avatar", style: {
                cursor: "pointer",
                display: "flex",
                alignContent: "center",
                lineHeight: "35px"
            } },
            React.createElement(Avatar_1.default, { className: classes.avatar },
                React.createElement("img", { src: c.ImgAvatarUrl, style: { height: "100%", width: "auto", verticalAlign: "center" } })),
            React.createElement("div", { className: classes.primaryText, style: {} }, c.Nom)));
    });
    return (React.createElement(Paper_1.default, { elevation: 0, style: { backgroundColor: "transparent" } },
        React.createElement("div", { className: classes.root },
            React.createElement("div", null,
                React.createElement("section", null,
                    React.createElement("div", null, items))))));
}
exports.default = mobx_react_1.observer(styles_1.withStyles(styles)(ListComposerSocial));
