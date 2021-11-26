import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ManageProduct from "./pages/ManageProduct";
import Navigation from "./components/Navigation";

function App() {
  return (
    // Router : Yang memindahkan kita ke halaman lain
    <Router>
      {/* Karena Navigation tidak berada di dalam Routes, maka dia akan selalu tampil */}
      <Navigation />
      {/* Routes : Berisi daftar alamat dari setiap halaman */}
      <Routes>
        {/* Route : Alamat untuk sebuah halaman */}
        <Route path="/" element={<Home />} />
        <Route path="manage-products" element={<ManageProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
