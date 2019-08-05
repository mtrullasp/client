import * as React from "react";
import { TGroupedMenuCount } from "../stores/ComposerStore";
interface IProps {
    data: Array<TGroupedMenuCount>;
    activeItem: number;
    onChange: (idMenu: number) => void;
}
declare class GroupedMenuCount extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: {};
    render(): JSX.Element | null;
}
export default GroupedMenuCount;
