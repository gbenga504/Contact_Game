import React from "react";
import { Layout } from "../../components/Layout";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Feedback } from "../../components/popover";

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isFeedbackVisible: false
    };
  }

  toggleMenuPopOver = () => {
    this.setState((prevState, prevProp) => {
      return { isMenuVisible: !prevState.isMenuVisible };
    });
  };

  toggleFeedbackPopOver = () => {
    this.setState((prevState, prevProp) => {
      return { isFeedbackVisible: !prevState.isFeedbackVisible };
    });
  };

  render() {
    return (
      <div className="column" style={{ height: "100%" }}>
        <Layout>
          <Header
            shouldShow={this.state.isMenuVisible}
            onToggleMenu={this.toggleMenuPopOver}
          />
          <Body />
        </Layout>
        <Footer toggleFeedback={this.toggleFeedbackPopOver} />
        <Feedback
          shouldShow={this.state.isFeedbackVisible}
          toggleFeedback={this.toggleFeedbackPopOver}
        />
      </div>
    );
  }
}
