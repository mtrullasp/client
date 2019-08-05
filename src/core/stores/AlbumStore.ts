import {
  action,
  computed,
  observable,
  reaction,
  toJS,
  transaction
} from "mobx";
import axios, { CancelTokenSource } from "axios";
import {
  COMPOSER_NUMBER_COLS,
  ROUTE_COMPOSERS_ITEM,
  URL_WEB_API,
  URL_WEB_API_DZK,
  WEB_API_HOST,
  ZEN
} from "../../util/constants";
import { PerformerStore } from "./PerformerStore";
import ComposerStore, { IComposer, TGroupedMenuCount } from "./ComposerStore";
import { Reducer, JMap, MethodMap } from "declarative-js";
import groupBy = Reducer.groupBy;
import Map = Reducer.Map;
import { RouterStore } from "./RouterStore";
import {
  AlbumWork,
  IResponseAlbumTracksRoot,
  Track
} from "./albumStore/ResponseAlbumTracks";
import { ILinkTag } from "../../views/album/toolbar/AlbumTags";

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

export interface IResponseAlbumTracks {
  Tracks: ITracksView[];
  AlbumTracks: IAlbumTrack[];
  AlbumCredits: IAlbumCredit[];
}

export interface IAlbumCredit {
  idCredit: number;
  nameCredit: string;
  isMusical?: boolean;
  nameMN: string;
  idMN: string;
  nameMW: string;
}

export interface IAlbumTrack {
  idMW: string;
  nameMW: string;
  yearAlbum: string;
  prestige: number;
  search_string: string;
  duration: number;
  artists: string;
  idMQord: number;
  itemName: string;
  composer: string;
  performers: string;
  durationTrack: number;
  idMC: string;
  idMCord: number;
  idMQ: string;
  nameMQ: string;
  labelName: string;
  labelCat: string;
  deezerLink: string;
  numDisc: number;
  idComposerMN: string;
  idDeezerTrack?: number;
  lastUpdated: Date;
  cover_big: string;
  cover_xl: string;
}

export interface IKlassikRank {
  idAlbum: number;
  albumName: string;
  coverBig: string;
  duration: number;
  idTrack: number;
  mainArtists: string;
}

export interface IAlbum {
  idAlbum: number;
  idMW: string;
  idDeezer: number;
  nameMW: string;
  urlCover: string;
  nameMN: string;
  prestige: number;
  label: string;
  nb_wworks: number;
  releaseDate: Date;
  composers: string;
  // mainArtist: string;
}

export interface IAlbumComposer {
  idMW: string;
  idComposerMN: string;
  composerName: string;
  ranking?: number;
}

export interface IAlbumInfo {
  IdMW: string;
  nameMW: string;
  yearAlbum: string;
  prestige?: number;
  search_string: string;
  duration?: number;
  artists: string;
  idMQord: number;
  itemName: string;
  composer: string;
  performers: string;
  durationTrack?: number;
  idMQ: string;
  nameMQ: string;
  labelName: string;
  labelCat: string;
  performanceMQ: Array<IPerformanceMQ>;
}

/*
export interface IAlbumTrack {
  IdTrack: number;
  IdMC: string;
  IdMCOrd: number;
  NameTrack: string;
  NameComposer: string;
  NameMQ: string;
  Credits: Array<ICredit>;
}
*/

export interface IPerformanceMQ {
  idMQ: string;
  nameMQ: string;
  idMW: string;
  labelName: string;
  labelCat: string;
  idMC: string;
  urlSource: string;
  performanceMQitems: Array<IPerformanceMQItem>;
  performanceMQcredits: Array<IPerformanceMQCredit>;
}

export interface IPerformanceMQItem {
  idMQ: string;
  idMQord: number;
  itemName: string;
  composer: string;
  performers: string;
  duration?: number;
  idMC: string;
  idMCord: number;
  idDeezerTrack: number;
}

export interface IPerformanceMQCredit {
  idMQ: string;
  idMQord: number;
  credit: ICredit;
}

export interface ICredit {
  idCredit: number;
  nameCredit: string;
  isMusical: boolean;
  urlImage: string;
  idPperformerTip: number;
}

export interface ICreditLink {
  idMN: string;
  nameMN: string;
  creditTip: string;
  creditValue: string;
}

export class TDeezerTrack {
  idDeezerTrack: number;
  idDeezer: number;
  readable: boolean;
  workName: string;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  artist: IDeezerArtist;
  type: string;
  isrc: string;
  credits: string;
  composerName: string;
  idWork: number;
  numPart: number;
  labelName: string;
}

