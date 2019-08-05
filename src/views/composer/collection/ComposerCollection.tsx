import * as React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { classes, style } from "typestyle";
import GridList from "@material-ui/core/GridList/GridList";
import Paper from "@material-ui/core/Paper/Paper";
import { inject, observer } from "mobx-react";
import ContainerDimensions from "react-container-dimensions";
import ComposerStore, { IComposer } from "../../../core/stores/ComposerStore";
//import MasonryGrid from "../../widgets/MasonryGrid/MasonryGrid";
import MasonryGrid from "../../../widgets/MasonryGrid/MasonryGrid";
import {
  ACCENT_COLOR,
  COMPOSER_NUMBER_COLS,
  ELEGANT_FONT,
  MARGIN_HORITZONTAL,
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO,
  ROUTE_COMPOSERS_ITEM,
  SECOND_ACCENT_COLOR
} from "../../../util/constants";
// import TextFit from "../../widgets/TextFit/TextFit";
// import from "react-fittext"
import {
  Reveal,
  Image,
  MenuItemProps,
  Card,
  Container
} from "semantic-ui-react";
import composer_name_style from "../../../styles/composer_name_style";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import {} from "react-router-dom";
import ComposersToolbar from "../toolbar/ComposersToolbar";
import { Route } from "react-router-dom";
import ComposersGroupedByNacio from "../toolbar/ComposersGroupedByNacio";
import { Switch } from "react-router-dom";
import "@material/elevation/dist/mdc.elevation.min.css";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import { HORITZONTAL_MARGIN } from "../../../Header";
import ComposerCollectionItem from "./ComposerCollectionItem";
// import ComposerCollectionItemHover from "./ComposerCollectionItemHover";
import MyCollection from "../../../widgets/MyCollection/MyCollection";
import "../../../styles/portfolio.css";

const FACTOR_Y = 1.1;

interface IProps {
  composerStore?: ComposerStore;
  history?: any;
  onClick?: (composer: IComposer) => void;
}
@inject("composerStore")
@observer
class ComposerCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    if (!this.props.composerStore.composers) {
      return null;
    }
    console.log("ComposerCollection");
    const items = (width: number, height: number) =>
      this.props.composerStore.composers.map((composer: IComposer, index) => {
        let contentBase = (opacity: number) => {
          return (
            <ComposerCollectionItem
              width={width}
              index={index}
              composer={composer}
            />
          );
        };
        return (
          <div
            onMouseEnter={() => {
              this.props.composerStore.indexHover = index;
            }}
            onMouseLeave={() => {
              this.props.composerStore.indexHover = -1;
            }}
            onClick={(e: any) => {
              this.props.composerStore.activeIndex = index;
              this.props.history.push(ROUTE_COMPOSERS_ITEM);
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.props.composerStore.activeIndex = index;
                this.props.history.push(ROUTE_COMPOSERS_ITEM);
              }
            }}
            key={composer.IdComposer}
            className={
              style({
                cursor: "pointer",
                listStyleType: "none"
              }) + " bright-on-hover grow"
            }
          >
            <div>{contentBase(0.6)}</div>
          </div>
        );
      });
    return (
      <MyCollection
        headerContent={<ComposersToolbar />}
        asideLeftContent={
          this.props.composerStore.isGroupedByNation ? (
            <ComposersGroupedByNacio />
          ) : null
        }
        sectionContent = {
          <MaxHeightContainer
            style={{
              position: "relative",
              top: 10,
              width: "100%"
            }}
            footerHeight={50}
          >
            <MaxHeightContainer style={{}}>
              <div style={{ margin: 0 }}>
                <MasonryGrid
                  gutter={0}
                  numColumns={COMPOSER_NUMBER_COLS}
                  items={items}
                  factorY={FACTOR_Y}
                />
              </div>
            </MaxHeightContainer>
          </MaxHeightContainer>
        }
      />
    );
  }
}

export default ComposerCollection;
