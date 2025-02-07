import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Styles/SignUpStepOne.css";
import OwnfarmLogo from "../Assets/Icon/Logo-ownfarm.png";

const SignUpStepOne = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    fileUploaded: false
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, fileUploaded: !!file });
  };

  const isFormValid = formData.name && formData.phone && formData.address && formData.fileUploaded;

  const handleNext = () => {
    if (isFormValid) {
      navigate("/signup-step-two");
    }
  };

  return (
    <div className="signup-container-one">
      <div className="signup-image"></div>
      
      <div className="signup-form-container-one">
        <div className="signup-form-one">
          <h2>Daftar akun anda sekarang!</h2>
          <div className="signup-input-one">
            <label htmlFor="name">Nama lengkap</label>
            <input
              name="name"
              placeholder="Nama lengkap"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-input-one">
            <label htmlFor="phone">No. telpon</label>
            <input
              name="phone"
              type="tel"
              placeholder="+62"
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.phone}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
                handleInputChange(e);
              }}
            />
          </div>
          <div className="signup-input-one">
            <label htmlFor="address">Alamat</label>
            <input
              name="address"
              placeholder="Alamat"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-input-one">
            <label htmlFor="profile-picture">Upload Foto Profil</label>
            <input
              type="file"
              id="profile-picture"
              accept="image/*"
              className="custom-file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="profile-picture" className="custom-file-label">Pilih Foto</label>
            {formData.fileUploaded && <p>✅ Foto sudah di-upload!</p>}
          </div>

          <button
            className="signup-button-one"
            onClick={handleNext}
            disabled={!isFormValid}
            style={{ backgroundColor: isFormValid ? "#c89900" : "#ccc" }}
          >
            Selanjutnya
          </button>
          
          <div className="signup-ownfarm-logo">
            <img src={OwnfarmLogo} alt="Ownfarm Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpStepOne;
