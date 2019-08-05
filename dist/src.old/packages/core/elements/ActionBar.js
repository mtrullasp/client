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
var Interfaces_1 = require("../stores/Interfaces");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var TextSearchAction_1 = require("./TextSearchAction");
var OrderByFieldAction_1 = require("./OrderByFieldAction");
var typestyle_1 = require("typestyle");
var ActionBar = (function (_super) {
    __extends(ActionBar, _super);
    function ActionBar(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            value: ""
        };
        return _this;
    }
    ActionBar.prototype.render = function () {
        var _this = this;
        if (!this.props.actions) {
            return null;
        }
        var getAccio = function (action) {
            switch (action.type) {
                case Interfaces_1.ETypeAction.search:
                    return (React.createElement(react_flexbox_grid_1.Col, { className: typestyle_1.style({ width: 300, marginRight: 10 }) },
                        React.createElement(TextSearchAction_1.default, { placeHolder: action.desc, onChange: function (value) {
                                _this.setState({
                                    value: value || ""
                                });
                            }, onSearch: function () {
                                action.onExec(_this.state.value);
                            } })));
                case Interfaces_1.ETypeAction.order:
                    return (React.createElement(react_flexbox_grid_1.Col, { className: typestyle_1.style({ display: "inline-flex" }) },
                        React.createElement(OrderByFieldAction_1.default, { active: true, id: action.id, desc: action.desc, onClick: function () {
                                action.onExec(action.id);
                            } })));
                case Interfaces_1.ETypeAction.shuffle:
                    return (React.createElement(react_flexbox_grid_1.Col, null,
                        React.createElement(OrderByFieldAction_1.default, { active: true, id: "shuffle", desc: action.desc, onClick: function () {
                                action.onExec("shuffle");
                            } })));
                default:
                    return React.createElement("p", null, "per fer");
            }
        };
        var items = this.props.actions.map(function (accio, k) {
            return React.createElement(react_flexbox_grid_1.Col, { className: typestyle_1.style({ marginRight: 0 }) }, getAccio(accio));
        });
        return (React.createElement(react_flexbox_grid_1.Row, null,
            React.createElement(react_flexbox_grid_1.Col, { lg: 12, className: typestyle_1.style({ display: "inline-flex" }) }, items)));
    };
    return ActionBar;
}(React.Component));
exports.default = ActionBar;
