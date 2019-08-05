import * as React from "react";
import ComposerStore from "./core/stores/ComposerStore";
import { inject, observer } from "mobx-react";
import HeadNameComposer from "./views/header/HeadNameComposer";
import SearchInput from "./core/search/SearchInput";
import PrevButton from "./core/routingNav/PrevButton";
import QuotesCarousel from "./views/composer/QuotesCarousel";
import FavIcon from "./FavIcon";
import CollectionNav from "./core/routingNav/CollectionNav";
import RouterRoot from "./core/routingNav/RouterRoot";
import { BrowserRouter, withRouter } from "react-router-dom";
import App from "./App";
import {
  Button,
  Checkbox,
  Grid,
  Image,
  Menu,
  MenuItemProps
} from "semantic-ui-react";
// import { Store } from "@material-ui/icons";
import AlbumStore from "./core/stores/AlbumStore";
import ComposersWorksPerformers from "./views/header/ComposersWorksPerformers";
import { RouterStore } from "./core/stores/RouterStore";
import {
  MARGIN_HORITZONTAL,
  ROUTE_COMPOSERS_COLLECTION,
  ROUTE_PERFORMERSROL_COLLECTION,
  ROUTE_RANDOM_TRACK
} from "./util/constants";
import CollectionOrItem from "./views/header/CollectionOrItem";
import { History } from "history";
import { PerformerStore } from "./core/stores/PerformerStore";
import * as Icon from "react-feather";
import { style } from "typestyle";
import Button3d from "./widgets/3dbutton/Button3d";
export const HORITZONTAL_MARGIN = 100;
export const TOP_NAME = 0;
export const ABSOLUTE_MARGIN = 10;

interface IState {
  fets: boolean;
}

interface IProps {
  composerStore?: ComposerStore;
  albumStore?: AlbumStore;
  routerStore?: RouterStore;
  performerStore?: PerformerStore;
  history?: History;
}
@inject("composerStore")
@inject("albumStore")
@inject("routerStore")
@observer
class Header extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { fets: true };
  }

  state: IState;

  render() {
    if (!this.props.history) {
      return null;
    }
    let headerContent: JSX.Element = null;
    let bodyContent: JSX.Element = null;

    const composer = this.props.composerStore.activeComposer;
    headerContent = (
      <div style={{ backgroundColor: "whitesmoke" }}>
{/*
        <div
          style={{
            zIndex: 10000,
            position: "relative",
            top: 0,
            left: 0,
            width: 40,
            height: 50
          }}
        >
          {this.props.routerStore.canGoBack ? (
            <Icon.ArrowLeft
              size={"big"}
              className={style({ cursor: "pointer" })}
              onClick={() => this.props.routerStore.goBack()}
            />
          ) : (
            <FavIcon
              style={{ top: 4, left: 4, position: "relative" }}
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          )}
        </div>
*/}
        <div
          style={{
            zIndex: 10000,
            position: "absolute",
            top: 5,
            left: HORITZONTAL_MARGIN,
            right: HORITZONTAL_MARGIN
          }}
        >
          <div
            style={{
              display: "inline",
              position: "absolute",
              top: 0,
              left: 0
            }}
          >
            <Button3d
              text={"Composers"}
              buttonHeight={20}
              onClick={() => {
                this.props.history.push(ROUTE_COMPOSERS_COLLECTION);
              }}
              top={0}
              left={60}
            />
            <Button3d
              text={"Performers"}
              buttonHeight={20}
              onClick={() => {
                this.props.history.push(ROUTE_PERFORMERSROL_COLLECTION);
              }}
              top={0}
              left={220}
            />
{/*
            <ComposersWorksPerformers
              activeIndex={this.props.routerStore.menuIndex}
              onItemClick={(e: any, data: MenuItemProps) => {
                if (data.name === "Performers") {
                  this.props.routerStore.menuIndex = data.index;
                  this.props.history.push(ROUTE_PERFORMERSROL_COLLECTION);
                }
                if (data.name === "Composers") {
                  this.props.routerStore.menuIndex = data.index;
                  this.props.history.push(ROUTE_COMPOSERS_COLLECTION);
                }
              }}
            />{" "}
*/}
          </div>
{/*
          <div
            style={{
              display: "inline",
              position: "absolute",
              top: 0,
              left: 270
            }}
          >
            <CollectionOrItem
              onClick={() => {
                this.props.history.push(ROUTE_COMPOSERS_COLLECTION);
              }}
            />{" "}
          </div>
*/}

          <div
            style={{
              display: "inline",
              position: "absolute",
              top: 0,
              left: 470
            }}
          >
            <Button3d
              text={"Random"}
              buttonHeight={20}
              onClick={() => {
                this.props.history.push(ROUTE_RANDOM_TRACK);
              }}
              top={0}
              left={0}
            />
          </div>

{/*
          <div
            style={{
              display: "inline",
              position: "absolute",
              top: 0,
              left: 580
            }}
          >
            <Menu size="tiny" compact={true} items={["Guided Tour"]} />{" "}
          </div>
*/}

          <div
            style={{
              display: "inline",
              width: 350,
              position: "absolute",
              right: 50
            }}
          >
            <SearchInput />{" "}
          </div>

          {/*
            <div
              style={{
                display: "inline",
                position: "fixed",
                top: 20,
                right: 20
              }}
            >
              <Checkbox
                toggle={true}
                checked={this.state.fets}
                onChange={e => {
                  {

                    this.setState({ fets: !this.state.fets });
                    this.props.albumStore.setWoroksFets(this.state.fets);
                  }
                }}
              />
            </div>
*/}
        </div>
        <div
          style={{
            zIndex: 10000,
            cursor: "pointer",
            position: "fixed",
            top: 5,
            right: 10,
            opacity: 1
          }}
        >
          powered by
          <Image
            size={"tiny"}
            src={require("./assets/img/new_deezer_Logo.png")}
          />
        </div>
      </div>
    );

    return headerContent;
    //return <Layout headerContent={headerContent} bodyContent={bodyContent} />;
  }
}

export default withRouter(Header as any);
