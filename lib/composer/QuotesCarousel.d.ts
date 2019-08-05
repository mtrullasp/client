import * as React from "react";
import ComposerStore from "../stores/ComposerStore";
interface IState {
    selectedIndex: number;
}
interface IProps {
    composerStore?: ComposerStore;
}
declare class QuotesCarousel extends React.Component<IProps, IState> {
    constructor(props: IProps, context: any);
    static defaultProps: {};
    state: IState;
    handleChangeIndex: (index: number) => void;
    render(): JSX.Element;
}
export default QuotesCarousel;
