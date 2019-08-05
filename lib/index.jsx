"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const mobx_react_1 = require("mobx-react");
const Header_1 = require("./Header");
const ComposerStore_1 = require("./stores/ComposerStore");
const GeoStore_1 = require("./stores/GeoStore");
// import ComposerCollection from "./composer/collection/ComposerCollection";
const AlbumStore_1 = require("./stores/AlbumStore");
const PlayerStore_1 = require("./stores/PlayerStore");
// import { Store } from "@material-ui/icons";
const RouterStore_1 = require("./stores/RouterStore");
const react_router_dom_1 = require("react-router-dom");
const RouterRoot_1 = require("./routingNav/RouterRoot");
const App_1 = require("./App");
const PerformerStore_1 = require("./stores/PerformerStore");
// import Hero from "./Hero";
// import TitleBar from "./layout/TitleBar";
const routerStore = new RouterStore_1.RouterStore();
const geoStore = new GeoStore_1.default();
const composerStore = new ComposerStore_1.default(geoStore, routerStore);
const performerStore = new PerformerStore_1.PerformerStore();
const albumStore = new AlbumStore_1.default(performerStore);
const playerStore = new PlayerStore_1.PlayerStore();
class Group {
    constructor(key) {
        this.members = [];
        this.key = key;
    }
}
/*ReactDOM.render(<div>hola</div>, document.getElementById("root"));*/
ReactDOM.render(<mobx_react_1.Provider composerStore={composerStore} albumStore={albumStore} playerStore={playerStore} routerStore={routerStore} performerStore={performerStore}>
    <div style={{
    overflow: "hidden",
    padding: 0,
    margin: 0,
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(" + require("./img/fons.jpg") + ")",
    backgroundSize: "cover",
    backgroundOrigin: "border-box"
}}>
      <react_router_dom_1.BrowserRouter>
        <div>
          {<App_1.default headerContent={<Header_1.default />} bodyContent={<RouterRoot_1.default />}/>}
        </div>
      </react_router_dom_1.BrowserRouter>
    </div>
  </mobx_react_1.Provider>, document.getElementById("root"));
//# sourceMappingURL=index.jsx.map