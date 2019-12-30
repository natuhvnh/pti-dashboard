import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

class Graph extends Component {
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
              <button className="time-stamp">Tuần</button>
              <button className="time-stamp">Tháng</button>
              <button className="time-stamp">Năm</button>
              <button className="time-stamp today">Hôm nay</button>
              <i className="fa fa-angle-down"></i>
              <i className="fa fa-refresh"></i>
              <i className="fa fa-times"></i>
            </div>
            <div className="graph-info">
              <p>
                <h6>25%</h6>
                <span>Thanh toán</span>
              </p>
              <p>
                <h6>5%</h6>
                <span>Hoa hồng</span>
              </p>
              <p>
                <h6>5%</h6>
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
