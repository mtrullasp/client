"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
const constants_1 = require("../../util/constants");
const react_flexbox_grid_1 = require("react-flexbox-grid");
const typestyle_1 = require("typestyle");
const MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
const MasonryGrid_1 = require("../../widgets/MasonryGrid");
const paleta_1 = require("../../styles/paleta");
let PerformerRolsCollection = class PerformerRolsCollection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { indexHover: -1 };
    }
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
        const items = (width, height) => this.props.performerStore.performerRolsRaw.map((pr, index) => {
            let contentBase = (opacity) => {
                return (<div key={pr.IdRol}>
              
              <img src={"http://127.0.1.0/PictureArtist/" + pr.UrlImage} alt={pr.NameRol} style={{
                    height: width,
                    width: width,
                    opacity: this.state.indexHover === index ? opacity + 0.4 : opacity
                }}/>
              
              <footer style={{
                    backgroundColor: "rgba(250, 250, 250, 0.3)",
                    color: "black",
                    padding: 5,
                    fontSize: 20,
                    fontFamily: constants_1.ELEGANT_FONT,
                    fontWeight: 800
                }}>
                <react_flexbox_grid_1.Row>
                  <div style={{
                    opacity: 0.9,
                    height: 20,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 10,
                    textTransform: this.state.indexHover === index ? "uppercase" : "none",
                    fontFamily: constants_1.ELEGANT_FONT,
                    fontWeight: 600,
                    color: this.state.indexHover === index
                        ? paleta_1.default.color50
                        : paleta_1.default.color50,
                    fontSize: this.state.indexHover === index ? 30 : 25,
                    textAlign: "center"
                }}>
                    {pr.NameRol}
                  </div>
                </react_flexbox_grid_1.Row>
                <react_flexbox_grid_1.Row />
              </footer>
            </div>);
            };
            return (<li onMouseEnter={() => {
                this.setState({ indexHover: index });
            }} onMouseLeave={() => {
                this.setState({ indexHover: -1 });
            }} onClick={(e) => {
                this.props.performerStore.activePerformerIdRol = pr.IdRol;
                this.props.history.push(constants_1.ROUTE_PERFORMER_COLLECTION);
                //this.props.performerStore.activeIndex = index;
                //e.stopPropagation();
                //this.props.onClick(composer);
                //this.props.appState.setActiveComposer(composer.IdComposer);
                //this.props.history.push(ROUTE_COMPOSERS_ITEM);
            }} key={pr.IdRol} className={typestyle_1.style({
                cursor: "pointer",
                listStyleType: "none"
            }) + " bright-on-hover grow"}>
            <div>{contentBase(0.6)}</div>
          </li>);
        });
        const images = this.props.performerStore.performerRolsRaw.map((performer, index) => {
            return {
                src: "http://127.0.1.0/PictureArtist/" + performer.UrlImage,
                thumbnail: "http://127.0.1.0/PictureArtist/" + performer.UrlImage,
                performer: performer,
                tags: [{ value: performer.NameRol, title: "" }]
            };
        });
        return (items && (<MaxHeightContainer_1.default style={{
            position: "absolute",
            left: constants_1.MARGIN_HORITZONTAL,
            right: 0,
            top: 0,
            bottom: 0,
            overflowY: "auto"
        }} footerHeight={30}>
          <div>
            <div style={{ position: "relative", top: 5 }}>
              
            </div>
            <MasonryGrid_1.default onClickThumbnail={(item) => {
            this.props.performerStore.activePerformerIdRol =
                item.performer.IdRol;
            this.props.history.push(constants_1.ROUTE_PERFORMER_COLLECTION);
        }} gutter={5} gridEngine="react-masonry-component" numColumns={constants_1.COMPOSER_NUMBER_COLS} items={images}/>
          </div>
        </MaxHeightContainer_1.default>));
    }
};
PerformerRolsCollection = __decorate([
    mobx_react_1.inject("performerStore"),
    mobx_react_1.observer
], PerformerRolsCollection);
exports.default = PerformerRolsCollection;
//# sourceMappingURL=PerformerRolsCollection.jsx.map