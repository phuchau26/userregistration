import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center w-full">

      {/* MAIN CARD */}
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">

        {/* LEFT ILLUSTRATION */}
        <div className="relative bg-yellow-300 flex items-center justify-center p-10">

          {/* Organic background shape */}
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

          {/* Minimal illustration inside */}
          <svg
            width="180"
            height="180"
            viewBox="0 0 200 200"
            className="relative z-10 drop-shadow-xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle */}
            <circle cx="100" cy="100" r="80" fill="white" />
            {/* Minimal icon (hot air balloon style abstract) */}
            <path
              d="M100 40 
                 C130 40, 150 70, 150 100
                 C150 130, 130 160, 100 160
                 C70 160, 50 130, 50 100
                 C50 70, 70 40, 100 40Z"
              fill="#6C5CE7"
            />
            <rect x="85" y="160" width="30" height="18" rx="4" fill="#2D3436"/>
          </svg>

        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center text-center">

          <h1 className="text-3xl font-bold mb-3">
            Welcome to My Application
          </h1>

          <p className="text-gray-600 mb-8 text-sm">
            A modern, minimal and clean design — built with React & Tailwind.
          </p>

          {/* BUTTONS */}
          <div className="space-y-4">
            <Link
              to="/login"
              className="block w-full bg-yellow-400 py-3 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition"
            >
              Đăng nhập
            </Link>

            <Link
              to="/register"
              className="block w-full bg-white border border-gray-300 py-3 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Đăng ký
            </Link>
          </div>
   

          <p className="text-gray-400 text-xs mt-10">
            © {new Date().getFullYear()} Nguyen Phuc Hau
          </p>

        </div>
      </div>
    </div>
  );
};

export default Home;
