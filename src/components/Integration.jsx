import React, { Component } from "react";

class Integration extends Component {
  state = {
    integ: [
      {
        graph: "images/icon/graph1.png",
        name: "Hợp đồng",
        number: "876"
      },
      {
        graph: "images/icon/graph2.png",
        name: "Thanh toán (VND)",
        number: "34.378.000"
      },
      {
        graph: "images/icon/graph3.png",
        name: "Hoa hồng (VND)",
        number: "81.782.389"
      },
      {
        graph: "images/icon/graph4.png",
        name: "Bồi thường (VND)",
        number: "27.093.000"
      }
    ]
  };
  render() {
    return (
      <div className="integ1">
        {this.state.integ.map((integ, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="integ">
                <img src={integ.graph} alt="integ" className="integ-img" />
                <div className="integ-info">
                  <h6 className="integ-name">{integ.name}</h6>
                  <span>{integ.number}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Integration;
