import { History } from "history";
export declare class RouterStore {
    constructor();
    setHistory(history: History): void;
    private history;
    menuIndex: number;
    activeRouterPath: string;
    go(url: string): void;
}
