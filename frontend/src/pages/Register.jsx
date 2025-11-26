import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // spinner
  const [skeleton, setSkeleton] = useState(true); // skeleton loading

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // giả lập skeleton load
  React.useEffect(() => {
    const timer = setTimeout(() => setSkeleton(false), 500); // 0.5s
    return () => clearTimeout(timer);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email không được bỏ trống";
    else if (!validateEmail(email)) newErrors.email = "Email không đúng định dạng";

    if (!password.trim()) newErrors.password = "Mật khẩu không được bỏ trống";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setServerError("");

    console.log(import.meta.env.VITE_BACKEND_URL)

    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const res = await fetch(`${apiUrl}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setServerError(data.message || "Đăng ký thất bại!");
      } else {
        alert("Đăng ký thành công!");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setServerError("Không thể kết nối đến server!");
    } finally {
      setLoading(false);
    }
  };

  // Skeleton UI khi skeleton = true
  if (skeleton) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 w-full">
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full space-y-4 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-10 bg-gray-300 rounded w-full mt-4"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center p-6 w-full">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* LEFT ILLUSTRATION */}
        <div className="relative bg-yellow-300 flex items-center justify-center p-10">
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M438,327Q427,404,355,445Q283,486,207,459.5Q131,433,92,371.5Q53,310,63,238Q73,166,121.5,107Q170,48,247,54Q324,60,389,104Q454,148,451,224Q448,300,438,327Z"
            />
          </svg>
          <svg
            width="180"
            height="180"
            viewBox="0 0 200 200"
            className="relative z-10 drop-shadow-xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" fill="white" />
            <circle cx="100" cy="80" r="35" fill="#6C5CE7" />
            <path d="M50 150 C50 120, 150 120, 150 150 Z" fill="#6C5CE7" />
          </svg>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center text-center">
          <h1 className="text-3xl font-bold mb-3">Create Your Account</h1>
          <p className="text-gray-600 mb-8 text-sm">
            Đăng ký để bắt đầu sử dụng ứng dụng của bạn.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="text-left">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none
                  ${errors.email ? "border-red-500" : "border-gray-300"}
                `}
                placeholder="Nhập email của bạn"
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="text-left">
              <label className="block mb-1 font-medium">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none
                  ${errors.password ? "border-red-500" : "border-gray-300"}
                `}
                placeholder="Nhập mật khẩu"
                disabled={loading}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* LỖI SERVER */}
            {serverError && (
              <p className="text-red-600 text-center font-medium">
                {serverError}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-xl shadow-md transition flex items-center justify-center
                ${loading ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500"}
              `}
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  ></path>
                </svg>
              )}
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </form>

          <p className="mt-6 text-sm">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-yellow-600 font-semibold">
              Đăng nhập tại đây
            </Link>
          </p>

          <Link to="/" className="mt-4 text-gray-500 text-sm hover:underline">
            Quay về trang chủ
          </Link>

          <p className="text-gray-400 text-xs mt-10">
            © {new Date().getFullYear()} Nguyen Phuc Hau
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
