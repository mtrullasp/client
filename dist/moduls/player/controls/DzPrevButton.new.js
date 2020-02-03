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
var semantic_ui_react_1 = require("semantic-ui-react");
var DZ = window.DZ;
var DzPrevButtonNew = (function (_super) {
    __extends(DzPrevButtonNew, _super);
    function DzPrevButtonNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DzPrevButtonNew.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Icon, { style: { color: "white", width: 40, marginLeft: 10, cursor: "pointer" }, onClick: function () { return DZ.player.prev(); }, className: "step backward", size: "large" }));
    };
    return DzPrevButtonNew;
}(React.Component));
exports.default = DzPrevButtonNew;
