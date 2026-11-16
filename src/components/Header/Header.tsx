import { useEffect, useState } from "react";
import "./Header.scss";

const navigationLinks = [
  { label: "Home", href: "#menu" },
  { label: "About", href: "#family" },
  { label: "Services", href: "#find-us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track whether the user has scrolled past the header.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Allow the mobile menu to close with Esc key
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={[
        "site-header",
        isScrolled ? "site-header--scrolled" : "",
        isMenuOpen ? "site-header--menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="site-header__inner container">
        <a
          className="site-header__logo"
          href="#top"
          aria-label="Izza Pizza - Back to top"
          onClick={closeMenu}
        >
          izza
        </a>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${
            isMenuOpen ? "site-header__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          <ul className="site-header__nav-list">
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  className="site-header__nav-link"
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}

            <li className="site-header__mobile-contact">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a className="site-header__contact" href="#contact">
          <span>contact</span>
          <svg
            aria-hidden="true"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
          </svg>
        </a>

        <button
          id="menu-toggle"
          className="site-header__toggle"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
        </button>
      </div>
    </header>
  );
}
