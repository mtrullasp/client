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
var _ = require("lodash");
var styles_1 = require("@material-ui/core/styles");
var slider_1 = require("../helpers/slider");
var classNames_1 = require("classNames");
var styles = function (theme) { return ({
    warp: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    trackContainer: {
        width: "100%",
        height: "100%"
    },
    track: {
        position: "absolute",
        transition: "margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, height 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, right 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, top 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, bottom 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
    },
    pointer: {
        marginTop: 1,
        width: 12,
        height: 12,
        backgroundClip: "padding-box",
        border: "0px solid transparent",
        borderRadius: "50%",
        boxSizing: "border-box",
        position: "absolute",
        cursor: "pointer",
        pointerEvents: "inherit",
        transform: "translate(-50%, -50%)",
        transition: "background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, border-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, height 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, right 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, top 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, bottom 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        overflow: "visible",
        outline: "none",
        zIndex: 1
    },
    pointerRight: {
        transform: "translate(50%, -50%)"
    },
    pointerVertical: {
        marginLeft: 1,
        transform: "translate(-50%, 50%)"
    },
    pointerVerticalTop: {
        transform: "translate(-50%, -50%)"
    },
    pointerOver: {
        "&:before": {
            content: '""',
            display: "block",
            border: "0 solid " + theme.palette.action.hover,
            position: "absolute",
            overflow: "hidden",
            borderRadius: "inherit",
            boxSizing: "border-box",
            pointerEvents: "none",
            transition: "border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            zIndex: -1
        }
    },
    pointerHover: {
        "&:before": {
            width: 36,
            height: 36,
            borderWidth: 12,
            left: -12,
            top: -12
        }
    },
    pointerPressed: {
        "&:before": {
            width: 48,
            height: 48,
            borderWidth: 18,
            borderColor: theme.palette.action.selected,
            left: -18,
            top: -18
        }
    },
    pointerDisabled: {
        width: 8,
        height: 8
    },
    scale: {
        position: "absolute"
    }
}); };
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.activePointer = "left";
        _this.calcDefaultValue = function (defaultValue) {
            var range = _this.props.range;
            var _a = _this, min = _a.min, max = _a.max;
            if (range) {
                var value = !!_this.state ? _this.state.value : [min, max];
                if (_.isArray(defaultValue)) {
                    var value1 = _.isNumber(defaultValue[0]) ? defaultValue[0] : min;
                    var value2 = _.isNumber(defaultValue[1]) ? defaultValue[1] : max;
                    var valueMin = Math.min(value1, value2);
                    var valueMax = Math.max(value1, value2);
                    value[0] = _this.calcScaleValue(valueMin >= min && valueMin <= max ? valueMin : min);
                    value[1] = _this.calcScaleValue(valueMax >= min && valueMax <= max ? valueMax : max);
                }
                else if (_.isNumber(defaultValue)) {
                    var valueMin = _this.calcScaleValue(defaultValue);
                    if (valueMin <= value[1])
                        value[0] = valueMin;
                    else
                        value[1] = valueMin;
                    console.log(valueMin, value);
                }
                return value;
            }
            else {
                return _this.calcScaleValue(_.isNumber(defaultValue) && defaultValue >= min && defaultValue <= max
                    ? defaultValue
                    : min);
            }
        };
        _this.calcScaleValue = function (value) {
            var scaleLength = _this.props.scaleLength;
            var _a = _this, min = _a.min, max = _a.max;
            if (scaleLength > 0) {
                value -= min;
                var halfScaleLength = scaleLength / 2;
                if ((max - min) % scaleLength > 0 &&
                    value / scaleLength > Math.floor((max - min) / scaleLength)) {
                    halfScaleLength = ((max - min) % scaleLength) / 2;
                }
                if (value % scaleLength > halfScaleLength) {
                    var upValue = min + Math.ceil(value / scaleLength) * scaleLength;
                    return upValue > max ? max : upValue;
                }
                else {
                    return min + Math.floor(value / scaleLength) * scaleLength;
                }
            }
            else
                return value;
        };
        _this.triggerChange = function (event) {
            _this.props.onChangeComplete &&
                _this.debounce(_this.props.onChangeComplete, _this.state.value, event);
            _this.props.onChange && _this.props.onChange(_this.state.value, event);
        };
        _this.handleChange = function (e, skip) {
            var _a = _this.props, range = _a.range, disabled = _a.disabled;
            var _b = _this, min = _b.min, max = _b.max;
            if (disabled)
                return;
            var offset = slider_1.calculateChange(e, skip, _this.props, _this.container);
            var oldValue = _this.state.value;
            var newValue = _this.calcScaleValue(Math.round(offset / 100 * (max - min)) + min);
            if (range) {
                if ((_this.activePointer === "left" &&
                    oldValue[0] !== newValue &&
                    newValue < oldValue[1]) ||
                    newValue <= oldValue[0]) {
                    _this.activePointer === "right" && (_this.activePointer = "left");
                    _this.setState({
                        value: [newValue, oldValue[1]]
                    }, function () {
                        _this.triggerChange(e);
                    });
                }
                else if ((_this.activePointer === "right" &&
                    oldValue[1] !== newValue &&
                    newValue > oldValue[0]) ||
                    newValue >= oldValue[1]) {
                    _this.activePointer === "left" && (_this.activePointer = "right");
                    _this.setState({
                        value: [oldValue[0], newValue]
                    }, function () {
                        _this.triggerChange(e);
                    });
                }
            }
            else {
                if (oldValue !== newValue) {
                    _this.setState({
                        value: newValue
                    }, function () {
                        _this.triggerChange(e);
                    });
                }
            }
        };
        _this.handleMouseOver = function () {
            _this.setState({
                hover: true
            });
        };
        _this.handleMouseOut = function () {
            _this.setState({
                hover: false
            });
        };
        _this.handleTouchStart = function (e, skip) {
            _this.setState({
                pressed: true
            });
            _this.handleChange(e, skip);
            window.addEventListener("touchend", _this.handleMouseUp);
        };
        _this.handleMouseDown = function (e) {
            _this.setState({
                pressed: true
            });
            _this.handleChange(e, true);
        };
        _this.handleMouseUp = function () {
            _this.setState({
                pressed: false
            });
            _this.unbindEventListeners();
        };
        var min = props.min, max = props.max, defaultValue = props.defaultValue, value = props.value;
        _this.min = Math.min(min, max);
        _this.max = Math.max(min, max);
        _this.state = {
            value: _this.calcDefaultValue(value || defaultValue),
            hover: false,
            pressed: false
        };
        _this.debounce = _.debounce(function (fn, data, event) {
            fn(data, event);
        }, 100);
        return _this;
    }
    Slider.prototype.componentWillUnmount = function () {
        this.unbindEventListeners();
    };
    Slider.prototype.componentWillReceiveProps = function (nextProps) {
        if (!_.isUndefined(nextProps.value) &&
            !_.isEqual(nextProps.value, this.props.value)) {
            this.setState({
                value: this.calcDefaultValue(nextProps.value)
            });
        }
    };
    Slider.prototype.unbindEventListeners = function () {
        window
            .removeEventListener("mousemove", this.handleChange)(window)
            .removeEventListener("mouseup", this.handleMouseUp)(window)
            .removeEventListener("touchend", this.handleMouseUp);
    };
    Slider.prototype.style = function (p1) {
        return null;
    };
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, theme = _a.theme, range = _a.range, scaleLength = _a.scaleLength, direction = _a.direction, color = _a.color, disabled = _a.disabled;
        var _b = this.state, value = _b.value, hover = _b.hover, pressed = _b.pressed;
        var _c = this, min = _c.min, max = _c.max;
        var trackColor = disabled
            ? theme.palette.grey[700]
            : color || theme.palette.primary[theme.palette.type];
        var vertical = direction === "vertical";
        var rootStyle = Object.assign({
            position: "relative",
            width: "100%",
            height: 48,
            display: "inline-block"
        }, vertical && {
            width: 48,
            height: "100%"
        });
        var containerStyle = Object.assign({
            position: "absolute",
            top: 23,
            left: 0,
            width: "100%",
            height: 2
        }, vertical && {
            top: 0,
            left: 23,
            height: "100%",
            width: 2
        });
        var trackEl;
        var thumbEl;
        if (range) {
            var offsetLeft = Math.round((value[0] - min) / (max - min) * 100);
            var offsetRight = 100 - Math.round((value[1] - min) / (max - min) * 100);
            var trackActiveStyle = Object.assign({
                backgroundColor: trackColor
            }, vertical
                ? {
                    width: "100%",
                    bottom: offsetLeft + "%",
                    top: offsetRight + "%",
                    marginTop: disabled ? 6 : 0,
                    marginBottom: disabled ? 6 : 0
                }
                : {
                    height: "100%",
                    left: offsetLeft + "%",
                    right: offsetRight + "%",
                    marginRight: disabled ? 6 : 0,
                    marginLeft: disabled ? 6 : 0
                });
            var trackLeftStyle = Object.assign({
                backgroundColor: trackColor,
                opacity: ".38"
            }, vertical
                ? {
                    width: "100%",
                    height: disabled
                        ? "calc(" + offsetLeft + "% - 6px)"
                        : "calc(" + offsetLeft + "%)",
                    marginTop: disabled ? 6 : 0,
                    bottom: 0
                }
                : {
                    height: "100%",
                    width: disabled
                        ? "calc(" + offsetLeft + "% - 6px)"
                        : "calc(" + offsetLeft + "%)",
                    marginRight: disabled ? 6 : 0,
                    left: 0
                });
            var trackRightStyle = Object.assign({
                backgroundColor: trackColor,
                opacity: ".38"
            }, vertical
                ? {
                    width: "100%",
                    height: disabled
                        ? "calc(" + offsetRight + "% - 6px)"
                        : "calc(" + offsetRight + "%)",
                    marginBottom: disabled ? 6 : 0,
                    top: 0
                }
                : {
                    height: "100%",
                    width: disabled
                        ? "calc(" + offsetRight + "% - 6px)"
                        : "calc(" + offsetRight + "%)",
                    marginLeft: disabled ? 6 : 0,
                    right: 0
                });
            var thumbLeftStyle = Object.assign({
                backgroundColor: trackColor
            }, vertical
                ? {
                    left: 0,
                    bottom: offsetLeft + "%"
                }
                : {
                    top: 0,
                    left: offsetLeft + "%"
                });
            var thumbLeftClass = classNames_1.default(classes.pointer, disabled && classes.pointerDisabled, vertical && classes.pointerVertical, this.activePointer === "left" &&
                !disabled &&
                (hover || pressed) &&
                classes.pointerOver, this.activePointer === "left" &&
                !disabled &&
                hover &&
                classes.pointerHover, this.activePointer === "left" &&
                !disabled &&
                pressed &&
                classes.pointerPressed);
            var thumbRightStyle = Object.assign({
                backgroundColor: trackColor
            }, vertical
                ? {
                    left: 0,
                    top: offsetRight + "%"
                }
                : {
                    top: 0,
                    right: offsetRight + "%"
                });
            var thumbRightClass = classNames_1.default(classes.pointer, classes.pointerRight, disabled && classes.pointerDisabled, vertical && classes.pointerVertical, vertical && classes.pointerVerticalTop, this.activePointer === "right" &&
                !disabled &&
                (hover || pressed) &&
                classes.pointerOver, this.activePointer === "right" &&
                !disabled &&
                hover &&
                classes.pointerHover, this.activePointer === "right" &&
                !disabled &&
                pressed &&
                classes.pointerPressed);
            trackEl = (React.createElement("div", null,
                React.createElement("div", { className: classes.track, style: trackLeftStyle }),
                React.createElement("div", { className: classes.track, style: trackActiveStyle }),
                React.createElement("div", { className: classes.track, style: trackRightStyle })));
            thumbEl = (React.createElement("div", null,
                React.createElement("div", { className: thumbLeftClass, style: thumbLeftStyle, onMouseOver: function () {
                        _this.activePointer = "left";
                    }, onTouchStart: function () {
                        _this.activePointer = "left";
                    } }),
                React.createElement("div", { className: thumbRightClass, style: thumbRightStyle, onMouseOver: function () {
                        _this.activePointer = "right";
                    }, onTouchStart: function () {
                        _this.activePointer = "right";
                    } })));
        }
        else {
            var offset = Math.round((value - min) / (max - min) * 100);
            var trackActiveStyle = Object.assign({
                backgroundColor: trackColor
            }, vertical
                ? {
                    width: "100%",
                    height: disabled ? "calc(" + offset + "% - 6px)" : "calc(" + offset + "%)",
                    marginTop: disabled ? 6 : 0,
                    bottom: 0
                }
                : {
                    height: "100%",
                    width: disabled ? "calc(" + offset + "% - 6px)" : "calc(" + offset + "%)",
                    marginRight: disabled ? 6 : 0,
                    left: 0
                });
            var trackStyle = Object.assign({
                backgroundColor: trackColor,
                opacity: ".38"
            }, vertical
                ? {
                    width: "100%",
                    height: disabled
                        ? "calc(" + (100 - offset) + "% - 6px)"
                        : "calc(" + (100 - offset) + "%)",
                    marginBottom: disabled ? 6 : 0,
                    top: 0
                }
                : {
                    height: "100%",
                    width: disabled
                        ? "calc(" + (100 - offset) + "% - 6px)"
                        : "calc(" + (100 - offset) + "%)",
                    marginLeft: disabled ? 6 : 0,
                    right: 0
                });
            var thumbStyle = Object.assign({
                backgroundColor: trackColor
            }, vertical
                ? {
                    left: 0,
                    bottom: offset + "%"
                }
                : {
                    top: 0,
                    left: offset + "%"
                });
            var thumbClass = classNames_1.default(classes.pointer, disabled && classes.pointerDisabled, vertical && classes.pointerVertical, !disabled && (hover || pressed) && classes.pointerOver, !disabled && hover && classes.pointerHover, pressed && classes.pointerPressed);
            trackEl = (React.createElement("div", null,
                React.createElement("div", { className: classes.track, style: trackActiveStyle }),
                React.createElement("div", { className: classes.track, style: trackStyle })));
            thumbEl = React.createElement("div", { className: thumbClass, style: thumbStyle });
        }
        var scaleEl;
        if (scaleLength > 0 && scaleLength < max - min) {
            var scaleCount_1 = Math.floor((max - min) / scaleLength);
            var scaleArray_1 = Array.from(new Array(scaleCount_1 + ((max - min) % scaleLength === 0 ? 1 : 2)), function (val, index) { return index; });
            scaleEl = (React.createElement("div", null, scaleArray_1.map(function (i) {
                var scaleValue = scaleLength * i + min;
                var scaleOffset = 0;
                if (i === scaleArray_1.length - 1) {
                    scaleOffset = 100;
                }
                else if (i > 0) {
                    scaleOffset =
                        (1 - ((max - min) % scaleLength) / (max - min)) *
                            100 /
                            scaleCount_1 *
                            i;
                }
                var scaleStyle = Object.assign({
                    backgroundColor: trackColor
                }, vertical
                    ? {
                        width: "100%",
                        height: 2,
                        left: 0,
                        bottom: scaleOffset + "%"
                    }
                    : {
                        height: "100%",
                        width: 2,
                        top: 0,
                        left: scaleOffset + "%"
                    });
                if ((range && (scaleValue > value[0] && scaleValue < value[1])) ||
                    (!range && scaleValue < value)) {
                    Object.assign(scaleStyle, {
                        backgroundColor: "rgba(255,255,255,.38)"
                    });
                }
                return (React.createElement("span", { key: i, className: classes.scale, style: scaleStyle }));
            })));
        }
        return (React.createElement("div", { style: this.style(rootStyle) },
            React.createElement("div", { className: classes.warp, ref: function (container) { return (_this.container = container); }, onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut, onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange, onTouchStart: this.handleTouchStart },
                React.createElement("div", { style: containerStyle },
                    trackEl,
                    scaleEl,
                    thumbEl))));
    };
    Slider.defaultProps = {
        min: 0,
        max: 100,
        defaultValue: 0,
        range: false,
        scale: 0,
        direction: "horizontal",
        onChange: function () { },
        onChangeComplete: function () { }
    };
    return Slider;
}(React.Component));
exports.default = styles_1.withStyles(styles, { withTheme: true })(Slider);
