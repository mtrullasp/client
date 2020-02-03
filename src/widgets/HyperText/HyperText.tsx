import * as React from "react";
import { CSSProperties, MouseEventHandler } from "react";
import "../../views/performer/biography-artist.scss";

interface IProps {
  text: JSX.Element;
  onLink: (href: string, e: React.MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
}
class HyperText extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div
        className={"hyperText"}
        style={{
          opacity: 1,
          backgroundColor: "transparent",
          ...this.props.style
        }}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          debugger ;let href = e.target["href"];
          if (!!href) {
            this.props.onLink(href, e);
          } else {
            debugger ;href = e.target.parentElement["href"];
            this.props.onLink(href, e);
          }
          /*
      e.preventDefault();debugger ;
      e.stopPropagation();
*/
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export default HyperText;
