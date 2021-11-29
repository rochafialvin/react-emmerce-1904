import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageProduct from "./pages/ManageProduct";
import ProductDetail from "./pages/ProductDetail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="manage-products" element={<ManageProduct />} />

        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
