/**
 * AQUEST ÉS EL BO! TODO
 * https://github.com/drcmda/mauerwerk
 */

import * as React from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
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
// import { Grid, Slug, Fade } from "mauerwerk";
import ReactGallery = require("react-grid-gallery");
import { HotKeys } from "react-hotkeys";

import { Shortcuts } from "react-shortcuts";
import { Grid, Row, Col } from "react-flexbox-grid";
import { style } from "typestyle";

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
class FlipMoveMasonryGrid extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps: Partial<IProps> = {
    style: { overflowY: "auto", height: "100%" },
    gutter: 1,
    factorY: 1,
    gridEngine: "stonecutter",
    stiffness: 60,
    damping: 12
  };

  render() {
    return (
      <ContainerDimensions>
        {({ width, height }) => {
          width +=
            this.props.gutter * this.props.numColumns + MARGIN_HORITZONTAL;

          return (
            <div style={{...this.props.style }}>
              <Flipper flipKey={this.props.items} spring={"stiff"}>
                {(isFunction(this.props.items)
                  ? this.props.items(
                      width / this.props.numColumns,
                      height / this.props.numColumns
                    )
                  : this.props.items
                ).map(i => (
                  <Flipped key={i} flipId={i.key}>
                    <div
                      style={{
                        display: "inline-block"
                      }}
                    >
                      {i}
                    </div>
                  </Flipped>
                ))}
              </Flipper>
              {/*

            {this.props.items(width / this.props.numColumns,
              height / this.props.numColumns
            ).map((i => {
              return <FlipMove>{i}</FlipMove>;
            })}
*/}
            </div>
          );
        }}
      </ContainerDimensions>
    );
  }
}

export default FlipMoveMasonryGrid;
