import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import Nav from '../components/nav.jsx';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Charles Campbell</title>
        <link rel="icon" href="/projects" />
      </Head>

      <main>
        <Nav />
        <section className={styles.hero}>
          <section className={styles.about_container}>
            <img src="../public/profile.jpg"></img>
            <h2>Hi, Im Charles!</h2>
            <h3>Fullstack Web Developer</h3>
            <p>
              I find myself most days thinking of app ideas, perusing various
              documentation or coding my projects. My weapons of choice are the
              MERN stack, PostgreSQL and a host of cool libraries. While I spend
              most of time coding I also enjoy playing guitar and watching
              cooking shows.
            </p>
            <h3>Skills</h3>
            <div>
              <div>
                <h4>JavaScript</h4>
                <h4>TypeScript</h4>
                <h4>React</h4>
                <h4>Node</h4>
                <h4>Express</h4>
                <h4>Redux</h4>
                <h4>PostgreSql</h4>
                <h4>Sass</h4>
              </div>
              <div></div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
