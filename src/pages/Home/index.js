import React, { useState, useEffect } from "react";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const init = [
    {
      id: 1,
      productName: "Kaos Hitam Polos",
      price: 25000,
      productImage:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      description: "Round-necked T-shirt in soft cotton jersey.",
      category: "kaos",
    },
    {
      id: 2,
      productName: "Kaos Putih Polos",
      price: 23000,
      productImage:
        "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/1ccc62f925118a5e2a54f9ca1b0eac4b197477ba_xxl-1.jpg",
      description: "Round-necked T-shirt in soft cotton jersey.",
      category: "kaos",
    },
    {
      id: 3,
      productName: "Kaos Biru Polos",
      price: 23000,
      productImage:
        "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/d1d6422cf983e912fcf35844ef791148b4034571_xxl-1.jpg",
      description: "Round-necked T-shirt in soft cotton jersey.",
      category: "kaos",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(init);
    }, 1000);
  }, []);

  return (
    <div className="row container mt-5">
      <ProductManager />
      <ListProduct products={products} />
    </div>
  );
}

export default Index;
