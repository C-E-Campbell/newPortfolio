import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import Nav from '../components/nav.jsx';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Charles Campbell</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Nav />
        <section className={styles.hero}>
          <section className={styles.about_container}>
            <img className={styles.profile_img} src="/profile.jpg" />
            <h1 className={styles.heading}>Hi, Im Charles!</h1>
            <h3 className={styles.heading}>Fullstack Web Developer</h3>
            <h3 className={styles.subheading}>About</h3>
            <p>
              I find myself most days thinking of app ideas, perusing various
              documentation or coding my projects. My weapons of choice are the
              MERN stack, PostgreSQL and a host of cool libraries. While I spend
              most of time coding I also enjoy playing guitar and watching
              cooking shows.
            </p>
            <h3 className={styles.subheading}>Skills</h3>
            <div className={styles.skills_container}>
              <div className={styles.skills_list}>
                <h4>JavaScript</h4>
                <h4>React</h4>
                <h4>Node</h4>
                <h4>Express</h4>
                <h4>Redux</h4>
                <h4>PostgreSql</h4>
                <h4>Sass</h4>
              </div>
              <div className={styles.skills_img}>
                <img className={styles.skill_logo} src="/jscomp.jpg" />
                <img className={styles.skill_logo} src="/reactcomp.png" />
                <img className={styles.skill_logo} src="/nodecomp.png" />
                <img className={styles.skill_logo} src="/expresscomp.png" />
                <img className={styles.skill_logo} src="/reduxcomp.png" />
                <img className={styles.skill_logo} src="/postgresqlcomp.png" />
                <img className={styles.skill_logo} src="/sasscomp.png" />
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
