import Link from 'next/link';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { selectCartCount } from '../../store/cart/cart.selector';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <div>
      <nav className={`${styles.navbar} container`}>
        <div>
          <Link href='/' className={`${styles.logo}`}>
            Jamrock Kitchen
          </Link>
        </div>
        <ul className='nav_menu'>
          <li className={styles.cart}>
            <Link href='/cart'>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <div className={styles.cart_count}> {cartCount}</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
