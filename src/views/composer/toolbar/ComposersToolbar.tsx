import * as React from "react";
import {
  Container,
  Divider,
  Menu,
  MenuItemProps,
  SearchProps,
  Segment,
  SegmentGroup
} from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import ComposerStore from "../../../core/stores/ComposerStore";
import { style } from "typestyle";
import Search from "semantic-ui-react/dist/commonjs/modules/Search";
import { History } from "history";
import {
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO,
  TOOLBAR_COLOR
} from "../../../util/constants";
import { withRouter } from "react-router";
import Button3d from "../../../widgets/3dbutton/Button3d";
import { CSSProperties } from "react";
import paleta from "../../../styles/paleta";
import { MenuDivider } from "@blueprintjs/core";

interface IProps {
  composerStore?: ComposerStore;
  history?: History;
}
@inject("composerStore")
@observer
class ComposersToolbar extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    const activeOrderKey = this.props.composerStore.orderByKey;
    const activeOrderDir = this.props.composerStore.orderByDir;
    const cs = this.props.composerStore;
    const iconaSort = (key: string): string => {
      if (!key || !key.length) {
        return "";
      }
      if (activeOrderKey === key) {
        if (this.props.composerStore.orderByDir === 1) {
          return "sort descending";
        } else if (this.props.composerStore.orderByDir === -1) {
          return "sort ascending";
        }
      }
      return "";
    };
    const borderRadius = 0;
    const itemStyle: CSSProperties = { backgroundColor: "white" };
    const styleMenu: CSSProperties = {
      border: paleta.color100 + " solid 1px",
      backgroundColor: "#F7F5F4"
    };
    return (
      <div>
        <Menu compact size={"tiny"} text {/*style={{ borderRadius: borderRadius }}*/}>
          <Menu.Item header {/*style={{ borderRadius: borderRadius, ...itemStyle }}*/}>
            Sort By
          </Menu.Item>
          <Menu.Item
            name="Ranking"
            icon={iconaSort("ranking")}
            key={"ranking"}
            onClick={() => this.props.composerStore.setOrderBy("ranking")}
            active={activeOrderKey === "ranking"}
          />
          <Menu.Item
            name="Birth Date"
            icon={iconaSort("AnyoNeix")}
            key={"AnyoNeix"}
            onClick={() => this.props.composerStore.setOrderBy("AnyoNeix")}
            active={activeOrderKey === "AnyoNeix"}
            /*style={itemStyle}*/
          />
          <Menu.Item
            name="Shuffle"
            key={"shuffle"}
            onClick={() => this.props.composerStore.shuffle()}
/*
            style={{
              borderBottomRightRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              opacity: 1
            }}
*/
          />
        </Menu>
        <Menu
          style={{ marginLeft: 40, opacity: 1 }}
          size="tiny"
          compact={true}
          text
        >
          <Menu.Item header style={{ borderRadius: 20 }}>
            Group By
          </Menu.Item>
          <Menu.Item
/*
            style={{
              borderBottomRightRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              opacity: 1
            }}
*/
            name="Nation"
            key={"nation"}
            onClick={() => {
              this.props.composerStore.isGroupedByNation = !this.props
                .composerStore.isGroupedByNation;
            }}
            active={false}
          />
        </Menu>
        <div
          style={{
            display: "inline-flex",
            marginRight: 10
          }}
        >
          <Search
            showNoResults={false}
            input={{
              className: style({
                borderRadius: 0,
                borderColor: "black",
                display: "inline-flex",
                width: 200,
                marginLeft: 20
              }),
              fluid: true,
              placeholder: "Filter Composers",
              backgroundColor: "white"
            }}
            minCharacters={2}
            size={"small"}
            category
            onSearchChange={(
              event: React.MouseEvent<any>,
              data: SearchProps
            ) => {
              this.props.composerStore.composerNameFilter = data.value;
              // this.props.composerStore.worksFilter = data.value;
            }}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ComposersToolbar as any);
