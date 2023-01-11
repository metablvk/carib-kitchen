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
        <div className={styles.cart_item_header}>
          <Image
            src={cartItem.imgUrl}
            height={100}
            width={100}
            alt={cartItem.title}
          />
          <div>
            <h2 className={styles.cart_item_title}>{cartItem.title}</h2>
            <p>{cartItem.price}</p>
          </div>
          <button onClick={clearItemHandler} className={styles.clear_item}>
            x
          </button>
        </div>
        <div className={styles.cart_item_footer}>
          <ul className={styles.cart_item_controls}>
            <li>
              <button onClick={removeItemHandler}>-</button>
            </li>
            <li>{cartItem.quantity}</li>
            <li>
              <button onClick={addItemHandler}>+</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartItem;
