import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarUser from './NavbarUser';
import { Line, Pie } from 'react-chartjs-2';
import './Home.css';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

function Home() {
  const navigate = useNavigate();

  const slide = 'https://via.placeholder.com/800x400?text=Welcome+to+Posyandu';

  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Berat Badan (kg)',
        data: [3.2, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5],
        borderColor: '#2d6a8c',
        backgroundColor: 'rgba(45, 106, 140, 0.5)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const serviceData = {
    labels: ['Penimbangan', 'Konsultasi', 'Imunisasi', 'Penyuluhan'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#1e81b0', '#e28743', '#ff5858', '#6dbc9b'],
        hoverBackgroundColor: ['#1a6a8e', '#c26e36', '#e14a4a', '#5da78c'],
      },
    ],
  };

  const handleMasukClick = () => {
    navigate('/login');
  };

  const handleDaftar = () => {
    navigate('/register');
  };

  return (
    <div>
      <NavbarUser />
      <h1>Selamat Datang di Aplikasi Posyandu</h1>
      <p>Mendukung kesehatan ibu dan anak untuk masa depan yang lebih baik</p>

      {/* Hero Section */}
<div className="slider">
  <div className="slide">
    <img src={slide} alt="Welcome" />
    <div className="overlay">
      <h2>Selamat Datang</h2>
      <p>Posyandu mendukung kesehatan ibu dan anak untuk masa depan yang lebih baik</p>
      <button className="btn masuk" onClick={handleMasukClick}>
        Masuk
      </button>
      <button className="btn daftar" onClick={handleDaftar}>
        Daftar
      </button>
    </div>
  </div>
</div>


      {/* Grafik Section */}
<section className="section grafik">
  <h3>Grafik Pertumbuhan Anak</h3>
  <div className="chart-container">
    <Line data={growthData} />
  </div>
</section>

{/* Diagram Section */}
<section className="section diagram">
  <h3>Diagram Pelayanan Posyandu</h3>
  <div className="diagram-container">
    <Pie data={serviceData} />
  </div>
</section>


      {/* Footer Section */}
      <footer className="footer">
        © 2024 Posyandu | Semua Hak Dilindungi
      </footer>
    </div>

    
  );
}

export default Home;
