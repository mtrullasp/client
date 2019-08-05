import * as React from "react";
import { SECOND_ACCENT_COLOR } from "../../util/constants";
import { RouterStore } from "../stores/RouterStore";
import { inject, observer } from "mobx-react";
import { HORITZONTAL_MARGIN } from "../../Header";

interface IProps {
  content: JSX.Element;
}
class TitleBar extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div
        style={{
          fontSize: 20,
          color: SECOND_ACCENT_COLOR
        }}
      >
        {this.props.content}
      </div>
    );
  }
}

export default TitleBar;
