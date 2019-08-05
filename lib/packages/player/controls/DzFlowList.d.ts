import * as React from "react";
import { PlayerStore } from "../../../stores/PlayerStore";
import AlbumStore from "../../../stores/AlbumStore";
interface IPropsDzFlowList {
    playerStore?: PlayerStore;
    albumStore?: AlbumStore;
}
export default class DzFlowList extends React.Component<IPropsDzFlowList> {
    constructor(props: IPropsDzFlowList);
    state: {
        playlist: Array<any>;
        track: any;
    };
    componentDidMount(): void;
    loadMoreTracks(): void;
    playTracks(track: any): void;
    render(): JSX.Element | null;
}
export {};
