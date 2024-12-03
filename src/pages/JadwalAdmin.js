import React, { useState } from 'react';
import './JadwalAdmin.css';
import Navbar from './Navbar';

function JadwalAdmin() {
  const [jadwalAnak, setJadwalAnak] = useState([
    { tanggal: '2024-11-10', waktu: '08:00 - 10:00', kegiatan: 'Pemeriksaan Balita', lokasi: 'Balai Desa' },
    { tanggal: '2024-11-15', waktu: '07:30 - 09:30', kegiatan: 'Imunisasi', lokasi: 'Balai RW 02' },
  ]);

  const [jadwalLansia, setJadwalLansia] = useState([
    { tanggal: '2024-11-12', waktu: '09:00 - 11:00', kegiatan: 'Pemeriksaan Lansia', lokasi: 'Puskesmas' },
    { tanggal: '2024-11-20', waktu: '10:00 - 12:00', kegiatan: 'Senam Lansia', lokasi: 'Balai Kecamatan' },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editType, setEditType] = useState(null);
  const [editData, setEditData] = useState({ tanggal: '', waktu: '', kegiatan: '', lokasi: '' });

  const handleEdit = (index, data, type) => {
    setEditIndex(index);
    setEditType(type);
    setEditData(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    if (editType === 'anak') {
      const updatedJadwal = [...jadwalAnak];
      updatedJadwal[editIndex] = editData;
      setJadwalAnak(updatedJadwal);
    } else if (editType === 'lansia') {
      const updatedJadwal = [...jadwalLansia];
      updatedJadwal[editIndex] = editData;
      setJadwalLansia(updatedJadwal);
    }
    setEditIndex(null);
    setEditType(null);
    setEditData({ tanggal: '', waktu: '', kegiatan: '', lokasi: '' });
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

    <div className="jadwal-container">
      <h2>Jadwal Kegiatan Posyandu</h2>

      <h3>Jadwal Posyandu Anak</h3>
      <table className="jadwal-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Kegiatan</th>
            <th>Lokasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {jadwalAnak.map((item, index) => (
            <tr key={index}>
              {editIndex === index && editType === 'anak' ? (
                <>
                  <td><input type="date" name="tanggal" value={editData.tanggal} onChange={handleInputChange} /></td>
                  <td><input type="text" name="waktu" value={editData.waktu} onChange={handleInputChange} /></td>
                  <td><input type="text" name="kegiatan" value={editData.kegiatan} onChange={handleInputChange} /></td>
                  <td><input type="text" name="lokasi" value={editData.lokasi} onChange={handleInputChange} /></td>
                  <td><button onClick={handleSave}>Simpan</button></td>
                </>
              ) : (
                <>
                  <td>{item.tanggal}</td>
                  <td>{item.waktu}</td>
                  <td>{item.kegiatan}</td>
                  <td>{item.lokasi}</td>
                  <td><button onClick={() => handleEdit(index, item, 'anak')}>Edit</button></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Jadwal Posyandu Lansia</h3>
      <table className="jadwal-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Kegiatan</th>
            <th>Lokasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {jadwalLansia.map((item, index) => (
            <tr key={index}>
              {editIndex === index && editType === 'lansia' ? (
                <>
                  <td><input type="date" name="tanggal" value={editData.tanggal} onChange={handleInputChange} /></td>
                  <td><input type="text" name="waktu" value={editData.waktu} onChange={handleInputChange} /></td>
                  <td><input type="text" name="kegiatan" value={editData.kegiatan} onChange={handleInputChange} /></td>
                  <td><input type="text" name="lokasi" value={editData.lokasi} onChange={handleInputChange} /></td>
                  <td><button onClick={handleSave}>Simpan</button></td>
                </>
              ) : (
                <>
                  <td>{item.tanggal}</td>
                  <td>{item.waktu}</td>
                  <td>{item.kegiatan}</td>
                  <td>{item.lokasi}</td>
                  <td><button onClick={() => handleEdit(index, item, 'lansia')}>Edit</button></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default JadwalAdmin;