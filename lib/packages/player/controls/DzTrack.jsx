"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classNames = require("classnames");
class DzTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText: "Play",
            isPlaying: false
        };
    }
    render() {
        if (this.props.track) {
            var that = this;
            var containerStyle = {
                backgroundImage: "url(" + this.props.track.album.cover_medium + ")"
            };
            document.title =
                this.props.track.title +
                    " - " +
                    this.props.track.artist.name +
                    " - Dflow";
            return (<div className="track">
          <div className="background-container" style={containerStyle}/>
          <div className="album-container">
            <div className="album">
              <img className={classNames({
                spin: that.state.isPlaying,
                "album-art": true
            })} src={this.props.track.album.cover_medium} alt="Album Art"/>
            </div>
            <div>
              <div>
                <h3 className="trackTitle" title={this.props.track.title}>
                  {this.props.track.title}
                </h3>
                <h4 className="trackArtist" title={this.props.track.artist.name}>
                  {this.props.track.artist.name}
                </h4>
              </div>
            </div>
          </div>
        </div>);
        }
        return <div />;
    }
}
exports.default = DzTrack;
//# sourceMappingURL=DzTrack.jsx.map