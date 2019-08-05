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
var typestyle_1 = require("typestyle");
var TrackListPlayerDFlow_1 = require("./TrackListPlayerDFlow");
require("./playerBar.new.scss");
var DzPrevButton_new_1 = require("./controls/DzPrevButton.new");
var DzNextButton_new_1 = require("./controls/DzNextButton.new");
var semantic_ui_react_1 = require("semantic-ui-react");
var DzProgress_new_1 = require("./controls/DzProgress.new");
var PlayerBar = (function (_super) {
    __extends(PlayerBar, _super);
    function PlayerBar(props, context) {
        return _super.call(this, props, context) || this;
    }
    PlayerBar.prototype.render = function () {
        return (React.createElement("div", { style: { backgroundColor: "#36454f" } },
            React.createElement(semantic_ui_react_1.Divider, { fitted: true }),
            React.createElement(semantic_ui_react_1.Grid, null,
                React.createElement(semantic_ui_react_1.Grid.Row, { columns: 16, className: typestyle_1.style({
                        margin: 0,
                        marginTop: -10,
                        lineHeight: "30px",
                        position: "relative",
                        top: 0
                    }) },
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: 2, className: "pr player paused" },
                        React.createElement(DzPrevButton_new_1.default, null),
                        React.createElement(TrackListPlayerDFlow_1.DzPlayBtnNew, null),
                        React.createElement(DzNextButton_new_1.default, null)),
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: 5 },
                        React.createElement(DzProgress_new_1.default, null)),
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: 8 },
                        React.createElement(semantic_ui_react_1.Grid.Row, { columns: 16 },
                            React.createElement(semantic_ui_react_1.Grid.Column, { width: 16 },
                                React.createElement("div", { style: {
                                        display: "block",
                                        marginTop: 10,
                                        fontSize: 12,
                                        color: "white"
                                    } },
                                    React.createElement(TrackListPlayerDFlow_1.InfoWorkSuperior, null)),
                                React.createElement("div", { style: { display: "block", fontSize: 12, color: "white" } },
                                    React.createElement(TrackListPlayerDFlow_1.InfoWorkInferior, null)))))))));
    };
    PlayerBar.defaultProps = {
        showPrevious: true,
        showNext: true
    };
    return PlayerBar;
}(React.Component));
exports.default = PlayerBar;
