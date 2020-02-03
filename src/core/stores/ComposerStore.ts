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
  ROUTE_COMPOSERS_ITEM_WORKS,
  URL_WEB_API_DZK,
  SORT_ASCENDING,
  SORT_DESCENDING,
  PATH_COMPOSER_IMAGE,
  ROUTE_COMPOSER_ITEM,
  ROUTE_PERFORMER, ROUTE_ALBUM_TRACKS
} from "../../util/constants";
import { oc } from "ts-optchain";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { shuffle } from "../../util/shuffle";
//import { Group } from "@material-ui/icons";
// import * as _ from "lodash";
import { Reducer, JMap, MethodMap, Entry } from "declarative-js";
import groupBy = Reducer.groupBy;
import Map = Reducer.Map;
import { number } from "prop-types";
import { toArray } from "declarative-js/src/internal/ToArray";
import history from "history";
import { RouterStore } from "./RouterStore";
import HyperText from "../../widgets/HyperText/HyperText";
import { PerformerStore } from "./PerformerStore";
// import * as debounce from "lodash.debounce";

export interface IComposer {
  IdComposer: number;
  idMN: string;
  nameMN: string;
  idMB?: number;
  Bio: string;
  AnyoNeix: number;
  AnyoDefu: number;
  beginDate: Date;
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
  CiutatNeix: string;
  CiutatDefu: string;
  PaisNeix: string;
  PaisDefu: string;
}

export class TGroupedMenuCount {
  idMenu: number;
  nameMenu: string;
  countMenu: number;
}

export interface IArtistRel {
  idArtist: string;
  artistName: string;
  urlSource: string;
  lastUpdated: string;
  begin_date?: any;
  end_date?: any;
  ranking: number;
  biography?: any;
  idArtistRel: string;
  nOrd: number;
  relTipName: string;
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
  workGenre: string;
  performancesCount: number;
}

