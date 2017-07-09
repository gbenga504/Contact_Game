import React, { PureComponent } from "react";
import { NickName } from "./NickName";
import GamePanel from "./GamePanel";
import { Report } from "../../components/popover";

export default class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      game_panel_element: null,
      isFullScreen: false,
      nickName: "",
      reportMessage: null,
      reportType: null,
      reportId: Date.now()
    };
  }

  setNickNameValue = value => {
    this.setState({
      nickName: value
    });
  };

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
    if (this.state.nickName.length >= 3) {
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
    } else {
      this.setState({
        reportMessage:
          "Sorry, you need to provide a nick name with 3 characters",
        reportType: "error",
        reportId: Date.now()
      });
    }
  };

  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <Report
          id={this.state.reportId}
          message={this.state.reportMessage}
          type={this.state.reportType}
        />
        <div className="col-xs-12" style={{ height: "100%" }}>
          <NickName
            loadGame={this.renderGamePanel}
            setValue={this.setNickNameValue}
          />
          <GamePanel setReference={this.setReferenceToGamePanel} />
        </div>
      </div>
    );
  }
}
