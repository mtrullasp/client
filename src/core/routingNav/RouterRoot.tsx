import * as React from "react";
import ComposerCollection from "../../views/composer/collection/ComposerCollection";
import { Switch, Route, Router, withRouter, Redirect } from "react-router";
import ComposerItem from "../../views/composer/ComposerItem";
import { Transition, CSSTransition } from "react-transition-group";
import {
  ROUTE_COMPOSERS_COLLECTION,
  ROUTE_ALBUMS_COLLECTION,
  ROUTE_ALBUM_TRACKS,
  ROUTE_WORK_VERSIONS,
  ROUTE_COMPOSERS_ITEM_WORKS,
  ROUTE_PERFORMERSROL_COLLECTION,
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO,
  ROUTE_PERFORMER_COLLECTION,
  ROUTE_RANDOM_TRACK,
  ROUTE_SEARCH_RESULTS,
  ROUTE_COMPOSER_ITEM,
  ROUTE_PERFORMER
} from "../../util/constants";
import { BrowserRouter } from "react-router-dom";
import AlbumCollection from "../../views/album/collection/AlbumCollection";
import AlbumTracksItem from "../../views/album/tracks/AlbumItemDetail";
import KlassikRank from "../../views/composerWork/klassikRank/KlassikRank";
import PerformerRolsCollection from "../../views/performer/collection/PerformerRolsCollection";
import Hero from "../../views/Hero";
import PerformerCollection from "../../views/performer/collection/PerformerCollection";
import ComposersGroupedByNacio from "../../views/composer/toolbar/ComposersGroupedByNacio";
import { History } from "history";
import { RouterStore } from "../stores/RouterStore";
import { inject } from "mobx-react";
import PerformerAlbumCollection from "../../views/album/collection/PerformerAlbumCollection";
import RandomTracks from "../../moduls/RandomTracks";
import ResultSearch from "../search/ResultSearch";
import TransitionGroup from "semantic-ui-react/dist/commonjs/modules/Transition/TransitionGroup";
import PerformerItem from "../../views/performer/PerformerItem";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  routerStore?: RouterStore;
  history?: History;
  location?: Location;
}
@inject("routerStore")
class RouterRoot extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);

    props.routerStore.setHistory(props.history);
    props.routerStore.setLocation(props.location);
  }

  render() {
    const location = this.props.location;
    return (
      <Transition timeout={1000}>
        <Switch key={location.pathname}>
          <Redirect
            from="/menu"
            exact
            to={ROUTE_COMPOSERS_COLLECTION}
            push={true}
          />
          <Route path="/" exact={true} component={Hero} />
          <Route path="/menu" exact={true} component={ComposerCollection} />
          <Route
            path={ROUTE_COMPOSER_ITEM}
            exact={true}
            component={ComposerItem}
          />
          <Route
            path={ROUTE_COMPOSERS_COLLECTION}
            exact={false}
            component={ComposerCollection}
          />
          <Route
            path={ROUTE_ALBUMS_COLLECTION}
            exact={true}
            component={AlbumCollection}
          />
          <Route
            path={ROUTE_ALBUM_TRACKS}
            exact={false}
            component={AlbumTracksItem}
          />
          <Route
            path={ROUTE_WORK_VERSIONS}
            exact={true}
            component={KlassikRank}
          />
          <Route
            path={ROUTE_PERFORMERSROL_COLLECTION}
            exact={true}
            component={PerformerRolsCollection}
          />
          <Route
            path={ROUTE_PERFORMER_COLLECTION}
            exact={true}
            component={PerformerCollection}
          />
          <Route
            path={ROUTE_PERFORMER}
            exact={true}
            component={PerformerItem}
          />
          <Route
            path={ROUTE_RANDOM_TRACK}
            exact={true}
            component={RandomTracks}
          />
          <Route
            path={ROUTE_SEARCH_RESULTS}
            exact={true}
            component={ResultSearch}
          />
        </Switch>
      </Transition>
    );
  }
}

export default withRouter(RouterRoot as any);
