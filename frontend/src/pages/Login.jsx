import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Animation fade-in khi component mount
    setTimeout(() => setIsVisible(true), 100);

    // Track mouse position for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-emerald-400 flex items-center justify-center w-full overflow-hidden relative p-6">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-300 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-green-500 rounded-full opacity-50 animate-float"></div>
      </div>

      {/* MAIN CARD với animation */}
      <div
        className={`bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 transform ${
          isVisible
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-90 -rotate-3"
        }`}
      >
        {/* LEFT ILLUSTRATION */}
        <div className="relative bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center p-10 overflow-hidden">
          {/* Organic background shape */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full text-green-500 opacity-40 animate-morph"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <path
              fill="currentColor"
              d="M438,327Q427,404,355,445Q283,486,207,459.5Q131,433,92,371.5Q53,310,63,238Q73,166,121.5,107Q170,48,247,54Q324,60,389,104Q454,148,451,224Q448,300,438,327Z"
            />
          </svg>

          {/* Rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-green-200 rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute w-52 h-52 border-4 border-emerald-300 rounded-full opacity-30 animate-spin-reverse"></div>
          </div>

          {/* Lock illustration với parallax */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className={`relative z-10 drop-shadow-2xl transition-all duration-1000 ${
              isVisible ? "scale-100 rotate-0" : "scale-50 rotate-180"
            }`}
            style={{
              transform: `translate(${-mousePosition.x * 0.5}px, ${
                -mousePosition.y * 0.5
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle background */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="white"
              className="animate-pulse-slow"
            />

            {/* Lock body */}
            <rect
              x="70"
              y="95"
              width="60"
              height="55"
              rx="10"
              fill="#10B981"
              className="animate-bounce-subtle"
            />

            {/* Keyhole */}
            <circle
              cx="100"
              cy="120"
              r="8"
              fill="#fff"
              className="animate-pulse"
            />
            <rect x="96" y="120" width="8" height="15" fill="#fff" />

            {/* Lock shackle */}
            <path
              d="M78 95V80C78 65 88 55 100 55C112 55 122 65 122 80V95"
              stroke="#10B981"
              strokeWidth="8"
              fill="none"
              className="animate-swing"
            />

            {/* Sparkles */}
            <g className="animate-twinkle">
              <circle cx="50" cy="60" r="3" fill="#34D399" />
              <circle cx="150" cy="65" r="2" fill="#6EE7B7" />
              <circle cx="55" cy="140" r="2.5" fill="#34D399" />
              <circle cx="145" cy="135" r="3" fill="#6EE7B7" />
            </g>
          </svg>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center text-center">
          <h1
            className={`text-4xl font-bold mb-3 bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            🔐 Welcome Back
          </h1>

          <p
            className={`text-gray-600 mb-8 text-sm transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            Đăng nhập để tiếp tục sử dụng ứng dụng của bạn.
          </p>

          {/* LOGIN FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div
              className={`text-left transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none transition-all hover:border-green-400"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div
              className={`text-left transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <label className="block mb-1 font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none transition-all hover:border-green-400"
                placeholder="Nhập mật khẩu"
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3.5 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              Đăng nhập
            </button>
          </form>

          <p
            className={`mt-6 text-sm transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:text-green-700 hover:underline"
            >
              Đăng ký tại đây
            </Link>
          </p>

          <Link
            to="/"
            className={`mt-4 text-gray-500 text-sm hover:text-gray-700 hover:underline transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Quay về trang chủ
          </Link>

          {/* FOOTER */}
          <p className="text-gray-400 text-xs mt-10">
            © {new Date().getFullYear()} Nguyen Phuc Hau
          </p>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(10px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }
        @keyframes morph {
          0%,
          100% {
            d: path(
              "M438,327Q427,404,355,445Q283,486,207,459.5Q131,433,92,371.5Q53,310,63,238Q73,166,121.5,107Q170,48,247,54Q324,60,389,104Q454,148,451,224Q448,300,438,327Z"
            );
          }
          50% {
            d: path(
              "M428,320Q410,390,345,435Q280,480,205,455Q130,430,85,365Q40,300,55,225Q70,150,130,95Q190,40,255,60Q320,80,380,115Q440,150,442,225Q444,300,428,320Z"
            );
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes swing {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(2deg);
          }
          75% {
            transform: rotate(-2deg);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-swing {
          animation: swing 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;