class ComposerStore {
  constructor(
    geoStore: GeoStore,
    routerStore: RouterStore,
    performerStore: PerformerStore
  ) {
    this.geoStore = geoStore;
    this.routerStore = routerStore;
    this.performerStore = performerStore;
    axios.get<Array<IComposer>>(URL_WEB_API_DZK + "Composers").then(resp => {
      this.composersRaw = resp.data;
    });

    const that = this;
    window.addEventListener("keydown", event => {
      const fer = function(callback: Function) {
        event.stopPropagation();
        event.preventDefault();
        callback();
      };
      if (routerStore.activeRouterPath.includes("composers/collection")) {
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
            that.routerStore.go(ROUTE_COMPOSER_ITEM);
          });
        }
      }
      if (routerStore.activeRouterPath.includes("composers/item")) {
        if (event.key === "ArrowRight") {
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
        debugger;
        this.worksFilter = "";
        if (!composer || this.activeIndex === -1) {
          return;
        }

        this.activeComposerQuotes = [
          {
            content: "",
            contentSourceName: ""
          } as IComposerQuotes
        ];
        this.activeComposerQuotes = [];
        const URL_COMPOSER_QUOTES =
          URL_WEB_API_DZK +
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

        this.composerRels = [];
        const URL_COMPOSER_RELS =
          URL_WEB_API_DZK + "ArtistRelations?idMN=" + composer.idMN;
        axios.get<Array<IArtistRel>>(URL_COMPOSER_RELS).then(resp => {
          debugger ;this.composerRels = resp.data;
        });
      }
    );
  }

  private source: CancelTokenSource;

  private geoStore: GeoStore;
  private routerStore: RouterStore;
  private performerStore: PerformerStore;

  @observable activeIndex: number = 0;
  @action setActiveComposerId(id: string) {
    this.activeIndex = this.composersRaw.findIndex(p => p.idMN === id);
  }

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
      PATH_COMPOSER_IMAGE + oc(this.activeComposer).IdComposer(-1) + ".jpg"
    );
  }

  public getComposerPicture(idComposer: number): string {
    return PATH_COMPOSER_IMAGE + idComposer + ".jpg";
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
  @computed get composersRawNumFiltered(): Array<IComposer> {
    return this.composersRaw.slice(0, Number(this.RANDOM_NUM_COMPOSERS));
  }
  @computed get composers(): Array<IComposer> {
    return this.composersRawNumFiltered
      .filter((composer: IComposer) => {
        if (!this.composerNameFilter) {
          return true;
        }
        return composer.sort_name
          .toLowerCase()
          .includes(this.composerNameFilter.toLowerCase());
      }, this)
      .filter((composer: IComposer) => {
        if (!this.isGroupedByNation || this.activeGroupIdNacio === "") {
          return true;
        }

        /*
        const nacio = this.groupsNacio.find(
          p => p.nameMenu === this.activeGroupIdNacio
        ).idMenu;
*/
        return composer.nacio === this.activeGroupIdNacio;
      }, this)
      .sort((a1, a2): number => {
        if (a1[this.orderByKey] > a2[this.orderByKey]) {
          return this.orderByDir;
        }
        if (a1[this.orderByKey] < a2[this.orderByKey]) {
          return this.orderByDir * -1;
        }
        return 0;
      });
  }

  @action setNext() {
    this.activeIndex++;
  }
  @action setPrevious() {
    this.activeIndex--;
  }

  @computed get activeComposer(): IComposer {
    return this.composersRaw[this.activeIndex];
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
      this.composersRaw = ComposerStore.doShuffle(
        toJS(this.composersRawNumFiltered)
      );
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
        if (this.sortComposerWorksKeyDir === "ascending") {
          return b[this.sortComposerWorksKey] - a[this.sortComposerWorksKey];
        } else {
          return a[this.sortComposerWorksKey] - b[this.sortComposerWorksKey];
        }
      })
      .filter(f =>
        f.nameWork.toLowerCase().includes(this.worksFilter.toLowerCase())
      );
  }

  @observable sortComposerWorksKey: string = "performancesCount";
  @observable sortComposerWorksKeyDir: string = SORT_ASCENDING;
  @action toggleSortComposerWorks(key: string) {
    if (this.sortComposerWorksKey === key) {
      if (!this.sortComposerWorksKeyDir) {
        this.sortComposerWorksKeyDir = SORT_ASCENDING;
      } else if (this.sortComposerWorksKeyDir === SORT_ASCENDING) {
        this.sortComposerWorksKeyDir = SORT_DESCENDING;
      } else {
        this.sortComposerWorksKeyDir = SORT_ASCENDING;
      }
    } else {
      this.sortComposerWorksKey = key;
      this.sortComposerWorksKeyDir = "ascending";
    }
  }

  @observable orderByKey: string = "ranking";
  @observable orderByDir: 1 | -1 = 1;
  @action setOrderBy(key: string) {
    debugger;
    if (key === this.orderByKey) {
      this.orderByDir *= -1;
    }
    this.orderByKey = key;
  }

  @computed get groupsNacioRaw(): MethodMap<IComposer[]> {
    return this.composersRawNumFiltered.reduce(groupBy(t => t.nacio), Map());
    //return _.groupBy<Array<IComposer>>(this.composers, (t) => {t.nacio}) as Array<IComposer>
  }

  @computed get groupsNacioSorted(): Array<TGroupedMenuCount> {
    return this.groupsNacio.sort((s1, s2): number => {
      if (s1.countMenu < s2.countMenu) {
        return 1;
      }
      return -1;
    });
  }
  @computed get groupsNacio(): Array<TGroupedMenuCount> {
    debugger;
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
      },
      this
    );
    //const values = this.groupsNacioRaw.values();debugger ;
  }

  @observable activeGroupIdNacio: string = "";

  @observable isGroupedByNation: boolean = false;

  @observable indexHover: number = -1;
  // @observable numColums: number = 6;

  @observable RANDOM_NUM_COMPOSERS: string = "80";

  @observable composerRels: Array<IArtistRel>;

  @computed get composerRelsGrouped(): any[] {
    const ret = this.composerRels.reduce(groupBy(t => t.relTipName), Map());
    debugger;
    return ret.entries();
  }

  @action goArtist(idArtist: string) {
    debugger ;const composer = this.composersRaw.find(f => f.idMN === idArtist);
    if (!!composer) {
      this.setActiveComposerId(idArtist);
      this.routerStore.go(ROUTE_COMPOSER_ITEM);
    } else {
      this.performerStore.setActivePerformer(idArtist).then(() => {
        this.routerStore.go(ROUTE_PERFORMER.replace(":idMN", idArtist));
      });
    }
  }

  @action onHyperLink(href: string, e: React.MouseEvent<HTMLElement>): boolean {
    debugger;
    e.preventDefault();
/*
    if (!href.includes("allmusic")) {
      return false;
    }
*/
    if (href.includes("-mn")) {
      const p = href.lastIndexOf("-");
      const idArtist = href.substr(p + 1);
      this.goArtist(idArtist);
      return true;
    } else if (href.includes("-mw")) {
      debugger ;const p = href.lastIndexOf("-");
      const idAlbumAM = href.substr(p + 1);
      const url = URL_WEB_API_DZK + "IdAlbumToAM?idAlbumAM=" + idAlbumAM;
      axios.get<number>(url).then(res => {
        this.goAlbumAM(res.data);
      });
      return true;
    }
    return false;
  }

  private goAlbumAM(idAlbum: number) {
    const route = ROUTE_ALBUM_TRACKS.replace(":idAlbum", idAlbum.toString());
    this.routerStore.go(route);
  }

  public getImageArtist(idMN: string) {
    return "http://localhost/PictureArtist/" + idMN + ".jpg";
  }
}

export default ComposerStore;
