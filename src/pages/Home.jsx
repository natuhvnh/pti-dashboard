import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/DashBoard";

class Home extends Component {
  render() {
    return (
      <div className="home-width">
        <NavBar />
        <SideBar />
        <DashBoard />
      </div>
    );
  }
}

export default Home;
