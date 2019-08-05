import * as React from "react";
import { CSSProperties } from "react";
interface IProps {
    style?: CSSProperties;
    footerHeight?: number;
}
declare class MaxHeightContainer extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default MaxHeightContainer;
