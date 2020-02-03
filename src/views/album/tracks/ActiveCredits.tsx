import * as React from "react";
import { inject, observer } from "mobx-react";
import AlbumStore, { ICreditLink } from "../../../core/stores/AlbumStore";
import { Container, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { History } from "history";
import { RouterStore } from "../../../core/stores/RouterStore";
import { CSSProperties } from "react";

interface IProps {
  albumStore?: AlbumStore;
  routerStore?: RouterStore;
  style?: CSSProperties;
  credits: Array<ICreditLink>;
}
@inject("albumStore")
@inject("routerStore")
@observer
class ActiveCredits extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <p style={{ ...(this.props.style || {}), fontSize: 14 }}>
        {this.props.albumStore.activeTrackCredits &&
          this.props.albumStore.activeTrackCredits.map(credit => {
            return (
              <>
                <span>{credit.creditTip}</span>{" "}
                <a
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.albumStore.activeArtistIdMN = credit.idMN;
                    this.props.albumStore.activeArtistNameMN = credit.nameMN;
                    this.props.routerStore.go(
                      "/performer/" + credit.idMN
                    );
                  }}
                >
                  {credit.creditValue}
                </a>
                .{" "}
              </>
            );
          })}
      </p>
    );
  }
}

export default ActiveCredits;
