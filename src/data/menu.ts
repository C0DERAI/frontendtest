export const menuCategories = [
  "Pizza",
  "Calzone",
  "Dessert",
  "Drinks",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export const menuFilters = ["All", ...menuCategories] as const;

export type MenuFilter = (typeof menuFilters)[number];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image: string;
  imageAlt: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "pizza",
    name: "Pizza",
    category: "Pizza",
    description:
      "Tomato sauce, mozzarella, hot dog, caramelized onions, red onions and french's mustard drizzle.",
    image: "src/assets/img/apizza-img.jpg",
    imageAlt: "Freshly baked pizza with toppings",
  },
  {
    id: "drinks",
    name: "Drinks",
    category: "Drinks",
    description:
      "Mozzarella, BBQ jackfruit, peppers, red onions, sweetcorn and a BBQ drizzle.",
    image: "src/assets/img/bpizza-img.jpg",
    imageAlt: "Selection of refreshing drinks",
  },
  {
    id: "calzone",
    name: "Calzone",
    category: "Calzone",
    description:
      "Tomato sauce, mozzarella, hot dog, caramelized onions, red onions and french's mustard drizzle.",
    image: "src/assets/img/apizza-img.jpg",
    imageAlt: "Freshly baked calzone",
  },
];
