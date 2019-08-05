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
var Slider_1 = require("@material-ui/lab/Slider");
var LensOutlined_1 = require("@material-ui/icons/LensOutlined");
var paleta_1 = require("../styles/paleta");
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
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.root },
            React.createElement(Slider_1.default, { max: this.props.max, value: this.props.value, "aria-labelledby": "slider-icon", onChange: this.props.onChange, classes: {
                    container: classes.container,
                    thumbIconWrapper: classes.thumbIconWrapper,
                }, thumb: React.createElement(LensOutlined_1.default, { style: { color: paleta_1.default.color950, marginTop: -5 } }) })));
    };
    return MySlider;
}(React.Component));
exports.default = styles_1.withStyles(styles)(MySlider);
