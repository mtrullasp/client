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
var ComposersWorksPerformers = (function (_super) {
    __extends(ComposersWorksPerformers, _super);
    function ComposersWorksPerformers(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {};
        return _this;
    }
    ComposersWorksPerformers.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Menu, { size: "small", compact: true, activeIndex: this.props.activeIndex, items: ["Composers", "Works", "Performers"], onItemClick: this.props.onItemClick }));
    };
    ComposersWorksPerformers.defaultProps = {};
    return ComposersWorksPerformers;
}(React.Component));
exports.default = ComposersWorksPerformers;
