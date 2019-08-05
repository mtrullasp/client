"use strict";
/**
 * INSPIRACIÓ:
 * https://www.squarespace.com/templates
 *
 * REGLA: Els cuadres de dades sempre un filtre 50% esquerra i 50% botons funcionalitat, ordre, etc
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const faker = require("faker");
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
const react_1 = require("react");
const typestyle_1 = require("typestyle");
require("./overrides.css");
const mobx_react_1 = require("mobx-react");
const getResults = () => _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, "$")
}));
const source = _.range(0, 3).reduce(memo => {
    const name = faker.hacker.noun();
    // eslint-disable-next-line no-param-reassign
    memo[name] = {
        name,
        results: getResults()
    };
    return memo;
}, {});
let SearchInput = class SearchInput extends react_1.Component {
    constructor() {
        super(...arguments);
        this.resetComponent = () => this.setState({ isLoading: false, results: [], value: "" });
        this.handleResultSelect = (e, { result }) => this.setState({ value: result.title });
        this.handleSearchChange = (e, { value }) => {
            this.setState({ isLoading: true, value });
            setTimeout(() => {
                if (this.state.value.length < 4)
                    return; // this.resetComponent();
                const re = new RegExp(_.escapeRegExp(this.state.value), "i");
                const isMatch = result => re.test(result.title);
                this.props.albumStore.searchByText(value);
                this.setState({
                    isLoading: false
                    //results: filteredResults
                });
            }, 300);
        };
    }
    componentWillMount() {
        this.resetComponent();
    }
    render() {
        const { isLoading, value, results } = this.state;
        return (<semantic_ui_react_1.Search input={{
            className: typestyle_1.style({ borderColor: "black" }),
            fluid: true,
            placeholder: "Search Composers, performers, albums and tracks"
        }} minCharacters={1} size={"small"} category loading={isLoading} onResultSelect={this.handleResultSelect} onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
        })} results={results} value={value} {...this.props}/>);
    }
};
SearchInput = __decorate([
    mobx_react_1.inject("albumStore")
], SearchInput);
exports.default = SearchInput;
//# sourceMappingURL=SearchInput.jsx.map