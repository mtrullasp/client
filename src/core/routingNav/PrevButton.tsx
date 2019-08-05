import * as React from "react";
import "./PrevButton.css";

interface IProps {}
class PrevButton extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div id="DIV_1">
        <div id="DIV_2" />
        <svg id="svg_3">
          <rect id="rect_4" />
          <rect id="rect_5" />
          <rect id="rect_6" />
          <circle id="circle_7" />
        </svg>
      </div>
    );
  }
}

export default PrevButton;
