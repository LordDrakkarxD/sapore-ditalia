import ProductCard from "../../components/product-card/product-card";

import "./section-card.scss";

const SectionCard = ({ categories }) => {
  const { section, items } = categories;

  return (
    <div className="section-card-container">
      <div className="section-card-title">{section}</div>
      <div className="section-card-sections">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} section={section} />
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
