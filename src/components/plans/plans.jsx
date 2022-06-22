import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./plans.scss";

const Plans = () => {
  return (
    <div className="section-plans-container" id="section-plans-container">
      <div className="plans-heading-container">
        <span className="subheading">Kits</span>
        <h2 className="heading-secondary">Em breve</h2>
      </div>
      <div className="plans-container">
        <div className="plan">
          <img
            src="https://i.imgur.com/cd3fc0G.jpg"
            alt="meal"
            className="plan-img"
          />
          <div className="plan-content">
            <div className="plan-tags">
              <span className="plan-tag">Tag</span>
            </div>
            <p className="plan-title">Kit 1</p>
            <ul className="plan-attributes">
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 1</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 2</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 3</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 4</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="plan">
          <img
            src="https://i.imgur.com/lTasdnU.jpg"
            alt="meal"
            className="plan-img"
          />
          <div className="plan-content">
            <div className="plan-tags">
              <span className="plan-tag">Tag</span>
            </div>
            <p className="plan-title">Kit 2</p>
            <ul className="plan-attributes">
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 1</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 2</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 3</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 4</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="plan">
          <img
            src="https://i.imgur.com/wMx2a7O.jpg"
            alt="meal"
            className="plan-img"
          />
          <div className="plan-content">
            <div className="plan-tags">
              <span className="plan-tag">Tag</span>
            </div>
            <p className="plan-title">Kit 3</p>
            <ul className="plan-attributes">
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 1</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 2</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 3</span>
              </li>
              <li className="plan-attribute">
                <FontAwesomeIcon
                  icon={solid("bowl-food")}
                  className="plan-icon"
                />
                <span>Atributo 4</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
