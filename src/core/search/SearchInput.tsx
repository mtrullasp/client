/**
 * INSPIRACIÓ:
 * https://www.squarespace.com/templates
 *
 * REGLA: Els cuadres de dades sempre un filtre 50% esquerra i 50% botons funcionalitat, ordre, etc
 */

import * as _ from "lodash";
import * as faker from "faker";
import * as React from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { Component } from "react";
import { style } from "typestyle";
import { Simulate } from "react-dom/test-utils";
import "./overrides.css";
import { inject } from "mobx-react";
import AlbumStore from "../stores/AlbumStore";
import SearchStore from "../stores/SearchStore";

const getResults = () =>
  _.times(5, () => ({
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

interface IProps {
  albumStore?: AlbumStore;
  searchStore?: SearchStore;
}
@inject("albumStore")
@inject("searchStore")
export default class SearchInput extends Component<IProps, {}> {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  /*
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if ((this.state as any).value.length < 4) return; // this.resetComponent();

      const re = new RegExp(_.escapeRegExp((this.state as any).value), "i");
      const isMatch = result => re.test(result.title);

      this.props.albumStore.searchByText(value);

      this.setState({
        isLoading: false
        //results: filteredResults
      });
    }, 300);
  };
*/

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if ((this.state as any).value.length < 4) return; // this.resetComponent();

      const re = new RegExp(_.escapeRegExp((this.state as any).value), "i");
      const isMatch = result => re.test(result.title);

      this.props.searchStore.searchByText(value);

      this.setState({
        isLoading: false
        //results: filteredResults
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state as any;
    return (
      <Search
        input={{
          className: style({ borderColor: "black" }),
          fluid: true,
          placeholder: "Search Composers, performers, albums and tracks"
        }}
        minCharacters={1}
        size={"small"}
        category
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        showNoResults={false}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}
