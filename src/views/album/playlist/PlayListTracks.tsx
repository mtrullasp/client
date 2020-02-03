import * as React from "react";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { List, Image, Icon } from "semantic-ui-react";
import { ACCENT_COLOR, MARGIN_HORITZONTAL } from "../../../util/constants";
import { ABSOLUTE_MARGIN, TOP_NAME } from "../../../Header";
import CollectionNav from "../../../core/routingNav/CollectionNav";
import { match, NavLink } from "react-router-dom";
import PlayerBar from "../../../moduls/player/PlayerBar.new";
import { Divider, Grid } from "semantic-ui-react";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import togglePlayer from "../../../moduls/player/togglePlayer";
// import * as Icon from "react-feather";
import IconPlaying from "../../../moduls/player/controls/IconPlaying";
import TitleBar from "../../../core/layout/TitleBar";
import MyPaper from "../../../widgets/MyPaper";
import { style } from "typestyle";
import paleta from "../../../styles/paleta";
import { withRouter } from "react-router";
import AlbumTags from "../toolbar/AlbumTags";
import parse from "html-react-parser";

interface IParams {
  idPlayList: string;
}
interface IProps {
  albumStore?: AlbumStore;
  match?: match<IParams>;
}
@inject("albumStore")
@observer
class PlayListTracks extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {

    super(props, context);
    // props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
  }

  static defaultProps = {};

  render() {
    const aStore = this.props.albumStore;
    if (!this.props.albumStore.activePlayList) {
      return null;
    }
    var lastIdMC: string = "";
    var countMC: number = 0;
    return (
      <List size={"medium"}>
        {aStore.responseAlbumsTracks &&
          aStore.responseAlbumsTracks.AlbumWorks.map((at, index: number) => {
            const isNewMC: boolean = at.idMC !== lastIdMC;
            const brEl: JSX.Element = isNewMC ? <br/> : null;
            lastIdMC = at.idMC;
            const tr = at;
            const iTr = index;
            const renderTrack = (
              <>
                <div style={{ paddingBottom: 5 }}>
                  <div
                    style={{
                      verticalAlign: "bottom",
                      display: "flex"
                    }}
                    onClick={() => {
                      this.props.albumStore.playTracks(at.idrack_DZ_ord, iTr);
                    }}
                  >
                    <div style={{ opacity: 0.8, width: 30 }}>
                      {this.props.albumStore.trackIdIsPlaying ===
                      tr.idTrack_DZ ? (
                        <IconPlaying />
                      ) : (
                        <Icon
                          name={"play"}
                          className={style({
                            color: paleta.color200,
                            $nest: {
                              // IMPORTANT PART
                              "&:hover": {
                                color: paleta.color800
                              }
                            }
                          })}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        verticalAlign: "bottom",
                        display: "inline-block"
                      }}
                    >
                      {tr.idMC} {tr.idMC_ord}
                    </div>
                    <div
                      style={{
                        verticalAlign: "bottom",
                        display: "inline-block"
                      }}
                    >
                      {tr.idMC_ord}{" "}
                      {/*
                                      <a
                                        target={"_blank"}
                                        href={
                                          "https://www.allmusic.com/composition/les-contes-dhoffmann-opera-in-4-acts-" +
                                          tr.idMC
                                        }
                                      >{tr.name}</a>
*/}
                      <NavLink to={"/versions/" + tr.idMC + "/" + tr.idMC_ord}>
                        {tr.name}
                      </NavLink>{" "}
                    </div>
                  </div>
                </div>
              </>
            );
            return (
              <List.Content style={{ marginBottom: 0 }}>
                {isNewMC && (
                  <>
                    {brEl}
                    <p>
                      <h3 style={{ margin: 0 }}>{at.composerName}</h3>
                    </p>
                    <p
                      style={{
                        marginLeft: 10,
                        marginTop: -10,
                        marginBottom: 0
                      }}
                    >
                      <h4>{at.nameWork}</h4>
                    </p>
                  </>
                )}
                <p className={"item"} style={{ marginLeft: 20 }}>
                  {renderTrack}
                </p>
              </List.Content>
            );
          })}
      </List>
    );
  }
}

export default withRouter(PlayListTracks as any);
