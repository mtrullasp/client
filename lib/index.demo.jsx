"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const mobx_react_devtools_1 = require("mobx-react-devtools");
class AppState {
    constructor() {
        this.timer = 0;
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }
    resetTimer() {
        this.timer = 0;
    }
}
__decorate([
    mobx_1.observable
], AppState.prototype, "timer", void 0);
let TimerView = class TimerView extends React.Component {
    constructor() {
        super(...arguments);
        this.onReset = () => {
            this.props.appState.resetTimer();
        };
    }
    render() {
        return (<div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <mobx_react_devtools_1.default />
      </div>);
    }
};
TimerView = __decorate([
    mobx_react_1.observer
], TimerView);
const appState = new AppState();
ReactDOM.render(<TimerView appState={appState}/>, document.getElementById("root"));
//# sourceMappingURL=index.demo.jsx.map