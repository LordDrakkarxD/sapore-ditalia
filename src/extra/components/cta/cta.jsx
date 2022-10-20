import "./cta.scss";

const CTA = () => {
  return (
    <section className="section-cta" id="section-cta">
      <div className="cta-container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="cta-heading">Lorem ipsum dolor sit amet</h2>
            <p className="cta-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              in lobortis metus, in viverra sapien. Fusce ut orci sit amet enim
              laoreet tincidunt. Donec ultrices euismod nisl id congue.{" "}
              <button className="cta-button">Clique aqui</button>
            </p>
          </div>
          <div className="cta-img-box"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
