import axios from "axios";
import {
  LIMIT_COMPOSERS,
  URL_WEB_API,
  URL_WEB_API_DZK
} from "../../util/constants";
import { IComposer } from "./ComposerStore";
import { observable, reaction } from "mobx";
import AlbumStore from "./AlbumStore";

export interface IPerformerRols {
  IdRol: number;
  NameRol: string;
  UrlImage: string;
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
export interface IPerformer {
  idMN: string;
  nameMN: string;
  urlImage: string;
}

export class PerformerStore {
  constructor() {
    axios
      .get<Array<IPerformerRols>>(URL_WEB_API_DZK + "PerformerRols")
      .then(resp => {
        debugger ;this.performerRolsRaw = resp.data;
      });

    reaction(
      () => this.activePerformerIdRol,
      idRol => {
        axios
          .get<Array<IPerformer>>(
            URL_WEB_API_DZK + "PerformersByRol?idRol=" + idRol
          )
          .then(resp => {
            this.performersRaw = resp.data;
          });
      }
    );
  }

  @observable performersRaw: Array<IPerformer>;
  @observable performerRolsRaw: Array<IPerformerRols>;
  @observable performerAlbumsRaw: Array<IPerformerAlbum>;
  @observable activePerformerIdRol: number;
  @observable activePerformerId: string;
}
