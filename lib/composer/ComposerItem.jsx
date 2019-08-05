"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Header_1 = require("../Header");
const HeadNameComposer_1 = require("../header/HeadNameComposer");
const QuotesCarousel_1 = require("./QuotesCarousel");
const mobx_react_1 = require("mobx-react");
const CollectionNav_1 = require("../routingNav/CollectionNav");
const react_router_1 = require("react-router");
const ComposerWorksCollection_1 = require("../composerWork/collections/ComposerWorksCollection");
const MaxHeightContainer_1 = require("../widgets/MaxHeightContainer");
let ComposerItem = class ComposerItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let content = null;
        if (!!this.props.composerStore &&
            !!this.props.composerStore.activeComposer) {
            const composer = this.props.composerStore.activeComposer;
            content = (<div>
          <div style={{
                position: "absolute",
                left: Header_1.ABSOLUTE_MARGIN,
                top: Header_1.TOP_NAME + 20,
                verticalAlign: "center"
            }}>
            <CollectionNav_1.default isEnabledNext={this.props.composerStore.isNextable} isEnabledPrevious={this.props.composerStore.isPreviousable} onClickNext={() => this.props.composerStore.goNextComposer()} onClickPrevious={() => this.props.composerStore.goPreviousComposer()}/>
          </div>
          <div style={{
                position: "absolute",
                left: Header_1.HORITZONTAL_MARGIN,
                top: 0
            }}>
            <HeadNameComposer_1.default firstName={this.props.composerStore.firstNameComposer} lastName={this.props.composerStore.lastNameComposer} infoNeixDefu={this.props.composerStore.activeComposerInfoNeixDefu}/>
            <div style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "50%"
            }}>
              <QuotesCarousel_1.default />
            </div>
          </div>
          <MaxHeightContainer_1.default>
            <div style={{
                position: "absolute",
                left: 600,
                top: 150,
                right: 50,
                bottom: 100,
                overflowY: "auto"
            }}>
              <ComposerWorksCollection_1.default />
            </div>
          </MaxHeightContainer_1.default>

          <img style={{
                overflowY: "hidden",
                opacity: 0.2,
                position: "absolute",
                top: 50,
                left: -200,
                width: "50%"
            }} src={this.props.composerStore.activeComposerImgUrl}/>
        </div>);
        }
        return <div>{content}</div>;
    }
};
ComposerItem = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.observer
], ComposerItem);
exports.default = react_router_1.withRouter(ComposerItem);
//# sourceMappingURL=ComposerItem.jsx.map