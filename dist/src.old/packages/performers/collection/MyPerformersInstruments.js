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
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var react_router_1 = require("react-router");
var TextField_1 = require("@material-ui/core/TextField");
var constants_1 = require("../../../util/constants");
var ObjectBrowser_1 = require("../../../widgets/ObjectBrowser");
var PageTitle_1 = require("../../layout/PageTitle");
var MyPerformerInstrumentsItems_1 = require("./MyPerformerInstrumentsItems");
var react_container_dimensions_1 = require("react-container-dimensions");
var styles = function (theme) { return ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: "100%",
        height: "auto",
        overflowY: "auto",
        overflowX: "hidden"
    },
    gridTileBar: {
        fontSize: 9,
        height: "14%"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
}); };
var MyPerformersInstruments = (function (_super) {
    __extends(MyPerformersInstruments, _super);
    function MyPerformersInstruments(props, context) {
        return _super.call(this, props, context) || this;
    }
    MyPerformersInstruments.prototype.render = function () {
        var _this = this;
        if (!this.props.appState.performersInstrumentsFiltered) {
            return null;
        }
        var classes = this.props.classes;
        var NUMBER_COLS = 6;
        var header = (React.createElement("div", { style: {
                overflow: "hidden",
                margin: 0,
                padding: 0,
                marginTop: 0,
                marginLeft: 0,
                height: 40
            } },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 2 },
                    React.createElement(TextField_1.default, { id: "filtrePerformers", placeholder: "Filter by Name", className: typestyle_1.style({
                            width: "100%",
                            fontSize: 30,
                            fontFamily: constants_1.SLIM_JOE
                        }), margin: "none", onChange: function (e) {
                            _this.props.appState.filterByPerformerNsme(e.target.value);
                        } })))));
        var content;
        content = (React.createElement(react_container_dimensions_1.default, null,
            React.createElement(MyPerformerInstrumentsItems_1.default, { items: this.props.appState.performersInstrumentsFiltered, onClick: function (artist) {
                    _this.props.appState.go(constants_1.ROUTE_PERFORMERS + "/" + artist.id);
                }, numColumns: NUMBER_COLS })));
        return (React.createElement("div", { style: { position: "absolute", right: 0, left: 0 } },
            React.createElement(PageTitle_1.default, null),
            React.createElement(ObjectBrowser_1.default, { header: header, content: content, style: {
                    position: "absolute",
                    top: 80,
                    left: constants_1.MARGIN_HORITZONTAL,
                    right: constants_1.MARGIN_HORITZONTAL / 3,
                    overflow: "hidden"
                } })));
    };
    MyPerformersInstruments.defaultProps = {
        fontSize: 40
    };
    MyPerformersInstruments = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], MyPerformersInstruments);
    return MyPerformersInstruments;
}(React.Component));
exports.default = react_router_1.withRouter(withStyles_1.default(styles)(MyPerformersInstruments));
