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
var styles_1 = require("@material-ui/core/styles");
var rc_slider_1 = require("rc-slider");
require("rc-slider/assets/index.css");
require("../moduls/player/playerBar.new.scss");
require("./MySlider.css");
var styles = {
    root: {
        width: "100%",
        marginTop: 0
    },
    slider: {},
    thumbIcon: {
        borderRadius: '50%',
    },
    thumbIconWrapper: {
        backgroundColor: '#fff',
    },
};
var MySlider = (function (_super) {
    __extends(MySlider, _super);
    function MySlider(props) {
        return _super.call(this, props) || this;
    }
    MySlider.prototype.render = function () {
        return (React.createElement("div", { style: { width: 500 } },
            React.createElement(rc_slider_1.default, { className: "progress", max: this.props.max, value: this.props.value, onChange: this.props.onChange, "aria-labelledby": "slider-icon" })));
    };
    return MySlider;
}(React.Component));
exports.default = styles_1.withStyles(styles)(MySlider);
