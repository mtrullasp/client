import * as React from "react";
import "../../assets/fonts/Myriad/style.css";
import "./MyText.css";
import "./MyText_Next.css";

interface IProps {
  text: string;
  additionalClasName?: string;
}
class MyText extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <span className={"h1 tresdtext " + this.props.additionalClasName}>
        {this.props.text}
      </span>
    );
  }
}

export default MyText;
