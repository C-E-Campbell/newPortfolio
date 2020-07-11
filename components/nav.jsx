import Link from 'next/link';
import styles from './nav.module.css';
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a href="/">Home</a>
      </Link>
      <Link href="/projects">
        <a href="/projects">Projects</a>
      </Link>
      <Link href="/contact">
        <a href="/contact">Contact</a>
      </Link>
    </nav>
  );
}
