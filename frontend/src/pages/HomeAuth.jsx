import React from "react";
import { useNavigate } from "react-router-dom";

const HomeAuth = () => {
  const navigate = useNavigate();

  const raw = localStorage.getItem("user");
  let user = null;
  try {
    user = raw ? JSON.parse(raw) : null;
  } catch (e) {
    user = null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-200 to-yellow-400 flex items-center justify-center w-full">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50"
          >
            Đăng xuất
          </button>
        </div>

        <div className="text-center py-12">
          <h1 className="text-3xl font-extrabold mb-3">
            Xin chào, {user?.email || "Người dùng"}!
          </h1>
          <p className="text-gray-600 mb-6">
            Bạn đã đăng nhập thành công. Đây là trang chính (Home) dành cho
            người dùng.
          </p>

          <div className="max-w-xl mx-auto text-left">
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                - Xem hoặc chỉnh sửa thông tin tài khoản của bạn.
              </p>
              <p className="text-sm text-gray-700">
                - Truy cập các chức năng nội bộ (ví dụ: quản lý profile, cài
                đặt...).
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-xs mt-6 text-center">
          © {new Date().getFullYear()} Nguyen Phuc Hau
        </p>
      </div>
    </div>
  );
};

export default HomeAuth;
