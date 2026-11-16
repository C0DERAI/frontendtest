import { useState } from "react";
import { menuFilters, menuItems, type MenuFilter } from "../../data/menu";

import MenuCard from "./MenuCard";
import "./Menu.scss";

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState<MenuFilter>("All");

  const filteredItems =
    activeFilter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-heading">
      <div className="container">
        <header className="menu-section__header">
          <h2 className="menu-section__title" id="menu-heading">
            Menu
          </h2>

          <div
            className="menu-section__filters"
            role="group"
            aria-label="Filter menu by category"
          >
            {menuFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={[
                  "menu-section__filter",
                  activeFilter === filter ? "menu-section__filter--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {filteredItems.length > 0 ? (
          <div className="menu-section__grid">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="menu-section__empty" role="status">
            No items are currently listed in this category. Select another
            category to explore our menu.
          </p>
        )}
      </div>
    </section>
  );
}
