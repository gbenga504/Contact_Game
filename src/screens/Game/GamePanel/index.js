import React from "react";
import PropTypes from "prop-types";
import gameContoller from "../../../utils/gameController";
import { Loader } from "../../../components/popover";
import "./index.css";

export default class GamePanel extends React.PureComponent {
  static propTypes = {
    setReference: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.setReference(this.gamePanel);
  }

  render() {
    return (
      <div className="column game_panel" ref={ref => (this.gamePanel = ref)}>
        <Loader show={this.props.shouldShowLoader} showLoaderText />
      </div>
    );
  }
}
