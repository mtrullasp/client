import * as React from "react";
import { action, computed, observable, reaction } from "mobx";
import GeoStore, { ICiutat } from "./GeoStore";
import { oc } from "ts-optchain";
import {LIMIT_COMPOSERS, URL_WEB_API, WEB_API_HOST} from "../util/constants";
import axios, { AxiosResponse } from "axios";
import {shuffle} from "../util/shuffle";

export interface IComposer {
  IdComposer: number;
  sort_name: string;
  idMB?: number;
  begin_date_year?: number;
  begin_date_month?: number;
  begin_date_day?: number;
  end_date_year?: number;
  end_date_month?: number;
  end_date_day?: number;
  begin_area?: number;
  end_area?: number;
  name: string;
  ranking: number;
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

class ComposerStore {
  constructor(geoStore: GeoStore) {
    this.geoStore = geoStore;
    axios.get<Array<IComposer>>(URL_WEB_API + "Composers").then(resp => {
      debugger;
      this.composers = resp.data.splice(0, LIMIT_COMPOSERS);
    });

    reaction(
      () => this.activeComposer,
      composer => {
        if (!composer) {
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
          WEB_API_HOST +
          "api/ComposerQuotes?idComposer=" +
          composer.IdComposer.toString();
        axios.get(URL_COMPOSER_QUOTES).then(resp => {
          this.activeComposerQuotes = resp.data;
        });
      }
    );
  }

  private geoStore: GeoStore;

  @observable activeIndex: number = 0;

  public getLastNameComposer(sortName: string): string {
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

  public getFisrtNameComposer(sortName: string): string {
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
      "http://localhost/PictureHeaderBio/" +
      oc(this.activeComposer).IdComposer(-1) +
      ".jpg"
    );
  }

  public getComposerPicture(idComposer: number): string {
    return "http://localhost/PictureHeaderBio/" + idComposer + ".jpg";
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

  @observable composers: Array<IComposer> = [];
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
    this.composers = ComposerStore.doShuffle(this.composers);
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
}

export default ComposerStore;
