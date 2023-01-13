import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import Image from 'next/image';
import Layout from '../../components/layout/layout.component';
import { menuItems } from '../../data/menu-items';
import { Item } from './../../types/menu-item';
import styles from './../../styles/item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

type Props = {
  menuItem: Item;
};
const Item: FC<Props> = ({ menuItem }) => {
  return (
    <Layout>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <Image
              src={menuItem.imgUrl}
              height={240}
              width={200}
              alt={menuItem.title}
            />
          </div>
          <div className={styles.card_body}>
            <h1>
              {menuItem.title} | {menuItem.price}
            </h1>
            {menuItem.popular && (
              <p className={styles.popular_container}>
                Popular
                <FontAwesomeIcon
                  icon={faFireFlameCurved}
                  className={styles.popular}
                />
              </p>
            )}
            <section className='ingredients'>
              <h2>Ingredients</h2>
              <p>{menuItem.ingredients.join(', ')}</p>
            </section>
            <section className='information'>
              <h2>Information</h2>
              <p>{menuItem.desc}</p>
            </section>
            <button className={styles.add_btn}>Add To Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const getMenuItem = menuItems.filter((menuItem) => {
    if (menuItem.title.toLowerCase().split(' ').join('-') === id) {
      return menuItem;
    }
  });
  return {
    props: {
      menuItem: getMenuItem[0],
    },
  };
};

export async function getStaticPaths() {
  const getAllMenuIds = menuItems.map((menuItem) => {
    return {
      params: {
        id: menuItem.title.toLowerCase().split(' ').join('-'),
      },
    };
  });
  const paths = getAllMenuIds;
  return {
    paths,
    fallback: false,
  };
}

export default Item;
