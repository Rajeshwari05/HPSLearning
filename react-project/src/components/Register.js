import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", newPassword: "" });
  const navigate = useNavigate();

  // Check if user is already registered
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsRegistered(true);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.newPassword) {
      alert("All fields are required.");
      return;
    }
    if (formData.password !== formData.newPassword) {
      alert("Passwords do not match.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email: formData.email, password: formData.password }));
    alert("Registration successful!");
    setIsRegistered(true);
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      alert("Login successful!");
      navigate("/home"); // Navigate to home page after login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="register">
      <h2>{isRegistered ? "Login" : "Register"}</h2>
      <form onSubmit={isRegistered ? handleLogin : handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* New Password field shown only during registration */}
        {!isRegistered && (
          <div>
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit">{isRegistered ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};

export default Register;
