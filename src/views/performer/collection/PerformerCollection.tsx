import * as React from "react";
import { inject, observer } from "mobx-react";
import {
  IPerformer,
  IPerformerRols,
  PerformerStore
} from "../../../core/stores/PerformerStore";
import { Image, MenuItemProps } from "semantic-ui-react";
import {
  COMPOSER_NUMBER_COLS,
  ELEGANT_FONT,
  MARGIN_HORITZONTAL,
  ROUTE_ALBUMS_COLLECTION,
  ROUTE_COMPOSERS_ITEM_WORKS,
  ROUTE_PERFORMER,
  TRUE_ACCENT_COLOR
} from "../../../util/constants";
import { Row } from "react-flexbox-grid";
import { style } from "typestyle";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import ComposersToolbar from "../../composer/toolbar/ComposersToolbar";
import MasonryGrid from "../../../widgets/MasonryGrid/MasonryGrid";
import paleta from "../../../styles/paleta";
import { History } from "history";
import { match } from "react-router";
import AlbumStore from "../../../core/stores/AlbumStore";
import MyReactGallery from "../../../widgets/MasonryGrid/ReactGallery";

interface IState {
  indexHover: number;
}
interface IProps {
  performerStore?: PerformerStore;
  albumStore?: AlbumStore;
  history?: History;
  match: match;
}
@inject("performerStore")
@inject("albumStore")
@observer
class PerformerCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);

    props.performerStore.activePerformerIdRol = Number(
      props.match.params["idRol"]
    );
    this.state = { indexHover: -1 };
  }

  state: IState;

  /*
    render() {
      return (
        <ul style={{ overflowY: "auto" }}>
          {this.props.performerStore.performerRolsRaw &&
            this.props.performerStore.performerRolsRaw.map(r => {
              return (
                <li>
                  <span style={{ fontSize: 20 }}>{r.NameRol}</span>
                  <Image size="large" src={"http://127.0.1.0/PictureArtist/" + r.UrlImage} />
                </li>
              );
            })}
        </ul>
      );
  */

  render() {
    if (!this.props.performerStore.performersRaw) {
      return null;
    }
    const items = (width: number, height: number) =>
      this.props.performerStore.performersRaw.map((pr, index) => {
        let contentBase = (opacity: number) => {
          return (
            <div
              key={pr.idMN}
              onClick={() => {
                // debugger ;this.props.albumStore.activeArtistIdMN = pr.idMN;
                // this.props.history.push(ROUTE_ALBUMS_COLLECTION);
              }}
            >
              <Image
                fluid={true}
                src={"http://127.0.1.0/PictureArtist/" + pr.idMN + ".jpg"}
                alt={pr.nameMN}
                style={{
                  height: width,
                  width: width,
                  opacity:
                    this.state.indexHover === index ? opacity + 0.4 : opacity
                }}
              />
              <footer
                style={{
                  backgroundColor: "rgba(250, 250, 250, 0.3)",
                  color: "black",
                  padding: 5,
                  fontSize: 20,
                  fontFamily: ELEGANT_FONT,
                  fontWeight: 800
                }}
              >
                <Row>
                  <div
                    style={{
                      opacity: 0.9,
                      height: 20,
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 10, //this.state.indexHover === index ? 20 : 50,
                      textTransform:
                        this.state.indexHover === index ? "uppercase" : "none",
                      fontFamily: ELEGANT_FONT,
                      fontWeight: 600,
                      color:
                        this.state.indexHover === index
                          ? paleta.color50
                          : paleta.color50,
                      fontSize: this.state.indexHover === index ? 30 : 25,
                      textAlign: "center"
                    }}
                  >
                    {pr.nameMN}
                  </div>
                </Row>
                <Row />
              </footer>
            </div>
          );
        };
        return (
          <li
            onMouseEnter={() => {
              this.setState({ indexHover: index });
            }}
            onMouseLeave={() => {
              this.setState({ indexHover: -1 });
            }}
            onClick={(e: any) => {
              //this.props.performerStore.activeIndex = index;
              //e.stopPropagation();
              //this.props.onClick(composer);
              //this.props.appState.setActiveComposer(composer.IdComposer);
              //this.props.history.push(ROUTE_COMPOSERS_ITEM);
            }}
            key={pr.idMN}
            className={
              style({
                cursor: "pointer",
                listStyleType: "none"
              }) + " bright-on-hover grow"
            }
          >
            <div>{contentBase(0.6)}</div>
          </li>
        );
      });

    const images: Array<any> = this.props.performerStore.performersRaw.map(
      (performer: IPerformer, index) => {
        return {
          src: "http://127.0.1.0/PictureArtist/" + performer.idMN + ".jpg",
          thumbnail:
            "http://127.0.1.0/PictureArtist/" + performer.idMN + ".jpg",
          thumbnailWidth: performer.widthImage,
          thumbnailHeight: performer.heightImage,
          performer: performer,
          tags: [{ value: performer.nameMN, title: "" }]
        };
      }
    );

    return (
      items && (
        <MaxHeightContainer
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflowY: "auto"
          }}
          footerHeight={30}
        >
          <div
            style={{
                /*width: "100%",*/
              marginRight: MARGIN_HORITZONTAL,
              overflowY: "auto"
            }}
          >
            <div style={{ position: "relative", top: 5 }}>
              {/*
              <ComposersToolbar
                onItemClick={(event: any, data: MenuItemProps) => {
                  if (data.name === "Shuffle") {
                    // this.props.performerStore.shuffle();
                  }
                }}
              />
*/}
            </div>
            <MyReactGallery
              onClickThumbnail={(item: { performer: IPerformer }) => {
                this.props.albumStore.activeArtistIdMN = item.performer.idMN;
                this.props.albumStore.activeArtistNameMN =
                  item.performer.nameMN;
                this.props.history.push(
                  "/performer/" + item.performer.idMN
                );

                // this.props.albumStore.activeArtistIdMN = item.performer.idMN;
                // this.props.history.push(ROUTE_ALBUMS_COLLECTION);
              }}
              gridEngine="react-masonry-component"
              gutter={5}
              numColumns={COMPOSER_NUMBER_COLS}
              items={images}
            />
          </div>
        </MaxHeightContainer>
      )
    );
  }
}

export default PerformerCollection;
