import * as React from "react";
import MasonryGrid from "../../../widgets/MasonryGrid/MasonryGrid";
import {
  COMPOSER_NUMBER_COLS,
  HEADER_HEIGHT,
  MARGIN_HORITZONTAL,
  ROUTE_ALBUM_TRACKS,
  ROUTE_ALBUMS_COLLECTION
} from "../../../util/constants";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import LazyLoad from "react-lazy-load";
import { match, withRouter } from "react-router";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import "img-2";
import ComposersToolbar from "../../composer/toolbar/ComposersToolbar";
import TitleBar from "../../../core/layout/TitleBar";
import { RouterStore } from "../../../core/stores/RouterStore";
import AlbumsToolbar from "../toolbar/AlbumsToolbar";
import { HORITZONTAL_MARGIN } from "../../../Header";
import MyCollection from "../../../widgets/MyCollection/MyCollection";
import { Container, Grid, Image } from "semantic-ui-react";
import "../../../styles/elevation.css";
import CollectionCounter from "../../../core/collections/CollectionCounter";
import AlbumsGroupedByField from "../toolbar/AlbumsGroupedByField";
import MyPaper from "../../../widgets/MyPaper";
import { LazyImage } from "react-lazy-images";
import ScrollBar from "react-custom-scrollbars";
import DivInline from "../../../widgets/DivInline.";

const FACTOR_Y = 1.1;
const ALBUMS_NUMBER_COLS = 4;
const SIZE_RECT = 350;

interface IProps {
  albumStore?: AlbumStore;
  routerStore?: RouterStore;
  history: any;
  match: match;
}
@inject("albumStore")
@inject("routerStore")
@observer
class AlbumCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    if (!!props.match.params["idMN"]) {
      props.albumStore.activeArtistIdMN = props.match.params["idMN"];
    }
  }

  static defaultProps = {};

  render() {
    if (!this.props.albumStore.albums) {
      return null;
    }
    const items = (width: number, height: number) => {
      return this.props.albumStore.albums.map(a => {
        return (
          <div
            className={"four wide column"}
            key={a.idAlbum} //* Aquesta key és important per la Motion
            style={{ cursor: "pointer", marginTop: 0 }}
            onClick={() => {
              // this.props.albumStore.setActiveAlbum(a);
              this.props.history.push(
                ROUTE_ALBUM_TRACKS.replace(":idAlbum", a.idAlbum.toString())
              );
            }}
          >
            {/*<LazyLoad width={SIZE_RECT} height={"auto"} debounce={true}>*/}
            <MyPaper elevation={15}>
              <LazyImage
                src={a.urlCover}
                placeholder={({ imageProps, ref }) => <img ref={ref} />}
                actual={({ imageProps }) => (
                  <div className={"LazyImage-Actual"}>
                    <img {...imageProps} />
                  </div>
                )}
                style={{
                  height: width,
                  width: "auto"
                }}
              />
            </MyPaper>
          </div>
        );
      });
    };
    return (
      <MyCollection
        asideLeftContent={
          !!this.props.albumStore.groupByField ? <AlbumsGroupedByField /> : null
        }
        sectionContent={
          <MaxHeightContainer>
            <ScrollBar
              autoHide={true}
              hideTracksWhenNotNeeded={true}
              thumbSize={50}
            >
              <div
                style={{
                  width: "100%"
                }}
              >
                <MaxHeightContainer>
                  <MasonryGrid
                    style={{ margin: 10 }}
                    gutter={15}
                    numColumns={this.props.albumStore.numColumsAlbums}
                    items={items}
                    factorY={FACTOR_Y}
                  />
                </MaxHeightContainer>
              </div>
            </ScrollBar>
          </MaxHeightContainer>
        }
        headerContent={
          <div>
            <DivInline>
              <CollectionCounter
                itemsCount={this.props.albumStore.albumsCount}
                itemsDesc={"albums."}
              />
            </DivInline>
            <DivInline>
              <AlbumsToolbar />
            </DivInline>
          </div>
        }
      />
    );
  }
}

export default withRouter(AlbumCollection as any);
