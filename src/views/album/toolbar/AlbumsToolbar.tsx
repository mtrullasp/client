import * as React from "react";
import { Divider, Menu, MenuItemProps, SearchProps } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import ComposerStore from "../../../core/stores/ComposerStore";
import { style } from "typestyle";
import Search from "semantic-ui-react/dist/commonjs/modules/Search";
import { History } from "history";
import { ROUTE_COMPOSERS_COLLECTION_BY_NACIO } from "../../../util/constants";
import { RouteComponentProps, withRouter } from "react-router";
import { Store } from "@material-ui/icons";
import AlbumStore from "../../../core/stores/AlbumStore";

interface IProps extends RouteComponentProps<any> {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class AlbumsToolbar extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    // const activeOrderKey = this.props.composerStore.orderByKey;
    // const activeOrderDir = this.props.composerStore.orderByDir;
    return (
      <div>
        <Menu size="tiny" compact={true} color={"black"}>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item
            name="Date release"
            key={"releaseDate"}
            active={this.props.albumStore.orderByKey === "releaseDate"}
            onClick={() => this.props.albumStore.setOrderByKey("releaseDate")}
          />
          <Menu.Item
            name="Shuffle"
            key={"shuffle"}
            onClick={() => this.props.albumStore.shuffle()}
          />
        </Menu>
        <span style={{ marginRight: 20 }} />
        <Menu size="tiny" compact={true}>
          <Menu.Item header>Group By</Menu.Item>
          <Menu.Item
            name="Composer"
            key={"composer"}
            onClick={() => {
              debugger ;this.props.albumStore.setGroupByField("composers")
              //this.props.history.push(ROUTE_COMPOSERS_COLLECTION_BY_NACIO);
            }}
            active={false}
          />
          <Menu.Item
            name="Performer"
            key={"perforrmer"}
            onClick={() => {
              this.props.history.push(ROUTE_COMPOSERS_COLLECTION_BY_NACIO);
            }}
            active={false}
          />
          <Menu.Item
            name="Instrument"
            key={"instrument"}
            onClick={() => {
              this.props.albumStore.setGroupByField("instrument");
            }}
            active={false}
          />
          <Menu.Item
            name="Label"
            key={"label"}
            onClick={() => {
              this.props.albumStore.setGroupByField("label");
            }}
            active={false}
          />
        </Menu>
        <div style={{ display: "inline-flex", marginRight: 10 }}>
          <Search
            showNoResults={false}
            input={{
              className: style({
                borderColor: "black",
                display: "inline-flex",
                width: 200,
                marginLeft: 20
              }),
              fluid: true,
              placeholder: "Filter Albums"
            }}
            minCharacters={2}
            size={"small"}
            category
            onSearchChange={(
              event: React.MouseEvent<any>,
              data: SearchProps
            ) => {
              // this.props.composerStore.composerNameFilter = data.value;
              // this.props.composerStore.worksFilter = data.value;
            }}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default withRouter<IProps>(AlbumsToolbar);
