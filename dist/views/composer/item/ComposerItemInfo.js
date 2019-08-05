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
var Paper_1 = require("@material-ui/core/Paper/Paper");
var Divider_1 = require("@material-ui/core/Divider/Divider");
var constants_1 = require("../../../util/constants");
var ComposerItemInfo = (function (_super) {
    __extends(ComposerItemInfo, _super);
    function ComposerItemInfo(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerItemInfo.prototype.render = function () {
        var _this = this;
        return (React.createElement(Paper_1.default, { elevation: this.props.elevation, style: { backgroundColor: "transparent" } },
            React.createElement("header", { style: { fontSize: 18, fontWeight: 500, cursor: "pointer" }, onClick: function () {
                    _this.props.onMaximize();
                } }, this.props.caption),
            React.createElement(Divider_1.default, { style: {
                    height: 1,
                    backgroundColor: "gray",
                    opacity: 0.2
                } }),
            React.createElement("section", { style: { width: "100%" } }, this.props.children)));
    };
    ComposerItemInfo.defaultProps = {
        onMaximize: function () { },
        elevation: 0,
        backgroundColor: constants_1.PSEUDO_WHITE
    };
    return ComposerItemInfo;
}(React.Component));
exports.default = ComposerItemInfo;
