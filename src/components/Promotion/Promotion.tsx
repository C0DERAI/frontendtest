import promoPizza from "../../assets/img/apizza-img.jpg";
import "./Promotion.scss";

interface PromotionProps {
  label?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Promotion({
  label = "Exclusive offer",
  title = "Sign up to our newsletter for exclusive offers",
  ctaText = "Read more",
  ctaHref,
}: PromotionProps) {
  return (
    <section className="promotion" aria-labelledby="promotion-heading">
      <div className="promotion__container container">
        <div className="promotion__content">
          <span className="promotion__label">{label}</span>

          <h2 className="promotion__heading" id="promotion-heading">
            {title}
          </h2>

          {ctaHref && (
            <a className="promotion__cta" href={ctaHref}>
              {ctaText}
            </a>
          )}
        </div>

        <div className="promotion__media">
          <img
            className="promotion__image"
            src={promoPizza}
            alt="Freshly prepared pizza with a selection of toppings"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
