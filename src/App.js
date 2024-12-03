import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Jadwal from './components/Jadwal';
import Profile from './components/Profile';
import Galeri from './components/Galeri';
import Diagram from './components/Diagram';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import Lansia from './pages/Lansia';
import Anak from './pages/Anak';
import JadwalAdmin from './pages/JadwalAdmin';
 
function App() {
  return(  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/lansia" element={<Lansia />} />
        <Route path="/anak" element={<Anak />} />
        <Route path="/JadwalAdmin" element={<JadwalAdmin />} />
      </Routes>
  );
}
export default App;