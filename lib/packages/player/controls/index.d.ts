import * as React from "react";
import "../styles/style.css";
import { PlayerStore } from "../../../stores/PlayerStore";
interface ITrack {
    id: string;
}
interface IControls {
    playerStore?: PlayerStore;
    prev?: any;
    track?: ITrack;
}
declare class Controls extends React.Component<IControls> {
    constructor(props: IControls);
    progress: any;
    line: any;
    ball: any;
    state: {
        repeat: boolean;
        mouseDown: boolean;
    };
    setVolume: (event: any) => void;
    onMouseUp(event: any): void;
    onMouseDown(event: any): void;
    onMouseMove(event: any): void;
    onMouseLeave(): void;
    getVolPercent({ currentTarget, clientY }: {
        currentTarget: any;
        clientY: any;
    }): number;
    changeIsPlaying: () => void;
    changeTrack: () => void;
    rewind: () => void;
    render(): JSX.Element;
}
export default Controls;
