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
var MaxHeightContainer_1 = require("../../../../widgets/MaxHeightContainer");
var typestyle_1 = require("typestyle");
var constants_1 = require("../../../../util/constants");
var TextField_1 = require("@material-ui/core/TextField/TextField");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var core_1 = require("@material-ui/core");
var ComposerWorks = (function (_super) {
    __extends(ComposerWorks, _super);
    function ComposerWorks(props, context) {
        return _super.call(this, props, context) || this;
    }
    ComposerWorks.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.worksStore
            .activeComposerWorks) {
            return null;
        }
        var items = this.props.appState.worksStore.activeComposerWorks.Works.map(function (w, i) {
            return (React.createElement(core_1.ListItem, null,
                React.createElement(core_1.ListItemText, { className: "composerWorkItam", style: { lineHeight: "5px", fontSize: 14 }, primary: w.Name + " " + "w.NumberOfRecordigs", onClick: function (e) {
                        _this.props.appState.go(constants_1.ROUTE_COMPOSER_WORK_ALBUMS.replace(":idWork", w.IdGenre.toString()));
                    } })));
        });
        return (React.createElement("div", { style: {
                marginRight: constants_1.MARGIN_HORITZONTAL,
                marginLeft: constants_1.MARGIN_HORITZONTAL,
                backgroundColor: "transparent"
            } },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 4, className: typestyle_1.style({ top: -5 }) },
                    React.createElement(TextField_1.default, { id: "filtrecomposers", placeholder: "Filter by Work Name", className: typestyle_1.style({
                            width: "100%",
                            fontSize: 16,
                            fontFamily: constants_1.ELEGANT_FONT
                        }), margin: "none", onChange: function (e) {
                            var value = e.target.value;
                            if (value.length >= 3) {
                                _this.props.appState.worksStore.filterWorkByKeyValue({
                                    Key: "FullName",
                                    Value: value
                                });
                            }
                        } }))),
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                    React.createElement(MaxHeightContainer_1.default, { style: { overflowY: "auto" } },
                        React.createElement(core_1.List, { dense: false, disablePadding: true, style: { cursor: "pointer" } }, items))))));
    };
    ComposerWorks = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], ComposerWorks);
    return ComposerWorks;
}(React.Component));
exports.default = ComposerWorks;
