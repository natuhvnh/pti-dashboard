import React, { Component } from "react";
import DashBoard from "./DashBoard";
import SideBar from "./SideBar";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <SideBar />
        <DashBoard />
      </div>
    );
  }
}

export default MainContent;
