import * as React from "react";
import { PlayerStore } from "../../../stores/PlayerStore";
import AlbumStore from "../../../stores/AlbumStore";
interface IProps {
    playerStore?: PlayerStore;
    albumStore?: AlbumStore;
}
declare class Tracks extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    state: {
        trackHover: number;
    };
    render(): JSX.Element | null;
}
export default Tracks;
