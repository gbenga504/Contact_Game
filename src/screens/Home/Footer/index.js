import React from "react";
import "./index.css";

export const Footer = props => {
  return (
    <div className="footer">
      <div className="col-xs-12">
        <span>Contributors</span> &nbsp; &nbsp;
        <span onClick={props.toggleFeedback}>Feedback</span> &nbsp; &nbsp;
        <span>Updates</span>
      </div>
    </div>
  );
};
