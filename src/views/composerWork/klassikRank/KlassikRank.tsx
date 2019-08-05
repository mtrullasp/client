import * as React from "react";
import { withRouter, match } from "react-router";
import { inject, observer } from "mobx-react";
import AlbumStore from "../../../core/stores/AlbumStore";
import { List } from "semantic-ui-react";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import { Link } from "react-router-dom";
import { ROUTE_ALBUM_TRACKS } from "../../../util/constants";

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
      props.match.params["idWork"],
      props.match.params["idMCord"]
    );
  }

  static defaultProps = {};

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
}

export default withRouter(KlassikRank as any);
