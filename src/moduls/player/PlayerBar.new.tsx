import * as React from "react";
import { style } from "typestyle";
import DzProgress from "./controls/DzProgress";
import {
  DzPlayBtn,
  DzPlayBtnNew,
  FavBtn,
  InfoWorkInferior,
  InfoWorkSuperior,
  VersionsBtn
} from "./TrackListPlayerDFlow";
import DzPrevButton from "./controls/DzPrevButton";
import DzNextButton from "./controls/DzNextButton";
import "./playerBar.new.scss";
import DzPrevButtonNew from "./controls/DzPrevButton.new";
import DzNextButtonNew from "./controls/DzNextButton.new";
import { Divider, Grid } from "semantic-ui-react";
import DzProgressNew from "./controls/DzProgress.new";
import togglePlayer from "./togglePlayer";

interface IProps {
  showNext?: boolean;
  showPrevious?: boolean;
}
class PlayerBar extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {
    showPrevious: true,
    showNext: true
  };

  render() {
    return (
      <div style={{ backgroundColor: "#36454f" }}>
        {/*
        <Row>
          <Col lg={12}>
            <div>
              <DzProgress />
            </div>
          </Col>
          <Col lg={1} />
        </Row>
*/}
        <Divider fitted={true} />
        <Grid>
          <Grid.Row
            columns={16}
            className={style({
              margin: 0,
              marginTop: -10,
              lineHeight: "30px",
              position: "relative",
              top: 0
            })}
          >
            <Grid.Column width={2} className={"pr player paused"}>
              <DzPrevButtonNew />
              <DzPlayBtnNew />
              <DzNextButtonNew />
            </Grid.Column>
            <Grid.Column width={5}>
              <DzProgressNew />
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row columns={16}>
                <Grid.Column width={16}>
                  <div
                    style={{
                      display: "block",
                      marginTop: 10,
                      fontSize: 12,
                      color: "white"
                    }}
                  >
                    <InfoWorkSuperior />
                  </div>
                  <div
                    style={{ display: "block", fontSize: 12, color: "white" }}
                  >
                    <InfoWorkInferior />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default PlayerBar;
