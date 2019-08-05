import * as React from "react";
import AlbumStore from "../../stores/AlbumStore";
import { PlayerStore } from "../../stores/PlayerStore";
interface IProps {
    albumStore?: AlbumStore;
    playerStore?: PlayerStore;
}
declare class AlbumTracksItem extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: {};
    render(): string | JSX.Element;
}
export default AlbumTracksItem;
