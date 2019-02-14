/**
 * AQUEST ÉS EL BO! TODO
 * https://github.com/drcmda/mauerwerk
 */
import * as React from "react";
import { CSSProperties } from "react";
import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  MARGIN_HORITZONTAL,
  MAX_ITEMS_MASONRY,
  SCROLLBAR_WIDTH
} from "../util/constants";
import ContainerDimensions from "react-container-dimensions";
import Masonry, { MasonryOptions } from "react-masonry-component";
// import scrollBox = require("react-scroll-box");
//import * as FocusTrap from "focus-trap-react";
//import ReactGallery = require("react-grid-gallery");
import sc = require("react-stonecutter");
import { inject, observer } from "mobx-react";
//import { AppState } from "../packages/core/stores/AppStore";
import { reaction } from "mobx";
import Scrollbars from "react-custom-scrollbars";
import ComposerStore from "../stores/ComposerStore";
import { Grid, Slug, Fade } from 'mauerwerk';

const SpringGrid = sc.SpringGrid;

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
    style: { overflowY: "auto", height: "100vh" },
    gutter: 1,
    factorY: 1,
    gridEngine: "stonecutter",
    stiffness: 50,
    damping: 20
  };

  render() {
    const masonryOptions: MasonryOptions = {
      transitionDuration: 1000
      /*
      fitWidth: true,
      horizontalOrder: false
*/
    };
    return (
      <ContainerDimensions>
        {({ width, height }) => {
          width -=
            this.props.gutter * this.props.numColumns +
            MARGIN_HORITZONTAL +
            SCROLLBAR_WIDTH;
          const columnHeight =
            (width / this.props.numColumns) * this.props.factorY;
          return (
            <div style={{...this.props.style }}>
              <SpringGrid
                component="ul"
                columns={this.props.numColumns}
                columnWidth={width / this.props.numColumns}
                gutterWidth={this.props.gutter}
                gutterHeight={this.props.gutter}
                itemHeight={columnHeight}
                springConfig={{
                  stiffness: this.props.stiffness,
                  damping: this.props.damping
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
          );
        }}
      </ContainerDimensions>
    );
  }
}

export default MasonryGrid;
