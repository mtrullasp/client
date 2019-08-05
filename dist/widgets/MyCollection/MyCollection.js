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
var MyCollection = (function (_super) {
    __extends(MyCollection, _super);
    function MyCollection(props, context) {
        return _super.call(this, props, context) || this;
    }
    MyCollection.prototype.render = function () {
        var xsLeft = !!this.props.asideLeftContent ? 2 : 0;
        var xsRight = !!this.props.asideLeftContent ? 14 : 16;
        return (React.createElement(semantic_ui_react_1.Grid, { columns: 16, relaxed: "very" },
            React.createElement(semantic_ui_react_1.Grid.Row, { columns: 16 },
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 16, style: { marginTop: 5 } }, this.props.headerContent)),
            React.createElement(semantic_ui_react_1.Grid.Row, { columns: 16 },
                !!xsLeft &&
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: xsLeft }, this.props.asideLeftContent),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: xsRight, floated: "right" }, this.props.sectionContent))));
    };
    return MyCollection;
}(React.Component));
exports.default = MyCollection;
