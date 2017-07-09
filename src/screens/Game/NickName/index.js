import React from "react";
import "./index.css";

export const NickName = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4 nickName">
        <div className="row">
            <input className="col-xs-12" type="text"/>
        </div>
        <div className="row nickName_continue_btn_holder">
            <div className="col-xs-12 col-sm-offset-4 col-sm-4">
                <input type="button" value="continue"/>
            </div>
        </div>
      </div>
    </div>
  );
};
