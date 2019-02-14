import * as React from "react";
import { Image } from "semantic-ui-react";

interface IProps {}
class FavIcon extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return <Image src="src/img/favicon.png" fluid />;
  }
}

export default FavIcon;
