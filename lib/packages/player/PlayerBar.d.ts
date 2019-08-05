import * as React from "react";
interface IProps {
    showNext?: boolean;
    showPrevious?: boolean;
}
declare class PlayerBar extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: {
        showPrevious: boolean;
        showNext: boolean;
    };
    render(): JSX.Element;
}
export default PlayerBar;
