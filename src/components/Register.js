import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    nik: '',
    address: '',
    phone: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Inisialisasi navigate


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Proses pendaftaran di sini (misalnya, kirim data ke API)
    
  //   console.log('Registrasi berhasil:', formData);
  //   navigate('/login'); // Arahkan ke halaman Login setelah registrasi
  // };

  const handleRegister = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert('Kata sandi tidak cocok!');
        return;
      }
      // Tambahkan logika pendaftaran di sini
      console.log('Data Pendaftaran:', formData);
      alert('Pendaftaran berhasil (dummy)');
      navigate('/login'); // Arahkan ke halaman Login setelah pendaftaran berhasil
    };

  return (
    <div className="register-container">
      <h2>Daftar</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="fullName">Nama Lengkap:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nik">NIK:</label>
          <input
            type="text"
            id="nik"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            required
            placeholder="Masukkan NIK"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Alamat:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Masukkan alamat"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">No. HP:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Masukkan no. HP"
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Nama Pengguna:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Masukkan nama pengguna"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Masukkan email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Buat Kata Sandi:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Buat kata sandi"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Ulangi Kata Sandi:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Ulangi kata sandi"
          />
        </div>

        <button type="submit" className="btn register-btn">Daftar</button>
      </form>
    </div>
  );
}

export default Register;
