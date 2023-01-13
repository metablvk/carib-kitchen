import { FC, ReactNode } from 'react';
import Footer from '../footer/footer.component';
import Navbar from '../navbar/navbar.component';
import styles from './layout.module.css';
type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <div className={`${styles.site}`}>
    <Navbar />
    <main className={styles.site_content}>{children}</main>
    {/* <Footer /> */}
  </div>
);

export default Layout;
