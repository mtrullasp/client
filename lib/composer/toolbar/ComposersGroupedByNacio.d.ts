import * as React from "react";
import ComposerStore from "../../stores/ComposerStore";
interface IProps {
    composerStore?: ComposerStore;
}
declare class ComposersGroupedByNacio extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    render(): JSX.Element;
}
export default ComposersGroupedByNacio;
