import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BerandaSebelumLogin from "./Pages/BerandaSebelumLogin";
import Login from "./Pages/Login";
import SignUpStepOne from "./Pages/SignUpStepOne";
import SignUpStepTwo from "./Pages/SignUpStepTwo";
import BerandaSesudahLogin from "./Pages/BerandaSesudahLogin"; // Tambahkan impor untuk Beranda Sesudah Login
import Logistik from "./Pages/Logistik"; // Tambahkan impor untuk halaman Logistik
import Profil from "./Pages/Profil"; // Tambahkan impor halaman profil
import Komunitas from "./Pages/Komunitas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BerandaSebelumLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup-step-one" element={<SignUpStepOne />} />
        <Route path="/signup-step-two" element={<SignUpStepTwo />} />
        <Route path="/beranda" element={<BerandaSesudahLogin />} />
        <Route path="/logistik" element={<Logistik />} /> {/* Tambahkan rute Logistik */}
        <Route path="/profile" element={<Profil />} /> {/* Tambahkan rute profil */}
        <Route path="/komunitas" element={<Komunitas />} />
      </Routes>
    </Router>
  );
}

export default App;
