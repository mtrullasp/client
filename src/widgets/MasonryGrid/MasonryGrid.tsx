/**
 * AQUEST ÉS EL BO! TODO
 * https://github.com/drcmda/mauerwerk
 */
import * as React from "react";
import { CSSProperties, ReactPropTypes } from "react";
import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  MARGIN_HORITZONTAL,
  MAX_ITEMS_MASONRY,
  SCROLLBAR_WIDTH
} from "../../util/constants";
import ContainerDimensions from "react-container-dimensions";
import Masonry, { MasonryOptions } from "react-masonry-component";
//import ScrollBox from "react-scroll-box";
//import * as FocusTrap from "focus-trap-react";
//import ReactGallery = require("react-grid-gallery");
import sc = require("react-stonecutter");
import { inject, observer, PropTypes } from "mobx-react";
//import { AppState } from "../moduls/core/stores/AppStore";
import { reaction } from "mobx";
//import Scrollbars from "react-custom-scrollbars";
import ComposerStore from "../../core/stores/ComposerStore";
import { Grid, Slug, Fade } from "mauerwerk";
import ReactGallery = require("react-grid-gallery");
import { HotKeys } from "react-hotkeys";

import { Shortcuts } from "react-shortcuts";

import JustifiedGrid from "react-justified-grid";

//const ReactGallery = require("react-grid-gallery");
const SpringGrid = sc.SpringGrid;

const keymap = {
  MOVE_LEFT: "left",
  MOVE_RIGHT: "right",
  MOVE_UP: "up",
  MOVE_DOWN: "down"
};

function isFunction(f): f is Function {
  return f instanceof Function;
}

interface IProps {
  items: ((width: number, height: number) => Array<JSX.Element>) | Array<any>;
  style?: CSSProperties;
  numColumns: number;
  gutter?: number;
  factorY?: number;
  gridEngine?: string;
  onClickThumbnail?: (item: Object) => void;
  stiffness?: number;
  damping?: number;
  composerStore: ComposerStore;
}
@inject("composerStore")
@observer
class MasonryGrid extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    /*
    reaction(
      () => props.appState.eventKey,
      key => {
        if (props.appState.isActiveInput) {
          return;
        }
        switch (key) {
          case ARROW_UP:
            break;
          case ARROW_DOWN:
            break;
          case ARROW_LEFT:
            break;
          case ARROW_RIGHT:
            break;
        }
      }
    );
*/
  }

  static defaultProps: Partial<IProps> = {
    style: { overflowY: "auto", overflowX: "hidden", height: "100%" },
    gutter: 0,
    factorY: 1,
    gridEngine: "stonecutter",
    stiffness: 60,
    damping: 12
  };

  render() {
    const masonryOptions: MasonryOptions = {
      transitionDuration: 1000
      /*
      fitWidth: true,
      horizontalOrder: false
*/
    };
    debugger ;
    return (
      <ContainerDimensions>
        {({ width, height }) => {
          const delta = 20;
          width -=
            this.props.gutter * this.props.numColumns + SCROLLBAR_WIDTH;
          const columnHeight =
            (width / this.props.numColumns) * 1; //this.props.factorY;
          return this.props.gridEngine === "stonecutter" ? (
            <div style={{ ...this.props.style }}>
              <SpringGrid
                component="div"
                columns={this.props.numColumns}
                columnWidth={width / this.props.numColumns}
                gutterWidth={this.props.gutter}
                gutterHeight={this.props.gutter}
                itemHeight={columnHeight}
                springConfig={{
                  stiffness: this.props.stiffness,
                  damping: this.props.damping,
                  zIndex: 0
                }}
              >
                {(isFunction(this.props.items)
                  ? this.props.items(
                      width / this.props.numColumns,
                      height / this.props.numColumns
                    )
                  : this.props.items
                ).slice(0, MAX_ITEMS_MASONRY)}
              </SpringGrid>
            </div>
          ) : (
            <div
              style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"
              }}
            >
              <ReactGallery
                images={this.props.items}
                tagStyle={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: 400,
                  backgroundColor: "rgba(0,0,0,0.8)"
                }}
                enableLightbox={true}
                onClickThumbnail={(index: number) => {
                  this.props.onClickThumbnail(this.props.items[index]);
                }}
              />
            </div>
          );
        }}
      </ContainerDimensions>
    );
  }
}

export default MasonryGrid;
