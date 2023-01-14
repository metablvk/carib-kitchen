import { FC, ReactNode } from "react";
import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";
import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  /**
   * Layout Component
   * @typedef {Props}
   * @params {object} - children that get passed into the layout component
   * A component that renders a navbar up top, and applies appropriate styling
   * to the current layout of the page.
   */
  <div className={`${styles.site}`}>
    <Navbar />
    <main className={styles.site_content}>{children}</main>
    {/* <Footer /> */}
  </div>
);

export default Layout;
