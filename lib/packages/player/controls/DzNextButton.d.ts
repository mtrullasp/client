import * as React from "react";
import { PlayerStore } from "../../../stores/PlayerStore";
interface IProps {
    playerStore?: PlayerStore;
}
export default class DzNextButton extends React.Component<IProps> {
    constructor(props: Readonly<IProps>);
    render(): JSX.Element;
}
export {};
