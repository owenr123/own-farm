// BerandaSebelumLogin.js

import React, { useState, useEffect } from 'react';
import NavbarBeforeLogin from '../Components/NavbarBeforeLogin'; // Panggil komponen Navbar
import '../Styles/Beranda.css';
import heroImg from '../Assets/Pictures/gambar.jpg';
import googlePlayBtn from '../Assets/Icon/GooglePlay.webp';
import IconRequest from '../Assets/Icon/Request.png';
import IconKomunitas from '../Assets/Icon/Komunitas.png';
import LoginRegisterIcon from '../Assets/Icon/Login register.png';
import MenuLogistikIcon from '../Assets/Icon/menu logistik.png';
import RequestDiajukanIcon from '../Assets/Icon/Request diajukan.png';
import BarangDikirimIcon from '../Assets/Icon/Menunggu barang.png';
import PanahKananIcon from '../Assets/Icon/Panah kanan.png';
import PanahBawahIcon from '../Assets/Icon/Panah bawah.png';
import GooglePlay from '../Assets/Icon/GooglePlay.webp';
import LogoIL from '../Assets/Icon/logo IL.png';
import LogoOwnFarm from '../Assets/Icon/Logo-ownfarm-white.png';

const BerandaSebelumLogin = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ubah ukuran sesuai kebutuhan
    };

    // Cek ukuran layar saat pertama kali
    handleResize();

    // Tambahkan event listener untuk perubahan ukuran layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen di-unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const panahIcon = isMobile ? PanahBawahIcon : PanahKananIcon;

  return (
    <div className="beranda">
      {/* Panggil Navbar */}
      <NavbarBeforeLogin />

      {/* Hero Section */}
      <section className="hero">
        <img src={heroImg} alt="Background Hero" className="hero-bg" />
        <div className="hero-content">
          <h1>Own Farm</h1>
          <p>
            Semua menjadi lebih mudah dan efektif <br /> untuk request kebutuhan pertanian Anda
          </p>
          <p className="subtitle">Dapatkan aplikasi kami di Google Playstore</p>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={googlePlayBtn} alt="Download on Google Play" className="google-play-btn" />
          </a>
        </div>
      </section>

      {/* Tentang Website */}
      <section className="tentang">
        <div className="tentang-header">
          <h2>
            Tentang <br /> website dan aplikasi
          </h2>
          <p className="tentang-subtitle">Bidang Agriculture - Pertanian</p>
        </div>
        <div className="tentang-content">
          <p>
            Ownfarm adalah sebuah platform berbasis digital yang menyediakan fitur request untuk alat
            dan bahan pertanian serta fitur komunitas untuk para petani maupun kelompok tani dapat
            berinteraksi dengan mudah.
          </p>
        </div>
      </section>

      {/* Keunggulan OwnFarm */}
      <section className="keunggulan">
        <h2>Keunggulan aplikasi OwnFarm</h2>
        <div className="keunggulan-list">
          <div className="item">
            <img src={IconRequest} alt="Request Icon" />
            <div>
              <h3>Request Alat dan Bahan Pertanian dengan Mudah</h3>
              <p>
                Dengan 4 langkah mudah sudah dapat mendapatkan alat dan bahan pertanian sesuai dengan
                yang dibutuhkan.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={IconKomunitas} alt="Komunitas Icon" />
            <div>
              <h3>Komunitas pertanian</h3>
              <p>
                Komunitas yang dapat digunakan oleh para petani maupun kelompok tani untuk saling
                berinteraksi mengenai permasalahan pada tanaman maupun sharing tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Panduan Request Barang */}
      <section className="panduan">
        <h2>
          Request Barang <br /> aplikasi Ownfarm
        </h2>

        <div className="panduan-content">
          <div className="panduan-step">
            <img src={LoginRegisterIcon} alt="Login Icon" />
            <p>Buat Akun dan Log in</p>
          </div>
          {/* Panah Kanan atau Panah Bawah */}
          <img
            src={isMobile ? PanahBawahIcon : PanahKananIcon}
            alt={isMobile ? "Panah Bawah" : "Panah Kanan"}
            style={{
              width: isMobile ? "20px" : "40px", // Panah Kanan lebih besar di desktop
              height: "auto",
            }}
          />
          <div className="panduan-step">
            <img src={MenuLogistikIcon} alt="Menu Logistik Icon" />
            <p>Masuk ke Menu Logistik dan membuat request</p>
          </div>
          <img
            src={isMobile ? PanahBawahIcon : PanahKananIcon}
            alt={isMobile ? "Panah Bawah" : "Panah Kanan"}
            style={{
              width: isMobile ? "20px" : "40px", // Panah Kanan lebih besar di desktop
              height: "auto",
            }}
          />
          <div className="panduan-step">
            <img src={RequestDiajukanIcon} alt="Request Diajukan Icon" />
            <p>Request Diajukan</p>
          </div>
          <img
            src={isMobile ? PanahBawahIcon : PanahKananIcon}
            alt={isMobile ? "Panah Bawah" : "Panah Kanan"}
            style={{
              width: isMobile ? "20px" : "40px", // Panah Kanan lebih besar di desktop
              height: "auto",
            }}
          />
          <div className="panduan-step">
            <img src={BarangDikirimIcon} alt="Barang Dikirim Icon" />
            <p>Menunggu barang dikirim</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-mobile">
          <img src={LogoOwnFarm} alt="OwnFarm Logo" className="logo" />
          <div className="footer-links">
            <div className="section">
              <h3>Perusahaan</h3>
              <ul>
                <li>Tentang</li>
                <li>Komunitas</li>
                <li>Download Aplikasi</li>
              </ul>
            </div>
            <div className="section">
              <h3>Sosial media</h3>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div className="section">
              <h3>Kerjasama</h3>
              <img src={LogoIL} alt="Infinite Learning" className="partner-logo" />
            </div>
          </div>
          <div className="google-play">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlay} alt="Google Play" />
            </a>
          </div>
          <p className="copyright">Ownfarm, Copyright 2023</p>
        </div>
      </footer>
    
    </div>
  );
};

export default BerandaSebelumLogin;
