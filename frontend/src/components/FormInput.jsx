import React from "react";

const FormInput = ({ label, type = "text", register, name, error, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        {...(register && name ? register(name) : {})}
        {...rest}
        className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;
