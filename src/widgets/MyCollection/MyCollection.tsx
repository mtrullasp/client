import * as React from "react";
import { Grid } from "semantic-ui-react";

interface IProps {
  headerContent?: JSX.Element;
  asideLeftContent: JSX.Element;
  sectionContent: JSX.Element;
}
class MyCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    const xsLeft = !!this.props.asideLeftContent ? 2 : 0;
    const xsRight = !!this.props.asideLeftContent ? 14 : 16;
    return (
      <Grid columns={16} relaxed={"very"}>
        <Grid.Row columns={16}>
          <Grid.Column width={16} style={{ marginTop: 0 }}>
            {this.props.headerContent}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={16}>
          {!!xsLeft &&
            <Grid.Column width={xsLeft}>{this.props.asideLeftContent}</Grid.Column>
          }
          <Grid.Column width={xsRight} floated={"right"}>
            {this.props.sectionContent}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MyCollection;
