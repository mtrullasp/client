import axios, { AxiosPromise, AxiosResponse } from "axios";
import {
  LIMIT_COMPOSERS,
  URL_WEB_API,
  URL_WEB_API_DZK
} from "../../util/constants";
import { IArtistRel, IComposer } from "./ComposerStore";
import { action, computed, observable, reaction } from "mobx";
import AlbumStore from "./AlbumStore";
import { Entry, Reducer } from "declarative-js";
import groupBy = Reducer.groupBy;
import Map = Reducer.Map;

export interface IPerformerRols {
  IdRol: number;
  NameRol: string;
  UrlImage: string;
  WidthImage: number;
  HeightImage: number;
  ArtistsCount: number;
  NamePerformerTip: string;
}
export interface IPerformerAlbum {
  albumType: number;
  alNumTracks: number;
  duration: number;
  dzNumTracks: number;
  idDeezer?: number;
  prestige?: number;
  urlCover: string;
  nameMW: string;
  idMW: string;
}
export interface IPerformerItem {
  idMN: string;
  nameMN: string;
  urlImage: string;
  widthImage: number;
  heightImage: number;
}

export interface IPerformer {
  CORE_work: any[];
  idMN: string;
  nameMN: string;
  urlSource: string;
  ranking: number;
  urlImage: string;
  biographpy: string;
  beginDate: Date;
  genre: string;
  lastUpdated: Date;
  idArtistDZ: number;
  widthImage: number;
  heightImage: number;
}

export interface IPerformerRoot {
  Performer: IPerformer;
  MainRol: string;
  Relations?: any;
}

export class PerformerStore {
  constructor() {
    axios
      .get<Array<IPerformerRols>>(URL_WEB_API_DZK + "PerformerRols")
      .then(resp => {
        debugger;
        this.performerRolsRaw = resp.data;
      });

    reaction(
      () => this.activePerformerIdRol,
      idRol => {
        axios
          .get<Array<IPerformerItem>>(
            URL_WEB_API_DZK + "PerformersByRol?idRol=" + idRol
          )
          .then(resp => {
            this.performersRaw = resp.data;
          });
      }
    );

    reaction(
      () => this.activePerformerId,
      idPerformer => {
        this.performerRels = [];
        const URL_PERFORMER_RELS =
          URL_WEB_API_DZK + "ArtistRelations?idMN=" + idPerformer;
        axios.get<Array<IArtistRel>>(URL_PERFORMER_RELS).then(resp => {
          debugger;
          this.performerRels = resp.data;
        });
      }
    );
  }

  @action setActivePerformer(id: string): Promise<IPerformerRoot> {
    this.activePerformerId = id;
    return axios.get(URL_WEB_API_DZK + "PerformerById?id=" + id).then(resp => {
      debugger;
      this.activePerformer = resp.data;
      this.activePerformerId = id;
      return resp.data;
    });
  }

  @observable performersRaw: Array<IPerformerItem>;
  @observable performerRolsRaw: Array<IPerformerRols>;
  @observable performerAlbumsRaw: Array<IPerformerAlbum>;
  @observable activePerformerIdRol: number;
  @observable activePerformerId: string;
  @observable activePerformer: IPerformerRoot;

  @observable performerRels: Array<IArtistRel>;

  @computed get performerRelsGrouped() {
    const ret = this.performerRels
      .sort((s1, s2) => {
        return s1.nOrd - s2.nOrd;
      })
      .reduce(
        groupBy(t => t.relTipName),
        Map()
      );
    debugger;
    return ret.entries();
  }
}
