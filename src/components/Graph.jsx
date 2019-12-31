import React, { Component } from "react";
import { AreaChart, Area, CartesianGrid, Tooltip } from "recharts";

class Graph extends Component {
  state = {
    week: "no",
    month: "no",
    year: "no",
    today: "yes"
  };
  handleWeek = () => {
    this.setState({
      week: "yes",
      month: "no",
      year: "no",
      today: "no"
    });
  };
  handleMonth = () => {
    this.setState({
      week: "no",
      month: "yes",
      year: "no",
      today: "no"
    });
  };
  handleYear = () => {
    this.setState({
      week: "no",
      month: "no",
      year: "yes",
      today: "no"
    });
  };
  handleDay = () => {
    this.setState({
      week: "no",
      month: "no",
      year: "no",
      today: "yes"
    });
  };
  render() {
    const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ];
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
          <div className="graph-option">
            <div>
              <button
                className={this.state.week === "yes" ? "time-stamp bg-gray" : "time-stamp"}
                onClick={this.handleWeek}>
                Tuần
              </button>
              <button
                className={this.state.month === "yes" ? "time-stamp bg-gray" : "time-stamp"}
                onClick={this.handleMonth}>
                Tháng
              </button>
              <button
                className={this.state.year === "yes" ? "time-stamp bg-gray" : "time-stamp"}
                onClick={this.handleYear}>
                Năm
              </button>
              <button
                className={
                  this.state.today === "yes" ? "time-stamp today bg-gray" : "time-stamp today"
                }
                onClick={this.handleDay}>
                Hôm nay
              </button>
              <img src="images/icon/down.png" alt="graph" />
              <img src="images/icon/refresh.png" alt="graph" />
              <img src="images/icon/close.png" alt="graph" />
              {/* <i className="fa fa-angle-down"></i>
              <i className="fa fa-refresh"></i>
              <i className="fa fa-times"></i> */}
            </div>
            <div className="graph-info">
              <p>
                <span className="graph-info-header">25%</span>
                <br />
                <span>Thanh toán</span>
              </p>
              <p>
                <span className="graph-info-header">5%</span>
                <br />
                <span>Hoa hồng</span>
              </p>
              <p>
                <span className="graph-info-header">5%</span>
                <br />
                <span>Bồi thường</span>
              </p>
            </div>
          </div>
        </div>
        <AreaChart width={1170} height={275} data={data} className="graph">
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#a2c4f6" fill="#a2c4f6" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82aef3" fill="#82aef3" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#4487ed" fill="#4487ed" />
        </AreaChart>
      </div>
    );
  }
}

export default Graph;
