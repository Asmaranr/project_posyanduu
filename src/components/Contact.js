import React from 'react';
import NavbarUser from './NavbarUser'; // Pastikan path ini sesuai lokasi NavbarUser.js

function Contact() {
  return (
    <div>
      {/* Navbar */}
      <NavbarUser />

      {/* Konten Halaman Kontak */}
      <div style={{ padding: '20px' }}>
        <h2>Kontak</h2>
        <p>Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami:</p>
        <ul>
          <li>Alamat: Jalan Sehat No. 123, Kecamatan Harmoni</li>
          <li>Email: posyandu@example.com</li>
          <li>Telepon: (021) 123-4567</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
