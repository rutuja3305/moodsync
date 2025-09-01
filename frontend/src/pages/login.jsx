import React, { useState } from "react";
import "./login.css"; // we’ll create this next

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock check for now
    if (email === "music@vibe.com" && password === "12345") {
      onLogin();
    } else {
      setError("Invalid email or password 🎧");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🎶 MoodSync Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
