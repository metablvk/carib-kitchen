import { FC } from 'react';
import Image from 'next/image';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import styles from './menu-item.module.css';
import { Item } from '../../types/menu-item';

type Props = {
  menuItem: Item;
};
const MenuItem: FC<Props> = ({ menuItem }) => {
  const { imgUrl, title, price } = menuItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addItemToCart(cartItems, menuItem));
  return (
    <div className={styles.menu_item}>
      <div className={styles.img_banner}>
        <Image
          src={menuItem.imgUrl}
          height={200}
          width={200}
          alt={menuItem.title}
        />
        <button className={styles.add_btn} onClick={handleClick}>
          +
        </button>
      </div>
      <div className={styles.info}>
        <h2>{menuItem.title}</h2>
        <p>{menuItem.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
