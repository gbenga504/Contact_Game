import React from "react";
import "./index.css";

export class Feedback extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFeedbackMessageVisible: false
    };
  }

  componentDidUpdate(prevState, prevProp) {
    if (this.props.shouldShow === true)
      window.setTimeout(() => {
        this.setState({
          isFeedbackMessageVisible: true
        });
      }, 500);
    else
      window.setTimeout(() => {
        this.setState({
          isFeedbackMessageVisible: false
        });
      }, 500);
  }

  render() {
    return (
      <div
        className={
          this.props.shouldShow && this.props.shouldShow === true
            ? `feedback_overlay feedback_overlay_show`
            : `feedback_overlay`
        }
      >
        <div className="col-xs-12 col-xs-offset-4 col-xs-4 feedback_card_holder">
          <div
            className={
              this.state.isFeedbackMessageVisible
                ? `feedback_card feedback_card_make_visible`
                : `feedback_card`
            }
          >
            <textarea id="feedback_message_box" />
            <div data-icon="ei-sc-telegram" />
          </div>
        </div>
      </div>
    );
  }
}
