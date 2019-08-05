import * as React from "react";
import {
  action,
  computed,
  observable,
  reaction,
  toJS,
  transaction
} from "mobx";
import GeoStore, { ICiutat } from "./GeoStore";
import {
  LIMIT_COMPOSERS,
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO,
  URL_WEB_API,
  COMPOSER_NUMBER_COLS,
  ROUTE_COMPOSERS_ITEM,
  URL_WEB_API_DZK
} from "../../util/constants";
import { oc } from "ts-optchain";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { shuffle } from "../../util/shuffle";
import { Group } from "@material-ui/icons";
// import * as _ from "lodash";
import { Reducer, JMap, MethodMap } from "declarative-js";
import groupBy = Reducer.groupBy;
import Map = Reducer.Map;
import { number } from "prop-types";
import { toArray } from "declarative-js/src/internal/ToArray";
import history from "history";
import { RouterStore } from "./RouterStore";
// import * as debounce from "lodash.debounce";

export interface IComposer {
  IdComposer: number;
  idMN: string;
  nameMN: string;
  idMB?: number;
  AnyoNeix: number;
  begin_date_year?: number;
  begin_date_month?: number;
  begin_date_day?: number;
  end_date_year?: number;
  end_date_month?: number;
  end_date_day?: number;
  begin_area?: number;
  end_area?: number;
  name: string;
  sort_name: string;
  ranking: number;
  nacio: string;
}

export class TGroupedMenuCount {
  idMenu: number;
  nameMenu: string;
  countMenu: number;
}

export interface IComposerQuotes {
  idComposer: number;
  nOrder: number;
  content: string;
  contentType: string;
  contentSourceName: string;
  contentSourceLogoUrl: string;
  contentSourceUrll: string;
}

export interface IComposerWorks {
  idWork: string;
  nameWork: string;
  atAgeOf: number;
  composedDate: string;
  performancesCount: number;
}

class ComposerStore {
  constructor(geoStore: GeoStore, routerStore: RouterStore) {
    this.geoStore = geoStore;
    this.routerStore = routerStore;
    axios.get<Array<IComposer>>(URL_WEB_API + "Composers").then(resp => {
      this.composersRaw = resp.data.splice(0, LIMIT_COMPOSERS);
    });

    const that = this;
    window.addEventListener("keydown", event => {
      if (routerStore.activeRouterPath.includes("composers/collection")) {
        const fer = function(callback: Function) {
          event.stopPropagation();
          event.preventDefault();
          callback();
        };
        if (event.key === "ArrowRight") {
          fer(() => indexHoverAdd(1));
        }
        if (event.key === "ArrowDown") {
          fer(() => indexHoverAdd(COMPOSER_NUMBER_COLS));
        }
        if (event.key === "ArrowLeft") {
          fer(() => indexHoverAdd(-1));
        }
        if (event.key === "ArrowUp") {
          fer(() => indexHoverAdd(-COMPOSER_NUMBER_COLS));
        }
        if (event.key === "Enter") {
          fer(() => {
            that.activeIndex = that.indexHover;
            that.routerStore.go(ROUTE_COMPOSERS_ITEM);
          });
        }
      }
    });

    const indexHoverAdd = (inc: number) => {
      if (
        this.indexHover + inc >= 0 &&
        this.indexHover + inc < LIMIT_COMPOSERS
      ) {
        this.indexHover += inc;
      }
    };

    reaction(
      () => this.activeComposer,
      composer => {
        this.worksFilter = "";
        if (!composer || this.activeIndex === -1) {
          return;
        }

        /*
        this.activeComposerQuotes = [
          {
            content: "",
            contentSourceName: ""
          } as IComposerQuotes
        ];
*/
        this.activeComposerQuotes = [];
        const URL_COMPOSER_QUOTES =
          URL_WEB_API +
          "ComposerQuotes?idComposer=" +
          composer.IdComposer.toString();
        axios.get(URL_COMPOSER_QUOTES).then(resp => {
          this.activeComposerQuotes = resp.data;
        });

        this.activeComposerWorksWebApi = [];

        if (this.source) {
          this.source.cancel();
        }
        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();

        const URL_COMPOSER_WORKS =
          URL_WEB_API_DZK + "WorksByComposer?idComposerMN=" + composer.idMN;
        axios
          .get(URL_COMPOSER_WORKS, { cancelToken: this.source.token })
          .then(resp => {
            this.activeComposerWorksWebApi = resp.data;
          });
      }
    );
  }

  private source: CancelTokenSource;

  private geoStore: GeoStore;
  private routerStore: RouterStore;

  @observable activeIndex: number = 0;

  public getCognomComposer(sortName: string): string {
    const pos = sortName.indexOf(",");
    if (pos <= 0) {
      return "";
    }
    return sortName.substring(0, pos);
  }
  @computed get lastNameComposer(): string {
    const pos = oc(this.activeComposer)
      .sort_name("")
      .indexOf(",");
    if (pos <= 0) {
      return "";
    }
    return this.activeComposer.sort_name.substring(0, pos);
  }

  public getNomDePilaComposer(sortName: string): string {
    const pos = sortName.indexOf(",");
    if (pos <= 0) {
      return "";
    }
    return sortName.substring(pos + 1);
  }
  @computed get firstNameComposer() {
    const pos = oc(this.activeComposer)
      .sort_name("")
      .indexOf(",");
    if (pos <= 0) {
      return "";
    }
    return this.activeComposer.sort_name.substring(pos + 1);
  }

