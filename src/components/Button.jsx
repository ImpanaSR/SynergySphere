import React from "react";

function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white shadow hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
