import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={`${styles.footer} container`}>
        <p>
          <small>&copy; jamrock 2023</small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
