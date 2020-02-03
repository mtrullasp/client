"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button3d_1 = require("../../widgets/3dbutton/Button3d");
var CollectionNav = function (props) { return (React.createElement("div", { style: { zIndex: 100 } },
    React.createElement(Button3d_1.default, { isIcon: true, text: "chevron left", buttonHeight: 15, buttonPadding: 12, onClick: function () {
            props.onClickPrevious();
        }, style: { zIndex: 100 }, top: 0, left: 0, childStyle: {
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            width: 30,
            height: 20
        }, iconStyle: {
            position: "relative",
            top: 4,
            left: -5
        } }),
    React.createElement(Button3d_1.default, { isIcon: true, text: "chevron right", buttonHeight: 15, buttonPadding: 12, onClick: function () {
            props.onClickNext();
        }, top: 0, left: 32, style: { textAlign: "left", zIndex: 100 }, childStyle: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            width: 25,
            height: 20,
            paddingRight: 16
        }, iconStyle: {
            position: "relative",
            top: 4,
            left: -5
        } }))); };
exports.default = CollectionNav;
