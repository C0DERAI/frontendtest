import type { MenuItem } from "../../data/menu";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="menu-card">
      <div className="menu-card__image-wrapper">
        <img
          className="menu-card__image"
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          decoding="async"
          width={600}
          height={450}
        />
      </div>

      <div className="menu-card__content">
        <h3 className="menu-card__title">{item.name}</h3>

        <p className="menu-card__description">{item.description}</p>
      </div>
    </article>
  );
}
