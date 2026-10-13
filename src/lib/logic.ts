export type Menu = {
  id: number;
  name: string;
  price: number;
};

export function filterByBudget(menus: Menu[], budget: number): Menu[] {
  return menus.filter((menu) => menu.price <= budget);
}

export function sortByPrice(menus: Menu[]): Menu[] {
  return [...menus].sort((a, b) => a.price - b.price);
}
