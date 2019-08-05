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
var mobx_react_1 = require("mobx-react");
var EChartsTreeMap_1 = require("./EChartsTreeMap");
var encodeHTML_1 = require("../../../../util/encodeHTML");
var addCommas_1 = require("../../../../util/addCommas");
var WorksByTypeTreeMap = (function (_super) {
    __extends(WorksByTypeTreeMap, _super);
    function WorksByTypeTreeMap(props, context) {
        return _super.call(this, props, context) || this;
    }
    WorksByTypeTreeMap.prototype.render = function () {
        var data = {
            name: "#works by type",
            children: this.props.appState.worksStore.worksByTypeAsTreeMap
        };
        var MARGIN = 40;
        return (React.createElement("div", { style: {
                position: "absolute",
                top: MARGIN,
                left: MARGIN,
                right: MARGIN,
                bottom: MARGIN
            } },
            React.createElement(EChartsTreeMap_1.default, { formatLabel: function (value, treePath) {
                    var hours = Math.floor(value / 3600);
                    var minutes = Math.floor(value / 60) % 60;
                    return [
                        '<div class="tooltip-title">' +
                            encodeHTML_1.default(treePath.join("/")) +
                            "</div>",
                        "Average duration: " +
                            addCommas_1.default(value) +
                            " seconds (" +
                            hours +
                            " hours & " +
                            minutes +
                            " minutes)"
                    ].join("");
                } })));
    };
    WorksByTypeTreeMap.defaultProps = {};
    WorksByTypeTreeMap = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], WorksByTypeTreeMap);
    return WorksByTypeTreeMap;
}(React.Component));
exports.default = WorksByTypeTreeMap;
