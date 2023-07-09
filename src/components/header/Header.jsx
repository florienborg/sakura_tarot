import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/img/logo.svg';
import icono1 from '../../assets/img/icon.png';
import icono2 from '../../assets/img/iconhome.png'; // Ruta de la imagen de la casita
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [icon, setIcon] = useState(icono1);

  useEffect(() => {
    if (location.pathname === '/saved') {
      setIcon(icono2);
    } else {
      setIcon(icono1);
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <img className="img-logo" src={logo} alt="Logo" />
      {location.pathname === '/saved' ? (
        <Link to="/">
          <img className="icon-header1" src={icon} alt="Icon home" />
        </Link>
      ) : (
        <Link to="/saved">
          <img className="icon-header" src={icon} alt="Icon saved" />
        </Link>
      )}
    </div>
  );
}