import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-display">
        <div className="nav-img">
          <div className="img">
            <img src="images/brand.png" alt="brand" />
          </div>
        </div>
        <form action="" className="nav-form">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Nhập từ khóa, vd: tìm mã hợp đồng"
              className="search-input"
            />
            <button className="search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NavBar;
