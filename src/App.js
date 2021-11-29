import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageProduct from "./pages/ManageProduct";
import ProductDetail from "./pages/ProductDetail";
import Navigation from "./components/Navigation";
import { loginAction } from "./store/actions";

function App() {
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("userData");

    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage);
      const { id, username, role } = userData;
      // kita loginkan (kirim data user ke state)
      loginAction({ dispatch, id, username, role });
    }

    setIsLocalStorageChecked(true);
  }, []);

  if (isLocalStorageChecked) {
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
  } else {
    return <h1>Loading ...</h1>;
  }
}

export default App;
