"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_flexbox_grid_1 = require("react-flexbox-grid");
const typestyle_1 = require("typestyle");
const DzProgress_1 = require("./controls/DzProgress");
const TrackListPlayerDFlow_1 = require("./TrackListPlayerDFlow");
const DzPrevButton_1 = require("./controls/DzPrevButton");
const DzNextButton_1 = require("./controls/DzNextButton");
class PlayerBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div>
        <react_flexbox_grid_1.Row>
          <react_flexbox_grid_1.Col lg={12}>
            <div>
              <DzProgress_1.default />
            </div>
          </react_flexbox_grid_1.Col>
          <react_flexbox_grid_1.Col lg={1}/>
        </react_flexbox_grid_1.Row>
        <react_flexbox_grid_1.Row className={typestyle_1.style({
            margin: 0,
            lineHeight: "60px",
            position: "relative",
            top: 20
        })}>
          <react_flexbox_grid_1.Col lg={4}>
            <react_flexbox_grid_1.Row>
              {this.props.showPrevious && (<react_flexbox_grid_1.Col lg={1}>
                  <DzPrevButton_1.default />
                </react_flexbox_grid_1.Col>)}
              <react_flexbox_grid_1.Col lg={1}>
                <TrackListPlayerDFlow_1.DzPlayBtn />
              </react_flexbox_grid_1.Col>
              {this.props.showNext && (<react_flexbox_grid_1.Col lg={1}>
                  <DzNextButton_1.default />
                </react_flexbox_grid_1.Col>)}
              <react_flexbox_grid_1.Col lg={1} lgOffset={0}>
                <TrackListPlayerDFlow_1.FavBtn />
              </react_flexbox_grid_1.Col>
              <react_flexbox_grid_1.Col lg={1} lgOffset={0}>
                <TrackListPlayerDFlow_1.VersionsBtn />
              </react_flexbox_grid_1.Col>
            </react_flexbox_grid_1.Row>
          </react_flexbox_grid_1.Col>
          <react_flexbox_grid_1.Col lg={8}>
            <react_flexbox_grid_1.Row>
              <react_flexbox_grid_1.Col lg={12}>
                <div style={{ display: "block", position: "relative", top: -20 }}>
                  <TrackListPlayerDFlow_1.InfoWorkSuperior />
                </div>
                <div style={{ display: "block", position: "relative", top: -62 }}>
                  <TrackListPlayerDFlow_1.InfoWorkInferior />
                </div>
              </react_flexbox_grid_1.Col>
            </react_flexbox_grid_1.Row>
            <react_flexbox_grid_1.Row>
              <react_flexbox_grid_1.Col lg={12}/>
            </react_flexbox_grid_1.Row>
          </react_flexbox_grid_1.Col>
        </react_flexbox_grid_1.Row>
      </div>);
    }
}
PlayerBar.defaultProps = {
    showPrevious: true,
    showNext: true
};
exports.default = PlayerBar;
//# sourceMappingURL=PlayerBar.jsx.map