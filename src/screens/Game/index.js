import React, { PureComponent } from "react";
import {NickName} from "./NickName";

export default class Game extends PureComponent {
  render() {
    return (
        <div className="row">
            <div className="col-xs-12">
              <NickName />
            </div>
        </div>
    )
  }
}
