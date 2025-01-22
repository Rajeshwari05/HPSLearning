import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsSignIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.newPassword) {
      alert("All fields are required.");
      return;
    }
    if (formData.password !== formData.newPassword) {
      alert("Passwords do not match.");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ email: formData.email, password: formData.password })
    );
    alert("Registration successful!");
    setIsSignIn(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", formData.email);
      navigate("/home");
      window.location.reload();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="SignIn ">
      <h2>{isSignIn ? "Login" : "SignIn"}</h2>
      <form onSubmit={isSignIn ? handleLogin : handleSignIn}>
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

        {!isSignIn && (
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

        <button type="submit">{isSignIn ? "Login" : "SignIn"}</button>
      </form>
    </div>
  );
};

export default SignIn;
