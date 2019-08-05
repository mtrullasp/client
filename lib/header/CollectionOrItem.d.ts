import * as React from "react";
interface IProps {
    onClick: () => void;
}
declare class CollectionOrItem extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: {};
    state: {};
    refs: {};
    render(): JSX.Element;
}
export default CollectionOrItem;
