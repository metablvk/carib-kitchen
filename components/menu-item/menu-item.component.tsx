import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./menu-item.module.css";
import { Item } from "../../types/menu-item";

type Props = {
  menuItem: Item;
};
const MenuItem: FC<Props> = ({ menuItem }) => {
  /**
   * MenuItem Component
   * @typedef {Props} - menuItem utilizing the Item type in types
   * @param {menuItem} - a menu item that gets passed in as a prop
   * @param {cartItems} - Retrieves cartItems from redux using useSelector.
   */
  const { imgUrl, title, price } = menuItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  /**
   * Handle click
   * @dispatch
   * When clicked send a dispatch of addItemToCard using cartItems, and menuItem
   * as arguments to update the state in the store.
   */
  const handleClick = () => dispatch(addItemToCart(cartItems, menuItem));
  return (
    <div className={styles.menu_item}>
      <div className={styles.img_banner}>
        <Link
          href={`/item/${menuItem.title.toLowerCase().split(" ").join("-")}`}
        >
          <Image
            src={menuItem.imgUrl}
            height={200}
            width={200}
            alt={menuItem.title}
          />
        </Link>
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
