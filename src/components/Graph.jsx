import React, { Component } from "react";

class Graph extends Component {
  render() {
    return (
      <div>
        <div className="graph-header">
          <div className="graph-note">
            <h6>Thống kê</h6>
            <span>
              <i className="fa fa-circle thanh-toan"></i>Thanh toán
            </span>
            <span>
              <i className="fa fa-circle hoa-hong"></i>Hoa hồng
            </span>
            <span>
              <i className="fa fa-circle boi-thuong"></i>Bồi thường
            </span>
          </div>
          <div className="graph-option">Lua chon</div>
        </div>
      </div>
    );
  }
}

export default Graph;
