"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_flexbox_grid_1 = require("react-flexbox-grid");
const typestyle_1 = require("typestyle");
const mobx_react_1 = require("mobx-react");
const MasonryGrid_1 = require("../../widgets/MasonryGrid");
const constants_1 = require("../../util/constants");
// import TextFit from "../../widgets/TextFit/TextFit";
// import from "react-fittext"
const semantic_ui_react_1 = require("semantic-ui-react");
const MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
const ComposersToolbar_1 = require("../toolbar/ComposersToolbar");
const react_router_dom_1 = require("react-router-dom");
const ComposersGroupedByNacio_1 = require("../toolbar/ComposersGroupedByNacio");
const FACTOR_Y = 1.2;
let ComposerCollection = class ComposerCollection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { indexHover: -1 };
    }
    render() {
        if (!this.props.composerStore.composers) {
            return null;
        }
        const items = (width, height) => this.props.composerStore.composers.map((composer, index) => {
            let contentBase = (opacity) => {
                return (<div key={composer.idMN}>
              <semantic_ui_react_1.Image src={this.props.composerStore.getComposerPicture(composer.IdComposer)} alt={composer.name} style={{
                    height: width * FACTOR_Y,
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
                    opacity: 0.7,
                    height: 20,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 10,
                    textTransform: this.state.indexHover === index ? "uppercase" : "none",
                    fontFamily: constants_1.ELEGANT_FONT,
                    fontWeight: 600,
                    color: this.state.indexHover === index
                        ? constants_1.SECOND_ACCENT_COLOR
                        : "inherited",
                    fontSize: this.state.indexHover === index ? 25 : 20,
                    textAlign: "center"
                }}>
                    {this.props.composerStore.getNomDePilaComposer(composer.sort_name)}
                  </div>
                </react_flexbox_grid_1.Row>
                <react_flexbox_grid_1.Row>
                  <div style={this.state.indexHover === index
                    ? {
                        position: "absolute",
                        fontWeight: 800,
                        textAlign: "center",
                        textTransform: "uppercase",
                        marginRight: 5,
                        marginLeft: 5,
                        fontSize: this.state.indexHover === index ? 35 : 30,
                        left: 0,
                        right: 0,
                        bottom: 35,
                        fontFamily: constants_1.ELEGANT_FONT,
                        color: constants_1.ACCENT_COLOR
                    }
                    : {
                        width: "100%",
                        marginRight: 5,
                        marginLeft: 5,
                        opacity: 0.6,
                        height: 25,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 26,
                        fontSize: 28,
                        fontFamily: constants_1.ELEGANT_FONT,
                        fontWeight: 800,
                        textAlign: "center",
                        textTransform: "uppercase",
                        color: constants_1.ACCENT_COLOR
                    }}>
                    {this.props.composerStore.getCognomComposer(composer.sort_name)}
                    
                  </div>
                </react_flexbox_grid_1.Row>
                <react_flexbox_grid_1.Row />
                <div style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 15,
                    fontFamily: constants_1.ELEGANT_FONT,
                    fontSize: 14,
                    fontWeight: 800,
                    textAlign: "center",
                    margin: 0
                }}>
                  {composer.begin_date_year} - {composer.end_date_year}
                </div>
              </footer>
            </div>);
            };
            return (<li onMouseEnter={() => {
                this.setState({ indexHover: index });
            }} onMouseLeave={() => {
                this.setState({ indexHover: -1 });
            }} onClick={(e) => {
                this.props.composerStore.activeIndex = index;
                //e.stopPropagation();
                //this.props.onClick(composer);
                //this.props.appState.setActiveComposer(composer.IdComposer);
                this.props.history.push(constants_1.ROUTE_COMPOSERS_ITEM);
            }} key={composer.IdComposer} className={typestyle_1.style({
                cursor: "pointer",
                listStyleType: "none"
            }) + " bright-on-hover grow"}>
            <div>{contentBase(0.4)}</div>
          </li>);
        });
        return (items && (<MaxHeightContainer_1.default style={{
            position: "absolute",
            left: constants_1.MARGIN_HORITZONTAL,
            right: 0,
            top: 0,
            bottom: 0
        }} footerHeight={50}>
          <div style={{ position: "relative", top: 5 }}>
            <div>
              <ComposersToolbar_1.default />
            </div>
            <div style={{ display: "flex", overflow: "hidden" }}>
              <div style={{ marginTop: 10 }}>
                <react_router_dom_1.Route path={constants_1.ROUTE_COMPOSERS_COLLECTION_BY_NACIO} exact={true} component={ComposersGroupedByNacio_1.default}/>
              </div>
              <div style={{ width: "100%" }}>
                <MasonryGrid_1.default gutter={0} numColumns={constants_1.COMPOSER_NUMBER_COLS} items={items} factorY={FACTOR_Y}/>
              </div>
            </div>
          </div>
        </MaxHeightContainer_1.default>));
    }
};
ComposerCollection = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.observer
], ComposerCollection);
exports.default = ComposerCollection;
//# sourceMappingURL=ComposerCollection.jsx.map