export interface IDeezerArtist {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}

export interface ITrackArtist {
  id: string;
  name: string;
}

export interface ITrackAlbum {
  id: string;
  title: string;
}

export interface ITrackTrack {
  id: string;
  duration: string;
  title: string;
  artist: ITrackArtist;
  album: ITrackAlbum;
}

export interface ITrackRoot {
  index: number;
  track: ITrackTrack;
}

export interface ITracksView {
  composerName: string;
  nameWork: string;
  workGenre: string;
  workType: string;
  featured: string;
  idTrack_DZ: number;
  idAlbum_DZ: number;
  name: string;
  duration: number;
  idMC: string;
  idMC_ord: number;
  idrack_DZ_ord: number;
  description: string;
  descriptionAuthor: string;
}

class AlbumStore {
  constructor(performeStore: PerformerStore, routerStore: RouterStore) {
    const that = this;
    window.addEventListener("keydown", event => {
      const fer = function(callback: Function) {
        event.stopPropagation();
        event.preventDefault();
        callback();
      };
      if (routerStore.activeRouterPath.endsWith("/tracks")) {
        if (event.key === "ArrowRight") {
          fer(() => that.playerNext());
        }
        if (event.key === "ArrowLeft") {
          fer(() => that.playerPrev());
        }
      } else if (routerStore.activeRouterPath.endsWith("/random")) {
        if (event.key === "ArrowRight") {
          fer(() => that.getRandomTrack());
        }
      }
    });

    DZ.Event.subscribe("current_track", (track: ITrackRoot, evt_name) => {
      debugger;
      this.trackIdIsPlaying = Number(track.track.id);
    });

    DZ.Event.subscribe("track_end", (track: ITrackRoot, evt_name) => {
      if (routerStore.activeRouterPath.endsWith("/random")) {
        this.getRandomTrack();
      }
    });

    DZ.Event.subscribe(
      "player_position",
      (position: Array<number>, evt_name) => {
        this.activeTrackPosition = position[0];
        this.activeTrackDuration = position[1];
      }
    );

    reaction(
      () => this.activeAlbum,
      activeAlbum => {
        //debugger ;this.activeAlbumMWid = null;
        if (this.source) {
          this.source.cancel();
        }
        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();

        const zen = ""; // ZEN;
        const URL_ALBUM_TRACKS =
          URL_WEB_API_DZK +
          "AlbumWorks" +
          zen +
          "?idAlbum=" +
          activeAlbum.idAlbum;
        debugger;
        axios
          .get<IResponseAlbumTracksRoot>(URL_ALBUM_TRACKS, {
            cancelToken: this.source.token
          })
          .then(resp => {
            this.responseAlbumsTracks = resp.data;
          });
      }
    );

    reaction(
      () => this.urlAlbumsByWork,
      (url: string) => {
        debugger;
        this.albumsRaw = [];
        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();
        axios
          .get<Array<IAlbum>>(url, {
            cancelToken: this.source.token
          })
          .then(resp => {
            debugger;
            this.albumsRaw = resp.data;
          });
      }
    );

    reaction(
      () => this.activeArtistIdMN,
      (idMN: string) => {
        this.albumsRaw = [];
        const URL_ALBUMS = URL_WEB_API_DZK + "artistAlbums?idMNparam=" + idMN;
        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();
        axios
          .get<Array<IAlbum>>(URL_ALBUMS, {
            cancelToken: this.source.token
          })
          .then(resp => {
            debugger;
            this.albumsRaw = resp.data;
          });
      }
    );
  }

  private source: CancelTokenSource;

  @observable activeArtistIdMN: string = "";
  @observable activeArtistNameMN: string = "";

  @observable activeTrackPosition: number = 0;
  @computed get activeTrackPositionTime(): string {
    return this.secondsToTimeFormat(this.activeTrackPosition);
  }
  @observable activeTrackDuration: number = 0;
  @computed get activeTrackDurationTime(): string {
    return this.secondsToTimeFormat(this.activeTrackDuration);
  }

  @action searchByText(text: string) {
    // this.albums = [];
    this.albumsRaw = [];
    if (this.source) {
      this.source.cancel();
    }
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    axios
      .get<Array<IAlbum>>(URL_WEB_API + "AlbumsByText?text=" + text, {
        cancelToken: this.source.token
      })
      .then(resp => {
        this.albumsRaw = resp.data;
        // this.activeIndex = 0;
      });
  }

