import * as React from "react";
import * as ReactDOM from "react-dom";
import jQuery from "jquery";
// import { ScrollBox, ScrollAxes, FastTrack } from "react-scroll-box";
import { MARGIN_HORITZONTAL } from "../util/constants";
import { CSSProperties } from "react";
// import Scrollbars from "react-custom-scrollbars";
interface IProps {
  style?: CSSProperties;
  footerHeight?: number;
}
class MaxHeightContainer extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  componentDidMount(): void {
    const $el = jQuery(ReactDOM.findDOMNode(this));
    const offsetTop = $el.offset().top;
    $el.css(
      "height",
      jQuery(window).height() - offsetTop - (this.props.footerHeight || 0) + "px"
    );
  }

  render() {
    return <div style={this.props.style || {}}>{this.props.children}</div>;
  }
}

export default MaxHeightContainer;
