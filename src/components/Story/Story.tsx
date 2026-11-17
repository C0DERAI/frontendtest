import chefImage from "../../assets/img/asignpost-img.jpg";
import "./Story.scss";

interface SocialLink {
  label: string;
  url: string;
}

interface StoryProps {
  socialLinks?: SocialLink[];
}

export default function Story({ socialLinks = [] }: StoryProps) {
  return (
    <section className="story" id="family" aria-labelledby="story-heading">
      <div className="story__container container">
        <div className="story__content">
          <h2 className="story__heading" id="story-heading">
            Our Story
          </h2>

          <p className="story__description">
            Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
            ante, id maximus turpis augue id lacus. Nullam porttitor mauris nec
            fermentum fermentum. Pellentesque habitant morbi
          </p>

          {socialLinks.length > 0 && (
            <ul
              className="story__socials"
              aria-label="Izza social media profiles"
            >
              {socialLinks.map(({ label, url }) => (
                <li key={label}>
                  <a
                    className="story__social-link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="story__media">
          <img
            className="story__image"
            src={chefImage}
            alt="Chef preparing a pizza beside a pizza oven"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