  @computed get urlAlbumsByWork(): string {
    return (
      URL_WEB_API_DZK +
      "AlbumsByWork" +
      ZEN +
      "?idWork=" +
      this.activeMCWorks +
      "&fets=" +
      this.worksFets
    );
  }
  @observable activeMCWorks: string;
  @action searchByWork(idMC: string) {
    /*
    if (this.source) {
      this.source.cancel();
    }
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
*/
    this.activeMCWorks = idMC;
  }

  @action setWoroksFets(fets: boolean) {
    this.worksFets = fets;
  }

  @observable worksFets: boolean = true;

  @action getRandomTrack() {
    const URL_RANDOM_TRACK = URL_WEB_API_DZK + "RandomTrack?numComposers=40";
    axios.get<IResponseAlbumTracksRoot>(URL_RANDOM_TRACK).then(resp => {
      debugger;
      this.responseAlbumsTracks = resp.data;
      this.activeAlbum = this.responseAlbumsTracks.Album;
/*
      this.responseAlbumsTracks.AlbumWorks = [
        this.responseAlbumsTracks.AlbumWorks
      ];
*/
      this.playTracks(this.responseAlbumsTracks.Track.idWorkOrd, 0);
    });
  }
  // @observable activeAlbumMWid: string;
  @action setActiveAlbum(album: IAlbum) {
    this.activeAlbum = album;
  }
  @action setActiveAlbumById(idAlbum: number) {
    this.activeAlbum = this.albums.find(a => a.idAlbum === idAlbum);
  }
  @observable activeAlbum: IAlbum;
  @computed get activeAlbumMWdeezerLink(): string {
    if (!this.activeAlbum) {
      return "";
    }
    return "" + this.activeAlbum.idDeezer;
  }

