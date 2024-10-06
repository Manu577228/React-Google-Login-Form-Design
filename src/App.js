import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="box">
      <div className="logo">
        <img
          src="https://developers.google.com/static/identity/images/branding_guide_dont_4.png"
          alt="logo"
        />
      </div>
      <h2>Sign In</h2>
      <p>Use your Google Account</p>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Username</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" name="sign-in" value="Sign In" />
      </form>
    </div>
  );
};

export default App;
