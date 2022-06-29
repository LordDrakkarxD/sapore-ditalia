import videoSapore from "../../assets/video/production.mp4";

import "./sobre-nos.scss";

const SobreNos = () => {
  return (
    <div className="section-sobre-nos">
      <div className="sobre-nos-container">
        <div className="sobre-nos-video">
          <video src={videoSapore} autoPlay loop muted />
        </div>
        <div className="sobre-nos-text">
          <h1>Quem Somos</h1>

          <p>
            Massas leves, macias e delicadas, todas recheadas de modo artesanal
            com ingredientes selecionados, tudo supervisionado por uma
            nutricionista que se preocupa com a qualidade alimentar em todo
            processo de fabricação.
          </p>
          <p>&nbsp;</p>
          <p>
            São pré-cozidas e muito fáceis de preparar, se preferir pode receber
            o produto congelado garantindo uma maior validade, para ter sempre a
            mão aquela “ajudinha” na hora de preparar uma refeição saborosa.
          </p>
          <p>&nbsp;</p>
          <p>
            Nós, da Sapore di Italia, adoramos massa, mas também consideramos o
            molho parte fundamental para que essa massa fique saborosa e
            completa, daí a dedicação no preparo artesanal de molhos com os
            melhores ingredientes. Os tomates são descascados individualmente e
            retirada as sementes para que não fique ácido, acrescentando
            temperos e especiarias e como resultado temos um molho leve,
            delicado e com um aroma delicioso.
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
