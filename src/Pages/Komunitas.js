import React, { useState } from "react";
import NavbarAfterLogin from "../Components/NavbarAfterLogin"; // Panggil komponen NavbarAfterLogin
import "../Styles/Komunitas.css";

const Komunitas = () => {
  const [messages, setMessages] = useState([]); // Menyimpan semua pesan
  const [inputMessage, setInputMessage] = useState(""); // Menyimpan pesan input pengguna

  // Fungsi untuk mengirim pesan
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage(""); // Reset input field
    }
  };

  // Fungsi untuk menangani input pengguna
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  return (
    <div>
      {/* Tambahkan Navbar */}
      <NavbarAfterLogin />

      <div className="komunitas-container">
        <h2>KOMUNITAS</h2>
        <div className="chat-box">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.isUser ? "user" : "other"}`}>
                {message.text}
              </div>
            ))
          ) : (
            <p className="no-message">Belum ada pesan. Mulai percakapan!</p>
          )}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Ketik pesan di sini..."
            value={inputMessage}
            onChange={handleInputChange}
            className="chat-input"
          />
          <button onClick={handleSendMessage} className="send-button">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Komunitas;
