import * as React from "react";
import { classes, style } from "typestyle";
import GridList from "@material-ui/core/GridList/GridList";
import Paper from "@material-ui/core/Paper/Paper";
import { inject, observer } from "mobx-react";
import ContainerDimensions from "react-container-dimensions";
import ComposerStore, { IComposer } from "../../../core/stores/ComposerStore";
import { Card } from "@blueprintjs/core";
import {
  ACCENT_COLOR,
  COMPOSER_NUMBER_COLS,
  ELEGANT_FONT,
  INTENSE_ACCENT_COLOR,
  MARGIN_HORITZONTAL,
  ROUTE_COMPOSER_ITEM,
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO,
  ROUTE_COMPOSERS_ITEM_WORKS,
  TRUE_ACCENT_COLOR
} from "../../../util/constants";
// import TextFit from "../../widgets/TextFit/TextFit";
import FitText = require("react-fittext");
import {
  Reveal,
  Image,
  MenuItemProps,
  Container,
  Segment,
  Grid
} from "semantic-ui-react";
/*import composer_name_style from "../../styles/composer_name_style";*/
import "../../../widgets/MyText/MyText_Next.css";

import {} from "react-router-dom";
//import ComposersToolbar from "../toolbar/ComposersToolbar";
import { Route } from "react-router-dom";
import ComposersGroupedByNacio from "../toolbar/ComposersGroupedByNacio";
import { Switch } from "react-router-dom";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import MyText from "../../../widgets/MyText/MyText";
import paleta from "../../../styles/paleta";
import MyPaper from "../../../widgets/MyPaper";
import { LastNamePersona } from "../../header/LastNamePersona";
import { Spring } from "react-spring/renderprops";
// import "../../styles/animated_border.css";
//import TextFit from "../../widgets/TextFit/TextFit";
// import '@blueprintjs/core/src/blueprint.scss';

const FACTOR_Y = 1.01;
const CARD_HEIGHT = 300;

interface IProps {
  width: number;
  index: number;
  composer: IComposer;
  composerStore?: ComposerStore;
  history?: any;
  onClick?: (composer: IComposer) => void;
}
@inject("composerStore")
@observer
class ComposerCollectionItem extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    if (!this.props.composerStore.composers) {
      return null;
    }
    const composer = this.props.composer;
    const index = this.props.index;
    const width = this.props.width;
    const itemSegment = (opacity: number) => (
      <div
        key={composer.idMN}
        className={"composer-item no-obackground-collection-items"}
        style={{ borderRadius: 50 }}
        onClick={() => {
          this.props.onClick(composer);
        }}
      >
        <ScrollIntoViewIfNeeded
          active={this.props.composerStore.indexHover === index}
        >
          <div
            style={{
              padding: 0,
              margin: 0,
              borderColor: "#fcfcfc",
              borderRadius: 30
            }}
          >
            <div style={{}}>
              <img
                className={"composer-image"}
                src={this.props.composerStore.getComposerPicture(
                  composer.IdComposer
                )}
                alt={composer.name}
                style={{
                  height: width * FACTOR_Y,
                  width: "auto",
                  opacity: opacity
                }}
              />
            </div>
            <div
              style={{
                /*backgroundColor: "rgba(250, 250, 250, 0.3)",*/
                color: "black",
                padding: 0,
                fontSize: 20,
                fontFamily: ELEGANT_FONT,
                fontWeight: 800
              }}
            >
              <div
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              >
                <Grid.Row>
                  <div
                    style={{
                      position: "absolute",
                      fontWeight: 500,
                      textAlign: "center",
                      textTransform: "uppercase",
                      marginRight: 0,
                      marginLeft: 0,
                      fontSize: 20,
                      left: 0,
                      right: 0,
                      bottom: -55,
                      fontFamily: "Myriad Pro",
                      opacity: 1,
                      color: ACCENT_COLOR
                    }}
                  >
                    <LastNamePersona
                      lastName={this.props.composerStore.getCognomComposer(
                        composer.sort_name
                      )}
                      opacity={
                        this.props.composerStore.indexHover === index ? 1 : 1
                      }
                      size={25}
                      fontWeight={800}
                    />
                    <div
                      style={{
                        position: "relative",
                        top: -60,
                        fontFamily: ELEGANT_FONT,
                        fontWeight: 900,
                        textTransform: "none",
                        /*color: paleta.color500,*/
                        fontSize: 16
                      }}
                    >
                      {this.props.composerStore.getNomDePilaComposer(
                        composer.sort_name
                      )}
                      <br />
                      <span style={{marginTop: -10, fontSize: 13}}>
                        {composer?.AnyoNeix} -{" "}
                        {composer?.AnyoDefu} ♰
                      </span>
                    </div>
                  </div>
                </Grid.Row>
                <Grid.Row />
              </div>
              <Grid.Row />
              {/*
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 15,
                    fontFamily: ELEGANT_FONT,
                    fontSize: 14,
                    fontWeight: 800,
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  {composer.begin_date_year} {composer.end_date_year}
                </div>
  */}
            </div>
          </div>
          {/*</div>*/}
        </ScrollIntoViewIfNeeded>
      </div>
    );
    if (this.props.composerStore.indexHover !== index) {
      return itemSegment(0.3);
    } else {
      return (
        <MyPaper
          elevation={20}
          style={{ opacity: 1, padding: 0, borderRadius: 30 }}
        >
          {itemSegment(1)}
        </MyPaper>
      );
    }
  }
}

export default ComposerCollectionItem;
