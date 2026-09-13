import { Link } from "react-router-dom";
import { worksData } from "./WorksData";
import styles from "./Works.module.css";

function Works() {
  return (
    <>
    <section className={`${styles['works']} ${styles['works-list']}`}>
      <h2 className="cinzel">Works</h2>
      <ul className={styles['works-items']}>
      {worksData.map((work) => (
       <li key={work.id}>
        <Link to={`/works/${work.id}/`}><img src={work.img} alt={work.title} /></Link>
       </li>
      ))}
      </ul>

    </section>

    </>
  );
}

export default Works;
