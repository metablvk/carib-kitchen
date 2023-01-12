import Link from 'next/link';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { selectCartCount } from '../../store/cart/cart.selector';
import { faX } from '@fortawesome/free-solid-svg-icons';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase';
import styles from './navbar.module.css';

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);
  const currentUser = useSelector(selectCurrentUser);
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleClick = () => {
    setMenuState(!menuState);
  };
  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <header className={styles.navbar_header}>
      <nav className={`${styles.navbar} container`}>
        <div className={styles.logo}>
          <Link href=''>Jamrock Kitchen</Link>
        </div>

        <div
          className={
            menuState
              ? `${styles.hamburger} ${styles.hamburger_active}`
              : `${styles.hamburger}`
          }
          onClick={handleClick}
        >
          <div>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <div>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <div>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>

        <ul className={styles.nav_menu}>
          <li>
            <Link href='/cart'>
              <div className={`${styles.cart} ${styles.li_cart}`}>
                <FontAwesomeIcon icon={faCartShopping} />

                <div className={styles.cart_count}> {cartCount}</div>
              </div>
            </Link>
          </li>
          <div
            className={
              menuState
                ? `${styles.side_nav} ${styles.show_nav}`
                : `${styles.side_nav}`
            }
          >
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/register'>Register</Link>
            </li>
            <li>
              <Link href='/login'>Login</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
