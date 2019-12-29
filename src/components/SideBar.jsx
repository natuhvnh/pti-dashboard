import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li className="menu-items">
            <img src="images/icon/dashboard.png" alt="menu" className="menu-icon" />
            <a href="/#">Dashboard</a>
          </li>
          <li className="menu-items">
            <img src="images/icon/hop dong.png" alt="menu" className="menu-icon" />
            <span>Hợp đồng</span>
            <i className="fa fa-caret-right"></i>
            <ul className="side-menu1">
              <li className="menu-items1">
                <a href="/#">Xe cơ giới</a>
                <i className="fa fa-caret-right"></i>
                <div className="side-menu2">
                  <div className="col-3">
                    <h3>Hợp đồng</h3>
                    <span className="menu-items2">Hợp đồng</span>
                    <br />
                    <span className="menu-items2">Biểu phí xe cơ giới</span>
                    <br />
                    <span className="menu-items2">Biểu phí người ngồi trên xe</span>
                    <br />
                    <span className="menu-items2">Biểu phí ngắn hạn, dài hạn</span>
                  </div>
                  <div className="col-3">
                    <h3>Nhóm</h3>
                    <span className="menu-items2">Hãng xe</span>
                    <br />
                    <span className="menu-items2">Hiệu xe</span>
                    <br />
                    <span className="menu-items2">Loại xe</span>
                    <br />
                    <span className="menu-items2">Nhóm xe</span>
                    <br />
                    <span className="menu-items2">Nhóm rủi ro</span>
                  </div>
                  <div className="col-3">
                    <h3>Col 3</h3>
                    <span className="menu-items2">Hãng xe</span>
                    <br />
                    <span className="menu-items2">Hiệu xe</span>
                    <br />
                    <span className="menu-items2">Loại xe</span>
                    <br />
                    <span className="menu-items2">Nhóm xe</span>
                    <br />
                    <span className="menu-items2">Nhóm rủi ro</span>
                  </div>
                  <div className="col-3">
                    <h3>Col 4</h3>
                    <span className="menu-items2">Hãng xe</span>
                    <br />
                    <span className="menu-items2">Hiệu xe</span>
                    <br />
                    <span className="menu-items2">Loại xe</span>
                    <br />
                    <span className="menu-items2">Nhóm xe</span>
                    <br />
                    <span className="menu-items2">Nhóm rủi ro</span>
                  </div>
                </div>
              </li>
              <li className="menu-items1">
                <a href="/#">Xe hai bánh</a>
                <i className="fa fa-caret-right"></i>
              </li>
              <li className="menu-items1">
                <a href="/#">Con người</a>
                <i className="fa fa-caret-right"></i>
              </li>
              <li className="menu-items1">
                <a href="/#">Hàng hóa</a>
                <i className="fa fa-caret-right"></i>
              </li>
              <li className="menu-items1">
                <a href="/#">Tài sản, kỹ thuật</a>
                <i className="fa fa-caret-right"></i>
                <div className="side-menu2">
                  <div className="col-3">
                    <h3>Hợp đồng</h3>
                    <span className="menu-items2">Giấy chứng nhận</span>
                    <br />
                    <span className="menu-items2">Nhận về GCN</span>
                    <br />
                    <span className="menu-items2">Nhận về bồi thường</span>
                  </div>
                  <div className="col-3">
                    <h3>Mã</h3>
                    <span className="menu-items2">Mã chi tiết sản phẩm</span>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-3"></div>
                </div>
              </li>
              <li className="menu-items1">
                <a href="/#">Thiết bị di động</a>
                <i className="fa fa-caret-right"></i>
              </li>
              <li className="menu-items1">
                <a href="/#">Tìm hợp đồng</a>
              </li>
              <li className="menu-items1">
                <a href="/#">Duyệt hợp đồng</a>
              </li>
              <li className="menu-items1">
                <a href="/#">Nhận số liệu kênh bán</a>
                <i className="fa fa-caret-right"></i>
                <div className="side-menu2">
                  <div className="col-3">
                    <span className="menu-items2">Nhận số liệu kênh khai thác</span>
                    <br />
                    <span className="menu-items2">Nhận số liệu từ Bank/GCN</span>
                    <br />
                    <span className="menu-items2">Nhận số liệu TPA</span>
                    <br />
                    <span className="menu-items2">Nhận số liệu về từ F88</span>
                    <br />
                    <span className="menu-items2">Nhận hồ sơ bồi thường từ vùng chờ</span>
                    <br />
                    <span className="menu-items2">Đổi soát thanh toán</span>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-3"></div>
                  <div className="col-3"></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="menu-items">
            <img src="images/icon/thanh toan.png" alt="menu" className="menu-icon" />
            <span>Thanh toán</span>
            <i className="fa fa-caret-right"></i>
          </li>
          <li className="menu-items">
            <img src="images/icon/boi thuong.png" alt="menu" className="menu-icon" />
            <span>Bồi thường</span>
            <i className="fa fa-caret-right"></i>
          </li>
          <li className="menu-items">
            <img src="images/icon/tien ich.png" alt="menu" className="menu-icon" />
            <span>Tiện ích</span>
            <i className="fa fa-caret-right"></i>
          </li>
          <li className="menu-items">
            <img src="images/icon/he thong ma.png" alt="menu" className="menu-icon" />
            <span>Hệ thống mã</span>
            <i className="fa fa-caret-right"></i>
            <ul className="side-menu1">
              <li className="menu-items1">
                <a href="/#">Mã bảo hiểm</a>
                <i className="fa fa-caret-right"></i>
                <div className="side-menu2">
                  <div className="col-3">
                    <span className="menu-items2">Mã khách hàng</span>
                    <br />
                    <span className="menu-items2">Mã đối tượng</span>
                    <br />
                    <span className="menu-items2">Mã ngành nghề</span>
                    <br />
                    <span className="menu-items2">Mã chi nhánh</span>
                    <br />
                    <span className="menu-items2">Mã NV BH</span>
                  </div>
                  <div className="col-3">
                    <span className="menu-items2">Mã giám định viên</span>
                    <br />
                    <span className="menu-items2">Mã sản phẩm bảo an</span>
                    <br />
                    <span className="menu-items2">Điều khoản bổ sung chi tiết</span>
                    <br />
                    <span className="menu-items2">Quy tắc BH</span>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-3"></div>
                </div>
              </li>
              <li className="menu-items1">
                <a href="/#">Mã bảo hiểm kênh</a>
                <i className="fa fa-caret-right"></i>
              </li>
              <li className="menu-items1">
                <a href="/#">Mã nội bộ</a>
                <i className="fa fa-caret-right"></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
