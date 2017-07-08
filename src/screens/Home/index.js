import React, { PureComponent } from "react";
import { Layout } from "../../containers/Layout";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import {Feedback} from "../../containers/popover";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isTopOptionVisible: false
    };
  }

  displayTopPopOver = () => {
    this.setState((prevState, prevProp) => {
      return { isTopOptionVisible: !prevState.isTopOptionVisible };
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
        <Footer />
        <Feedback />
      </div>
    );
  }
}
