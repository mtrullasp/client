"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
const typestyle_1 = require("typestyle");
const constants_1 = require("../util/constants");
class GroupedMenuCount extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        if (!this.props.data) {
            return null;
        }
        return (<semantic_ui_react_1.Menu size="small" vertical borderless={true}>
        {!!this.props.data &&
            this.props.data.map(d => {
                return (<semantic_ui_react_1.Menu.Item className={typestyle_1.style({ backgroundColor: "transparent" })} name={d.nameMenu} active={this.props.activeItem === d.idMenu} onClick={() => {
                    this.props.onChange(d.idMenu);
                }}>
                <semantic_ui_react_1.Label color={constants_1.SECOND_ACCENT_COLOR}>{d.countMenu}</semantic_ui_react_1.Label>
                {d.nameMenu}
              </semantic_ui_react_1.Menu.Item>);
            })}
      </semantic_ui_react_1.Menu>);
    }
}
GroupedMenuCount.defaultProps = {};
exports.default = GroupedMenuCount;
//# sourceMappingURL=GroupedMenuCount.jsx.map