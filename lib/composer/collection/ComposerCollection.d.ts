import * as React from "react";
import ComposerStore, { IComposer } from "../../stores/ComposerStore";
interface IState {
    indexHover: number;
}
interface IProps {
    composerStore?: ComposerStore;
    history?: any;
    onClick?: (composer: IComposer) => void;
}
declare class ComposerCollection extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    state: IState;
    render(): JSX.Element | null;
}
export default ComposerCollection;
