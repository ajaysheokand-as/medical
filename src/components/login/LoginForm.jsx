import React, { useState } from 'react';

const LoginForm = ({ onRegisterClick, onForgotPasswordClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
      setError('Please enter your email and password.');
    } else if (!email.trim()) {
      setError('Please enter your email.');
    } else if (!password.trim()) {
      setError('Please enter your password.');
    } else {
      // Your authentication logic can go here

      // For demonstration purposes, setting a fake localStorage value and updating the state
      localStorage.setItem('isLoggedIn', 'true');
      setLoggedIn(true);
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleLogin}>
      <h2 className="mb-4">Login</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

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
        Login
      </button>

      <p className="text-muted mb-3">
        <span
          className="text-primary forgot-password-link"
          onClick={onForgotPasswordClick}
        >
          Forgot Password?
        </span>
      </p>

      <p className="text-muted">
        Don't have an account?{' '}
        <button
          type="button"
          className="btn btn-link"
          onClick={onRegisterClick}
        >
          Register Now
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
