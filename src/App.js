import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import ManageProduct from "./pages/ManageProduct";
import ProductDetail from "./pages/ProductDetail";

import { keepLoginAction } from "./store/actions";

function App() {
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("userData");

    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage);
      const { id, username, role } = userData;
      dispatch(keepLoginAction({ id, username, role }));
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
          <Route path="register" element={<Register />} />
          <Route path="manage-products" element={<ManageProduct />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}

export default App;
