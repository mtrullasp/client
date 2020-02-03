import * as React from "react";
import { Icon, Image, Table } from "semantic-ui-react";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import IconPlaying from "../../../moduls/player/controls/IconPlaying";
import { style } from "typestyle";
import paleta from "../../../styles/paleta";
import { Link } from "react-router-dom";
import { ROUTE_COMPOSER, ROUTE_COMPOSER_ITEM } from "../../../util/constants";

export interface IPlayListWork {
  workName: string;
  workItemOrder: number;
  workItemName: string;
  workComposerName: string;
  workComposerId: string;
  mainArtists: string;
  tracks: Array<IPlayListTrack>;
}

export interface IPlayListTrack {
  imgCover: string;
  name: string;
  mainArtists: Array<string>;
  idTrack_DZ: number;
  idrack_DZ_ord: number;
  duration: number;
}

interface IPropsWork {
  albumStore?: AlbumStore;
  composerStore?: ComposerStore;
  work: IPlayListWork;
  composerName: string;
  composerId: string;
}
@inject("albumStore")
@inject("composerStore")
@observer
class PlayListWork extends React.Component<IPropsWork, {}> {
  constructor(props: IPropsWork, context: any) {
    super(props, context);
  }

  render() {
    const renderBlock = (
      <Table selectable basic="very" padded={true} compact={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              {!!this.props.composerName && (
                <h2 onClick={e => {
                  this.props.composerStore.setActiveComposerId(this.props.composerId);
                  this.props.composerStore.goArtist(this.props.composerId);
                }} style={{ margin: 0, cursor: "pointer" }}>{this.props.composerName}</h2>
              )}
              <h3 style={{ margin: 0, padding: 0 }}>
                <b>{this.props.work.workName}. </b>
                <span style={{ fontWeight: "normal" }}>
                  {this.props.work.workItemName}
                </span>
              </h3>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.work?.tracks?.map((t, iTr) => {
            return (
              <Table.Row
                key={iTr}
                onClick={() => {
                  this.props.albumStore.playTracks(
                    this.props.work?.tracks?.map(tr => tr.idTrack_DZ),
                    t.idrack_DZ_ord,
                    iTr
                  );
                }}
              >
                <Table.Cell style={{ width: 20, padding: 0 }}>
                  <div style={{ opacity: 0.8 }}>
                    {this.props.albumStore.trackIdIsPlaying === t.idTrack_DZ ? (
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
                </Table.Cell>
                <Table.Cell>
                  <h4
                    style={{
                      fontWeight:
                        this.props.albumStore.trackIdIsPlaying === t.idTrack_DZ
                          ? 900
                          : 300
                    }}
                  >
                    {t.name}
                  </h4>
                </Table.Cell>
                <Table.Cell collapsing textAlign="right">
                  <h4>
                    {this.props.albumStore.convertSecondsToTimeFormat(
                      t.duration
                    )}
                  </h4>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
    return renderBlock;
  }
}

interface IProps {
  title: string;
  works: Array<IPlayListWork>;
}
class PlayList extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    debugger;
    let antComposerName: string = "";
    let composerName: string = "";
    return (
      <div>
        <section>
          {this.props.works.map(w => {
            if (w.workComposerName === antComposerName) {
              composerName = null;
            } else {
              composerName = w.workComposerName;
              antComposerName = composerName;
            }
            return <PlayListWork work={w} composerName={composerName} composerId={w.workComposerId}/>;
          })}
        </section>
      </div>
    );
  }
}

export default PlayList;
