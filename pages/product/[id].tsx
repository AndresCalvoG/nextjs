import React from "react";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  return <h1>Product: {router.query.id}</h1>;
};

export default Product;
