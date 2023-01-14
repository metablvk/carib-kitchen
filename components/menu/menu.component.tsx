import { useEffect, useState, MouseEvent } from "react";
import styles from "./menu.module.css";
import { menuItems } from "../../data/menu-items";
import MenuItem from "../menu-item/menu-item.component";

const Menu = () => {
  /**
   * Menu Component
   * A component that renders a menu on the home page.
   */
  const [filter, setFilter] = useState("all");
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    /**
     * Handle Click Function
     * @param {object} - e
     * Destructures the value from e.target and sets the filter
     * using set filtered menu items.
     */
    const { value } = e.target as HTMLButtonElement;
    setFilter(value);
  };
  useEffect(() => {
    /**
     * useEffect
     * Filters through each item returning the appropriate item according to
     * the filter, and triggers everytime filter changes by the use of filter
     * in the dependency array.
     * @example
     * if filter equals all return all items
     * if filter equals treats return all treats
     */
    const newFilteredMenuItems = menuItems.filter((menuItem) => {
      if (filter === "all") {
        return menuItem;
      } else {
        if (menuItem.type !== "all" && menuItem.type === filter) {
          return menuItem;
        } else if (menuItem.type !== "all" && menuItem.type === filter) {
          return menuItem;
        } else if (menuItem.type !== "all" && menuItem.type === filter) {
          return menuItem;
        }
      }
    });
    setFilteredMenuItems(newFilteredMenuItems);
  }, [filter]);
  return (
    <>
      <section className={styles.menu}>
        <h2>Menu</h2>
        <ul className={styles.menu_links}>
          <li>
            <button
              onClick={handleClick}
              className={filter === "all" ? `${styles.active}` : ""}
              value="all"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={filter === "breakfast" ? `${styles.active}` : ""}
              value="breakfast"
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={filter === "dinner" ? `${styles.active}` : ""}
              value="dinner"
            >
              Dinner
            </button>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={filter === "treats" ? `${styles.active}` : ""}
              value="treats"
            >
              Treats
            </button>
          </li>
        </ul>
        <div className={styles.menu_items}>
          {filteredMenuItems.map((menuItem, id) => (
            <MenuItem key={id} menuItem={menuItem} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
