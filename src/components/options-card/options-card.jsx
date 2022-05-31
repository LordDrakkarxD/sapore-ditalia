import RadioInput from "../radio-input/radio-input";

import "./options-card.scss";

const OptionsCard = ({ option }) => {
  const { title, items } = option;

  return (
    <section className="options-card-container">
      <div className="options-card-header-container">
        <div className="options-card-header-content">
          <span className="options-card-header-title">
            Escolha o {title.toLowerCase()}
          </span>
          <span className="options-card-header-text">Escolha 1 opção.</span>
        </div>
        <span className="options-card-header-tag">OBRIGATÓRIO</span>
      </div>
      <RadioInput items={items} />
    </section>
  );
};

export default OptionsCard;
