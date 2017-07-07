import React, { PureComponent } from "react";
import { Layout } from "../../containers/Layout";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col-xs-12" style={{ height: "100%" }}>
          <Layout>
            <Header />
            <Body />
          </Layout>
        </div>
        <Footer />
      </div>
    );
  }
}
