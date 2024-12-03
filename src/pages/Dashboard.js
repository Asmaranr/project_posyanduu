import React, { useState } from 'react';
import Navbar from './Navbar'; // Pastikan path menuju Navbar.js sudah benar
import './Dashboard.css';

function Dashboard() {
  const [schedule, setSchedule] = useState('');
  const [publishedSchedule, setPublishedSchedule] = useState('Belum ada jadwal yang dipublikasikan.');

  const handlePublish = () => {
    if (schedule.trim() !== '') {
      setPublishedSchedule(schedule);
      setSchedule('');
      alert('Jadwal berhasil dipublikasikan!');
    } else {
      alert('Harap isi jadwal terlebih dahulu.');
    }
  };

  return (
    <>
      {/* Tambahkan Navbar */}
      <Navbar />

      {/* Konten Dashboard */}
      <div className="dashboard-container">
        <h1>Dashboard Posyandu</h1>

        {/* Kolom Visi */}
        <div className="dashboard-section">
          <h2>Visi</h2>
          <p>
            Menjadi Posyandu yang mendukung tumbuh kembang anak secara optimal dan menciptakan
            generasi sehat, cerdas, dan berkualitas.
          </p>
        </div>

        {/* Kolom Misi */}
        <div className="dashboard-section">
          <h2>Misi</h2>
          <ul>
            <li>Menyediakan layanan kesehatan berkualitas bagi ibu dan anak.</li>
            <li>Meningkatkan kesadaran masyarakat akan pentingnya gizi seimbang.</li>
            <li>Menyelenggarakan program imunisasi dan edukasi kesehatan secara rutin.</li>
          </ul>
        </div>

        {/* Ubah Jadwal */}
        <div className="dashboard-section">
          <h2>Ubah Jadwal</h2>
          <textarea
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            placeholder="Masukkan jadwal kegiatan baru..."
            rows="5"
            className="textarea-input"
          ></textarea>
          <button onClick={handlePublish} className="btn-primary">
            Publikasikan Jadwal
          </button>
        </div>

        {/* Jadwal Publish */}
        <div className="dashboard-section">
          <h2>Jadwal Publish</h2>
          <div className="published-schedule">
            <p>{publishedSchedule}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
