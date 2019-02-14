import * as React from "react";
import { CSSProperties } from "react";

interface IProps {
  style?: CSSProperties;
  className?: string;
  onClick?: (e: any) => void;
}
class DivInline extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps: Partial<IProps> = {
    style: {},
    className: "",
    onClick: null
  };

  render() {
    return (
      <div
        style={{ display: "inline-block", ...this.props.style }}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DivInline;
