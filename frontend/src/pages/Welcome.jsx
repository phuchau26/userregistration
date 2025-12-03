import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const [user, setUser] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);

    // Animation fade-in khi component mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const username = user.username || "User";

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-emerald-400 flex items-center justify-center w-full p-4">
      {/* MAIN CARD với animation */}
      <div
        className={`bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* LEFT ILLUSTRATION */}
        <div className="relative bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center p-10">
          {/* Organic background shape với animation */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full text-green-500 opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M438,327Q427,404,355,445Q283,486,207,459.5Q131,433,92,371.5Q53,310,63,238Q73,166,121.5,107Q170,48,247,54Q324,60,389,104Q454,148,451,224Q448,300,438,327Z"
              className="animate-pulse"
            />
          </svg>

          {/* Success celebration illustration với animation */}
          <div
            className={`relative z-10 transition-all duration-1000 ${
              isVisible
                ? "scale-100 rotate-0 opacity-100"
                : "scale-50 rotate-45 opacity-0"
            }`}
          >
            <svg
              width="240"
              height="240"
              viewBox="0 0 200 200"
              className="drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main circle background */}
              <circle cx="100" cy="100" r="85" fill="white" opacity="0.95" />

              {/* Success checkmark circle */}
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="#10B981"
                className="animate-bounce"
                style={{
                  animationDuration: "2s",
                  animationDelay: "0.3s",
                }}
              />

              {/* Large checkmark */}
              <path
                d="M65 100 L88 123 L135 76"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Decorative stars/sparkles */}
              <g className="animate-ping" style={{ animationDuration: "1.5s" }}>
                <circle cx="40" cy="40" r="4" fill="#FCD34D" />
                <circle cx="160" cy="45" r="3" fill="#FCD34D" />
                <circle cx="35" cy="160" r="5" fill="#FCD34D" />
                <circle cx="165" cy="155" r="4" fill="#FCD34D" />
              </g>

              {/* Additional sparkle effects */}
              <path
                d="M155 30 L157 35 L162 37 L157 39 L155 44 L153 39 L148 37 L153 35 Z"
                fill="#F59E0B"
                className="animate-pulse"
              />
              <path
                d="M30 120 L32 125 L37 127 L32 129 L30 134 L28 129 L23 127 L28 125 Z"
                fill="#F59E0B"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center text-center">
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Welcome message với animation */}
            <div className="mb-6">
              <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 bg-clip-text text-transparent animate-pulse">
                🎉 Chào mừng!
              </h1>

              <p className="text-3xl font-bold text-gray-800 mb-2">
                {username}
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Bạn đã đăng nhập thành công vào hệ thống.
                <br />
                Chúc bạn có trải nghiệm tuyệt vời! 
              </p>
            </div>

            {/* Feature highlights với stagger animation */}
            <div className="space-y-4">
              <div
                className={`bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="flex items-center justify-center gap-3">
                  <p className="text-gray-700 font-medium">
                    Trải nghiệm giao diện hiện đại và thân thiện
                  </p>
                </div>
              </div>

              <div
                className={`bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="flex items-center justify-center gap-3">
                  <p className="text-gray-700 font-medium">
                    Bảo mật thông tin tuyệt đối
                  </p>
                </div>
              </div>

              <div
                className={`bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: "0.7s" }}
              >
                <div className="flex items-center justify-center gap-3">
                  <p className="text-gray-700 font-medium">
                    Hiệu suất cao và tốc độ nhanh
                  </p>
                </div>
              </div>
            </div>

            {/* Logout link */}
            <div className="mt-8">
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 text-sm underline transition-colors"
              >
                Đăng xuất
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-10">
            © {new Date().getFullYear()} Nguyen Phuc Hau
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
