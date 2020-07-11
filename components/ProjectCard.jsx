import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={props.imgSrc} alt="devTennis" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        {props.skill1 ? <h5>{props.skill1}</h5> : null}
        {props.skill2 ? <h5>{props.skill2}</h5> : null}
        {props.skill3 ? <h5>{props.skill3}</h5> : null}
        {props.skill4 ? <h5>{props.skill4}</h5> : null}
        {props.skill5 ? <h5>{props.skill5}</h5> : null}
        {props.skill6 ? <h5>{props.skill6}</h5> : null}
      </div>

      <a href="">Live Site</a>
      <a href="">View Code</a>
    </div>
  );
}
