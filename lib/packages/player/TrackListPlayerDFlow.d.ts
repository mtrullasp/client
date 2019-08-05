import * as React from "react";
import "./styles/TrackListPlayerDFlow.less";
import "./styles/TrackListPlayerDFlow.overrides.less";
import { PlayerStore } from "../../stores/PlayerStore";
import { RouterStore } from "../../stores/RouterStore";
import AlbumStore from "../../stores/AlbumStore";
interface IProps {
    subTitle?: string;
    playerStore?: PlayerStore;
    routerStore?: RouterStore;
}
declare class TrackListPlayerDFlow extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    state: {
        user: string;
    };
    componentDidMount(): void;
    render(): JSX.Element;
    renderApp(): JSX.Element;
}
interface IFavBtnProps {
    playerStore?: PlayerStore;
    routerStore?: RouterStore;
    albumStore?: AlbumStore;
}
export declare class FavBtn extends React.Component<IFavBtnProps> {
    render(): JSX.Element;
}
interface IVersionsProps {
    playerStore?: PlayerStore;
    routerStore?: RouterStore;
    albumStore?: AlbumStore;
}
export declare class VersionsBtn extends React.Component<IVersionsProps> {
    render(): false | JSX.Element | null;
}
export interface IInfoWorkSuperior {
    playerStore?: PlayerStore;
    albumStore?: AlbumStore;
}
export declare class InfoWorkSuperior extends React.Component<IInfoWorkSuperior> {
    render(): JSX.Element | null;
}
export interface IInfoWorkInferior {
    playerStore?: PlayerStore;
    albumStore?: AlbumStore;
}
export declare class InfoWorkInferior extends React.Component<IInfoWorkInferior> {
    render(): JSX.Element | null;
}
interface IPropsDzPlayBtn {
}
export declare class DzPlayBtn extends React.Component<IPropsDzPlayBtn> {
    constructor(props: IPropsDzPlayBtn);
    state: {
        isPlaying: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default TrackListPlayerDFlow;
