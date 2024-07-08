// DangNhap.js
import React from 'react';
import './DangNhap.css'; // Import file CSS để custom style

const DangNhapForm = () => {
  return (
    <div className="login-container">
      <h1>Đăng Nhập</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default DangNhapForm;