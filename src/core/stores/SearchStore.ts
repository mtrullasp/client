import { action, observable, reaction } from "mobx";
import { ROUTE_SEARCH_RESULTS, URL_WEB_API_DZK } from "../../util/constants";
import axios, { CancelTokenSource } from "axios";
import { IAlbum } from "./AlbumStore";
import { RouterStore } from "./RouterStore";

export enum EResultSearchType {
  "composer",
  "performer",
  "work",
  "track"
}
export interface IResultSearchItem {
  itemCode: string;
  itemType: string;
  itemName: string;
  itemImage: string;
  itemRole: string;
}

export default class SearchStore {
  constructor(routerStore: RouterStore ) {
    reaction(() => this.searchText, (text: string) => {
      this.results = [];
      const URL_RESULTS_SEARCH = URL_WEB_API_DZK + "search?queryText=" + text;
      const CancelToken = axios.CancelToken;
      this.source = CancelToken.source();
      axios
        .get<Array<IResultSearchItem>>(URL_RESULTS_SEARCH, {
          cancelToken: this.source.token
        })
        .then(resp => {
          debugger;
          this.results = resp.data;
          routerStore.go(ROUTE_SEARCH_RESULTS);
        });
    });
  }

  private source: CancelTokenSource;

  @observable results: Array<IResultSearchItem>;

  @observable searchText: string;

  @action searchByText(text: string) {
    this.searchText = text;
  }
}