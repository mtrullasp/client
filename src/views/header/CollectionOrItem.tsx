import * as React from "react";
import { Menu } from "semantic-ui-react";

interface IProps {
  onClick: () => void;
}
class CollectionOrItem extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};

  state = {};

  refs: {};

  render() {
    return (
      <Menu
        size="tiny" compact={true}
        items={["Collection"]}
        onItemClick={this.props.onClick}
      />
    );
  }
}

export default CollectionOrItem;
