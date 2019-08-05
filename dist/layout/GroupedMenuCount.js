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
var typestyle_1 = require("typestyle");
var GroupedMenuCount = (function (_super) {
    __extends(GroupedMenuCount, _super);
    function GroupedMenuCount(props, context) {
        return _super.call(this, props, context) || this;
    }
    GroupedMenuCount.prototype.render = function () {
        var _this = this;
        if (!this.props.data) {
            return null;
        }
        return (React.createElement(semantic_ui_react_1.Menu, { size: "small", vertical: true, borderless: true }, !!this.props.data &&
            this.props.data.map(function (d) {
                return (React.createElement(semantic_ui_react_1.Menu.Item, { className: typestyle_1.style({ backgroundColor: "transparent" }), name: d.nameMenu, active: _this.props.activeItem === d.idMenu, onClick: function () {
                        _this.props.onChange(d.idMenu);
                    } },
                    React.createElement(semantic_ui_react_1.Label, { color: "red" }, d.countMenu),
                    d.nameMenu));
            })));
    };
    GroupedMenuCount.defaultProps = {};
    return GroupedMenuCount;
}(React.Component));
exports.default = GroupedMenuCount;
