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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var faker = require("faker");
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_1 = require("react");
var typestyle_1 = require("typestyle");
require("./overrides.css");
var mobx_react_1 = require("mobx-react");
var getResults = function () {
    return _.times(5, function () { return ({
        title: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        image: faker.internet.avatar(),
        price: faker.finance.amount(0, 100, 2, "$")
    }); });
};
var source = _.range(0, 3).reduce(function (memo) {
    var name = faker.hacker.noun();
    memo[name] = {
        name: name,
        results: getResults()
    };
    return memo;
}, {});
var SearchInput = (function (_super) {
    __extends(SearchInput, _super);
    function SearchInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resetComponent = function () {
            return _this.setState({ isLoading: false, results: [], value: "" });
        };
        _this.handleResultSelect = function (e, _a) {
            var result = _a.result;
            return _this.setState({ value: result.title });
        };
        _this.handleSearchChange = function (e, _a) {
            var value = _a.value;
            _this.setState({ isLoading: true, value: value });
            setTimeout(function () {
                if (_this.state.value.length < 4)
                    return;
                var re = new RegExp(_.escapeRegExp(_this.state.value), "i");
                var isMatch = function (result) { return re.test(result.title); };
                _this.props.searchStore.searchByText(value);
                _this.setState({
                    isLoading: false
                });
            }, 300);
        };
        return _this;
    }
    SearchInput.prototype.componentWillMount = function () {
        this.resetComponent();
    };
    SearchInput.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, value = _a.value, results = _a.results;
        return (React.createElement(semantic_ui_react_1.Search, __assign({ input: {
                className: typestyle_1.style({ borderColor: "black" }),
                fluid: true,
                placeholder: "Search Composers, performers, albums and tracks"
            }, minCharacters: 1, size: "small", category: true, loading: isLoading, onResultSelect: this.handleResultSelect, onSearchChange: _.debounce(this.handleSearchChange, 500, {
                leading: true
            }), showNoResults: false, results: results, value: value }, this.props)));
    };
    SearchInput = __decorate([
        mobx_react_1.inject("albumStore"),
        mobx_react_1.inject("searchStore")
    ], SearchInput);
    return SearchInput;
}(react_1.Component));
exports.default = SearchInput;
