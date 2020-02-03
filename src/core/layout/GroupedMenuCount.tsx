import * as React from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { TGroupedMenuCount } from "../stores/ComposerStore";
import { style } from "typestyle";
import { ACCENT_COLOR, PSEUDO_BLACK, TRUE_ACCENT_COLOR } from "../../util/constants";
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
      /*
        style={{
          border: "none",
          overflowY: "auto",
          width: "max-content",
          overflowX: "hidden",
          paddingRight: 10,
          backgroundColor: "transparent"
        }}
*/
      >
        <Menu
          vertical
          size="small"
          style={{ border: "none", backgroundColor: "transparent" }}
          borderless={true}
          /*
          size="small"
          vertical
*/
        >
          {!!this.props.data &&
            this.props.data.map(d => {
              return (
                <Menu.Item
                  name={d.nameMenu}
                  style={{backgroundColor: "transparent"}}
                  active={this.props.activeItem === d.nameMenu}
                  onClick={() => {
                    this.props.onChange(d.nameMenu);
                  }}
                >
                  <Label
                    size={"tiny"}
                    style={{borderRadius: 40, backgroundColor: PSEUDO_BLACK}}
                  >
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
