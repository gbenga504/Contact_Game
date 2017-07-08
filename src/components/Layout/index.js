import React from "react";
import "./index.css";

export const Layout = props => {
  return (
    <div className="row app_container">
      <div className="col-xs-12 app_container_column">
        {props.children}
      </div>
    </div>
  );
};
