import React from 'react';
import './Galeri.css';
import NavbarUser from './NavbarUser';

function Galeri() {
  const images = [
    { src: 'https://via.placeholder.com/200x150?text=Foto+1', alt: 'Kegiatan 1' },
    { src: 'https://via.placeholder.com/200x150?text=Foto+2', alt: 'Kegiatan 2' },
    { src: 'https://via.placeholder.com/200x150?text=Foto+3', alt: 'Kegiatan 3' },
    { src: 'https://via.placeholder.com/200x150?text=Foto+4', alt: 'Kegiatan 4' },
    { src: 'https://via.placeholder.com/200x150?text=Foto+5', alt: 'Kegiatan 5' },
  ];

  return (
    <div>
      {/* NavbarUser Component */}
      <NavbarUser />

    <div className="galeri-container">
      <h2>Galeri Kegiatan</h2>
      <div className="galeri-grid">
        {images.map((image, index) => (
          <div key={index} className="galeri-item">
            <img src={image.src} alt={image.alt} className="galeri-image" />
            <p className="galeri-caption">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Galeri;
