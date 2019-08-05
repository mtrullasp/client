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
    constructor();
    ciutats: Array<ICiutat>;
    paisos: Array<IPais>;
}
