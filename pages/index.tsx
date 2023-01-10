import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/layout.component';

import styles from './../styles/home.module.css';
import Menu from '../components/menu/menu.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jamrock Kitchen | Home</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <section className='container'>
          <section className={`${styles.home}`}>
            <h1>Welcome to Jamrock Kitchen</h1>
            <p>Delicious caribbean food just an order away</p>
          </section>
          <Menu />
        </section>
      </Layout>
    </>
  );
}
