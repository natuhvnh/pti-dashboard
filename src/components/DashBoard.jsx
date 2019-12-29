import React, { Component } from "react";
import Integration from "./Integration";
import Graph from "./Graph";
import RecentInfo from "./RecentInfo";
import Details from "./Details";

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Integration />
        <Graph />
        <RecentInfo />
        <Details />
      </div>
    );
  }
}

export default DashBoard;
