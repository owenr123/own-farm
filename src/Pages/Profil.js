import React, { useState } from "react";
import "../Styles/Profil.css";
import { FaCamera } from "react-icons/fa";
import NavbarAfterLogin from "../Components/NavbarAfterLogin";

const Profil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: "David",
    email: "david23@gmail.com",
    noTelp: "+62891234567",
    alamat: "Sulawesi Selatan",
    foto: require("../Assets/Pictures/Unknown_person.jpg"),
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Simpan data ke server nanti
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setFormData({ ...formData, foto: newImage });
    }
  };

  return (
    <div className="profile">
      <NavbarAfterLogin />
      <h2>PROFIL KAMU</h2>

      <div className="profile-container">

        {/* Sidebar */}
        <div className="profile-sidebar">
          <div className="profile-picture-container">
            <img src={formData.foto} alt="Profile" className="profile-picture" />
            {isEditing && (
              <label className={`profile-upload-overlay ${isEditing ? "always-show" : ""}`}>
                <FaCamera className="profile-camera-icon" />
                <input type="file" accept="image/*" onChange={handleImageChange} className="profile-upload-input" />
              </label>
            )}
          </div>
          <p className="profile-email">{formData.email}</p>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          {!isEditing ? (
            <div className="profile-info">
              <p>
                <strong>Nama lengkap:</strong> {formData.nama}
              </p>
              <p>
                <strong>No. telpon:</strong> {formData.noTelp}
              </p>
              <p>
                <strong>Alamat:</strong> {formData.alamat}
              </p>
              <button className="profile-edit-button" onClick={handleEditClick}>
                Edit profil
              </button>
            </div>
          ) : (
            <form className="profile-form">
              <label>
                Nama lengkap:
                <input type="text" name="nama" value={formData.nama} onChange={handleChange} />
              </label>
              <label>
                No. telpon:
                <input type="text" name="noTelp" value={formData.noTelp} onChange={handleChange} />
              </label>
              <label>
                Alamat:
                <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} />
              </label>
              <button type="button" className="profile-save-button" onClick={handleSaveClick}>
                Simpan
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profil;
