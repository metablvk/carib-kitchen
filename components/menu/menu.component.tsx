import { useEffect, useState, MouseEvent } from 'react';
import styles from './menu.module.css';
import { menuItems } from '../../data/menu-items';
import MenuItem from '../menu-item/menu-item.component';

const Menu = () => {
  const [filter, setFilter] = useState('all');
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    setFilter(value);
  };
  useEffect(() => {
    const newFilteredMenuItems = menuItems.filter((menuItem) => {
      if (filter === 'all') {
        return menuItem;
      } else {
        if (menuItem.type !== 'all' && menuItem.type === filter) {
          return menuItem;
        } else if (menuItem.type !== 'all' && menuItem.type === filter) {
          return menuItem;
        } else if (menuItem.type !== 'all' && menuItem.type === filter) {
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
              className={filter === 'all' ? `${styles.active}` : ''}
              value='all'
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={filter === 'breakfast' ? `${styles.active}` : ''}
              value='breakfast'
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={filter === 'dinner' ? `${styles.active}` : ''}
              value='dinner'
            >
              Dinner
            </button>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={filter === 'treats' ? `${styles.active}` : ''}
              value='treats'
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
