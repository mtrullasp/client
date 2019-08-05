import * as React from "react";
import "./css/style.css";
import { CSSProperties } from "react";
import { MouseEventHandler } from "react";

interface IProps {
  text: string;
  buttonHeight: number;
  buttonPadding?: number;
  style?: CSSProperties;
  onClick: MouseEventHandler;
  top: number;
  left: number;
}
class Button3d extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div
        className="container"
        style={{
          position: "absolute",
          top: this.props.top,
          left: this.props.left,
          height: "unset",
          lineHeight: "0px",
          verticalAlign: "middle",
          ...this.props.style
        }}
        onClick={this.props.onClick}
      >
        <a
          className="button"
          style={{
            height: this.props.buttonHeight,
            fontSize: 12,
            padding: this.props.buttonPadding || 15
          }}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default Button3d;
