import { useState, useContext } from "react";

import { useParams } from "react-router-dom";

import { gourmetCategories } from "../gourmet/gourmet-list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CartContext } from "../../contexts/cart";
import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

import IncrementDecrement from "../../components/increment-decrement/increment-decrement";

import "./product-details.scss";

const ProductDetails = () => {
  const [optionBuy, setOptionBuy] = useState("500g");
  const [resetCounter, setResetCounter] = useState(false);

  const { itemsTotal, setItemsTotal, setBCounter } = useContext(
    WindowPopUpBuyContext
  );

  const { addItemToCart } = useContext(CartContext);

  let { id, category } = useParams();

  const product = gourmetCategories.map(({ categoryItems }) => {
    return categoryItems.find((product) => {
      return product.id.includes(id) && product.id.length > 0;
    });
  });

  let results = [];

  product.forEach((element) => {
    if (element !== undefined) {
      results.push(element);
    }
  });

  results = results.pop();

  const handleChange = (e) => {
    e.preventDefault();

    setOptionBuy(e.target.value);
  };

  const { title, imageUrl, price, portions, description } = results;

  const categoryTitle = title.split(" ")[0];

  const addProductToCart = (results) => {
    const totalProduct = results.price * itemsTotal;

    addItemToCart({
      ...results,
      option: optionBuy,
      quantity: itemsTotal,
      totalProduct,
      //options: formData,
      //observation,
    });

    setItemsTotal(1);
    setBCounter(false);
    setResetCounter(true);
  };

  return (
    <section className="section-product-details">
      <div className="product-details-container">
        <div className="product-header">
          <span>{categoryTitle}</span>
        </div>
        <div className="product-details">
          <div className="product-image">
            <img src={imageUrl} alt={title}></img>
          </div>
          <div className="product-box">
            <div className="product-title">{title}</div>
            <div className="product-description">{description}</div>
            <div className="product-opcoes">
              <div className="gourmet-tipo">
                <select value={optionBuy} onChange={handleChange}>
                  {portions.map((option) => (
                    <option value={option} key={`${id}-${option}`}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="gourmet-quantidade">
                <div className="box-number">
                  <IncrementDecrement resetCounter={resetCounter} />
                </div>
              </div>
            </div>
            <div className="product-price">R$ {price.toFixed(2)}</div>
            <div
              className="product-adicionar"
              onClick={() => addProductToCart(results)}
            >
              <span>
                Adicionar ao Carrinho{" "}
                <FontAwesomeIcon
                  className="basket-icon"
                  icon={solid("basket-shopping")}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
