import { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import Slider from "react-slick";
// import Pasta from "../../assets/ragu-5.jpg";

import { CartContext } from "../../contexts/cart";
import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

import IncrementDecrement from "../../components/increment-decrement/increment-decrement";

import { RemoveScroll } from "react-remove-scroll";

import { gourmetCategories } from "./gourmet-list";

import "./gourmet.scss";

const Gourmet = () => {
  const [optionBuy, setOptionBuy] = useState("500g");

  const [resetCounter, setResetCounter] = useState(false);
  const [isCartFilled, setIsCartFilled] = useState("");
  const { itemsTotal, setItemsTotal, counterB, setBCounter } = useContext(
    WindowPopUpBuyContext
  );

  const { addItemToCart, filterTerm, setFilterTerm } = useContext(CartContext);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setOptionBuy(e.target.value);
  };

  const handlePopUp = () => {
    setIsCartFilled("");
  };

  const filterHandle = (e) => {
    e.preventDefault();

    setFilterTerm(e.target.getAttribute("value"));
  };

  const addProductToCart = (product) => {
    const totalProduct = product.price * itemsTotal;

    addItemToCart({
      ...product,
      option: optionBuy,
      quantity: itemsTotal,
      totalProduct,
      //options: formData,
      //observation,
    });

    setItemsTotal(1);
    setBCounter(false);
    setResetCounter(true);
    //SetResetCounter(false);

    if (!counterB) {
      console.log("oiii");
      setResetCounter(false);
    }

    setIsCartFilled("active");

    //resetFields();
    //toggleWindowPopup();
  };

  return (
    <Fragment>
      <div className="section-gourmet">
        <div className="gourmet-container">
          <div className="gourmet-header">
            <span>Massas Gourmet</span>
          </div>
          <div className="gourmet-store">
            <div className="gourmet-menu">
              <h2 className="gourmet-menu-title">Categorias</h2>
              {gourmetCategories.map(({ title }) => {
                return (
                  <div
                    key={title}
                    className="gourmet-category"
                    value={title}
                    onClick={filterHandle}
                    readOnly
                  >
                    {title}
                  </div>
                );
              })}
            </div>
            <div className="gourmet-vitrine">
              {gourmetCategories
                .filter(({ title }) => title.includes(filterTerm))
                .map(({ categoryItems }) => {
                  return categoryItems.map((product) => {
                    return (
                      <div className="gourmet-produto" key={product.id}>
                        <div className="gourmet-imagem">
                          <Link
                            onClick={handleScroll}
                            to={`/gourmet/${product.id}`}
                          >
                            <img src={product.imageUrl} alt={product.title} />
                          </Link>
                        </div>
                        <div className="gourmet-descricao">
                          <Link
                            onClick={handleScroll}
                            to={`/gourmet/${product.id}`}
                          >
                            <h5 className="gourmet-titulo">{product.title}</h5>
                          </Link>
                          <div className="gourmet-opcoes">
                            <div className="gourmet-tipo">
                              <select value={optionBuy} onChange={handleChange}>
                                {product.portions.map((option) => (
                                  <option
                                    value={option}
                                    key={`${product.id}-${option}`}
                                  >
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="gourmet-quantidade">
                              <IncrementDecrement resetCounter={resetCounter} />
                            </div>
                          </div>
                          <div className="gourmet-preco">
                            R$ {product.price.toFixed(2)}
                          </div>
                          <div
                            className="gourmet-adicionar"
                            onClick={() => addProductToCart(product)}
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
                    );
                  });
                })}
            </div>
            <div className="gourmet-menu-2" />
          </div>
        </div>
      </div>
      <div className={`buy-notification-pop-up-container ${isCartFilled}`}>
        <div className="buy-notification-pop-up">
          <div className="circle-basket-icon">
            <FontAwesomeIcon className="basket-icon" icon={solid("bell")} />
          </div>
          <h2>Produto Adicionado ao Carrinho.</h2>
          <div className="close-basket-icon" onClick={handlePopUp}>
            <FontAwesomeIcon
              className="basket-icon"
              icon={solid("circle-xmark")}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gourmet;
