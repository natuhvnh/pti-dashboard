import React, { Component } from "react";
import Integration from "./Integration";
import Graph from "./Graph";
import RecentInfo from "./RecentInfo";
import Details from "./Details";
import OrtherService from "./OrtherService";
import Footer from "./Footer";

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Integration />
        <Graph />
        <RecentInfo />
        <Details />
        <OrtherService />
        <Footer />
      </div>
    );
  }
}

export default DashBoard;
