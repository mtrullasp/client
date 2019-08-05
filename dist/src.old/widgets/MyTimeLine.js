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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var dateformat_1 = require("dateformat");
debugger;
var MiniCard_1 = require("./MiniCard");
require("../../node_modules/react-scroll-box/target/out/index.css");
var constants_1 = require("../util/constants");
var core_1 = require("@material-ui/core");
var MyTimeLine = (function (_super) {
    __extends(MyTimeLine, _super);
    function MyTimeLine(props, context) {
        return _super.call(this, props, context) || this;
    }
    MyTimeLine.prototype.render = function () {
        var _this = this;
        if (!this.props.items) {
            return null;
        }
        var items = this.props.items.map(function (item, index) {
            var alt = item.IsOwnEvent ? " alt" : "";
            var pr = React.createElement("p", { style: { fontSize: 14 } }, item.Description);
            var position = [51.505, -0.09];
            var content = (React.createElement("article", { className: "timeline-item" + alt },
                React.createElement("div", { className: "timeline-desk" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-body" },
                            React.createElement(MiniCard_1.default, { itemType: item.ItemType, onClick: function () {
                                    _this.props.onClick(item);
                                }, headerTitle: item.NomComposer },
                                React.createElement("div", null, item.Description)),
                            React.createElement("span", { className: "timeline-date" },
                                React.createElement(core_1.Button, { mini: true, variant: "fab" },
                                    React.createElement("b", null, dateformat_1.default(item.DateEvent, "yyyy")))))))));
            return content;
        });
        return (React.createElement("div", { className: "timeline " + this.props.className, style: { color: constants_1.PSEUDO_BLACK } },
            React.createElement("div", { style: { fontWeight: 600 } }, items)));
    };
    MyTimeLine.defaultProps = {
        className: ""
    };
    return MyTimeLine;
}(React.Component));
exports.default = MyTimeLine;
