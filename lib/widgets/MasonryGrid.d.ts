/**
 * AQUEST ÉS EL BO! TODO
 * https://github.com/drcmda/mauerwerk
 */
import * as React from "react";
import { CSSProperties } from "react";
import ComposerStore from "../stores/ComposerStore";
interface IProps {
    items: ((width: number, height: number) => Array<JSX.Element>) | Array<any>;
    style?: CSSProperties;
    numColumns: number;
    gutter?: number;
    factorY?: number;
    gridEngine?: string;
    onClickThumbnail?: (item: Object) => void;
    stiffness?: number;
    damping?: number;
    composerStore: ComposerStore;
}
declare class MasonryGrid extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export default MasonryGrid;
