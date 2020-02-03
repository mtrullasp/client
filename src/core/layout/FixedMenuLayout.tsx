import * as React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { MARGIN_HORITZONTAL } from "../../util/constants";

class FixedMenuLayout extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div style={{ minHeight: 50 }}>{this.props.headerContent}</div>
        <div
          style={{
            position: "relative",
            marginRight: 0, // SCROLL
            marginLeft: MARGIN_HORITZONTAL
          }}
        >
          {this.props.bodyContent}
        </div>
      </div>
    );
  }
}

interface IProps {
  headerContent: JSX.Element;
  bodyContent: JSX.Element;
}

export default FixedMenuLayout;
