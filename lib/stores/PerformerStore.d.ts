export interface IPerformerRols {
    IdRol: number;
    NameRol: string;
    UrlImage: string;
    ArtistsCount: number;
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
    urlCover: string;
}
export declare class PerformerStore {
    constructor();
    performersRaw: Array<IPerformer>;
    performerRolsRaw: Array<IPerformerRols>;
    performerAlbumsRaw: Array<IPerformerAlbum>;
    activePerformerIdRol: number;
    activePerformerId: string;
}
