// src/views/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login - navigate to Projects after login
    navigate("/projects");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login into account</h2>
        <p className="text-sm text-center mb-6">
          <a href="/signup" className="text-blue-500">Sign up instead</a>
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="text-right">
            <a href="#" className="text-sm text-red-500">Forget password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;
