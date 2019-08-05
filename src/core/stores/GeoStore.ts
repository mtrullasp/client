import { observable } from "mobx";
import axios, { AxiosResponse } from "axios";
import {URL_WEB_API} from "../../util/constants";

export interface ICiutat {
  IdCiutat: number;
  Nom: string;
  IdPais: number;
}

export interface IPais {
  IdPais: number;
  Nom: string;
}

export default class GeoStore {
  constructor() {
    const URL_PAISOS = URL_WEB_API + "api/paisos";
    const URL_CIUTATS = URL_WEB_API + "api/ciutats";
    axios.get(URL_CIUTATS).then(resp => {
      this.ciutats = resp.data;
    });
    axios.get(URL_PAISOS).then(resp => {
      this.paisos = resp.data;
    });
  }

  @observable ciutats: Array<ICiutat> = [];
  @observable paisos: Array<IPais> = [];
}
