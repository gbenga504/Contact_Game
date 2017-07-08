import React from "react";
import "./index.css";

export class Vertical extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidUpdate() {
    this.setState({
      isVisible: this.props.isVisible
    });
  }

  render() {
    return (
      <div
        className={
          this.state.isVisible && this.state.isVisible === true
            ? `vertical_options_holder vertical_options_holder_active`
            : `vertical_options_holder`
        }
      >
        <div className="vertical_options_container">
          <div className="vetical_options">Logout</div>
          <div className="vetical_options">Dashboard</div>
          <div className="vetical_options">share</div>
        </div>
      </div>
    );
  }
}
