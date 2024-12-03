import React from 'react';
import './Profile.css'; // Create a Profile.css for styling if needed
import NavbarUser from './NavbarUser'; // Import NavbarUser

function profile() {
  return (
    <div>
      {/* NavbarUser Component */}
      <NavbarUser />

      <div className="profile-container">
        <h2>Profil Posyandu</h2>
        <section className="profile-content">
          <p>
            Posyandu (Pos Pelayanan Terpadu) adalah sebuah layanan kesehatan masyarakat yang berfokus pada ibu dan anak. 
            Layanan Posyandu terdiri dari kegiatan-kegiatan seperti pemeriksaan kesehatan ibu hamil, penimbangan balita, 
            imunisasi, penyuluhan, dan pelayanan kesehatan lainnya. 
            Posyandu berperan penting dalam meningkatkan kualitas kesehatan di masyarakat, terutama di daerah-daerah yang kurang 
            terjangkau oleh fasilitas kesehatan lainnya.
          </p>
          <img 
            src="https://via.placeholder.com/600x300?text=Posyandu+Image" 
            alt="Posyandu"
            className="profile-image"
          />
        </section>
      </div>
    </div>
  );
}

export default profile;
