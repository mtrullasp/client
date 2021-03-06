import * as React from "react";
import { withRouter, match } from "react-router";
import { inject, observer } from "mobx-react";
import AlbumStore from "../../../core/stores/AlbumStore";
import { List } from "semantic-ui-react";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import { Link } from "react-router-dom";
import { ROUTE_ALBUM_TRACKS } from "../../../util/constants";
import PlayList, {
  IPlayListWork,
  IPlayListTrack
} from "../../album/playlist/PlayList";
import KlassikRankPlayList from "../../album/playlist/KlassikRankPlayList";
import PlayerBar from "../../../moduls/player/PlayerBar.new";
interface IProps {
  albumStore?: AlbumStore;
  match: match;
}

const IMAGE_SIZE = 200;

@inject("albumStore")
@observer
class KlassikRank extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    props.albumStore.getKlassikRank(
      props.match.params["idMC"],
      props.match.params["idMCord"]
    );
  }

  static defaultProps = {};

  render() {
    if (!this.props.albumStore.klassikRank) {
      return null;
    }
    const tracks: Array<
      IPlayListTrack
    > = this.props.albumStore.klassikRank.tracks.map(k => {
      return {
        imgCover: k.coverBig,
        name: k.albumName,
        idTrack_DZ: k.idTrack,
        duration: k.duration,
        mainArtists: k.mainArtists
      } as IPlayListTrack;
    });
    const works: Array<IPlayListWork> = [
      {
        workName: this.props.albumStore.klassikRank.workName,
        workItemOrder: this.props.albumStore.klassikRank.workItemOrder,
        workItemName: this.props.albumStore.klassikRank.workItemName,
        workComposerName: this.props.albumStore.klassikRank
          .workComposerName,
        tracks: tracks
      } as IPlayListWork
    ];
    return (
      <MaxHeightContainer style={{ overflowY: "hidden" }} footerHeight={100}>
        <KlassikRankPlayList title={""} works={works} />
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            overflow: "hidden",
            background: "#eee",
            opacity: 0.9
          }}
        >
          <PlayerBar />
        </div>
      </MaxHeightContainer>
    );
  }
  /*
  render() {
    return (
      <MaxHeightContainer style={{ overflowY: "auto" }}>
        <List relaxed={true} size={"big"}>
          {this.props.albumStore.klassikRankWebApi &&
            this.props.albumStore.klassikRankWebApi.map(k => {
              return (
                <List.Item>
                  <Link
                    to={ROUTE_ALBUM_TRACKS.replace(
                      ":idAlbum",
                      k.idAlbum.toString()
                    )}
                  >
                    <img
                      src={k.coverBig}
                      style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                    />{" "}
                    {k.albumName}
                  </Link>
                </List.Item>
              );
            })}
        </List>
      </MaxHeightContainer>
    );
  }
*/
}

export default withRouter(KlassikRank as any);
