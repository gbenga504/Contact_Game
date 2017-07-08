import React from "react";
import "./index.css";

export const Menu = props => {
  return (
    <div
      className={
        props.isVisible && props.isVisible === true
          ? `vertical_options_holder vertical_options_holder_active`
          : `vertical_options_holder`
      }
    >
      <div className="vertical_options_container">
        <div className="vetical_options">Logout</div>
        <div className="vetical_options">Dashboard</div>
        <div className="vetical_options">share</div>
      </div>
    </div>
  );
};
