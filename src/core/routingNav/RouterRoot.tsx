import * as React from "react";
import ComposerCollection from "../../views/composer/collection/ComposerCollection";
import { Switch, Route, Router, withRouter, Redirect } from "react-router";
import ComposerItem from "../../views/composer/ComposerItem";
import {
  ROUTE_COMPOSERS_COLLECTION,
  ROUTE_ALBUMS_COLLECTION,
  ROUTE_ALBUM_TRACKS,
  ROUTE_WORK_VERSIONS,
  ROUTE_COMPOSERS_ITEM,
  ROUTE_PERFORMERSROL_COLLECTION,
  ROUTE_PERFORMER_ALBUMS,
  ROUTE_COMPOSERS_COLLECTION_BY_NACIO, ROUTE_PERFORMER_COLLECTION, ROUTE_RANDOM_TRACK, ROUTE_SEARCH_RESULTS
} from "../../util/constants";
import { BrowserRouter } from "react-router-dom";
import AlbumCollection from "../../views/album/collection/AlbumCollection";
import AlbumTracksItem from "../../views/album/tracks/AlbumTracksItem";
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
    return (
      <Switch>
        <Redirect
          from="/menu"
          exact
          to={ROUTE_COMPOSERS_COLLECTION}
          push={true}
        />
        <Route path="/" exact={true} component={Hero} />
        <Route path="/menu" exact={true} component={ComposerCollection} />
        <Route
          path={ROUTE_COMPOSERS_ITEM}
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
          exact={true}
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
          path={ROUTE_PERFORMER_ALBUMS}
          exact={true}
          component={PerformerAlbumCollection}
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
    );
  }
}

export default withRouter(RouterRoot as any);
