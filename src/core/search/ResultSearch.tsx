import * as React from "react";
import { inject, observer } from "mobx-react";
import SearchStore from "../stores/SearchStore";
import {
  List,
  Image,
  Table,
  Search,
  SearchProps,
  Grid,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  ROUTE_ALBUM_TRACKS,
  ROUTE_ALBUMS_BY_ARTIST,
  ROUTE_ALBUMS_COLLECTION,
  ROUTE_PERFORMER,
  ROUTE_PERFORMER
} from "../../util/constants";
import { RouterStore } from "../stores/RouterStore";
import { style } from "typestyle";
import AlbumStore from "../stores/AlbumStore";
import MaxHeightContainer from "../../widgets/MaxHeightContainer";
import LazyLoad from "react-lazy-load";
import { PerformerStore } from "../stores/PerformerStore";

interface IProps {
  routerStore?: RouterStore;
  searchStore?: SearchStore;
  albumStore?: AlbumStore;
  performerStore?: PerformerStore;
}
@observer
@inject("searchStore")
@inject("routerStore")
@inject("albumStore")
@inject("performerStore")
class ResultSearch extends React.PureComponent<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    const tableItems = this.props.searchStore.resultsOrd
      .filter(f => true || !!f.itemImage)
      .map((item, i) => {
        return (
          <Table.Row
            style={{ paddingRight: 20, cursor: "pointer" }}
            onClick={() => {
              this.props.albumStore.activeArtistNameMN = item.itemName;
              if (item.itemType === "Performer") {
                this.props.performerStore
                  .setActivePerformer(item.itemCode.toString())
                  .then(() => {
                    this.props.routerStore.go(
                      ROUTE_PERFORMER.replace(":idMN", item.itemCode)
                    );
                  });
              } else if (item.itemType === "Album") {
                this.props.albumStore.setActiveAlbumById(Number(item.itemCode));
                this.props.routerStore.go(
                  ROUTE_ALBUM_TRACKS.replace(":idAlbum", item.itemCode)
                );
              }
            }}
          >
            <Table.Cell>
              {" "}
              {item.itemImage && <Image src={item.itemImage} size={"tiny"} />}
            </Table.Cell>
            <Table.Cell>
              <h4>{item.itemType}</h4>
            </Table.Cell>
            <Table.Cell>
              <h4 style={{ fontWeight: 400 }}>{item.itemName}</h4>
            </Table.Cell>
          </Table.Row>
        );
      });

    return (
      !!tableItems.length && (
        <LazyLoad>
          <MaxHeightContainer style={{ overflowY: "auto" }}>
            <Segment
              floated={"right"}
              style={{ width: "40%" }}
              compact
              padded={false}
            >
              <Table sortable={true} basic={"very"} selectable={true}>
                <Table.Body>{tableItems}</Table.Body>
              </Table>
            </Segment>
          </MaxHeightContainer>
        </LazyLoad>
      )
    );
    /*
    return (
      <List relaxed>
        {this.props.searchStore.results.map(item => {
          return (
            <List.Item>
              <Link
                className={"tresdtext"}
                to={ROUTE_PERFORMER.replace(":idMN", item.itemCode)}
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
*/
  }
}

export default ResultSearch;
