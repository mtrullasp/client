import * as React from "react";
import { MenuItemProps } from "semantic-ui-react";
interface IProps {
    activeIndex: number;
    onItemClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void;
}
declare class ComposersWorksPerformers extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: {};
    state: {};
    refs: {};
    render(): JSX.Element;
}
export default ComposersWorksPerformers;
