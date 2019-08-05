import * as React from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { TGroupedMenuCount } from "../stores/ComposerStore";
import { style } from "typestyle";
import { ACCENT_COLOR, SECOND_ACCENT_COLOR } from "../../util/constants";
import MaxHeightContainer from "../../widgets/MaxHeightContainer";

interface IProps {
  data: Array<TGroupedMenuCount>;
  activeItem: string;
  onChange: (idMenu: string) => void;
}

class GroupedMenuCount extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};

  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <MaxHeightContainer
        style={{
          overflowY: "auto",
          width: "max-content",
          overflowX: "hidden",
          paddingRight: 10
        }}
      >
        <Menu size="small" vertical borderless={true}>
          {!!this.props.data &&
            this.props.data.map(d => {
              return (
                <Menu.Item
                  className={style({ backgroundColor: "transparent" })}
                  name={d.nameMenu}
                  active={this.props.activeItem === d.nameMenu}
                  onClick={() => {
                    this.props.onChange(d.nameMenu);
                  }}
                >
                  <Label style={{ backgroundColor: ACCENT_COLOR }}>
                    {d.countMenu}
                  </Label>
                  {d.nameMenu}
                </Menu.Item>
              );
            })}
        </Menu>
      </MaxHeightContainer>
    );
  }
}

export default GroupedMenuCount;
