/**
 * ALTERNATIVESS:
 *
 * https://github.com/retrofuturejosh/react-modular-audio-player
 *
 * https://codepen.io/maskit_jr/pen/YNWGqP
 *
 * Llista de molts Audio Players:
 * https://freefrontend.com/css-music-players/
 *
 */
import * as React from "react";
import "./styles/style.css";
import "./styles/TrackListPlayerDFlow.less";
import { PlayerStore } from "../../stores/PlayerStore";
interface IProps {
    playerStore?: PlayerStore;
}
declare class Player extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    state: {
        pdfNumPage: number;
    };
    render(): JSX.Element;
}
export default Player;
