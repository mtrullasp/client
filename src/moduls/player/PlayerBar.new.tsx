import * as React from "react";
// import { style } from "typestyle";
// import DzProgress from "./controls/DzProgress";
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
import { PLAYER_BAR_COLOR, ROUTE_WORK_VERSIONS } from "../../util/constants";
import { inject, observer } from "mobx-react";
import AlbumStore from "../../core/stores/AlbumStore";
import { Link } from "react-router-dom";

interface IProps {
  albumStore?: AlbumStore;
  showNext?: boolean;
  showPrevious?: boolean;
}
@inject("albumStore")
@observer
class PlayerBar extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {
    showPrevious: true,
    showNext: true
  };

  render() {
    const track = this.props.albumStore.activeTrack;
    return (
      <div style={{ backgroundColor: PLAYER_BAR_COLOR }}>
        }>
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
        <Grid className={"player"} style={{ height: "100%" }}>
          <Grid.Row
            columns={4}
            /*
            className={style({
              margin: 0,
              position: "relative"
            })}
*/
          >
            <Grid.Column width={3} className={"pr"} style={{ marginTop: 0 }}>
              <div
                /*style={{ position: "relative", top: 25 }}*/
                style={{marginLeft: 0, marginTop: -10}}
                className={
                  "" +
                  (this.props.albumStore.playerIsPlaying ? "playing" : "paused")
                }
              >
                <DzPrevButtonNew />
                <DzPlayBtnNew />
                <DzNextButtonNew />
                <FavBtn style={{display: "inline-block", marginLeft: 40, position: "relative", top: 10}}/>
                <Link
                  style={{display: "inline-block", marginLeft: 20, marginTop: "-15px", color: "white"}}
                  to={ROUTE_WORK_VERSIONS.replace(":idMC", track?.idMC).replace(
                    ":idMCord",
                    track?.idMC_ord.toString()
                  )}
                >+Versions</Link>
              </div>
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
                      marginTop: -10,
                      fontSize: 11,
                      color: "white"
                    }}
                  >
                    <InfoWorkSuperior />
                  </div>
                  <div
                    style={{
                      display: "block",
                      fontSize: 14,
                      color: "white",
                      marginTop: 10
                    }}
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
