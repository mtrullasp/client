import * as React from "react";
import { Grid, List, Search, SearchProps } from "semantic-ui-react";
import ComposerStore from "../../../core/stores/ComposerStore";
import { inject, observer } from "mobx-react";
import {
  ROUTE_ALBUMS_COLLECTION,
  ROUTE_COMPOSERS_COLLECTION
} from "../../../util/constants";
import { withRouter } from "react-router";
// import { Store } from "@material-ui/icons";
import AlbumStore from "../../../core/stores/AlbumStore";
import SearchInput from "../../../core/search/SearchInput";
import { style } from "typestyle";
import LazyLoad from "react-lazy-load";

interface IProps {
  composerStore?: ComposerStore;
  albumStore?: AlbumStore;
  history?: any;
}
@inject("composerStore")
@inject("albumStore")
@observer
class ComposerWorksCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};

  render() {
    debugger;
    const items = this.props.composerStore.activeComposerWorks.map((cw, i) => {
      return (
        <List.Item key={i}>
          <List.Content>
            <div
              style={{
                cursor: "pointer",
                fontSize: 14,
                margin: 0,
                padding: 10,
                width: "100%"
              }}
              onClick={() => {
                this.props.albumStore.searchByWork(cw.idWork);
                this.props.history.push(ROUTE_ALBUMS_COLLECTION);
              }}
            >
              at{" "}
              <span style={{ fontWeight: 900 }}>
                {cw.atAgeOf < 1 ? "?" : cw.atAgeOf}
              </span>
              {" (" + cw.composedDate + "): "}
              <span style={{ fontSize: 15 }}>{cw.nameWork} </span>
              <span style={{ fontSize: 15, fontWeight: 900 }}>
                ({cw.performancesCount})
              </span>
            </div>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <div>
        <Search
          showNoResults={false}
          input={{
            className: style({ borderColor: "black" }),
            fluid: true,
            placeholder: "Filter works"
          }}
          minCharacters={2}
          size={"small"}
          category
          onSearchChange={(event: React.MouseEvent<any>, data: SearchProps) => {
            this.props.composerStore.worksFilter = data.value;
          }}
          {...this.props}
        />
        <List size="medium" relaxed={false}>
          {items}
        </List>
      </div>
    );
  }
}

export default withRouter(ComposerWorksCollection as any);
