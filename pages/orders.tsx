import Layout from '../components/layout/layout.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/user/user.selector';
const Orders = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Layout>
      <section className='container'>
        <p>Signed in as {currentUser && currentUser.email}</p>
        <h2>Orders</h2>
      </section>
    </Layout>
  );
};

export default Orders;
