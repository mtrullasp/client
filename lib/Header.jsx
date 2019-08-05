"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
const SearchInput_1 = require("./search/SearchInput");
const FavIcon_1 = require("./FavIcon");
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const ComposersWorksPerformers_1 = require("./header/ComposersWorksPerformers");
const constants_1 = require("./util/constants");
const CollectionOrItem_1 = require("./header/CollectionOrItem");
exports.HORITZONTAL_MARGIN = 100;
exports.TOP_NAME = 0;
exports.ABSOLUTE_MARGIN = 10;
let Header = class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { fets: true };
  }
  render() {
    let headerContent = null;
    let bodyContent = null;
    if (
      !!this.props.composerStore &&
      !!this.props.composerStore.activeComposer
    ) {
      const composer = this.props.composerStore.activeComposer;
      headerContent = (
        <div>
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              width: 40,
              height: 40
            }}
          >
            <FavIcon_1.default
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          </div>
          <div
            style={{
              position: "fixed",
              top: 10,
              left: exports.HORITZONTAL_MARGIN,
              right: exports.HORITZONTAL_MARGIN
            }}
          >
            <div
              style={{
                display: "inline",
                position: "absolute",
                top: 0,
                left: 0
              }}
            >
              <ComposersWorksPerformers_1.default
                activeIndex={this.props.routerStore.menuIndex}
                onItemClick={(e, data) => {
                  if (data.name === "Performers") {
                    this.props.routerStore.menuIndex = data.index;
                    this.props.history.push(
                      constants_1.ROUTE_PERFORMERSROL_COLLECTION
                    );
                  }
                  if (data.name === "Composers") {
                    this.props.routerStore.menuIndex = data.index;
                    this.props.history.push(
                      constants_1.ROUTE_COMPOSERS_COLLECTION
                    );
                  }
                }}
              />{" "}
            </div>

            <div
              style={{
                display: "inline",
                position: "absolute",
                top: 0,
                left: 270
              }}
            >
              <CollectionOrItem_1.default
                onClick={() => {
                  this.props.history.push(
                    constants_1.ROUTE_COMPOSERS_COLLECTION
                  );
                }}
              />{" "}
            </div>

            <div
              style={{
                display: "inline",
                position: "absolute",
                top: 0,
                left: 470
              }}
            >
              <semantic_ui_react_1.Menu
                size="small"
                compact={true}
                items={["Random"]}
              />{" "}
            </div>

            <div
              style={{
                display: "inline",
                position: "absolute",
                top: 0,
                left: 580
              }}
            >
              <semantic_ui_react_1.Menu
                size="small"
                compact={true}
                items={["Guided Tour"]}
              />{" "}
            </div>

            <div
              style={{
                display: "inline",
                width: 350,
                position: "absolute",
                right: 50
              }}
            >
              <SearchInput_1.default />{" "}
            </div>
          </div>
          <div
            style={{
              cursor: "pointer",
              position: "fixed",
              top: 5,
              right: 10
            }}
          >
            powered by
            <semantic_ui_react_1.Image
              size={"tiny"}
              src={require("/src/img/DZ_Logo_CMYK.png")}
            />
          </div>
        </div>
      );
      bodyContent = <div />;
    }
    return headerContent;
    //return <Layout headerContent={headerContent} bodyContent={bodyContent} />;
  }
};
Header = __decorate(
  [
    mobx_react_1.inject("composerStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("routerStore"),
    mobx_react_1.observer
  ],
  Header
);
exports.default = react_router_dom_1.withRouter(Header);
//# sourceMappingURL=Header.jsx.map
