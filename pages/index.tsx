import React from "react";

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3001/api/avo");
  console.log("response", response);
  const { data: products } = await response.json();
  return {
    props: {
      products,
    },
  };
};
const Home = ({ products }: { products: TProduct[] }) => {
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
