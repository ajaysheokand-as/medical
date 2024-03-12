import React, { useState } from "react";

const RegisterForm = ({ onLoginClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling registration
    console.log("Register:", { name, email, password });
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h2 className="mb-4">Register</h2>

      <div className="mb-3">
        <label htmlFor="formName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formName"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="formEmail"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="formPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Register
      </button>

      <small className="form-text text-muted">
        Have an account?{" "}
        <button type="button" className="btn btn-link" onClick={onLoginClick}>
          Login
        </button>
      </small>
    </form>
  );
};

export default RegisterForm;
