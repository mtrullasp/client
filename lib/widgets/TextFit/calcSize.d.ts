export interface OptionalOptions {
    font?: string;
    fontSize?: string;
    fontWeight?: string;
    width?: string;
    wordBreak?: string;
}
export interface Size {
    width: number;
    height: number;
}
declare const _default: (text: string, options?: OptionalOptions) => Size;
export default _default;
