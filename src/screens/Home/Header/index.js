import React from "react";
import PropTypes from "prop-types";
import { Menu } from "../../../components/popover";
import "./index.css";

export class Header extends React.PureComponent {
  static propTypes = {
    shouldShow: PropTypes.bool.isRequired,
    onToggleMenu: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="row home_header">
        <Menu isVisible={this.props.shouldShow} />
        <div className="home_user_image_grid" onClick={this.props.onToggleMenu}>
          <img src={""} alt="" />
        </div>
      </div>
    );
  }
}
