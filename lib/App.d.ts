import * as React from "react";
import { RouterStore } from "./stores/RouterStore";
interface IProps {
    headerContent: JSX.Element;
    bodyContent: JSX.Element;
    routerStore?: RouterStore;
}
declare class App extends React.Component<IProps, {}> {
    constructor(props: IProps, context: any);
    static defaultProps: {};
    render(): JSX.Element;
}
export default App;
