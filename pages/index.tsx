import React, { useEffect, useState } from "react";

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
      <h1>Home</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
