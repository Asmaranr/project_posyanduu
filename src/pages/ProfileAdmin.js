import React, { useState } from 'react';
import Navbar from './Navbar';

function ProfileAdmin() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    nama: 'Nama Pengguna',
    nik: '',
    alamat: '',
    tanggalLahir: '',
    noTelp: '',
    foto: 'https://via.placeholder.com/100', // Foto profil default
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData({ ...profileData, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setEditMode(false);
    // Simpan data ke server jika diperlukan
  };

  const handleLogout = () => {
    alert('Anda telah keluar.');
  };

  return (
    <div>
      {/* NavbarUser Component */}
      <Navbar />

    <div className="profil-wrapper">
      <div className="profil-left">
        <div className="profile-photo">
          <img src={profileData.foto} alt="Foto Profil" />
          {editMode && <input type="file" accept="image/*" onChange={handlePhotoChange} />}
        </div>
        <h3>{profileData.nama}</h3>
        {editMode ? (
          <button onClick={handleSave}>Simpan</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit Akun</button>
        )}
        <button onClick={handleLogout} className="logout-button">
          Keluar Akun
        </button>
      </div>
      <div className="profil-right">
        <div className="form-group">
          <label>Nama Lengkap:</label>
          {editMode ? (
            <input type="text" name="nama" value={profileData.nama} onChange={handleChange} />
          ) : (
            <p>{profileData.nama}</p>
          )}
        </div>
        <div className="form-group">
          <label>NIK:</label>
          {editMode ? (
            <input type="text" name="nik" value={profileData.nik} onChange={handleChange} />
          ) : (
            <p>{profileData.nik}</p>
          )}
        </div>
        <div className="form-group">
          <label>Alamat:</label>
          {editMode ? (
            <input type="text" name="alamat" value={profileData.alamat} onChange={handleChange} />
          ) : (
            <p>{profileData.alamat}</p>
          )}
        </div>
        <div className="form-group">
          <label>Tanggal Lahir:</label>
          {editMode ? (
            <input type="date" name="tanggalLahir" value={profileData.tanggalLahir} onChange={handleChange} />
          ) : (
            <p>{profileData.tanggalLahir}</p>
          )}
        </div>
        <div className="form-group">
          <label>No. Telp:</label>
          {editMode ? (
            <input type="text" name="noTelp" value={profileData.noTelp} onChange={handleChange} />
          ) : (
            <p>{profileData.noTelp}</p>
          )}
        </div>
      </div>

      <style>
        {`
          .profil-wrapper {
            display: flex;
            gap: 20px;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .profil-left, .profil-right {
            background-color: #e3e3e3;
            padding: 20px;
            border-radius: 10px;
            width: 100%;
          }

          .profile-photo {
            text-align: center;
            margin-bottom: 20px;
          }

          .profile-photo img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }

          input[type="file"] {
            margin-top: 10px;
          }

          h3 {
            text-align: center;
          }

          .form-group {
            margin-bottom: 10px;
          }

          label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
          }

          input, p {
            width: 100%;
            padding: 8px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
          }

          .logout-button {
            background-color: #dc3545;
          }

          button:hover {
            background-color: #0056b3;
          }

          .logout-button:hover {
            background-color: #c82333;
          }
        `}
      </style>
    </div>
    </div>
  );
}

export default ProfileAdmin;