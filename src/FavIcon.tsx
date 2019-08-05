import * as React from "react";
import { Image } from "semantic-ui-react";
import { CSSProperties } from "react";
const fav = require("./assets/img/favicon.png");

interface IProps {
  style?: CSSProperties;
  onClick: () => void;
}
class FavIcon extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{ cursor: "pointer", ...(this.props.style || {}) }}
      >
        <Image src={fav} fluid />
      </div>
    );
  }
}

export default FavIcon;
