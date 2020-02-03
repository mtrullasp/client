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
  ROUTE_COMPOSER_ITEM,
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO,
  ROUTE_COMPOSERS_ITEM_WORKS,
  TRUE_ACCENT_COLOR
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
import {motion } from "framer-motion";
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
              onClick={(c: IComposer) => {
                debugger ;this.props.composerStore.setActiveComposerId(c.idMN);
                this.props.history.push(ROUTE_COMPOSER_ITEM);
              }}
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
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.props.composerStore.activeIndex = index;
                this.props.history.push(ROUTE_COMPOSER_ITEM);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 10000
        }}
        style={{ /*position: "absolute", left: MARGIN_HORITZONTAL*/ }}>
        <MyCollection
          headerContent={<ComposersToolbar />}
          asideLeftContent={
            this.props.composerStore.isGroupedByNation ? (
              <ComposersGroupedByNacio />
            ) : null
          }
          sectionContent={
            <MaxHeightContainer
              style={{
                position: "relative",
                top: 0,
                width: "100%"
              }}
              footerHeight={50}
            >
              <MaxHeightContainer style={{ overflowY: "auto" }}>
                <div style={{ margin: 0 }}>
                  <MasonryGrid
                    style={{ margin: 5 }}
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
      </motion.div>
    );
  }
}

export default ComposerCollection;
