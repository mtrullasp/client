import * as React from "react";
import { Button, Menu, MenuItemProps } from "semantic-ui-react";
import Button3d from "../../widgets/3dbutton/Button3d";
import { MouseEventHandler } from "react";

interface IProps {
  activeIndex: number;
  onItemClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: MenuItemProps
  ) => void;
  onClick?: MouseEventHandler;
}
class ComposersWorksPerformers extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};

  state = {};

  refs: {};

  /*
  render() {
    return (
      <Menu
        size="tiny"
        compact={true}
        activeIndex={this.props.activeIndex}
        items={["Composers", "Works", "Performers"]}
        onItemClick={this.props.onItemClick}
      />
    );
  }
*/

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default ComposersWorksPerformers;
