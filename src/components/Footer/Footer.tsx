import facebookIcon from "../../assets/social-icon/social-facebook-icon.svg";
import instagramIcon from "../../assets/social-icon/social-instagram-icon.svg";
import linkedinIcon from "../../assets/social-icon/social-linkedin-icon.svg";
import xIcon from "../../assets/social-icon/social-x-icon.svg";

import "./Footer.scss";

type socialPlatform = "Facebook" | "Instagram" | "LinkedIn" | "X";

interface SocialLink {
  label: socialPlatform;
  href: string;
}

interface FooterProps {
  phoneNumber?: string;
  socialLinks?: SocialLink[];
  attribution?: string;
}

const socialIcons: Record<socialPlatform, string> = {
  Facebook: facebookIcon,
  Instagram: instagramIcon,
  LinkedIn: linkedinIcon,
  X: xIcon,
};

export default function Footer({
  phoneNumber,
  socialLinks = [],
  attribution,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const telephoneHref = phoneNumber
    ? `tel:${phoneNumber.replace(/[^\d+]/g, "")}`
    : undefined;

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__container container">
        {/* Brand and resturant information */}
        <div className="site-footer__brand">
          <a
            className="site-footer__logo"
            href="#top"
            aria-label="Izza Pizza - Back to top"
          >
            izza
          </a>

          <p className="site-footer__copyright">
            © {currentYear} Izza Pizza is a company limited by guarantee
            registered in England and Wales. <br />
          </p>
        </div>

        {/* Contact info */}
        <div className="site-footer__contact">
          <h2 className="site-footer__heading">Contact Us</h2>
          <hr />
          {telephoneHref ? (
            <a className="site-footer__phone" href={telephoneHref}>
              {phoneNumber}
            </a>
          ) : (
            <p className="site-footer__placeholder">
              Contact details pending. Please check back later.
            </p>
          )}
        </div>

        {/* Social media and attribution */}
        <div className="site-footer__social">
          <h2 className="site-footer__heading">Follow Us</h2>
          <hr />
          {socialLinks.length > 0 && (
            <ul className="site-footer__social-list">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    className="site-footer__social-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Izza Pizza on ${label}`}
                  >
                    <img
                      className="site-footer__social-icon"
                      src={socialIcons[label]}
                      alt=""
                      width="18"
                      height="18"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {attribution && (
            <p className="site-footer__attribution">{attribution}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
