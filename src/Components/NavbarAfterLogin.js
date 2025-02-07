import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners"; // Import loader
import "../Styles/NavbarAfterLogin.css";
import LogoWhite from '../Assets/Icon/Logo-ownfarm-white.png';

const NavbarAfterLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = () => {
    setIsLoading(true); // Mulai loading
    setTimeout(() => {
      navigate("/");
    }, 2000); // Setelah 2 detik, navigate ke halaman utama
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileView = windowWidth <= 768;
  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={LogoWhite} alt="OwnFarm Logo" />
        </div>

        {isMobileView ? (
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        ) : (
          <ul className="navbar-links">
            <li><a href="/beranda" className={isActive("/beranda")}>Beranda</a></li>
            <li><a href="/logistik" className={isActive("/logistik")}>Logistik</a></li>
            <li><a href="/komunitas" className={isActive("/komunitas")}>Komunitas</a></li>
            <li><a href="#" onClick={handleProfileClick} className={isActive("/profile")}>Profil</a></li>
            <li><button onClick={handleLogoutClick} className="btn-logout">Keluar</button></li>
          </ul>
        )}

        {isMobileView && (
          <ul className={`navbar-links slide-menu ${isMenuOpen ? "active" : ""}`}>
            <li><a href="/beranda" className={isActive("/beranda")}>Beranda</a></li>
            <li><a href="/logistik" className={isActive("/logistik")}>Logistik</a></li>
            <li><a href="/komunitas" className={isActive("/komunitas")}>Komunitas</a></li>
            <li><a href="#" onClick={handleProfileClick} className={isActive("/profile")}>Profil</a></li>
            <li><button onClick={handleLogoutClick} className="btn-logout">Keluar</button></li>
          </ul>
        )}
      </nav>

      {isLoading && (
        <div className="logout-modal-overlay">
          <div className="logout-modal-loading">
            <GridLoader color="#085B45" size={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarAfterLogin;
