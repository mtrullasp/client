import * as React from "react";
import { Button, ButtonGroup, Label } from "semantic-ui-react";
import MyPaper from "../../../widgets/MyPaper";
import { Paper } from "@material-ui/core";
import paleta from "../../../styles/paleta";
import { style } from "typestyle";

export interface ILinkTag {
  prompt: string;
  text: string;
  linkTo: string;
}

interface IProps {
  items: Array<ILinkTag>;
}
class AlbumTags extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      !!this.props.items &&
      this.props.items.length &&
      this.props.items.map((item, index) => {
        return (
          <Button
            as="div"
            positive={false}
            labelPosition="left"
            size={"mini"}
            compact={true}
            circular={true}
          >
            <Label as="a" size={"mini"} color={"black"}>
              {item.prompt}
            </Label>
            <Button size={"mini"} compact={true}>
              {item.text}
            </Button>
            <span style={{width: 5}}/>
          </Button>
        );
      })
    );
  }
}

export default AlbumTags;
