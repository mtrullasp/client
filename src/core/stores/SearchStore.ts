import { action, computed, observable, reaction } from "mobx";
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
export interface  IResultSearchItem {
  itemCode: string;
  itemType: string;
  itemName: string;
  itemImage: string;
  itemRole: string;
}

export default class SearchStore {
  constructor(routerStore: RouterStore ) {
    reaction(() => this.searchText, (text: string) => {
      if (this.source) {
        this.source.cancel();
        //setTimeout(this.source.cancel, 0);
      }
      this.results = [];
      const URL_RESULTS_SEARCH = URL_WEB_API_DZK + "search?queryText=" + text;
      const CancelToken = axios.CancelToken;
      this.source = CancelToken.source();
      axios
        .get<Array<IResultSearchItem>>(URL_RESULTS_SEARCH, {
          cancelToken: this.source.token
        })
        .then(resp => {
          this.results = resp.data;
          routerStore.go(ROUTE_SEARCH_RESULTS);
        });
    });
  }

  private source: CancelTokenSource;

  @observable results: Array<IResultSearchItem> = [];
  @computed get resultsOrd(): Array<IResultSearchItem> {
    return this.results.sort((c1: IResultSearchItem, c2: IResultSearchItem) => {
      if (!c1.itemImage && !!c2.itemImage) return 1;
      if (!!c1.itemImage && !c2.itemImage) return -1;
      else return 0;
    })
  }


  @observable searchText: string;

  @action searchByText(text: string) {
    this.searchText = text;
  }
}