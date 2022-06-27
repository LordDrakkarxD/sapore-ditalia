import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery-container" id="section-delivery">
      <FontAwesomeIcon icon={solid("truck")} className="delivery-icon" />
      <span className="delivery-text">Delivery Gratis para toda Sao Paulo</span>
    </div>
  );
};

export default Delivery;
