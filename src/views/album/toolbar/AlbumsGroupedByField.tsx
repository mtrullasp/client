import * as React from "react";
import GroupedMenuCount from "../../../core/layout/GroupedMenuCount";
import { observer, inject } from "mobx-react";
import AlbumStore from "../../../core/stores/AlbumStore";

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class AlbumsGroupedByField extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      !!this.props.albumStore.groupByField && (
        <GroupedMenuCount
          data={this.props.albumStore.groups}
          activeItem={this.props.albumStore.activeGroupFieldValue}
          onChange={idMenu => {
            this.props.albumStore.activeGroupFieldValue = idMenu;
          }}
        />
      )
    );
  }
}

export default AlbumsGroupedByField;
