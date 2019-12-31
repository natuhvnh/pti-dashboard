import React, { Component } from "react";

class RecentInfo extends Component {
  state = {
    contract_header: ["Mã hợp đồng", "Giá trị", "Ngày", "Trạng thái"],
    business_header: ["Nghiệp vụ", "Vị trí", "Ngày"],
    contract_row: [
      {
        col1: "HDBHX 4789090",
        col2: "23.000.000",
        col3: "05/12/2019",
        col4: "Hoàn thành"
      },
      {
        col1: "HDBHX 4789090",
        col2: "23.000.000",
        col3: "05/12/2019",
        col4: "Hoàn thành"
      },
      {
        col1: "HDBHX 4789090",
        col2: "23.000.000",
        col3: "05/12/2019",
        col4: "Đang xử lý"
      },
      {
        col1: "HDBHX 4789090",
        col2: "23.000.000",
        col3: "05/12/2019",
        col4: "Đang xử lý"
      },
      {
        col1: "HDBHX 4789090",
        col2: "23.000.000",
        col3: "05/12/2019",
        col4: "Hủy"
      }
    ],
    business_row: [
      {
        icon: "images/icon/car.png",
        col1: "Hợp đồng",
        col2: "Hợp đồng / Xe cơ giới / Hợp đồng",
        col3: "05/12/2019"
      },
      {
        icon: "images/icon/car.png",
        col1: "Biểu phí xe cơ giới",
        col2: "Hợp đồng / Xe cơ giới / Hợp đồng",
        col3: "05/12/2019"
      },
      {
        icon: "images/icon/percentage.png",
        col1: "Xử lý hoa hồng đại lý",
        col2: "Thanh toán / Hoa hồng",
        col3: "05/12/2019"
      },
      {
        icon: "images/icon/checklist.png",
        col1: "Giám định",
        col2: "Bồi thường / Hồ sơ",
        col3: "05/12/2019"
      }
    ]
  };
  render() {
    return (
      <div className="recent-info">
        <div className="col-6">
          <div className="table-padding">
            <p className="table-name">
              Hợp đồng cập nhật <i className="fas fa-ellipsis-v"></i>
            </p>
            <table className="table table1-align">
              <tbody>
                <tr>
                  {this.state.contract_header.map((header, index) => {
                    return <th key={index}>{header}</th>;
                  })}
                </tr>
                {this.state.contract_row.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{row.col1}</td>
                      <td>{row.col2}</td>
                      <td>{row.col3}</td>
                      <td
                        className={
                          row.col4 === "Hoàn thành"
                            ? "status-1"
                            : row.col4 === "Đang xử lý"
                            ? "status-2"
                            : "status-3"
                        }>
                        {row.col4}
                        <i className="material-icons">add_circle_outline</i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6">
          <div className="table-padding">
            <p className="table-name">
              Nghiệp vụ vừa sử dụng <i className="fas fa-ellipsis-v"></i>
            </p>
            <table className="table table2-align">
              <tbody>
                <tr>
                  {this.state.business_header.map((header, index) => {
                    return <th key={index}>{header}</th>;
                  })}
                </tr>
                {this.state.business_row.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={row.icon} alt="business" />
                        <span> {row.col1}</span>
                      </td>
                      <td>{row.col2}</td>
                      <td>{row.col3}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentInfo;
