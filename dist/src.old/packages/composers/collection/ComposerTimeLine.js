"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var mobx_react_1 = require("mobx-react");
var Paper_1 = require("@material-ui/core/Paper");
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
require("react-vertical-timeline-component/style.min.css");
var Work_1 = require("@material-ui/icons/Work");
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
function ComposerTimeLine(props) {
    if (!props.timeLineItems) {
        return null;
    }
    var classes = props.classes;
    var items = props.timeLineItems.map(function (tl) {
        return (React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { style: { fontSize: 20 }, position: tl.IsOwnEvent ? "left" : "right", className: "vertical-timeline-element--work", date: tl.DateEvent + "", iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" }, icon: React.createElement(Work_1.default, null) },
            React.createElement("p", { style: { fontSize: 20 } }, tl.Description)));
    });
    return (React.createElement(Paper_1.default, { elevation: 0, style: { backgroundColor: "transparent" } },
        React.createElement("div", { className: classes.root },
            React.createElement("div", null,
                React.createElement("header", { className: classes.header, style: { fontWeight: 800, fontSize: 30, textAlign: "center" } }, "Biographical Time Line"),
                React.createElement(react_vertical_timeline_component_1.VerticalTimeline, null, items)))));
}
exports.default = mobx_react_1.observer(styles_1.withStyles(styles)(ComposerTimeLine));
