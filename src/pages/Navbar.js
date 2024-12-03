import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Styling opsional

const Navbar = () => {
  const location = useLocation();

  // Cek apakah berada di Dashboard
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div>
      <Navbar />
    
    <nav className="navbar">
      <ul className="navbar-menu">
        {isDashboard ? (
          <>
            <li>
              <Link to="/JadwalAdmin">Jadwal</Link>
            </li>
            <li>
              <Link to="/lansia">Lansia</Link>
            </li>
            <li>
              <Link to="/anak">Anak</Link>
            </li>
            <li>
              <Link to="/galeri">Galeri</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
