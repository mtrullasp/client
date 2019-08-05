"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const axios_1 = require("axios");
const constants_1 = require("../util/constants");
class TDeezerTrack {}
exports.TDeezerTrack = TDeezerTrack;
class AlbumStore {
  constructor(performeStore) {
    this.worksFets = true;
    this.albums = [];
    // @observable activeTracks: Array<IPerformanceMQItem>;
    // @observable activeTrackIndex: number = -1;
    /*
          @computed
          get activeTrack(): IPerformanceMQItem {
            if (!this.activeTracks) {
              return null;
            }
            return this.activeTracks[this.activeTrackIndex];
          }
        */
    this.klassikRankWebApi = [];
    mobx_1.reaction(
      () => this.activeAlbumMWid,
      arg => {
        //debugger ;this.activeAlbumMWid = null;
        if (this.source) {
          this.source.cancel();
        }
        const CancelToken = axios_1.default.CancelToken;
        this.source = CancelToken.source();
        const URL_ALBUM_TRACKS =
          constants_1.URL_WEB_API + "AlbumTracks?idMW=" + arg;
        axios_1.default
          .get(URL_ALBUM_TRACKS, {
            cancelToken: this.source.token
          })
          .then(resp => {
            this.albumTracksRaw = resp.data;
          });
      }
    );
    mobx_1.reaction(
      () => this.urlAlbumsByWork,
      url => {
        const CancelToken = axios_1.default.CancelToken;
        this.source = CancelToken.source();
        axios_1.default
          .get(url, {
            cancelToken: this.source.token
          })
          .then(resp => {
            this.albums = resp.data;
          });
      }
    );
    mobx_1.reaction(
      () => performeStore.activePerformerId,
      idMN => {
        const URL_ALBUMS =
          constants_1.URL_WEB_API + "artistAlbums?idMNparam=" + idMN;
        const CancelToken = axios_1.default.CancelToken;
        this.source = CancelToken.source();
        axios_1.default
          .get(URL_ALBUMS, {
            cancelToken: this.source.token
          })
          .then(resp => {
            this.albums = resp.data;
          });
      }
    );
  }
  searchByText(text) {
    // this.albums = [];
    if (this.source) {
      this.source.cancel();
    }
    const CancelToken = axios_1.default.CancelToken;
    this.source = CancelToken.source();
    axios_1.default
      .get(constants_1.URL_WEB_API + "AlbumsByText?text=" + text, {
        cancelToken: this.source.token
      })
      .then(resp => {
        this.albums = resp.data;
        this.activeIndex = 0;
      });
  }
  get urlAlbumsByWork() {
    return (
      constants_1.URL_WEB_API +
      "AlbumsByWork?idMC=" +
      this.activeMCWorks +
      "&fets=" +
      this.worksFets
    );
  }
  searchByWork(idMC) {
    /*
        if (this.source) {
          this.source.cancel();
        }
        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();
    */
    this.activeMCWorks = idMC;
  }
  setWoroksFets(fets) {
    this.worksFets = fets;
  }
  get activeAlbumMWid() {
    if (!this.albums || this.activeIndex >= this.albums.length) {
      return "";
    }
    return this.albums[this.activeIndex].idMW;
  }
  setActiveAlbumId(idMW) {
    this.activeIndex = this.albums.findIndex(a => a.idMW === idMW);
  }
  get activeAlbum() {
    return this.albums.find(al => al.idMW === this.activeAlbumMWid);
  }
  get activeAlbumMWdeezerLink() {
    if (!this.albums || this.activeIndex >= this.albums.length) {
      return "";
    }
    return "" + this.albums[this.activeIndex].idDeezer;
  }
  get albumTracks() {
    if (!this.albumTracks) {
      return null;
    }
    return this.albumTracks;
  }
  get isNextable() {
    return this.activeIndex < this.albums.length - 1;
  }
  goNext() {
    this.activeIndex++;
  }
  get isPreviousable() {
    return this.activeIndex > 0;
  }
  goPrevious() {
    this.activeIndex--;
  }
  shuffle() {}
  getKlassikRank(idMC, idMCord) {
    const URL_KLASSIKRANK_TRACKS =
      constants_1.URL_WEB_API +
      "WorkVersions?idMC=" +
      idMC +
      "&idMCord=" +
      idMCord;
    axios_1.default.get(URL_KLASSIKRANK_TRACKS).then(resp => {
      this.klassikRankWebApi = resp.data;
    });
  }
}
__decorate([mobx_1.action], AlbumStore.prototype, "searchByText", null);
__decorate([mobx_1.computed], AlbumStore.prototype, "urlAlbumsByWork", null);
__decorate([mobx_1.observable], AlbumStore.prototype, "activeMCWorks", void 0);
__decorate([mobx_1.action], AlbumStore.prototype, "searchByWork", null);
__decorate([mobx_1.action], AlbumStore.prototype, "setWoroksFets", null);
__decorate([mobx_1.observable], AlbumStore.prototype, "worksFets", void 0);
__decorate([mobx_1.computed], AlbumStore.prototype, "activeAlbumMWid", null);
__decorate([mobx_1.action], AlbumStore.prototype, "setActiveAlbumId", null);
__decorate([mobx_1.computed], AlbumStore.prototype, "activeAlbum", null);
__decorate(
  [mobx_1.computed],
  AlbumStore.prototype,
  "activeAlbumMWdeezerLink",
  null
);
__decorate([mobx_1.observable], AlbumStore.prototype, "albums", void 0);
__decorate([mobx_1.observable], AlbumStore.prototype, "albumTracksRaw", void 0);
__decorate([mobx_1.computed], AlbumStore.prototype, "albumTracksRaw", null);
__decorate([mobx_1.computed], AlbumStore.prototype, "isNextable", null);
__decorate([mobx_1.action], AlbumStore.prototype, "goNext", null);
__decorate([mobx_1.computed], AlbumStore.prototype, "isPreviousable", null);
__decorate([mobx_1.action], AlbumStore.prototype, "goPrevious", null);
__decorate([mobx_1.observable], AlbumStore.prototype, "activeIndex", void 0);
__decorate([mobx_1.action], AlbumStore.prototype, "shuffle", null);
__decorate(
  [mobx_1.observable],
  AlbumStore.prototype,
  "klassikRankWebApi",
  void 0
);
__decorate([mobx_1.action], AlbumStore.prototype, "getKlassikRank", null);
exports.default = AlbumStore;
//# sourceMappingURL=AlbumStore.js.map
