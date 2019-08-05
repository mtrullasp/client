declare class Group<T> {
    key: string;
    members: T[];
    constructor(key: string);
}
declare global {
    interface Array<T> {
        groupBy<T>(func: (x: T) => string): Group<T>[];
    }
}
export {};
