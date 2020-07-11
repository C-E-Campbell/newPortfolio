import styles from '../styles/projects.module.css';
import Head from 'next/head';
import Nav from '../components/nav.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <section className={styles.project_container}>
        <div className={styles.projectCard_container}>
          <ProjectCard
            imgSrc={'/devtennis.jpg'}
            title={'Dev Tennis'}
            description={
              'A fullstack E-Commerce website. Features include Stripe checkout, account creation and fully functional cart.'
            }
            skill1={'React'}
            skill2={'Redux'}
            skill3={'Express'}
            skill4={'Nodemailer'}
            skill5={'SportsRadar API'}
            skill6={'AWS S3'}
          />
          <ProjectCard
            imgSrc={'/horror.jpg'}
            title={'100 days of horror'}
            description={
              "A movie app where users try to complete a 'Watch List' challenge. Features include full CRUD and authentication with bcrypt"
            }
            skill1={'React'}
            skill2={'PostgreSQL'}
            skill3={'Express'}
            skill4={'OMDB API'}
            skill5={'Auth w/ BCrypt'}
          />
        </div>
        <div>
          <ProjectCard
            imgSrc={'/group.jpg'}
            title={'This is DevMountain'}
            description={
              'A Fullstack app designed for students of DevMountain to upload information on their personal projects for all other students to view'
            }
            skill1={'React'}
            skill2={'PostgreSQL'}
            skill3={'Express'}
            skill4={'Socket.io'}
            skill5={'Chart.js'}
            skill6={'Redis'}
          />
          <ProjectCard
            imgSrc={'/movein.png'}
            title={'MoveIn'}
            description={
              'An app for users to find roomates, a collab project with a group from another coding bootcamp'
            }
            skill1={'React'}
            skill2={'PostgreSQL'}
            skill3={'Express'}
            skill4={'JWT'}
          />
        </div>
      </section>
    </div>
  );
}
