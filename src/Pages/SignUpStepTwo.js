import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GridLoader } from "react-spinners";
import "../Styles/SignUpStepTwo.css";
import OwnfarmLogo from "../Assets/Icon/Logo-ownfarm.png";

const SignUpStepTwo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNext = () => {
    if (isFormValid) {
      setIsLoading(true); // Tampilkan loading dulu

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccessModalOpen(true); // Setelah loading, tampilkan modal sukses

        setTimeout(() => {
          navigate("/beranda"); // Auto redirect ke halaman beranda setelah 2 detik
        }, 2000);
      }, 2000);
    }
  };

  const isFormValid =
    validateEmail(email) &&
    password.length >= 6 &&
    confirmPassword === password &&
    isChecked;

  return (
    <div className="signup-container-two">
      <div className="signup-image"></div>
      <div className="signup-form-container-two">
        <div className="signup-form-two">
          <h2>Daftar akun anda sekarang!</h2>

          <div className="signup-input-two">
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

          <div className="signup-input-two">
            <label htmlFor="password">Kata sandi</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Kata sandi (min. 6 karakter)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="signup-input-two">
            <label htmlFor="confirm-password">Ulangi kata sandi</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                placeholder="Ulangi kata sandi"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="password-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="menyetujui-ketentuan">
            <input
              type="checkbox"
              id="agree-to-terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="agree-to-terms">Menyetujui ketentuan</label>
          </div>

          <div className="signup-button-two">
            <button onClick={() => navigate("/signup-step-one")}>Kembali</button>
            <button
              onClick={handleNext}
              disabled={!isFormValid}
              style={{ backgroundColor: isFormValid ? "#c89900" : "#ccc" }}
            >
              Daftar
            </button>
          </div>

          <div className="signup-ownfarm-logo">
            <img src={OwnfarmLogo} alt="Ownfarm Logo" />
          </div>
        </div>
      </div>

      {/* Modal Loading */}
      {isLoading && (
        <div className="signup-modal-overlay">
          <div className="signup-modal-loading">
            <GridLoader color="#085B45" size={50} />
          </div>
        </div>
      )}

      {/* Modal Berhasil */}
      {isSuccessModalOpen && (
        <div className="signup-modal-overlay">
          <div className="signup-modal-success">
            <h3>Berhasil</h3>
            <p>Akun berhasil dibuat!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpStepTwo;
