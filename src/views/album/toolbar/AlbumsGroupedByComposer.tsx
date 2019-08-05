import * as React from "react";
import GroupedMenuCount from "../../../core/layout/GroupedMenuCount";
import ComposerStore from "../../../core/stores/ComposerStore";
import { observer, inject } from "mobx-react";
import AlbumStore from "../../../core/stores/AlbumStore";

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class AlbumsGroupedByComposer extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      this.props.albumStore.isGroupedByComposer && (
        <GroupedMenuCount
          data={this.props.albumStore.groupsComposer}
          activeItem={this.props.albumStore.activeGroupIdComposer}
          onChange={idMenu => {
            this.props.albumStore.activeGroupIdComposer = idMenu;
          }}
        />
      )
    );
  }
}

export default AlbumsGroupedByComposer;
