import ProductCard from "../../components/product-card/product-card";

import "./section-card.scss";

const SectionCard = ({ categories }) => {
  const { title, items } = categories;

  return (
    <div className="section-card-container">
      <div className="section-card-title">{title}</div>
      <div className="section-card-sections">
        {items.map((item) => (
          <ProductCard key={item.title} item={item} section={title} />
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
