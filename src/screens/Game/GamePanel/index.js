import React from "react";
import "./index.css";

export default class GamePanel extends React.PureComponent {
  componentDidMount() {
    this.props.setReference(this.gamePanel);
  }

  render() {
    return <div className="game_panel" ref={ref => (this.gamePanel = ref)} />;
  }
}
