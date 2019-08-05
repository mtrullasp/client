"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_1 = require("react-router");
const mobx_react_1 = require("mobx-react");
const semantic_ui_react_1 = require("semantic-ui-react");
const MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
const IMAGE_SIZE = 200;
let KlassikRank = class KlassikRank extends React.Component {
    constructor(props, context) {
        super(props, context);
        props.albumStore.getKlassikRank(props.match.params["idMC"], props.match.params["idMCord"]);
    }
    render() {
        return (<MaxHeightContainer_1.default style={{ overflowY: "auto" }}>
        <semantic_ui_react_1.List relaxed={true} size={"big"}>
          {this.props.albumStore.klassikRankWebApi &&
            this.props.albumStore.klassikRankWebApi.map(k => {
                return (<semantic_ui_react_1.List.Item>
                  <img src={k.coverBig} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}/>{" "}
                  {k.albumName}
                </semantic_ui_react_1.List.Item>);
            })}
        </semantic_ui_react_1.List>
      </MaxHeightContainer_1.default>);
    }
};
KlassikRank.defaultProps = {};
KlassikRank = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], KlassikRank);
exports.default = react_router_1.withRouter(KlassikRank);
//# sourceMappingURL=KlassikRank.jsx.map