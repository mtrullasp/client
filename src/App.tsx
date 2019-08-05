import * as React from "react";
import * as semanticUIReact from "semantic-ui-react";
import TitleBar from "./core/layout/TitleBar";
import { RouterStore } from "./core/stores/RouterStore";
import { inject } from "mobx-react";
import { History } from "history";
import {withRouter} from "react-router";

const { Grid } = semanticUIReact;

interface IProps {
  headerContent: JSX.Element;
  bodyContent: JSX.Element;
  routerStore?: RouterStore;
}
@inject("routerStore")
class App extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};
  render() {
    return (
      <Grid celled padded style={{ height: "100vh" }}>
        <Grid.Row style={{ height: "60px", position: "sticky" }}>
          <Grid.Column>{this.props.headerContent}</Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ height: "100%" }}>
          <Grid.Column stretched>{this.props.bodyContent}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
