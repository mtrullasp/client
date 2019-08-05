import * as React from "react";
import { inject, observer } from "mobx-react";
import SearchStore from "../stores/SearchStore";
import { List, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  ROUTE_ALBUM_TRACKS,
  ROUTE_ALBUMS_BY_ARTIST,
  ROUTE_PERFORMER_ALBUMS
} from "../../util/constants";

interface IProps {
  searchStore?: SearchStore;
}
@observer
@inject("searchStore")
class ResultSearch extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <List relaxed>
        {this.props.searchStore.results.map(item => {
          return (
            <List.Item>
              <Link
                className={"tresdtext"}
                to={ROUTE_PERFORMER_ALBUMS.replace(":idMN", item.itemCode)}
              >
                <Image src={item.itemImage} size={"tiny"} />
                <List.Content>
                  <List.Header as="a">{item.itemType}</List.Header>
                </List.Content>
                <List.Content>
                  <List.Header as="a">{item.itemName}</List.Header>
                </List.Content>
              </Link>
            </List.Item>
          );
        })}
      </List>
    );
  }
}

export default ResultSearch;
