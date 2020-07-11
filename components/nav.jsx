import Link from 'next/link';
import styles from '../styles/nav.module.css';
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner_container}>
        <Link href="/">
          <a className={styles.nav_link} href="/">
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className={styles.nav_link} href="/projects">
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.nav_link} href="/contact">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}
