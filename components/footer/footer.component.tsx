import styles from "./footer.module.css";

const Footer = () => {
  /**
   * Footer Component
   * @typedef {Props}
   * A basic footer component
   */
  return (
    <div className={styles.footer_container}>
      <footer className={`${styles.footer} container`}>
        <p>
          <small>&copy; jamrock 2023</small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
