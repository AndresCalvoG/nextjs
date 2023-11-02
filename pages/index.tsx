import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("/api/avo")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);
      });
  }, []);

  return (
    <div>
      s
      <Navbar />
      <h1>Home</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
