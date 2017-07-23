import React from "react";
import "./index.css";

export const NickName = props => {
  return (
    <div className="column">
      <input
        className="row"
        type="text"
        onKeyUp={ev => {
          props.setValue(ev.target.value);
        }}
        placeholder="Enter your game nick name"
      />
      <div className="row nickName_continue_btn_holder">
        <input type="button" className="button" value="continue" onClick={props.onLoadGame} />
      </div>
    </div>
  );
};
