import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GridLoader } from "react-spinners"; 
import GoogleIcon from '../Assets/Icon/gugel.jpg';
import FbIcon from '../Assets/Icon/fb.jpg';
import OwnfarmLogo from "../Assets/Icon/Logo-ownfarm.png";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSignUpClick = () => {
    navigate('/signup-step-one');
  };

  const handleLoginClick = () => {
    setIsLoading(true); // Aktifkan loading
    setTimeout(() => {
      setIsLoading(false);
      navigate('/beranda'); // Arahkan ke halaman beranda setelah 3 detik
    }, 3000);
  };

  const isDisabled = !isValidEmail || password.length === 0;

  return (
    <div className="login-container">
      {isLoading && (
        <div className="signup-modal-overlay">
          <div className="signup-modal-loading">
            <GridLoader color="#085B45" size={50} />
          </div>
        </div>
      )}

      <div className="login-image"></div>

      <div className="login-form-container">
        <div className="login-form">
          <div className="login-registerlink">
            Tidak memiliki akun? 
            <button onClick={handleSignUpClick} className="login-signupbutton">Daftar</button>
          </div>
          <h2>Selamat Datang Di OwnFarm!</h2>
          <h3>Masuk</h3>
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={handleEmailChange} 
              required 
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Kata sandi</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="login-lupapassword">
            <div className="ingat-saya">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Ingat saya</label>
            </div>
            <div className="lupa-kata-sandi">
              <a href="#">Lupa kata sandi?</a>
            </div>
          </div>

          <button 
            type="submit" 
            className={`login-button ${isDisabled ? 'disabled' : ''}`} 
            disabled={isDisabled || isLoading}
            onClick={handleLoginClick}
          >
            Masuk
          </button>
          
          <div className="login-divider"><h6>Masuk dengan</h6></div>
          <div className="login-socialmedia">
            <button className="login-google">
              <img src={GoogleIcon} alt="Google Login" />
            </button>
            <button className="login-fb">
              <img src={FbIcon} alt="Facebook Login" />
            </button>
          </div>

          <div className="login-ownfarm-logo">
            <img src={OwnfarmLogo} alt="OwnFarm Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
