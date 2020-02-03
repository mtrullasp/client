import * as React from "react";
import "../styles/elevation.css";
import { CSSProperties } from "react";
import "./elevation.scss";

interface IProps {
  elevation?: number;
  style?: CSSProperties;
}
class MyPaper extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {
    style: {width: "100%" }
  };

  render() {
    return (
      <div
        className={"elevation-" + this.props.elevation}
        style={{...this.props.style, width: "100%", padding: 0, margin: 0}}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MyPaper;
