import React, { useState } from "react";
import "../Styles/Logistik.css";
import NavbarAfterLogin from "../Components/NavbarAfterLogin";
import { GridLoader } from "react-spinners"; // Import loading spinner

const Logistik = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requestDate: "",
    address: "",
    itemType: "",
    quantity: "",
    reason: "",
  });

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.requestDate &&
    formData.address &&
    formData.itemType &&
    formData.quantity &&
    formData.reason;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: onlyNumbers });
  };

  const handleCheckboxChange = (selectedItem) => {
    setFormData({ ...formData, itemType: selectedItem });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      requestDate: "",
      address: "",
      itemType: "",
      quantity: "",
      reason: "",
    });
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    setIsConfirmModalOpen(true);
  };

  const confirmSubmit = () => {
    setIsConfirmModalOpen(false);
    setIsLoading(true); // Tampilkan loading

    setTimeout(() => {
      setIsLoading(false); // Sembunyikan loading setelah 2 detik
      setIsSuccessModalOpen(true);
    }, 2000);
  };

  return (
    <div className="logistik">
      <NavbarAfterLogin />
      <h2>
        FORMULIR <span className="logistik-h2-break-line">REQUEST BARANG</span>
      </h2>

      <div className="logistik-form-container">
        <div className="logistik-form">
          <div className="logistik-input">
            <label htmlFor="name">Nama lengkap</label>
            <input
              name="name"
              placeholder="Nama lengkap"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="logistik-input">
            <label htmlFor="phone">No. telpon</label>
            <input
              name="phone"
              type="tel"
              placeholder="+62"
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="logistik-input">
            <label htmlFor="requestDate">Tanggal request barang</label>
            <input
              type="date"
              name="requestDate"
              placeholder="dd-mm-yyyy"
              value={formData.requestDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="logistik-input">
            <label htmlFor="address">Alamat lengkap penerima</label>
            <input
              name="address"
              placeholder="Alamat lengkap"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <h5>Jenis barang (pilih salah satu):</h5>
          <div className="logistik-checkbox-one">
            <div className="jenis-barang">
              <input
                type="checkbox"
                id="pupuk"
                checked={formData.itemType === "Pupuk"}
                onChange={() => handleCheckboxChange("Pupuk")}
              />
              <label htmlFor="pupuk">Pupuk</label>
            </div>
            <div className="jenis-barang">
              <input
                type="checkbox"
                id="obat-tanaman"
                checked={formData.itemType === "Obat tanaman"}
                onChange={() => handleCheckboxChange("Obat tanaman")}
              />
              <label htmlFor="obat-tanaman">Obat tanaman</label>
            </div>
          </div>
          <div className="logistik-checkbox-two">
            <div className="jenis-barang">
              <input
                type="checkbox"
                id="bibit"
                checked={formData.itemType === "Bibit"}
                onChange={() => handleCheckboxChange("Bibit")}
              />
              <label htmlFor="bibit">Bibit</label>
            </div>
            <div className="jenis-barang">
              <input
                type="checkbox"
                id="alat-pertanian"
                checked={formData.itemType === "Alat pertanian"}
                onChange={() => handleCheckboxChange("Alat pertanian")}
              />
              <label htmlFor="alat-pertanian">Alat pertanian</label>
            </div>
          </div>

          <div className="logistik-input-quantity">
            <label htmlFor="quantity">Jumlah Barang</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Masukkan jumlah"
              min="1"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div className="logistik-input-reason">
            <label htmlFor="reason">Keterangan barang dan alasan Request</label>
            <textarea
              name="reason"
              id="reason"
              placeholder="Masukkan ket. barang dan alasan request"
              rows="4"
              value={formData.reason}
              onChange={handleInputChange}
            />
          </div>

          <div className="logistik-button">
            <button onClick={handleReset}>Reset</button>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              style={{ backgroundColor: isFormValid ? "#c89900" : "#ccc" }}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      {isConfirmModalOpen && (
        <div className="logistik-modal-overlay">
          <div className="logistik-modal-confirm">
            <h3>Konfirmasi</h3>
            <p>Apakah data sudah benar?</p>
            <div className="logistik-modal-buttons">
              <button onClick={() => setIsConfirmModalOpen(false)}>Batal</button>
              <button onClick={confirmSubmit}>Ya, Kirim</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Loading */}
      {isLoading && (
        <div className="logistik-modal-overlay">
          <div className="logistik-modal-loading">
            <GridLoader color="#085B45" size={50} />
          </div>
        </div>
      )}

      {/* Modal Berhasil */}
      {isSuccessModalOpen && (
        <div className="logistik-modal-overlay">
          <div className="logistik-modal-success">
            <h3>Berhasil</h3>
            <p>Form berhasil dikirim!</p>
            <button onClick={() => setIsSuccessModalOpen(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logistik;
