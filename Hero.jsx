import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../product/ProductCard";

const Hero = () => {
  const { getProduct, product } = useProducts();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section id="products">
      <div className="container">
        <div
          className="products"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"space-between",
            width: "1170px",
          }}
        >
          {product ? (
            product.map((item) => <ProductCard item={item} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
