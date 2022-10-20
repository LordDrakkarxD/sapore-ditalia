import { useState, useContext, useEffect } from "react";

import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./increment-decrement.scss";

const IncrementDecrement = ({ resetCounter }) => {
  const [counter, setCounter] = useState(1);
  const { itemsTotal, setItemsTotal, counterB, setBCounter } = useContext(
    WindowPopUpBuyContext
  );

  useEffect(() => {
    if (resetCounter) {
      setCounter(1);
      //setItemsTotal(1);
      setBCounter(true);
    }
  }, [counterB]);

  let decrementCounter = () => {
    setCounter(counter - 1);
    setItemsTotal(counter - 1);
  };

  let incrementCounter = () => {
    setCounter(counter + 1);
    setItemsTotal(counter + 1);
  };

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div className="increment-decrement-container">
      <button className="qtd-minus" onClick={decrementCounter}>
        <FontAwesomeIcon className="minus-icon" icon={solid("minus")} />
      </button>
      <div className="qtd">{counter}</div>
      <button className="qtd-plus" onClick={incrementCounter}>
        <FontAwesomeIcon className="minus-icon" icon={solid("plus")} />
      </button>
    </div>
  );
};

export default IncrementDecrement;
