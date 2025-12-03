import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-emerald-400 flex items-center justify-center w-full overflow-hidden relative">
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
          {/* Organic background shape với animation */}
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

          {/* Rotating rings around illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-green-200 rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute w-52 h-52 border-4 border-emerald-300 rounded-full opacity-30 animate-spin-reverse"></div>
          </div>

          {/* Tree illustration với parallax & animation */}
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
            {/* Circle background với pulse animation */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="white"
              className="animate-pulse-slow"
            />

            {/* Tree trunk */}
            <rect
              x="88"
              y="110"
              width="24"
              height="50"
              rx="4"
              fill="#8B4513"
              className="animate-swing"
            />

            {/* Tree foliage - 3 layers */}
            <ellipse
              cx="100"
              cy="95"
              rx="45"
              ry="35"
              fill="#10B981"
              className="animate-bounce-subtle"
              opacity="0.9"
            />
            <ellipse
              cx="100"
              cy="75"
              rx="38"
              ry="30"
              fill="#059669"
              className="animate-bounce-subtle"
              style={{ animationDelay: "0.2s" }}
              opacity="0.9"
            />
            <ellipse
              cx="100"
              cy="60"
              rx="30"
              ry="25"
              fill="#047857"
              className="animate-bounce-subtle"
              style={{ animationDelay: "0.4s" }}
              opacity="0.9"
            />

            {/* Leaves/sparkles falling */}
            <g className="animate-twinkle">
              <path d="M55 85 Q58 80 60 85 Q58 90 55 85" fill="#34D399" />
              <path d="M140 70 Q143 65 145 70 Q143 75 140 70" fill="#34D399" />
              <path d="M70 120 Q73 115 75 120 Q73 125 70 120" fill="#6EE7B7" />
              <path
                d="M130 110 Q133 105 135 110 Q133 115 130 110"
                fill="#6EE7B7"
              />
            </g>

            {/* Small flowers/dots at base */}
            <g className="animate-pulse-slow">
              <circle cx="75" cy="155" r="3" fill="#F59E0B" />
              <circle cx="85" cy="158" r="2.5" fill="#EF4444" />
              <circle cx="115" cy="158" r="2.5" fill="#EC4899" />
              <circle cx="125" cy="155" r="3" fill="#8B5CF6" />
            </g>
          </svg>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center text-center">
          {/* Animated heading */}
          <h1
            className={`text-4xl font-bold mb-3 bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Welcome to My Application
          </h1>

          <p
            className={`text-gray-600 mb-8 text-sm transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            A modern, minimal and clean design — built with React & Tailwind.
          </p>

          {/* BUTTONS với stagger animation */}
          <div className="space-y-4">
            <Link
              to="/login"
              className={`block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3.5 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <span className="inline-block hover:animate-wiggle"></span> Đăng
              nhập
            </Link>

            <Link
              to="/register"
              className={`block w-full bg-white border-2 border-green-500 text-green-600 py-3.5 font-semibold rounded-xl hover:bg-green-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <span className="inline-block hover:animate-wiggle"></span> Đăng
              ký
            </Link>
          </div>

          <p
            className={`text-gray-400 text-xs mt-10 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
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
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
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
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
