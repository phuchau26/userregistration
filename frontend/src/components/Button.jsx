import React from "react";

const Button = ({ children, loading = false, className = "", ...rest }) => {
  return (
    <button
      className={`w-full py-2 px-4 rounded text-white font-semibold ${
        loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
      } ${className}`}
      disabled={loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
