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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_1 = require("mobx-react");
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var Icon = require("react-feather");
var constants_1 = require("../../../util/constants");
var Slider_1 = require("@material-ui/lab/es/Slider");
var MySlider_1 = require("../../../widgets/MySlider");
var styles = styles_1.createStyles({
    root: {
        width: "100%",
        position: "fixed"
    },
    slider: {
        padding: 0
    },
    track: {
        height: 2
    },
    trackBefore: {
        backgroundColor: constants_1.TRUE_ACCENT_COLOR
    },
    circle: {
        height: 40
    }
});
var DZ = window.DZ;
function valueReducer(rawValue, props, event) {
    var disabled = props.disabled, max = props.max, min = props.min, step = props.step;
    function roundToStep(number) {
        return Math.round(number / step) * step;
    }
    if (!disabled && step) {
        if (rawValue > min && rawValue < max) {
            if (rawValue === max - step) {
                return roundToStep(rawValue + step / 2);
            }
            if (rawValue === min + step) {
                return roundToStep(rawValue - step / 2);
            }
            return roundToStep(rawValue);
        }
        return rawValue;
    }
    return Slider_1.defaultValueReducer(rawValue, props, event);
}
var DzProgress = (function (_super) {
    __extends(DzProgress, _super);
    function DzProgress(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (event, value) {
            _this.setState({ value: value });
            DZ.player.seek((value / _this.state.max) * 100);
        };
        _this.state = {
            value: 0,
            max: 0,
            clicked: false
        };
        return _this;
    }
    DzProgress.prototype.componentDidMount = function () {
        var that = this;
        DZ.Event.subscribe("player_position", function (arg) {
            that.setState({
                value: arg[0],
                max: arg[1]
            });
        });
    };
    DzProgress.prototype.render = function () {
        var classes = this.props.classes;
        var value = this.state.value;
        return (React.createElement("div", { className: classes.root },
            React.createElement(MySlider_1.default, { thumb: React.createElement(Icon.Circle, { className: "progress-circle" }), value: value, max: this.state.max, onChange: this.onChange })));
    };
    DzProgress = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.observer
    ], DzProgress);
    return DzProgress;
}(React.Component));
exports.default = styles_1.withStyles(styles)(DzProgress);
