import React, { useState } from 'react';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();

      // Store the token in localStorage
      localStorage.setItem("token", data.token);

      // Navigate to dashboard
      navigate('/Dashboard');
    } else {
      setError('Invalid credentials');
    }
  } catch (err) {
    setError('Login failed');
  }
};

  return (
     <div className= "bg-white text-invenza-primary font-sans min-h-screen m-0 flex flex-col items-center py-6 pt-14">
    <Header />

      {/* Login Box */}
      
<div className="bg-invenza-navbar p-8 rounded-lg shadow-2xl w-[360px] text-center flex flex-col">
  {/* Heading */}
  <h2 className="text-invenza-heading text-3xl font-semibold mb-4">Sign In</h2>

  {/* Form */}
  <form onSubmit={handleLogin} className="flex flex-col items-center w-full space-y-6">
    {/* Username */}
    <div className="w-[90%]">
      <label htmlFor="username" className="block text-white font-bold mb-2 text-left">
        Username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full h-9 p-3 border border-invenza-primary rounded bg-white bg-opacity-90 text-invenza-primary"
      />
    </div>

    {/* Password */}
    <div className="w-[90%]">
      <label htmlFor="password" className="block text-white font-bold mb-2 text-left">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full h-9 p-3 border border-invenza-primary rounded bg-white bg-opacity-90 text-invenza-primary"
      />
    </div>

    {/* Options */}
    <div className="w-[90%] flex justify-between items-center text-sm text-white">
      <label className="flex items-center">
        <input type="checkbox" id="remember" name="remember" className="mr-1" />
        Remember me
      </label>
      <a
        href="#"
        className="text-invenza-mainAccent hover:text-invenza-heading hover:underline transition-colors duration-300"
      >
        Forgot Password
      </a>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-[120px] h-9 bg-invenza-success text-white rounded font-bold text-base transition duration-300 transform hover:scale-105"
    >
      Login
    </button>

    {/* Signup */}
    <div className="text-sm text-white text-center w-[90%]">
      <p>
        Don't have an account?{' '}
        <a
          href="signup.html"
          className="text-invenza-mainAccent hover:text-invenza-heading font-semibold hover:underline transition-colors duration-300"
        >
          Sign Up
        </a>
      </p>
    </div>

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </form>
</div>
</div>
);
};

export default Login;
