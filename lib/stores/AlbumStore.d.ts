import { PerformerStore } from "./PerformerStore";
export interface IKlassikRank {
    albumName: string;
    coverBig: string;
    duration: number;
    idTrack: number;
    mainArtists: string;
}
export interface IAlbum {
    idMW: string;
    idDeezer: number;
    urlCover: string;
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
export interface IPerformanceMQ {
    idMQ: string;
    nameMQ: string;
    idMW: string;
    labelName: string;
    labelCat: string;
    idMC: string;
    urlSource: string;
    performanceMQitems: Array<IPerformanceMQItem>;
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
export declare class TDeezerTrack {
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
declare class AlbumStore {
    constructor(performeStore: PerformerStore);
    private source;
    searchByText(text: string): void;
    readonly urlAlbumsByWork: string;
    activeMCWorks: string;
    searchByWork(idMC: string): void;
    setWoroksFets(fets: boolean): void;
    worksFets: boolean;
    readonly activeAlbumMWid: string;
    setActiveAlbumId(idMW: string): void;
    readonly activeAlbum: IAlbum;
    readonly activeAlbumMWdeezerLink: string;
    albums: Array<IAlbum>;
    albumDetailWebApi: IAlbumInfo;
    readonly albumTracks: IAlbumInfo;
    readonly isNextable: boolean;
    goNext(): void;
    readonly isPreviousable: boolean;
    goPrevious(): void;
    activeIndex: number;
    shuffle(): void;
    klassikRankWebApi: Array<IKlassikRank>;
    getKlassikRank(idMC: string, idMCord: number): void;
}
export default AlbumStore;
