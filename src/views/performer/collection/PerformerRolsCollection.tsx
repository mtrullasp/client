import * as React from "react";
import { inject, observer } from "mobx-react";
import { Image, MenuItemProps } from "semantic-ui-react";
import {
  COMPOSER_NUMBER_COLS,
  ELEGANT_FONT,
  MARGIN_HORITZONTAL,
  ROUTE_COMPOSERS_ITEM_WORKS,
  ROUTE_PERFORMER,
  TRUE_ACCENT_COLOR,
  ROUTE_PERFORMER_COLLECTION
} from "../../../util/constants";
import { Row } from "react-flexbox-grid";
import { style } from "typestyle";
import ComposersToolbar from "../../composer/toolbar/ComposersToolbar";
import { History } from "history";
import JustifiedGrid from "react-justified-grid";
import paleta from "../../../styles/paleta";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import MasonryGrid from "../../../widgets/MasonryGrid/MasonryGrid";
import {
  IPerformerRols,
  PerformerStore
} from "../../../core/stores/PerformerStore";
import MyReactGallery from "../../../widgets/MasonryGrid/ReactGallery";
interface IState {
  indexHover: number;
}
interface IProps {
  performerStore?: PerformerStore;
  history?: History;
}
@inject("performerStore")
@observer
class PerformerRolsCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
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
    if (!this.props.performerStore.performerRolsRaw) {
      return null;
    }
    const items = (width: number, height: number) =>
      this.props.performerStore.performerRolsRaw.map((pr, index) => {
        let contentBase = (opacity: number) => {
          return (
            <div key={pr.IdRol}>
              {/*
              <a
                target="_blank"
                href={
                  "https://www.allmusic.com/artist/" +
                  (pr.UrlImage || "").replace(".jpg", "")
                }
              >
*/}
              <img
                src={"http://127.0.1.0/PictureArtist/" + pr.UrlImage}
                alt={pr.NameRol}
                style={{
                  height: height,
                  width: width,
                  opacity:
                    this.state.indexHover === index ? opacity + 0.4 : opacity
                }}
              />
              {/*              </a>*/}
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
                    {pr.NameRol} {pr.NamePerformerTip}
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
              alert("click");
              this.props.performerStore.activePerformerIdRol = pr.IdRol;
              this.props.history.push(
                ROUTE_PERFORMER_COLLECTION.replace(
                  ":idRol",
                  pr.IdRol.toString()
                )
              );
              //this.props.performerStore.activeIndex = index;
              //e.stopPropagation();
              //this.props.onClick(composer);
              //this.props.appState.setActiveComposer(composer.IdComposer);
              //this.props.history.push(ROUTE_COMPOSERS_ITEM);
            }}
            key={pr.IdRol}
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

    const images: Array<any> = this.props.performerStore.performerRolsRaw.map(
      (performer, index) => {
        const src = "http://127.0.1.0/PictureArtist/" + performer.UrlImage;
        return {
          src: src,
          thumbnail: "http://127.0.1.0/PictureArtist/" + performer.UrlImage,
          performer: performer,
          tags: [{ value: performer.NameRol, title: "" }],
          thumbnailWidth: performer.WidthImage,
          thumbnailHeight: performer.HeightImage
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
              onClickThumbnail={(item: { performer: IPerformerRols }) => {
                /*
                this.props.performerStore.activePerformerIdRol =
                  item.performer.IdRol;
*/
                this.props.history.push(
                  ROUTE_PERFORMER_COLLECTION.replace(
                    ":idRol",
                    item.performer.IdRol.toString()
                  )
                );
              }}
              gutter={5}
              gridEngine="react-masonry-component"
              numColumns={COMPOSER_NUMBER_COLS}
              items={images}
              images={images}
            />
          </div>
        </MaxHeightContainer>
      )
    );
  }
}

export default PerformerRolsCollection;
