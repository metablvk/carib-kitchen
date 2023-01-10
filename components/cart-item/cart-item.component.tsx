import { FC } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItemFromCart,
  clearItemFromCart,
  addItemToCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import styles from './cart-item.module.css';
import { CartItem } from '../../store/cart/cart.types';

type Props = {
  cartItem: CartItem;
  id: number;
};

const CartItem: FC<Props> = ({ cartItem, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <>
      <div className={styles.cart_item} key={id}>
        <Image
          src={cartItem.imgUrl}
          height={200}
          width={200}
          alt={cartItem.title}
        />
        <div className={styles.cart_item_header}>
          <h2 className={styles.cart_item_title}>{cartItem.title}</h2>
        </div>
        <button onClick={clearItemHandler} className={styles.clear_item}>
          x
        </button>
        <div className={styles.cart_item_footer}>
          <div className={styles.buttons}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
          <ul className={styles.flex}>
            <li>{cartItem.price} </li>
            <li>{cartItem.quantity}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartItem;
