import * as React from "react";
import * as semanticUIReact from "semantic-ui-react";

const { Grid } = semanticUIReact;

interface IProps {
  headerContent: JSX.Element;
  bodyContent: JSX.Element;
}
class Layout extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};
h
  render() {
    return (
      <Grid celled padded style={{ height: "100vh" }}>
        <Grid.Row style={{ height: "60px"}}>
          <Grid.Column>
            {this.props.headerContent}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: "100%"}}>
          <Grid.Column stretched>
            {this.props.bodyContent}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Layout;