  @computed get activeComposerImgUrl() {
    return (
      "http://MOISES-PC/PictureHeaderBio/" +
      oc(this.activeComposer).IdComposer(-1) +
      ".jpg"
    );
  }

  public getComposerPicture(idComposer: number): string {
    return "http://MOISES-PC/PictureHeaderBio/" + idComposer + ".jpg";
  }

  @computed
  get activeComposerInfoNeixDefu() {
    return "";
    /*
    if (!this.activeComposer) {
      return null;
    }
    let llocNeix = "";
    let paisNeix = "";
    let ciutat: ICiutat;

    if (!!this.activeComposer.begin_area) {
      ciutat = this.geoStore.ciutats.find(
        c => c.IdCiutat === this.activeComposer.IdCiutatNeix
      );
      llocNeix = oc(ciutat).Nom("");
      paisNeix = oc(
        this.geoStore.paisos.find(p => p.IdPais === oc(ciutat).IdPais(-1))
      ).Nom("");
      llocNeix += " (" + paisNeix + ")";
    }
    let llocDefu = "";
    let paisDefu = "";
    let ciutatDefu: ICiutat;
    if (!!this.activeComposer.end_area) {
      ciutatDefu = this.geoStore.ciutats.find(
        c => c.IdCiutat === this.activeComposer.Id
      );
      llocDefu = oc(ciutatDefu).Nom("");
      paisDefu = oc(
        this.geoStore.paisos.find(p => p.IdPais === oc(ciutatDefu).IdPais(-1))
      ).Nom("");
      llocDefu += " (" + paisDefu + ")";
    }
    return (
      llocNeix +
      (!!llocNeix ? ", " : "") +
      this.activeComposer.AnyoNeix +
      (!!this.activeComposer.AnyoDefu
        ? " - " +
          this.activeComposer.AnyoDefu +
          (!!llocDefu ? ", " : "") +
          llocDefu
        : "")
    );
*/
  }

  @observable composerNameFilter: string = null;

  @observable composersRaw: Array<IComposer> = [];
  @computed get composers(): Array<IComposer> {
    return this.composersRaw
      .filter((composer: IComposer) => {
        if (!this.composerNameFilter) {
          return true;
        }
        return composer.sort_name
          .toLowerCase()
          .includes(this.composerNameFilter.toLowerCase());
      }, this)
      .filter((composer: IComposer) => {
        if (!this.isGroupedByNation || this.activeGroupIdNacio < 0) {
          return true;
        }
        const nacio = this.groupsNacio[this.activeGroupIdNacio].nameMenu;
        return composer.nacio === nacio;
      }, this)
      .sort(
        (a1, a2): number => {
          if (a1[this.orderByKey] > a2[this.orderByKey]) {
            return this.orderByDir;
          }
          if (a1[this.orderByKey] < a2[this.orderByKey]) {
            return this.orderByDir * -1;
          }
          return 0;
        }
      );
  }

  @action setNext() {
    this.activeIndex++;
  }
  @action setPrevious() {
    this.activeIndex--;
  }

  @computed get activeComposer(): IComposer {
    return this.composers[this.activeIndex];
  }

  @computed get isNextable(): boolean {
    return this.activeIndex < this.composers.length - 1;
  }
  @action goNextComposer() {
    this.activeIndex++;
  }

  @computed get isPreviousable(): boolean {
    return this.activeIndex > 0;
  }
  @action goPreviousComposer() {
    this.activeIndex--;
  }

  @action shuffle() {
    transaction(() => {
      // const index = this.activeIndex;
      // this.activeIndex = -1;
      this.orderByKey = null;
      this.composersRaw = ComposerStore.doShuffle(toJS(this.composers));
      // this.activeIndex = index;
      // alert("fet");
    });
  }

  static doShuffle(array: Array<any>) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  // SUBS
  @observable activeComposerQuotes: Array<IComposerQuotes> = [];

  @observable worksFilter: string = "";
  @observable activeComposerWorksWebApi: Array<IComposerWorks>;
  @computed get activeComposerWorks(): Array<IComposerWorks> {
    return this.activeComposerWorksWebApi
      .sort((a, b) => {
        return b.performancesCount - a.performancesCount;
      })
      .filter(f =>
        f.nameWork.toLowerCase().includes(this.worksFilter.toLowerCase())
      );
  }

  @observable orderByKey: string = "ranking";
  @observable orderByDir: 1 | -1 = 1;
  @action setOrderBy(key: string) {
    if (key === this.orderByKey) {
      this.orderByDir *= -1;
    }
    this.orderByKey = key;
  }

  @computed get groupsNacioRaw(): MethodMap<IComposer[]> {
    return this.composersRaw.reduce(groupBy(t => t.nacio), Map());
    //return _.groupBy<Array<IComposer>>(this.composers, (t) => {t.nacio}) as Array<IComposer>
  }

  @computed get groupsNacio(): Array<TGroupedMenuCount> {
    const grups = this.groupsNacioRaw;
    const keys = grups.keys();
    return <Array<TGroupedMenuCount>>keys.map<TGroupedMenuCount>(
      (k: string, i: number) => {
        const ret: TGroupedMenuCount = <TGroupedMenuCount>{
          idMenu: i,
          countMenu: grups.get(k).length,
          nameMenu: k
        };
        return ret;
      }
    );
    //const values = this.groupsNacioRaw.values();debugger ;
  }

  @observable activeGroupIdNacio: number = 0;

  @observable isGroupedByNation: boolean = false;

  @observable indexHover: number = -1;
  // @observable numColums: number = 6;
}

export default ComposerStore;
