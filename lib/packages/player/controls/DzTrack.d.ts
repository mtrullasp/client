import * as React from "react";
interface IPropsDTrack {
    track: any;
}
export default class DzTrack extends React.Component<IPropsDTrack, {}> {
    constructor(props: IPropsDTrack);
    state: {
        btnText: string;
        isPlaying: boolean;
    };
    render(): JSX.Element;
}
export {};
