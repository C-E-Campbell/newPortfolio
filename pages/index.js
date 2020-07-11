import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';
import Nav from '../components/nav.jsx';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio | Charles Campbell</title>
        <link rel="icon" href="/projects" />
      </Head>

      <main>
        <Nav></Nav>

        <section>Section</section>
      </main>
    </div>
  );
}
