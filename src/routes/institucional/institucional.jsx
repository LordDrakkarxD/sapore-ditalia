import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./institucional.scss";

const select = [
  {
    title: "Delivery",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Para nós, a segurança do negócio é fundamental para garantir não só
          uma operação estável e proteção do seu dinheiro, mas a segurança dos
          dados de nossos clientes. Por isso nossa loja conta com:
        </p>
        <p>
          <br />
        </p>
        <p className="quem-somos-a">
          <b>Estabilidade Total</b>
        </p>
        <p className="quem-somos-a">
          Infraestrutura capaz de processar milhares de transações por segundo,
          com 99% de uptime e status page em real time.
        </p>
        <p>
          <br />
        </p>
        <p></p>
      </div>
    ),
  },
  {
    title: "Quem Somos",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Somos a SAPORE D ITALIA MASSAS ARTESANAIS LTDA, CNPJ
          44.046.276/0001-86, uma cozinha industrial especializada em massas
          artesanais com receitas trazidas da Itália. Fazemos diversos tipos de
          massas italianas irresistíveis tanto para comer de forma tradicional
          como também temos especialidade em massas gourmets. Estamos
          localizados na Rua das Perdizes n°57 - Loja 4 - Barra Funda, São Paulo
          - SP, 01156-030, de onde enviamos nossos produtos para atender aos
          clientes localizados em todas as regiões da cidade.
        </p>
        <p>
          <br />
        </p>
        <p className="quem-somos-a">
          Nosso objetivo é oferecer para você a massa italiana mais tradicional,
          feita com os melhores ingredientes e pronta para ser degustada pelo
          seu paladar ao alcance de sua casa em São Paulo, agora entregue no seu
          endereço, pelo nosso serviço de delivery, em parceria com o iFood.
        </p>
        <p>
          <br />
        </p>
      </div>
    ),
  },
  {
    title: "Contato",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Para nós, a segurança do negócio é fundamental para garantir não só
          uma operação estável e proteção do seu dinheiro, mas a segurança dos
          dados de nossos clientes. Por isso nossa loja conta com:
        </p>
        <p>
          <br />
        </p>
        <p className="quem-somos-a">
          <b>Estabilidade Total</b>
        </p>
        <p className="quem-somos-a">
          Infraestrutura capaz de processar milhares de transações por segundo,
          com 99% de uptime e status page em real time.
        </p>
      </div>
    ),
  },
  {
    title: "Política de Privacidade",
    text: (
      <div>
        <p>Privacidade</p>
        <p className="quem-somos-a">
          Nosso compromisso é respeitar sua privacidade e garantir o sigilo de
          todas as informações que você nos fornece. Todos os dados cadastrados
          em nosso site são utilizados apenas para melhorar sua experiência de
          compra e mantê-lo atualizado sobre nossas promoções e vantagens
          oferecidas pelo Sapore D Italia Massas Artesanais ltda.
        </p>
        {/*<p className="quem-somos-a">
          <b>Estabilidade Total</b>
        </p>
        <p className="quem-somos-a">
          Infraestrutura capaz de processar milhares de transações por segundo,
          com 99% de uptime e status page em real time.
    </p>*/}
        {/*<p>Uso das informações</p>
        <p className="quem-somos-a">
          Para seu cadastro, solicitamos informações como: nome, endereço,
          e-mail e telefones para contato, para facilitar suas compras no site.
          O seu e-mail é utilizado para divulgar informações de suas compras e,
          quando solicitado por você, para comunicar promoções de produtos
          oferecidos pela Sapore D Italia Massas Artesanais ltda.
        </p>
        <p>Cookies</p>
        <p className="quem-somos-a">
          Na Sapore, o uso de cookies é feito apenas para reconhecer um
          visitante constante e melhorar a experiência de compra. Os cookies são
          pequenos arquivos de dados transferidos de um site da web para o disco
          do seu computador e não armazenam dados pessoais. Se preferir, você
          pode apagar os cookies existentes em seu computador através do
          browser.
        </p>
        <p>Envio de e-mails</p>
        <p className="quem-somos-a">
          A Sapore D Italia massas artesanais, nunca enviará e-mails solicitando
          confirmação de dados/ cadastro ou com anexos executáveis (extensão
          exe, com, scr, bat) e links para download. Nossos e-mails têm sempre
          como remetente: contato@saporediitalia.com.br Os e-mails de
          acompanhamento de seu pedido de compra serão enviados
          como: contato@saporediitalia.com.br ou diretamente pelo contato via
          whatsapp: (11)98394-3845. Os links de nossos e-mails levam diretamente
          para a loja online da Sapore D Italia Massas Artesanais Ltda. Nunca
          forneça a senha de seu cadastro a terceiros e, no caso de uso não
          autorizado, acesse imediatamente a área “Meus pedidos” no site e
          altere sua senha. Caso não queira mais receber nosso newsletter com
          novidades do mundo gastronômico e nossos últimos lançamentos, basta se
          descadastrar nos e-mails recebidos.
        </p>
        <p>Segurança</p>
        <p className="quem-somos-a">
          Nosso site utiliza uma tecnologia avançada de segurança. Todo o
          tráfego de dados que acontece nas páginas “Carrinho”, “Checkout” e
          “Meus Pedidos” é feito com as informações criptografadas,
          utilizando-se do certificado SSL, que é um método padrão usado na
          Internet para proteger as transmissões de dados entre os usuários da
          Web e os sites, fornecendo uma compra segura.
          </p>*/}
      </div>
    ),
  },
];

const Institucional = ({ title }) => {
  let selected = select.find((e) => e.title === title);

  return (
    <Fragment>
      <div className="quem-somos-container">
        <div className="quem-somos-header">
          <h1 className="quem-somos-title">{selected.title}</h1>
          <span className="quem-somos-section">
            HOME / INSTITUCIONAL / {selected.title}
          </span>
        </div>
        <div className="quem-somos-content">
          <div className="quem-somos-menu">
            <div className="quem-somos-menu-title">
              <h2>Menu</h2>
              <hr />
            </div>
            <div className="quem-somos-links">
              <Link className="quem-somos-link" to="/institucional/quem-somos">
                Quem Somos
              </Link>
              <Link
                className="quem-somos-link"
                to="/institucional/politica-de-privacidade"
              >
                Política de Privacidade
              </Link>
              <Link className="quem-somos-link" to="/delivery">
                Delivery
              </Link>
              <Link className="quem-somos-link" to="/contato">
                Contato
              </Link>
            </div>
          </div>
          <div className="quem-somos-text">{selected.text}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Institucional;
