import * as React from "react";
import GroupedMenuCount from "../../../core/layout/GroupedMenuCount";
import ComposerStore from "../../../core/stores/ComposerStore";
import { observer, inject } from "mobx-react";

interface IProps {
  composerStore?: ComposerStore;
}
@inject("composerStore")
@observer
class ComposersGroupedByNacio extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      this.props.composerStore.isGroupedByNation && (
        <GroupedMenuCount
          data={this.props.composerStore.groupsNacioSorted}
          activeItem={this.props.composerStore.activeGroupIdNacio}
          onChange={idMenu => {
            this.props.composerStore.activeGroupIdNacio = idMenu;
          }}
        />
      )
    );
  }
}

export default ComposersGroupedByNacio;
