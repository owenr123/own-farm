import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../Assets/Icon/Logo-ownfarm-white.png'; // Import logonya di awal
import '../Styles/NavbarBeforeLogin.css';

const NavbarBeforeLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup-step-one');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoWhite} alt="OwnFarm Logo" />
      </div>
      <div className="navbar-actions">
        <button className="btn-login" onClick={handleLoginClick}>Masuk</button>
        <button className="btn-signup" onClick={handleSignUpClick}>Daftar</button>
      </div>
    </nav>
  );
};

export default NavbarBeforeLogin;
