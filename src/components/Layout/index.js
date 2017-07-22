import React from "react";
import "./index.css";

export const Layout = props => {
  return (
    <div className="column app_container">
      {props.children}
    </div>
  );
};
