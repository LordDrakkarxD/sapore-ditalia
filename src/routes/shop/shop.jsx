import { useContext } from "react";

import { ProductsContext } from "../../contexts/products";

import SectionCard from "../../components/section-card/section-card";

import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      <div className="shop">
        {products.map((categories) => (
          <SectionCard key={categories.title} categories={categories} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
