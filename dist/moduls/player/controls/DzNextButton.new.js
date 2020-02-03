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
require("../playerBar.new.scss");
var semantic_ui_react_1 = require("semantic-ui-react");
var DZ = window.DZ;
var DzNextButtonNew = (function (_super) {
    __extends(DzNextButtonNew, _super);
    function DzNextButtonNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DzNextButtonNew.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Icon, { style: { color: "white", width: 50, cursor: "pointer" }, size: "large", className: "step forward", onClick: function () { return DZ.player.next(); } }));
    };
    return DzNextButtonNew;
}(React.Component));
exports.default = DzNextButtonNew;
