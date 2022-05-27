import "./radio-input.scss";

import { useState, useContext } from "react";

import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

const RadioInput = ({ option }) => {
  const { section, items } = option;
  const [checked, setChecked] = useState(true);

  const { addItemToForm } = useContext(WindowPopUpBuyContext);

  const toggleChecked = (e) => {
    console.log(e.target.checked === true);
    if (checked) {
      e.target.parentElement.classList.add("--checked");
    } else {
      e.target.parentElement.classList.remove("--checked");
    }

    //child.parentElement.classList.add("--checked");
    setChecked(!checked);
    console.log(checked);
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
              onClick={toggleChecked}
            />
            <span className="checkmark" />
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;

// <label key={item.name} className="option-card">
//   <div className="option-card-details">
//     <span className="option-card-title">{item.name}</span>
//     {item.price && item.price > 0 ? (
//       <span className="option-card-price">+ R$ {item.price}</span>
//     ) : (
//       ""
//     )}
//   </div>
//   <input
//     type="radio"
//     name={`radio ${section}`}
//     value={JSON.stringify(item)}
//     defaultChecked={checked}
//     onChange={handleChange}
//   />
//   <span className="checkmark"></span>
// </label>
