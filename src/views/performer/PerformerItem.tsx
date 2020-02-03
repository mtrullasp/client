import * as React from "react";
import HyperText from "../../widgets/HyperText/HyperText";
import parse from "html-react-parser";
import DivInline from "../../widgets/DivInline.";
import ArtistRel from "../../widgets/artistRel/ArtistRel";
import { Tab, Grid } from "semantic-ui-react";
import ComposerStore from "../../core/stores/ComposerStore";
import { inject, observer } from "mobx-react";
// import AlbumCollection from "../album/collection/AlbumCollection";
import PerformerAlbumCollection from "../album/collection/PerformerAlbumCollection";
import { PerformerStore } from "../../core/stores/PerformerStore";
import MaxHeightContainer from "../../widgets/MaxHeightContainer";
import { Image } from "semantic-ui-react";
import { match, withRouter } from "react-router";
import ReactAvatar from "react-avatar";
import { observable } from "mobx";
import { Util } from "leaflet";
import bind = Util.bind;
import Scrollbars from "react-custom-scrollbars";

interface IProps {
  composerStore?: ComposerStore;
  performerStore?: PerformerStore;
  match: match;
}
@inject("composerStore")
@inject("performerStore")
@observer
class PerformerItem extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    debugger;
    props.composerStore.goArtist(props.match.params["idMN"]);
  }

  render() {
    const ps = this.props.performerStore;
    const relWidth = Math.min(
      100 / this.props.performerStore.performerRelsGrouped.length,
      25
    );
    const panes = [
      {
        menuItem: "Biography",
        render: () => (
          <MaxHeightContainer style={{ overflowY: "auto" }}>
            <Scrollbars autoHide>
              <HyperText
                onLink={(href: string, e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (this.props.composerStore.onHyperLink(href, e)) {
                    //return;
                  }
                }}
                text={
                  <div
                    className={"overflow-container"}
                    style={{ marginRight: 0, fontSize: 17 }}
                  >
                    {parse(
                      this.props.performerStore.activePerformer?.Performer
                        ?.biographpy || ""
                    )}
                  </div>
                }
              />
            </Scrollbars>
          </MaxHeightContainer>
        )
      },
      {
        menuItem: "Discography",
        render: () => (
          <div style={{ position: "relative", top: -10 }}>
            <PerformerAlbumCollection />
          </div>
        )
      },
      {
        menuItem: "Connections",
        render: () => (
          <div>
            {this.props.performerStore.performerRelsGrouped.map(pr => {
              return (
                <DivInline style={{ width: relWidth.toString() + "%", verticalAlign: "top" }}>
                  <ArtistRel
                    relTip={pr.key}
                    rels={ps.performerRels}
                    goArtist={this.props.composerStore.goArtist.bind(
                      this.props.composerStore
                    )}
                    getImageArtist={this.props.composerStore.getImageArtist}
                  />
                </DivInline>
              );
            })}
          </div>
        )
      }
    ];
    const tabs = (
      <Tab
        renderActiveOnly={true}
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        style={{ marginRight: 100 }}
      />
    );

    return (
      <div>
        <Grid columns={12}>
          <Grid.Column width={1}>
            <ReactAvatar
              name={
                this.props.performerStore?.activePerformer?.Performer?.nameMN
              }
              size={"100px"}
              round={true}
              src={
                this.props.performerStore.activePerformer?.Performer?.urlImage
              }
              style={{ filter: "grayscale(90%)" }}
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <span
              style={{
                marginLeft: 10,
                verticalAlign: "top",
                fontSize: 50,
                display: "block"
              }}
            >
              {this.props.performerStore?.activePerformer?.Performer?.nameMN}
            </span>
            <span
              style={{
                marginLeft: 10,
                fontSize: 25,
                verticalAlign: "bottom"
              }}
            >
              {this.props.performerStore?.activePerformer?.MainRol}
            </span>
          </Grid.Column>
        </Grid>
        <section>{tabs}</section>
      </div>
    );
  }
}

export default withRouter(PerformerItem as any);
