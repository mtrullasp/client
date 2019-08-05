import * as React from "react";
import { PerformerStore } from "../../stores/PerformerStore";
import { History } from "history";
interface IState {
    indexHover: number;
}
interface IProps {
    performerStore?: PerformerStore;
    history?: History;
}
declare class PerformerRolsCollection extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    state: IState;
    render(): JSX.Element | null;
}
export default PerformerRolsCollection;
