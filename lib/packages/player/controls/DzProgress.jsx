"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AppState } from "../../core/stores/AppStore";
const mobx_react_1 = require("mobx-react");
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const Slider_1 = require("@material-ui/lab/Slider");
const Icon = require("react-feather");
const constants_1 = require("../../../util/constants");
const styles = styles_1.createStyles({
    root: {
        width: "100%",
        position: "fixed"
    },
    slider: {
        padding: 0
    },
    track: {
        height: 2
    },
    trackBefore: {
        backgroundColor: constants_1.SECOND_ACCENT_COLOR
    },
    circle: {
        height: 40
    }
});
let DzProgress = class DzProgress extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (event, value) => {
            this.setState({ value: value });
            DZ.player.seek((value / this.state.max) * 100);
        };
        this.state = {
            value: 0,
            max: 0,
            clicked: false
        };
    }
    componentDidMount() {
        var that = this;
        DZ.Event.subscribe("player_position", function (arg) {
            that.setState({
                value: arg[0],
                max: arg[1]
            });
        });
    }
    render() {
        //var timeValue = dateToStr(this.state.value);
        //var timeMax = dateToStr(this.state.max);
        const { classes } = this.props;
        const { value } = this.state;
        return (<div className={classes.root}>
        <Slider_1.default classes={{
            container: classes.slider,
            track: classes.track,
            trackBefore: classes.trackBefore
        }} thumb={<Icon.Circle className="progress-circle"/>} value={value} max={this.state.max} onChange={this.onChange}/>
      </div>);
    }
};
DzProgress = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], DzProgress);
exports.default = styles_1.withStyles(styles)(DzProgress);
//# sourceMappingURL=DzProgress.jsx.map
