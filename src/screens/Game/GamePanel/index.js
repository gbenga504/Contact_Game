import React from "react";
import PropTypes from "prop-types";
import gameController from "../../../utils/gameController";
import { Loader } from "../../../components/popover";
import "./index.css";

export default class GamePanel extends React.PureComponent {
  state = {
    assetLoadingTextRef: null
  };

  static propTypes = {
    setReference: PropTypes.func.isRequired
  };

  updateAssetLoadingTextState = ref => {
    this.setState({ assetLoadingTextRef: ref });
  };

  componentDidMount() {
    this.props.setReference(this.gamePanel);
  }

  componentDidUpdate() {
    if (this.props.shouldShowLoader === true)
      gameController.loadAssets(this.gamePanel, this.state.assetLoadingTextRef);
  }

  render() {
    return (
      <div className="column game_panel" ref={ref => (this.gamePanel = ref)}>
        <Loader
          show={this.props.shouldShowLoader}
          updateLoadingTextRef={this.updateAssetLoadingTextState}
          showLoaderText
        />
      </div>
    );
  }
}
