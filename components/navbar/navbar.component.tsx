import Link from 'next/link';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { selectCartCount } from '../../store/cart/cart.selector';

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
    setMenuState(!menuState);
  };
  return (
    <header className={styles.navbar_header}>
      <nav className={`${styles.navbar} container`}>
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
        <div className={styles.logo}>
          <Link href='/'>Carib Kitchen</Link>
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
              <Link href='/'>home</Link>
            </li>
            {currentUser && currentUser ? (
              <>
                <li>
                  <Link href='/' onClick={handleSignOut}>
                    sign out
                  </Link>
                </li>
                <li>
                  <Link href='/orders'>Orders</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href='/register'>register</Link>
                </li>
                <li>
                  <Link href='/login'>login</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
