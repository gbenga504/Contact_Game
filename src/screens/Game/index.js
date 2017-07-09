import React, { PureComponent } from "react";
import { NickName } from "./NickName";
import GamePanel from "./GamePanel";

export default class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      game_panel_element: null,
      isFullScreen: false,
      nickName : null,
    };
  }

  setReferenceToGamePanel = ref => {
    this.setState({
      game_panel_element: ref
    });
  };

  isFullScreenAvailable = () => {
    return (
      document.fullScreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      document.fullscreenElement
    );
  };

  renderGamePanel = element => {
    if (this.isFullScreenAvailable()) {
      this.state.game_panel_element.classList.add("game_panel_show");
      if (this.state.game_panel_element.requestFullscreen)
        this.state.game_panel_element.requestFullscreen();
      else if (this.state.game_panel_element.mozRequestFullScreen)
        this.state.game_panel_element.mozRequestFullScreen();
      else if (this.state.game_panel_element.webkitRequestFullScreen) {
        this.state.game_panel_element.webkitRequestFullScreen();
      } else if (this.state.game_panel_element.msRequestFullscreen)
        this.state.game_panel_element.msRequestFullscreen();
      this.setState({
        isFullScreen: true
      });
    }
  };

  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col-xs-12" style={{ height: "100%" }}>
          <NickName loadGame={this.renderGamePanel} />
          <GamePanel setReference={this.setReferenceToGamePanel} />
        </div>
      </div>
    );
  }
}
