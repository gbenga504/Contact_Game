import React, { PureComponent } from "react";
import { Layout } from "../../containers/Layout";
import {Header} from "./Header";
import {Body} from './Body';

export default class Home extends PureComponent {
  render() {
    return (
        <Layout>
            <Header />
            <Body />
        </Layout>
    )
  }
}
