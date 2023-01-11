import Link from 'next/link';
import styles from './navbar.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { selectCartCount } from '../../store/cart/cart.selector';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);
  const [menuState, setMenuState] = useState<boolean>(false);
  const handleClick = () => {
    setMenuState(!menuState);
  };
  return (
    <header className={styles.navbar_header}>
      <nav className={`${styles.navbar} container`}>
        <div>
          <Link href='/' className={`${styles.logo}`}>
            Jamrock Kitchen
          </Link>
        </div>
        <div className={styles.navbar_controls}>
          <div className={styles.hamburger} onClick={handleClick}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>

        <div
          className={
            menuState
              ? `${styles.side_nav} ${styles.show_nav}`
              : `${styles.side_nav}`
          }
        >
          <div className={styles.close_icon} onClick={handleClick}>
            <FontAwesomeIcon icon={faX} />
          </div>
          <ul className={styles.nav_menu}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            {/* <li>
              <Link href='/login'>Login</Link>
            </li> */}
            <li>
              <Link href='/'>Login</Link>
            </li>
            <li>
              <Link href='/cart'>
                <div className={`${styles.cart} ${styles.li_cart}`}>
                  <FontAwesomeIcon icon={faCartShopping} />

                  <div className={styles.cart_count}> {cartCount}</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
