"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AQUEST ÉS EL BO! TODO
 * https://github.com/drcmda/mauerwerk
 */
const React = require("react");
const constants_1 = require("../util/constants");
const react_container_dimensions_1 = require("react-container-dimensions");
//import ScrollBox from "react-scroll-box";
//import * as FocusTrap from "focus-trap-react";
//import ReactGallery = require("react-grid-gallery");
const sc = require("react-stonecutter");
const mobx_react_1 = require("mobx-react");
const ReactGallery = require("react-grid-gallery");
//const ReactGallery = require("react-grid-gallery");
const SpringGrid = sc.SpringGrid;
function isFunction(f) {
    return f instanceof Function;
}
let MasonryGrid = class MasonryGrid extends React.Component {
    constructor(props, context) {
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
    render() {
        const masonryOptions = {
            transitionDuration: 1000
            /*
            fitWidth: true,
            horizontalOrder: false
      */
        };
        return (<react_container_dimensions_1.default>
        {({ width, height }) => {
            width -=
                this.props.gutter * this.props.numColumns +
                    constants_1.MARGIN_HORITZONTAL +
                    constants_1.SCROLLBAR_WIDTH;
            const columnHeight = (width / this.props.numColumns) * this.props.factorY;
            return this.props.gridEngine === "stonecutter" ? (<div style={Object.assign({}, this.props.style)}>
              <SpringGrid component="ul" columns={this.props.numColumns} columnWidth={width / this.props.numColumns} gutterWidth={this.props.gutter} gutterHeight={this.props.gutter} itemHeight={columnHeight} springConfig={{
                stiffness: this.props.stiffness,
                damping: this.props.damping
            }}>
                {(isFunction(this.props.items)
                ? this.props.items(width / this.props.numColumns, height / this.props.numColumns)
                : this.props.items).slice(0, constants_1.MAX_ITEMS_MASONRY)}
              </SpringGrid>
            </div>) : (<ReactGallery thumbnailHeight={80} images={this.props.items} tagStyle={{
                color: "white",
                fontSize: 16,
                fontWeight: 400,
                backgroundColor: "rgba(0,0,0,0.8)"
            }} enableLightbox={true} enableImageSelection={false} onClickThumbnail={(index) => {
                this.props.onClickThumbnail(this.props.items[index]);
            }}/>);
        }}
      </react_container_dimensions_1.default>);
    }
};
MasonryGrid.defaultProps = {
    style: { overflowY: "auto", height: "100%" },
    gutter: 1,
    factorY: 1,
    gridEngine: "stonecutter",
    stiffness: 60,
    damping: 12
};
MasonryGrid = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.observer
], MasonryGrid);
exports.default = MasonryGrid;
//# sourceMappingURL=MasonryGrid.jsx.map