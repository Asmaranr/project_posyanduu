import React, { useState } from 'react';
import './Jadwal.css';
import NavbarUser from './NavbarUser';

function Jadwal() {
  // Data for Anak and Lansia schedules
  const [jadwalAnak] = useState([
    { tanggal: '2024-11-10', waktu: '08:00 - 10:00', kegiatan: 'Pemeriksaan Balita', lokasi: 'Balai Desa' },
    { tanggal: '2024-11-15', waktu: '07:30 - 09:30', kegiatan: 'Imunisasi', lokasi: 'Balai RW 02' },
  ]);

  const [jadwalLansia] = useState([
    { tanggal: '2024-11-12', waktu: '09:00 - 11:00', kegiatan: 'Pemeriksaan Lansia', lokasi: 'Puskesmas' },
    { tanggal: '2024-11-20', waktu: '10:00 - 12:00', kegiatan: 'Senam Lansia', lokasi: 'Balai Kecamatan' },
  ]);

  return (
    <div>
      {/* NavbarUser Component */}
      <NavbarUser />

      <div className="jadwal-container">
        <h2 className="jadwal-title">Jadwal Kegiatan Posyandu</h2>

        <h3 className="jadwal-subtitle">Jadwal Posyandu Anak</h3>
        <div className="jadwal-cards">
          {jadwalAnak.map((item, index) => (
            <div className="jadwal-card" key={index}>
              <h4 className="jadwal-card-date">{item.tanggal}</h4>
              <p><strong>Kegiatan:</strong> {item.kegiatan}</p>
              <p><strong>Waktu:</strong> {item.waktu}</p>
              <p><strong>Lokasi:</strong> {item.lokasi}</p>
            </div>
          ))}
        </div>

        <h3 className="jadwal-subtitle">Jadwal Posyandu Lansia</h3>
        <div className="jadwal-cards">
          {jadwalLansia.map((item, index) => (
            <div className="jadwal-card" key={index}>
              <h4 className="jadwal-card-date">{item.tanggal}</h4>
              <p><strong>Kegiatan:</strong> {item.kegiatan}</p>
              <p><strong>Waktu:</strong> {item.waktu}</p>
              <p><strong>Lokasi:</strong> {item.lokasi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jadwal;
