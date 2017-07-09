import React, { PureComponent } from "react";
import { NickName } from "./NickName";

export default class Game extends PureComponent {
  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col-xs-12" style={{ height: "100%" }}>
          <NickName />
        </div>
      </div>
    );
  }
}
