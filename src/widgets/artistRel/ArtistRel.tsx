import * as React from "react";
import ComposerStore, { IArtistRel } from "../../core/stores/ComposerStore";
import { inject, observer } from "mobx-react";
import { List, Image, Divider } from "semantic-ui-react";
import { ROUTE_COMPOSER_ITEM } from "../../util/constants";
import { RouterStore } from "../../core/stores/RouterStore";
import Avatar from "react-avatar";
import DivInline from "../DivInline.";
import MaxHeightContainer from "../MaxHeightContainer";
import { ABSOLUTE_MARGIN } from "../../Header";
import Scrollbars from "react-custom-scrollbars";
import Button3d from "../3dbutton/Button3d";
import OnHover3d from "../3dbutton/OnHover3d";

interface IProps {
  rels: Array<IArtistRel>;
  relTip: string;
  goArtist: (idArtist: string) => void;
  getImageArtist: (idArtist: string) => string;
  routerStore?: RouterStore;
}
@inject("routerStore")
@observer
class ArtistRel extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <MaxHeightContainer
        footerHeight={ABSOLUTE_MARGIN}
        style={{ overflowY: "auto" }}
      >
        <Scrollbars autoHide>
          <List selection verticalAlign="middle" style={{ margin: 20 }}>
            <List.Header>
              <h3>{this.props.relTip || "Relacionats"}</h3>
            </List.Header>
            <Divider />
            {this.props.rels
              .filter(a => a.relTipName === this.props.relTip, this)
              .map((a, i) => {
                return (
                  <OnHover3d>
                    <List.Item
                      onClick={() => {
                        debugger;
                        this.props.goArtist(a.idArtistRel);
                        // this.props.composerStore.setActiveComposerId(a.idArtistRel);
                        // this.props.routerStore.go(ROUTE_COMPOSER_ITEM);
                      }}
                    >
                      <DivInline>
                        <Avatar
                          style={{ filter: "grayscale(100%)" }}
                          size={"40px"}
                          round={true}
                          src={this.props.getImageArtist(a.idArtistRel)}
                          name={a.artistName}
                        />
                      </DivInline>
                      <DivInline style={{ marginLeft: 10 }}>
                        <List.Content>
                          <List.Header>{a.artistName}</List.Header>
                        </List.Content>
                      </DivInline>
                    </List.Item>
                  </OnHover3d>
                );
              })}
          </List>
        </Scrollbars>
      </MaxHeightContainer>
    );
  }
}

export default ArtistRel;
