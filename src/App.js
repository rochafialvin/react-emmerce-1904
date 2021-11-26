import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ManageProduct from "./pages/ManageProduct";
import Navigation from "./components/Navigation";
import ProductDetail from "./pages/ProductDetail";

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
        {/* product/99  --> 99 akan tersimpan di object params : { id : 99 } */}
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
