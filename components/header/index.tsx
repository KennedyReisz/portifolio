// Import's
import Link from "next/link";

// Asset's
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Kennedy</h1>

      <nav className={styles.navbar}>
        <Link href={""}>
          <a className={styles.navItem}>About</a>
        </Link>
        <Link href={""}>
          <a className={styles.navItem}>Skills</a>
        </Link>
        <Link href={""}>
          <a className={styles.navItem}>Projects</a>
        </Link>
        <Link href={""}>
          <a className={`${styles.navItem} ${styles.lastItem}`}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
