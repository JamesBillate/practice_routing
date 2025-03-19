import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../firebase/config.js"; // Import your Firebase auth instance

import "./Account.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("User created successfully!");
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/login"), 1500); // Redirect to login after 1.5 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <label>
            <span>Email:</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
        <div className="signup-link">
          Already have an account? Log in
          <NavLink to="/login"> here</NavLink>.
        </div>
      </div>
    </>
  );
}
