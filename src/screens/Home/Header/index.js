import React from "react";
import { Vertical } from "../../../containers/popover";
import "./index.css";

export const Header = () => {
  return (
    <div className="row home_header">
      <div className="col-xs-12">
        <Vertical />
        <div className="home_user_image_grid">
          <img src={""} alt=""/>
        </div>
      </div>
    </div>
  );
};
