import React from "react";
import { Layout } from "../../containers/Layout";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Feedback } from "../../containers/popover";

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isTopOptionVisible: false,
      isFeedbackVisible: false
    };
  }

  displayTopPopOver = () => {
    this.setState((prevState, prevProp) => {
      return { isTopOptionVisible: !prevState.isTopOptionVisible };
    });
  };

  toggleFeedbackPopOver = () => {
    this.setState((prevState, prevProp) => {
      return { isFeedbackVisible: !prevState.isFeedbackVisible };
    });
  };

  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col-xs-12" style={{ height: "100%" }}>
          <Layout>
            <Header
              isTopOptionVisible={this.state.isTopOptionVisible}
              onDisplayTopPopOver={this.displayTopPopOver}
            />
            <Body />
          </Layout>
        </div>
        <Footer toggleFeedback={this.toggleFeedbackPopOver} />
        <Feedback
          shouldShow={this.state.isFeedbackVisible}
          toggleFeedback={this.toggleFeedbackPopOver}
        />
      </div>
    );
  }
}
