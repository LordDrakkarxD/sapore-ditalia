import { Fragment } from "react";

import ProductCard from "../product-card/product-card";

import "./category-card.scss";

const CategoryCard = ({ title, products }) => {
  return (
    <Fragment key={title}>
      {products.length > 0 && (
        <div className="category-card-container">
          <div className="category-card-title">{title}</div>
          <div className="category-card-sections">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                section={title}
              />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryCard;
