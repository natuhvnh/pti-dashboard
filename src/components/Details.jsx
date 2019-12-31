import React, { Component } from "react";

class Details extends Component {
  state = {
    details: [
      {
        header: "Hợp đồng",
        row: [
          {
            icon: "images/icon/car.png",
            name: "Hợp đồng",
            business: "Hợp đồng / Xe cơ giới / Hợp đồng"
          },
          {
            icon: "images/icon/car.png",
            name: "Biểu phí xe cơ giới",
            business: "Hợp đồng / Xe cơ giới / Hợp đồng"
          },
          {
            icon: "images/icon/vespa.png",
            name: "Hợp đồng",
            business: "Hợp đồng / Xe hai bánh / Hợp đồng"
          },
          {
            icon: "images/icon/vespa.png",
            name: "Biểu phí",
            business: "Hợp đồng / Xe hai bánh / Hợp đồng"
          },
          {
            icon: "images/icon/vespa.png",
            name: "Hãng xe",
            business: "Hợp đồng / Xe hai bánh / Nhóm"
          }
        ]
      },
      {
        header: "Thanh toán",
        row: [
          {
            icon: "images/icon/thanhtoan.png",
            name: "Thanh toán phí",
            business: "Thanh toán / Thanh toán phí"
          },
          {
            icon: "images/icon/boithuong.png",
            name: "Công nợ khách hàng",
            business: "Thanh toán / Thanh toán phí"
          },
          {
            icon: "images/icon/percentage.png",
            name: "Xử lý hoa hồng đại lý",
            business: "Thanh toán / Hoa hồng"
          },
          {
            icon: "images/icon/boithuong.png",
            name: "Công nợ đại lý",
            business: "Thanh toán / Hoa hồng"
          },
          {
            icon: "images/icon/boithuong.png",
            name: "Công nợ đồng bảo hiểm",
            business: "Thanh toán / Đồng bảo hiểm"
          }
        ]
      },
      {
        header: "Bồi thường",
        row: [
          {
            icon: "images/icon/hopdong.png",
            name: "Hồ sơ bồi thường",
            business: "Bồi thường / Hồ sơ"
          },
          {
            icon: "images/icon/thanhtoan.png",
            name: "Bồi thường xe",
            business: "Bồi thường / Hồ sơ"
          },
          {
            icon: "images/icon/ma.png",
            name: "Mã nguyên nhân",
            business: "Bồi thường / Mã"
          },
          {
            icon: "images/icon/ma.png",
            name: "Mã hậu quả",
            business: "Bồi thường / Mã"
          },
          {
            icon: "images/icon/ma.png",
            name: "Mã sự kiện",
            business: "Bồi thường / Mã"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="details">
        {/* <div className="col-4 ">
          <div className="bg-light detail">
            <h6>Hợp đồng</h6>
            <div className="detail-instance">
              <img src="images/icon/car.png" alt="contract" />
              <div>
                <span className="detail-instance-name">Hợp đồng</span>
                <br />
                <span className="detail-instance-business">Hợp đồng / Xe cơ giới / Hợp đồng</span>
              </div>
            </div>
          </div>
        </div> */}
        {this.state.details.map((detail, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="bg-light detail">
                <h6>{detail.header}</h6>
                {detail.row.map((row, index) => {
                  return (
                    <div className="detail-instance" key={index}>
                      <img src={row.icon} alt={detail.header} />
                      <div>
                        <span className="detail-instance-name">{row.name}</span>
                        <br />
                        <span className="detail-instance-business">{row.business}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {/* <div className="col-4">
          <div className="bg-light">col1</div>
        </div>
        <div className="col-4">
          <div className="bg-light">col1</div>
        </div> */}
      </div>
    );
  }
}

export default Details;
