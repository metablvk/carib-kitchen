import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout.component';
import { selectCurrentUser } from '../store/user/user.selector';
import { selectCurrentOrders } from '../store/orders/orders.selector';
import styles from './../styles/order.module.css';
const Orders = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentOrders = useSelector(selectCurrentOrders);

  return (
    <Layout>
      <section className='container'>
        <p>Signed in as {currentUser && currentUser.email}</p>
        <h2>Orders</h2>
        <div className={styles.orders_container}>
          {currentOrders &&
            currentOrders.map((order: any, id: number) => {
              return (
                <div key={id} className={styles.card}>
                  <div className={styles.card_header}>
                    <h2>{id + 1}</h2>
                    <p>
                      ${order.finalTotal} - {order.dateOrdered}
                    </p>
                  </div>
                  <div className='card-body'></div>
                  {order.items.map((item: any) => {
                    return (
                      <div>
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
