import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export class Footer extends React.PureComponent {
  static propTypes = {
    toggleFeedback: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="footer">
        <div className="col-xs-12">
          <span>Contributors</span> &nbsp; &nbsp;
          <span onClick={this.props.toggleFeedback}>Feedback</span> &nbsp;
          &nbsp;
          <span>Updates</span>
        </div>
      </div>
    );
  }
}
