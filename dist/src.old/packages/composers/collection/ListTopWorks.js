"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var mobx_react_1 = require("mobx-react");
var InlinePlayerBar_1 = require("../../../widgets/InlinePlayerBar");
var styles = function (theme) { return ({
    root: {
        width: "100%",
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
        width: 35,
        height: 35
    }
}); };
function ListTopWorks(props) {
    if (!props.topTracks || !props.topTracks.length) {
        return null;
    }
    var classes = props.classes;
    var items = props.topTracks.map(function (c) {
        return (React.createElement("div", { onClick: function () {
                props.onSelect(c);
            }, className: "", style: {
                cursor: "pointer",
                display: "flex",
                alignContent: "center",
                backgroundColor: "transparent",
                marginBottom: 15
            } }, !!props.trackPlaying && c.id === props.trackPlaying.id ? (React.createElement(InlinePlayerBar_1.default, { track: c, trackProgress: 0 })) : (React.createElement("div", { className: classes.primaryText, style: {
                lineHeight: "20px",
                fontWeight: 700
            }, onClick: function (e) {
                e.stopPropagation();
                props.onSelect(c);
            } }, c.title))));
    });
    return (React.createElement("div", { style: { fontWeight: 400, backgroundColor: "transparent" } }, items));
}
exports.default = mobx_react_1.observer(styles_1.withStyles(styles)(ListTopWorks));
