import React from "react";
import { NavLink } from "react-router-dom"; // Pastikan NavLink diimpor
import './NavbarUser.css'; // Pastikan path file CSS sudah benar
import logo from '../assets/images/logo_posyandu.png'; // Ganti dengan path aktual ke file logo
import homeIcon from '../assets/images/homeicon.png'; // Ganti dengan path aktual ke file ikon beranda

function NavbarUser() {
  return (
    <div>
      <nav className="navbar-user">
        {/* Bagian Kiri Navbar */}
        <div className="nav-left">
          <img src={logo} alt="Logo Posyandu" className="logo" />
        </div>

        {/* Link Navigasi */}
        <ul className="nav-links">
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeri" className={({ isActive }) => isActive ? "active" : ""}>
              Galeri
            </NavLink>
          </li>
          <li>
            <NavLink to="/jadwal" className={({ isActive }) => isActive ? "active" : ""}>
              Jadwal
            </NavLink>
          </li>
          <li>
            <NavLink to="/diagram" className={({ isActive }) => isActive ? "active" : ""}>
              Diagram
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              Tentang Kami
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Kontak
            </NavLink>
          </li>
        </ul>

        {/* Bagian Kanan Navbar */}
        <div className="nav-right">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            <img src={homeIcon} alt="Beranda" className="home-icon" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
