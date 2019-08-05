"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
//import { AppState } from "../stores/AppStore";
const mobx_react_1 = require("mobx-react");
const react_swipeable_views_1 = require("react-swipeable-views");
const react_swipeable_views_utils_1 = require("react-swipeable-views-utils");
const TextFit_1 = require("../widgets/TextFit/TextFit");
const constants_1 = require("../util/constants");
const AutoPlaySwipeableViews = react_swipeable_views_utils_1.autoPlay(react_swipeable_views_1.default);
let QuotesCarousel = class QuotesCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedIndex: 0
        };
        this.handleChangeIndex = (index) => {
            this.setState({ selectedIndex: index });
        };
    }
    render() {
        const { selectedIndex } = this.state;
        const style = { width: "100%", height: 100 };
        const items = this.props.composerStore.activeComposerQuotes.map(q => {
            return (<div>
          <TextFit_1.default maxFontSize={20} text={q.content.trimRight() + " "}/>

          
          <div style={{
                fontSize: 14,
                fontWeight: 700,
                height: 25,
                color: constants_1.SECOND_ACCENT_COLOR
            }}>
            — {q.contentSourceName.trimRight()}
          </div>
        </div>);
        });
        return (<AutoPlaySwipeableViews index={selectedIndex} onChangeIndex={this.handleChangeIndex} interval={10000}>
        {items}
      </AutoPlaySwipeableViews>);
    }
};
QuotesCarousel.defaultProps = {};
QuotesCarousel = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.observer
], QuotesCarousel);
exports.default = QuotesCarousel;
//# sourceMappingURL=QuotesCarousel.jsx.map