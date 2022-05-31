import "./radio-input.scss";

import { useState, useContext } from "react";

import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

const RadioInput = ({ items }) => {
  const [checked, setChecked] = useState(true);

  const { addItemToForm } = useContext(WindowPopUpBuyContext);

  const toggleChecked = (e) => {
    if (checked) {
      e.target.parentElement.classList.add("--checked");
    } else {
      e.target.parentElement.classList.remove("--checked");
    }

    setChecked(!checked);
  };

  const handleChange = (e) => {
    const data = JSON.parse(e.target.value);
    addItemToForm({ ...data });
  };

  return (
    <div className="radio-input-container">
      {items.map((item) => (
        <label key={item.name} className="container" onChange={handleChange}>
          <div className="radio-input-details">
            <div className="radio-input-details-title">{item.name}</div>
            {item.price && item.price > 0 ? (
              <span className="radio-input-details-price">
                + R$ {item.price}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="radio-input-button">
            <input
              className="checkmark-input"
              type="radio"
              name={item.id}
              value={JSON.stringify(item)}
              onChange={toggleChecked}
            />
            <span className="checkmark" />
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
