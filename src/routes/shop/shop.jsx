import { useState, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import CategoryCard from "../../components/category-card/category-card";

import "./shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const [textInput, setTextInput] = useState("");

  const onChangeHandler = (e) => {
    setTextInput(e.target.value);
  };

  // const filteredProducts = (title) => {
  //   Object.keys(categoriesMap).map((title) => {
  //     const products = categoriesMap[title].filter(
  //       (product) => textInput === "" || product.title.includes(textInput)
  //     );

  //     return products;
  //   });
  // };

  const resetText = () => {
    setTextInput("");
  };

  return (
    <div className="shop-container">
      <div className="shop-menu">
        <div className="shop-menu-search-bar-container">
          <div className="shop-menu-search-bar">
            <span className="shop-menu-search-button">
              <FontAwesomeIcon
                icon={solid("magnifying-glass")}
                className=""
              ></FontAwesomeIcon>
            </span>
            <input
              className="shop-search-input"
              type="text"
              role="search"
              placeholder="Buscar no cardapio"
              value={textInput}
              onChange={onChangeHandler}
            />
            {textInput && (
              <button
                className="shop-search-reset-button-container"
                onClick={resetText}
              >
                <span className="shop-search-reset-button">
                  <FontAwesomeIcon
                    icon={solid("x")}
                    className=""
                  ></FontAwesomeIcon>
                </span>
              </button>
            )}
          </div>
        </div>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title].filter((product) =>
            product.title.includes(textInput)
          );

          return <CategoryCard key={title} title={title} products={products} />;
        })}
      </div>
    </div>
  );
};

export default Shop;

// {
//   products
//     .filter(({ title, items }) => textInput === "" || title.includes(textInput))
//     .map((categories) => (
//       <SectionCard key={categories.title} categories={categories} />
//     ));
// }
