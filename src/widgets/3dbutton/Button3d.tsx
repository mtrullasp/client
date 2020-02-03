import * as React from "react";
import "./css/style.css";
import { CSSProperties } from "react";
import { MouseEventHandler } from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";

interface IProps {
  text: string | SemanticICONS;
  isIcon: boolean;
  buttonHeight: number;
  buttonPadding?: number;
  style?: CSSProperties;
  childStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  onClick?: MouseEventHandler;
  fontSize?: number;
  size?: IconSizeProp;
  top: number;
  left: number;
}
class Button3d extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div
        className="button3d-container"
        style={{
          position: "absolute",
          top: this.props.top,
          left: this.props.left,
          height: "unset",
          lineHeight: "0px",
          verticalAlign: "middle",
          ...this.props.style
        }}
        onClick={this.props.onClick}
      >
        <li id="LI_1">
          {this.props.isIcon ? (
            <a id="A_2" style={{ ...this.props.childStyle }}>
              <span id="SPAN_3" style={{ width: 10, textAlign: "center" }}>
                <Icon
                  name={this.props.text as SemanticICONS}
                  size={this.props.size || "large"}
                  style={{
                    marginTop: -10,
                    textAlign: "center",
                    position: "relative",
                    left: -5,
                    top: 2,
                    ...this.props.iconStyle
                  }}
                />
              </span>
            </a>
          ) : (
            <a id="A_2" style={{ ...this.props.childStyle }}>
              <span id="SPAN_3" style={{ ...this.props.childStyle }}>
                {this.props.text}
              </span>
            </a>
          )}
        </li>
      </div>
    );
  }
}

export default Button3d;
