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
var PageTitle_1 = require("../layout/PageTitle");
var react_flexbox_grid_1 = require("react-flexbox-grid");
var typestyle_1 = require("typestyle");
var ObjectBrowser_1 = require("../../widgets/ObjectBrowser");
var Button_1 = require("@material-ui/core/Button/Button");
var TextField_1 = require("@material-ui/core/TextField/TextField");
var QuizTracksList_1 = require("./QuizTracksList");
var ComponentExplain_1 = require("../../widgets/ComponentExplain");
var ReactInputRange = require("react-input-range");
var PlayerBar_1 = require("../player/PlayerBar");
var InputRange = ReactInputRange;
var FOOTER_HEIGHT = 65;
var POSITION_NEXT_PREV = 50;
var FONT_SIZE_PREV_NEXT = 50;
var NavyPlayer = (function (_super) {
    __extends(NavyPlayer, _super);
    function NavyPlayer(props, context) {
        var _this = _super.call(this, props, context) || this;
        var range = { max: 1990, min: 1098 };
        _this.state = {
            numQuestions: 150,
            numComposers: 150,
            valueRange: range
        };
        return _this;
    }
    NavyPlayer.prototype.getTimestampFromYear = function (year) {
        return new Date(year, 1, 1, 1, 1, 1).getTime();
    };
    NavyPlayer.prototype.render = function () {
        var _this = this;
        var marginLeft = 10;
        var items = this.props.appState.quizBlindTestQuestions.map(function (q) {
            return (React.createElement("li", null,
                React.createElement("b", { style: { fontSize: 28 } }, q.NameComposer),
                ": ",
                q.WorkName));
        });
        var actionBar = (React.createElement("div", { style: { marginTop: 20, marginBottom: 10 } },
            React.createElement(react_flexbox_grid_1.Row, null,
                React.createElement(react_flexbox_grid_1.Col, { lg: 2 },
                    React.createElement(ComponentExplain_1.default, { component: React.createElement(TextField_1.default, { style: { width: 50 }, placeholder: "# Questions", value: this.state.numQuestions, onChange: function (e) {
                                _this.setState({ numQuestions: e.target.value });
                            } }), textExplain: "Number of Questions" })),
                React.createElement(react_flexbox_grid_1.Col, { lg: 2 },
                    React.createElement(ComponentExplain_1.default, { component: React.createElement(TextField_1.default, { style: { width: 50 }, placeholder: "# Composers", value: this.state.numComposers, onChange: function (e) {
                                _this.setState({ numComposers: e.target.value });
                            } }), textExplain: "Top Composers" })),
                React.createElement(react_flexbox_grid_1.Col, { lg: 8 }))));
        var header = (React.createElement("div", null,
            React.createElement(PageTitle_1.default, null,
                React.createElement("div", null,
                    React.createElement("div", { style: { display: "block" } },
                        React.createElement(Button_1.default, { disabled: this.props.appState.isGeneratingBlindTest, style: {
                                zIndex: 20000,
                                height: "100%",
                                lineHeight: "40px",
                                background: "transparent"
                            }, fullWidth: true, variant: "flat", onClick: function () {
                                return _this.props.appState.genQuizBlindTestQuestions(_this.state.numQuestions, _this.state.numComposers);
                            } }, this.props.appState.textButtonGenerateBlindTest)),
                    React.createElement(react_flexbox_grid_1.Row, { className: typestyle_1.style({ background: "white" }) },
                        React.createElement(react_flexbox_grid_1.Col, { lg: 12 }, actionBar))))));
        var content = (React.createElement("div", { className: "navy" },
            React.createElement("div", { className: "wrapper" },
                React.createElement("div", { className: "NavyPlayer" },
                    React.createElement("div", { className: "background", style: {
                            overflowY: "hidden"
                        } },
                        React.createElement(react_flexbox_grid_1.Row, null,
                            React.createElement(react_flexbox_grid_1.Col, { lg: 12 },
                                React.createElement(QuizTracksList_1.default, null))))))));
        var footer = (React.createElement("footer", { style: {
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: FOOTER_HEIGHT,
                lineHeight: "70px",
                backgroundColor: "whitesmoke",
                opacity: 0.6
            } },
            React.createElement(PlayerBar_1.default, null)));
        return (React.createElement("div", null,
            React.createElement(ObjectBrowser_1.default, { header: header, content: content, footer: footer, overflowY: "hidden", style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    overflowY: "hidden",
                    paddingTop: 0
                } })));
    };
    NavyPlayer = __decorate([
        mobx_react_1.inject("appState"),
        mobx_react_1.observer
    ], NavyPlayer);
    return NavyPlayer;
}(React.Component));
exports.default = NavyPlayer;
