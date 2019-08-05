import * as React from "react";
interface IPropsDzVolume {
    volume: number;
}
export default class DzVolume extends React.Component<IPropsDzVolume> {
    constructor(props: IPropsDzVolume);
    changeVolume(e: any): void;
    render(): JSX.Element;
}
export {};
