import React, { Component } from "react";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";

class Home extends Component {
  render() {
    return (
      <div className="home-width">
        <NavBar />
        <MainContent />
      </div>
    );
  }
}

export default Home;
