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
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var DzProgress_1 = require("./controls/DzProgress");
var TrackListPlayerDFlow_1 = require("./TrackListPlayerDFlow");
var DzPrevButton_1 = require("./controls/DzPrevButton");
var DzNextButton_1 = require("./controls/DzNextButton");
var PlayerBar = (function (_super) {
    __extends(PlayerBar, _super);
    function PlayerBar(props, context) {
        return _super.call(this, props, context) || this;
    }
    PlayerBar.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                    React.createElement("div", null,
                        React.createElement(DzProgress_1.default, null))),
                React.createElement(react_flexbox_grid_1.Col, { lg: 1 })),
            React.createElement(react_flexbox_grid_1.Row, { className: typestyle_1.style({
                    margin: 0,
                    lineHeight: "50px",
                    position: "relative",
                    top: 20
                }) },
                React.createElement(react_flexbox_grid_1.Col, { lg: 4 },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        this.props.showPrevious && (React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(DzPrevButton_1.default, null))),
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(TrackListPlayerDFlow_1.DzPlayBtn, null)),
                        this.props.showNext && (React.createElement(react_flexbox_grid_1.Col, { lg: 1 },
                            React.createElement(DzNextButton_1.default, null))),
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1, lgOffset: 0 },
                            React.createElement(TrackListPlayerDFlow_1.FavBtn, null)),
                        React.createElement(react_flexbox_grid_1.Col, { lg: 1, lgOffset: 0 },
                            React.createElement(TrackListPlayerDFlow_1.VersionsBtn, null)))),
                React.createElement(react_flexbox_grid_1.Col, { lg: 8 },
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                            React.createElement("div", { style: { display: "block", position: "relative", top: -20 } },
                                React.createElement(TrackListPlayerDFlow_1.InfoWorkSuperior, null)),
                            React.createElement("div", { style: { display: "block", position: "relative", top: -62 } },
                                React.createElement(TrackListPlayerDFlow_1.InfoWorkInferior, null)))),
                    React.createElement(react_flexbox_grid_1.Row, null,
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 }))))));
    };
    PlayerBar.defaultProps = {
        showPrevious: true,
        showNext: true
    };
    return PlayerBar;
}(React.Component));
exports.default = PlayerBar;
