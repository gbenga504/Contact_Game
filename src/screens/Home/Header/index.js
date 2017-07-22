import React from "react";
import { Menu } from "../../../components/popover";
import "./index.css";

export const Header = props => {
  return (
    <div className="row home_header">
      <Menu isVisible={props.shouldShow} />
      <div className="home_user_image_grid" onClick={props.onToggleMenu}>
        <img src={""} alt="" />
      </div>
    </div>
  );
};
