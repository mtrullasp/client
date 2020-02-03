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
import ActiveCredits from "./ActiveCredits";
import MyPaper from "../../../widgets/MyPaper";
import { style } from "typestyle";
import paleta from "../../../styles/paleta";
import { withRouter } from "react-router";
import AlbumTags from "../toolbar/AlbumTags";
import parse from "html-react-parser";
import PlayList, { IPlayListWork, IPlayListTrack } from "../playlist/PlayList";

interface IParams {
  idAlbum: string;
}
interface IProps {
  albumStore?: AlbumStore;
  match?: match<IParams>;
}
@inject("albumStore")
@observer
class AlbumTracksNew extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
  }

  static defaultProps = {};

  render() {
    const aStore = this.props.albumStore;
    if (
      !this.props.albumStore.activeAlbum ||
      !aStore.responseAlbumsTracks /*||
      !aStore.responseAlbumsTracks.AlbumWorksGrouped*/
    ) {
      return null;
    }
    var lastIdMC: string = "";
    var countMC: number = 0;
    const works: Array<
      IPlayListWork
    > = aStore.responseAlbumsTracksAlbumWorksGrouped.map((tr, index) => {
      return {
        workName: tr.nameWork,
        workItemOrder: tr.idMC_ord,
        workItemName: tr.nameWork,
        workComposerName: tr.composerName,
        workComposerId: tr.composerId,
        tracks: tr.tracks.map(t => {
          return {
            name: t.name,
            duration: t.duration,
            idTrack_DZ: t.idTrack_DZ
          } as IPlayListTrack;
        })
      } as IPlayListWork;
    });
    const renderTrack = (
      <div>
        <PlayList title={""} works={works} />
      </div>
    );
    return (
      <List>
        <List.Content>
          <p className={"item"} style={{ marginLeft: 20 }}>
            {renderTrack}
          </p>
        </List.Content>
      </List>
    );
  }
}

export default withRouter(AlbumTracksNew as any);
