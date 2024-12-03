import React from 'react';
import { Line } from 'react-chartjs-2';
import NavbarUser from './NavbarUser';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Daftarkan elemen yang dibutuhkan dari ChartJS
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function GrowthChart() {
  // Data contoh untuk grafik pertumbuhan berat badan anak
  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Berat Badan (kg)',
        data: [3.2, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5], // Data berat badan contoh
        borderColor: '#007BFF', // Warna garis
        backgroundColor: 'rgba(0, 123, 255, 0.2)', // Warna area di bawah garis
        fill: true, // Isi area di bawah garis
        tension: 0.3, // Menghaluskan garis
        pointBackgroundColor: '#007BFF', // Warna titik pada garis
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#007BFF',
      },
    ],
  };

  // Opsi untuk kustomisasi tampilan grafik
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Berat Badan (kg)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Bulan',
        },
      },
    },
  };

  return (
    <div>
      {/* NavbarUser Component */}
      <NavbarUser />

    <div>
      <h2>Grafik Pertumbuhan Anak</h2>
      <Line data={growthData} options={options} />
    </div>
    </div>
  );
}

export default GrowthChart;
