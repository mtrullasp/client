import * as React from "react";
import { CSSProperties } from "react";
interface IProps {
    style?: CSSProperties;
    className?: string;
    onClick?: (e: any) => void;
}
declare class DivInline extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export default DivInline;
