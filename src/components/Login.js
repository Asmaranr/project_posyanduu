import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import NavbarUser from './NavbarUser';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Lakukan validasi atau kirim data ke server
    if (email && password) {
      console.log("Email:", email, "Password:", password);

      // Contoh login berhasil
      alert('Login Berhasil');
      navigate('/dashboard'); // iki // Navigasi ke Dashboard setelah login berhasil
    } else {
      console.error("Email atau password kosong!");
      alert('Username atau password salah');
    }
  };

  return (
    <div>
      {/* NavbarUser Component */}
      <NavbarUser />

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Masukkan email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Masukkan password"
          />
        </div>
        <button type="submit" className="btn login-btn">Masuk</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
