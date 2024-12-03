import React from 'react';
import NavbarUser from './NavbarUser'; // Perbaiki path sesuai lokasi file NavbarUser.js

function About() {
  return (
    <div>
      <NavbarUser />
      <h2>Tentang Kami</h2>
      <p>
        Posyandu adalah layanan kesehatan masyarakat yang berfokus pada ibu dan anak, 
        menyediakan berbagai program kesehatan untuk mendukung tumbuh kembang keluarga.
      </p>
    </div>
  );
}

export default About;
