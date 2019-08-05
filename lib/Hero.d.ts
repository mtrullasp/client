import * as React from "react";
import { History } from "history";
interface IState {
    show: boolean;
}
interface IProps {
    history?: History;
}
declare class Hero extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    state: IState;
    render(): JSX.Element;
}
export default Hero;
