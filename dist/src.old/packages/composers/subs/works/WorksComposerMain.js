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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var WorksByTypeTreeMap_1 = require("./WorksByTypeTreeMap");
var mobx_react_1 = require("mobx-react");
var ListWorks_1 = require("./ListWorks");
var MaxHeightContainer_1 = require("../../../../widgets/MaxHeightContainer");
var TabUnderlineStroke_1 = require("../../../../widgets/TabUnderlineStroke");
var ContainerDimensions = require("react-container-dimensions").default;
var WorksComposerMain = (function (_super) {
    __extends(WorksComposerMain, _super);
    function WorksComposerMain(props, context) {
        return _super.call(this, props, context) || this;
    }
    WorksComposerMain.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_flexbox_grid_1.Grid, { fluid: true },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 6 },
                    React.createElement(TabUnderlineStroke_1.default, { style: { justifySelf: "center" }, fontSize: 14, items: [
                            {
                                id: "NumberOfWorks",
                                text: "By number of works",
                                onClick: function () {
                                    _this.props.appState.worksStore.worksByTypeAsTreeMapUnits =
                                        "NumberOfWorks";
                                }
                            },
                            {
                                id: "Duration",
                                text: "By duration average of works",
                                onClick: function () {
                                    _this.props.appState.worksStore.worksByTypeAsTreeMapUnits = "Duration";
                                }
                            },
                            {
                                id: "Instrument",
                                text: "By instrument",
                                onClick: function () {
                                    _this.props.appState.worksStore.worksByTypeAsTreeMapUnits = "";
                                }
                            }
                        ], selectedItemId: this.props.appState.worksStore.worksByTypeAsTreeMapUnits }),
                    React.createElement(WorksByTypeTreeMap_1.default, { width: this.props.width, height: this.props.height })),
                React.createElement(react_flexbox_grid_1.Col, { lg: 6 },
                    React.createElement(MaxHeightContainer_1.default, { style: { overflowY: "auto" } },
                        React.createElement(ListWorks_1.default, null))))));
    };
    WorksComposerMain.defaultProps = {};
    WorksComposerMain = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], WorksComposerMain);
    return WorksComposerMain;
}(React.Component));
exports.default = WorksComposerMain;