  @observable responseAlbumsTracks: IResponseAlbumTracksRoot;
  @observable albumsRaw: Array<IAlbum> = [];
  @observable orderByKey: string = "";
  @observable orderByDir: number = 1;
  @action setOrderByKey(order: string) {
    if (order === this.orderByKey) {
      this.orderByDir *= -1;
    } else {
      this.orderByKey = order;
    }
  }
  @computed get albumsCount(): number {
    return !!this.albums ? this.albums.length : 0;
  }
  @computed get albums(): Array<IAlbum> {
    return toJS(this.albumsRaw)
      .filter((al: IAlbum) => {
        if (!this.groupByField || this.activeGroupFieldValue === "") {
          return true;
        }
        //const value = this.groups[this.activeGroupFieldValue].nameMenu;
        return al[this.groupByField] === this.activeGroupFieldValue;
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
  @computed get albumTracksRaw(): IResponseAlbumTracksRoot {
    if (!this.responseAlbumsTracks) {
      return null;
    }
    return this.responseAlbumsTracks;
  }
  /*
  @computed get albumTracks(): Array<IAlbumTrack> {
    if (!this.albumTracksRaw) {
      return null;
    }
    let nameMQant: string = "";
    return this.albumTracksRaw.map(a => {
      if (a.nameMQ === nameMQant) {
        return { ...a, nameMQ: "" };
      }
      nameMQant = a.nameMQ;
      return a;
    });
  }
*/

  @computed get albumCreditRaw(): Array<IAlbumCredit> {
    if (!this.responseAlbumsTracks) {
      return null;
    }
    return this.responseAlbumsTracks.AlbumCredits;
  }

  @computed get isNextable(): boolean {
    return this.activeIndex < this.albums.length - 1;
  }
  @action goNext() {
    debugger;
    this.activeAlbum = this.albums[this.activeIndex + 1];
  }

  @computed get isPreviousable(): boolean {
    return this.activeIndex > 0;
  }
  @action goPrevious() {
    this.activeAlbum = this.albums[this.activeIndex - 1];
  }

  @computed get activeIndex(): number {
    return this.albums.findIndex(a => a.idAlbum === this.activeAlbum.idAlbum);
  }

  @action shuffle() {
    transaction(() => {
      // const index = this.activeIndex;
      // this.activeIndex = -1;
      this.orderByKey = "";
      this.albumsRaw = ComposerStore.doShuffle(toJS(this.albumsRaw));
      // this.activeIndex = index;
      // alert("fet");
    });
  }

  @computed get activeTrack(): ITracksView {
    debugger;
    if (!this.trackIdIsPlaying) {
      return null;
    }
    /*
    const tracks = this.responseAlbumsTracks.AlbumWorks.map(
      a => a.track
    ).reduce((prev: Track[], next: Track[]) => {
      return prev.concat(next);
    });
*/
    //const tracks = this.responseAlbumsTracks.AlbumWorks.map(t => t.idTrack_DZ);
    return this.responseAlbumsTracks.AlbumWorks.find(
      t => t.idTrack_DZ === this.trackIdIsPlaying
    );
  }

  @computed get activeTrackComposer(): string {
    if (!this.activeTrack) {
      return "";
    }
    const idWork = this.activeTrack.idMC;
    const albumWork = this.responseAlbumsTracks.AlbumWorks.find(
      a => a.idMC === idWork
    );
    return albumWork.composerName;
  }
  @computed get activeTrackWorkName(): string {
    if (!this.activeTrack) {
      return "";
    }
    const idWork = this.activeTrack.idMC;
    const albumWork = this.responseAlbumsTracks.AlbumWorks.find(
      a => a.idMC === idWork
    );
    return albumWork.nameWork;
  }

  @computed get activeTrackWorkDesc(): string {
    if (!this.activeTrack) {
      return "";
    }
    const idWork = this.activeTrack.idMC;
    const albumWork = this.responseAlbumsTracks.AlbumWorks.find(
      a => a.idMC === idWork
    );
    return albumWork.description || "";
  }

  @computed get activeTrackWorkDescAuthor(): string {
    if (!this.activeTrack) {
      return "";
    }
    const idWork = this.activeTrack.idMC;
    const albumWork = this.responseAlbumsTracks.AlbumWorks.find(
      a => a.idMC === idWork
    );
    return albumWork.descriptionAuthor;
  }

  @computed get activeTrackCredits(): Array<ICreditLink> {
    if (!this.albumCreditRaw) {
      return null;
    }
    return this.albumCreditRaw
      .filter(f => f.isMusical)
      .map(c => {
        return {
          idMN: c.idMN,
          nameMN: c.nameMN,
          creditTip: c.nameCredit,
          creditValue: c.nameMN
        } as ICreditLink;
      });
  }

  @observable klassikRankWebApi: Array<IKlassikRank> = [];
  @action getKlassikRank(idMC: string, idMCord: number) {
    const URL_KLASSIKRANK_TRACKS =
      URL_WEB_API_DZK +
      "WorkVersions" +
      ZEN +
      "?idMC=" +
      idMC +
      "&idMCord=" +
      idMCord;
    axios.get<Array<IKlassikRank>>(URL_KLASSIKRANK_TRACKS).then(resp => {
      this.klassikRankWebApi = resp.data;
    });
  }

  /**
   * PLAYER
   */
  @action
  goPlaylistTracks(playlistId: number) {
    //this.history.push("http://127.0.0.1:3000/Me/Playlist/1600104235/Tracks")
    if (!playlistId) {
      return;
    }
    DZ.player.playPlaylist(playlistId, false, 0);
    //this.history.push("/Me/Playlist/" + playlistId.toString() + "/IDeezerTracks");
  }

  /*
    @action
    playTrack(trackId: number) {
      DZ.player.pause();
      DZ.player.playTracks([trackId]);
    }
  */

  @computed get tracks(): Array<number> {
    //return null;
    /*
    const ret = toJS(this.responseAlbumsTracks.AlbumWorks)
      .map(a => a.track)
      .reduce(
        (prev: Track[], curr: Track[], cIndex: number, acumule: Track[][]) => {
          return prev.concat(curr);
        }
      );
*/
    debugger;
    const ret = toJS(this.responseAlbumsTracks.AlbumWorks);
    return ret.map(t => t.idTrack_DZ);
  }
  /*
  @action setTracks(tracks: Array<number>) {
    this.tracks = tracks;
  }
*/

  @action
  playTracks(workOrd: number, initIndexTrack: number) {
    // this.tracks = tracks;
    //console.log(initIndexTrack);d
    debugger;
    /*
    const offSet: number = this.responseAlbumsTracks.AlbumWorks.filter(
      a => a.idMC_ord < workOrd
    )
      .map(a => a.length)
      .reduce((sum: number, curr: number) => sum + curr, 0);
*/
    DZ.player.pause();
    DZ.player.playTracks(this.tracks, initIndexTrack);
  }

  @action
  toggleTrack(track: IAlbumTrack) {
    /*
    if (track.idDeezerTrack === this.trackIdIsPlaying) {
      this.trackIdIsPlaying = null;
      DZ.player.pause();
    } else {
      this.trackIdIsPlaying = track.idDeezerTrack;
      DZ.player.playTracks([track.idDeezerTrack]);
    }
*/
  }

  @action
  sliderPlayClicked(e: any) {
    var slider = $(e.delegateTarget);
    var x = e.clientX - slider.offset().left;
    var xMax = slider.width();
    DZ.player.seek((x / xMax) * 100);
  }

  @observable trackIdIsPlaying: number;

  @observable activeTrackIsFavorite: boolean = false;

  @observable userId: string;

  @action
  toggleFavoriteTrack(idTrack: number) {
    const URL = WEB_API_HOST + "api/TrackFavorite";
    const data = { idTrack: idTrack, idUser: this.userId };
    this.activeTrackIsFavorite = !this.activeTrackIsFavorite;
    return axios.put(URL, data);
  }

  @observable userid: string;

  public secondsToTimeFormat(seconds: number): string {
    try {
      const ret = new Date(seconds * 1000).toISOString().substr(11, 8);
      return ret.startsWith("00:") ? ret.substr(3) : ret;
    } catch {
      if (!seconds) {
        return "";
      }
      return seconds.toString();
    }
  }

  /*
    @computed get activeTrackIndex(): number {
      if (!this.tracks) {
        return null;
      }
      return this.tracks.findIndex(((t) t === this.activeTrack));
    }
  */

  @action
  playerNext() {
    /*
    const index = this.activeTrackIndex + 1;

    this.playerChangeIndex(index);
    this.activeTrack = index;
*/
    debugger;
    DZ.player.next();
  }

  @action
  playerPrev() {
    // const index = this.activeTrackIndex - 1;
    // this.playerChangeIndex(index);
    DZ.player.prev();
  }

  @observable playerIsPlaying: boolean = false;

  /*
  @computed get allComposersAlbums(): Array<IAlbumComposer> {
    return new Array<IAlbumComposer>().concat(
      ...this.albums.map(m => m.composers)
    );
  }
*/

  /*
  @computed get groupsComposerRaw(): MethodMap<IAlbumComposer[]> {
    return this.allComposersAlbums.reduce(groupBy(t => t.idComposerMN), Map());
    //return _.groupBy<Array<IComposer>>(this.composers, (t) => {t.nacio}) as Array<IComposer>
  }
*/

  @computed get isGroupedByComposer(): Boolean {
    return this.groupByField === "composers";
  }

  /*
  @computed get groupsComposer(): Array<TGroupedMenuCount> {
    const grups = this.groupsComposerRaw;
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

  @observable activeGroupIdComposer: number = -1;
*/

  /**
   * Group By
   */

  // @observable albumsRaw: Array<IAlbum> = [];
  @observable groupByField: string = null;
  @action setGroupByField(groupField: string) {
    if (this.groupByField === groupField) {
      this.groupByField = null;
    } else {
      this.groupByField = groupField;
    }
  }

  @observable activeGroupFieldValue: string = "";

  @computed get groupsRaw(): MethodMap<IAlbum[]> {
    return this.albumsRaw.reduce(groupBy(t => t[this.groupByField]), Map());
    //return _.groupBy<Array<IComposer>>(this.composers, (t) => {t.nacio}) as Array<IComposer>
  }

  @computed get groups(): Array<TGroupedMenuCount> {
    const grups = this.groupsRaw;
    const keys = grups.keys();
    return <Array<TGroupedMenuCount>>keys
      .map<TGroupedMenuCount>((k: string, i: number) => {
        const ret: TGroupedMenuCount = <TGroupedMenuCount>{
          idMenu: i,
          countMenu: grups.get(k).length,
          nameMenu: k
        };
        return ret;
      })
      .sort((a, b) => {
        return b.countMenu - a.countMenu;
      });
  }

  @computed get groupsSorted(): Array<TGroupedMenuCount> {
    return this.groups.sort((a, b) => {
      return b.countMenu - a.countMenu;
    });
  }

  @computed get numColumsAlbums(): number {
    if (!this.groupByField) {
      return 4;
    }
    return 3;
  }

  @computed get albumTags(): Array<ILinkTag> {
    if (!this.responseAlbumsTracks) {
      return null;
    }
    const genres = [
      ...new Set(
        this.responseAlbumsTracks.AlbumWorks.map(item => item.workGenre)
      )
    ];
    const genresTag = genres.map(g => {
      return { text: g, linkTo: g, prompt: "genre" } as ILinkTag;
    });
    return [
      { prompt: "label", text: this.activeAlbum.label } as ILinkTag,
      ...genresTag
    ];
  }

  @action setDzSeek(value: number) {
    console.log(value);
    DZ.player.seek((value / this.activeTrackDuration) * 100);
  }
}

export default AlbumStore;
