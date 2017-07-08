import React from "react";
import { Vertical } from "../../../containers/popover";
import "./index.css";

export const Header = props => {
  return (
    <div className="row home_header">
      <div className="col-xs-12">
        <Vertical isVisible={props.isTopOptionVisible} />
        <div
          className="home_user_image_grid"
          onClick={props.onDisplayTopPopOver}
        >
          <img src={""} alt="" />
        </div>
      </div>
    </div>
  );
};
