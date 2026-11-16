import heroImage from "../../assets/img/pizza-hero-img.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroImage}
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title" id="hero-title">
            There is always
            <br />
            time for pizza...
          </h1>
        </div>
      </div>
    </section>
  );
}
