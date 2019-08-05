"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var purple_1 = require("@material-ui/core/colors/purple");
var green_1 = require("@material-ui/core/colors/green");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var theme = styles_1.createMuiTheme({
    palette: {
        primary: purple_1.default,
        secondary: green_1.default,
    },
    typography: {},
});
function withRoot(Component) {
    function WithRoot(props) {
        return (React.createElement(styles_1.MuiThemeProvider, { theme: theme },
            React.createElement(CssBaseline_1.default, null),
            React.createElement(Component, __assign({}, props))));
    }
    return WithRoot;
}
exports.default = withRoot;
