import GeoStore from "./GeoStore";
import { MethodMap } from "declarative-js";
import { RouterStore } from "./RouterStore";
export interface IComposer {
    IdComposer: number;
    idMN: string;
    nameMN: string;
    idMB?: number;
    AnyoNeix: number;
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
}
export declare class TGroupedMenuCount {
    idMenu: number;
    nameMenu: string;
    countMenu: number;
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
    idMC: string;
    nomMC: string;
    atAgeOf: number;
    composedDate: string;
    performancesCount: number;
}
declare class ComposerStore {
    constructor(geoStore: GeoStore, routerStore: RouterStore);
    private geoStore;
    private routerStore;
    activeIndex: number;
    getLastNameComposer(sortName: string): string;
    readonly lastNameComposer: string;
    getFisrtNameComposer(sortName: string): string;
    readonly firstNameComposer: string;
    readonly activeComposerImgUrl: string;
    getComposerPicture(idComposer: number): string;
    readonly activeComposerInfoNeixDefu: string;
    composerNameFilter: string;
    composersRaw: Array<IComposer>;
    readonly composers: Array<IComposer>;
    readonly activeComposer: IComposer;
    readonly isNextable: boolean;
    goNextComposer(): void;
    readonly isPreviousable: boolean;
    goPreviousComposer(): void;
    shuffle(): void;
    static doShuffle(array: Array<any>): any[];
    activeComposerQuotes: Array<IComposerQuotes>;
    worksFilter: string;
    activeComposerWorksWebApi: Array<IComposerWorks>;
    readonly activeComposerWorks: Array<IComposerWorks>;
    orderByKey: string;
    orderByDir: 1 | -1;
    setOrderBy(key: string): void;
    readonly groupsNacioRaw: MethodMap<IComposer[]>;
    readonly groupsNacio: Array<TGroupedMenuCount>;
    activeGroupIdNacio: number;
    readonly isGroupedByNation: boolean;
}
export default ComposerStore;
