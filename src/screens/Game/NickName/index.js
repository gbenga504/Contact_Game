import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export class NickName extends React.PureComponent {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    onLoadGame: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="column">
        <input
          className="row"
          type="text"
          onKeyUp={ev => {
            this.props.setValue(ev.target.value);
          }}
          placeholder="Enter your game nick name"
        />
        <div className="row nickName_continue_btn_holder">
          <input
            type="button"
            className="button"
            value="continue"
            onClick={this.props.onLoadGame}
          />
        </div>
      </div>
    );
  }
}
