"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MasonryGrid_1 = require("../../widgets/MasonryGrid");
const constants_1 = require("../../util/constants");
const mobx_react_1 = require("mobx-react");
const react_lazy_load_1 = require("react-lazy-load");
const react_router_1 = require("react-router");
const MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
require("img-2");
const FACTOR_Y = 1;
const ALBUMS_NUMBER_COLS = 4;
const SIZE_RECT = 350;
let AlbumCollection = class AlbumCollection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        if (!this.props.albumStore.albums) {
            return null;
        }
        const items = this.props.albumStore.albums.map(a => {
            // @ts-ignore
            return (<div style={{ cursor: "pointer", marginTop: 10 }} onClick={() => {
                this.props.albumStore.setActiveAlbumId(a.idMW);
                this.props.history.push(constants_1.ROUTE_ALBUM_TRACKS);
            }}>
          <react_lazy_load_1.default width={SIZE_RECT} height={"auto"} debounce={true}>
            <img src={a.urlCover} style={{ width: SIZE_RECT, height: SIZE_RECT }}/>
          </react_lazy_load_1.default>
        </div>);
        });
        return (<MaxHeightContainer_1.default>
        <div style={{
            position: "absolute",
            top: 0,
            bottom: constants_1.HEADER_HEIGHT,
            left: constants_1.MARGIN_HORITZONTAL,
            right: 0
        }} onClick={() => this.props.albumStore.shuffle()}>
          <MasonryGrid_1.default gutter={5} numColumns={ALBUMS_NUMBER_COLS} items={items} factorY={FACTOR_Y}/>
        </div>
      </MaxHeightContainer_1.default>);
    }
};
AlbumCollection.defaultProps = {};
AlbumCollection = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], AlbumCollection);
exports.default = react_router_1.withRouter(AlbumCollection);
//# sourceMappingURL=AlbumCollection.jsx.map
