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
var react_1 = require("react");
var echarts_for_react_1 = require("echarts-for-react");
var mobx_react_1 = require("mobx-react");
require("../../../../../node_modules/echarts/lib/chart/treemap");
var Treemap = (function (_super) {
    __extends(Treemap, _super);
    function Treemap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOption = function () {
            var formatLabel = _this.props.formatLabel;
            var data = _this.props.appState.worksStore.worksByTypeAsTreeMap;
            function colorMappingChange(value) { }
            function getLevelOption() {
                return [
                    {
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                gapWidth: 0
                            }
                        }
                    },
                    {
                        itemStyle: {
                            normal: {
                                gapWidth: 1
                            }
                        }
                    },
                    {
                        roam: false,
                        colorSaturation: [0.35, 0.5],
                        itemStyle: {
                            normal: {
                                gapWidth: 1,
                                borderColorSaturation: 0.6
                            }
                        }
                    }
                ];
            }
            var option = {
                tooltip: {
                    formatter: function (info) {
                        var value = info.value;
                        var treePathInfo = info.treePathInfo;
                        var treePath = [];
                        for (var i = 1; i < treePathInfo.length; i++) {
                            treePath.push(treePathInfo[i].name);
                        }
                        return formatLabel(value, treePath);
                    }
                },
                series: [
                    {
                        name: "",
                        width: "100%",
                        height: "100%",
                        roam: false,
                        nodeClick: "link",
                        bottom: 30,
                        type: "treemap",
                        breadcrumb: false,
                        visibleMin: 600,
                        label: {
                            show: true,
                            formatter: "{b}"
                        },
                        itemStyle: {
                            padding: 0,
                            margin: 0,
                            normal: {
                                borderColor: "#fff"
                            }
                        },
                        levels: getLevelOption(),
                        data: data
                    }
                ]
            };
            return option;
        };
        return _this;
    }
    Treemap.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "examples" },
            React.createElement(echarts_for_react_1.default, { onEvents: { "click": function (ev) {
                        debugger;
                        _this.props.appState.worksStore.filterWorksByType = ev.data.id;
                    } }, opts: {
                    renderer: "canvas",
                    height: 700,
                    width: "auto"
                }, option: this.getOption(), className: "react_for_echarts" })));
    };
    Treemap = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], Treemap);
    return Treemap;
}(react_1.PureComponent));
exports.default = Treemap;
