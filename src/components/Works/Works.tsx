import { useParams, Link } from "react-router-dom";
import { worksData } from "./WorksData";
import styles from "./Works.module.css";

function Works() {
  const { id }= useParams()
  const work = worksData.find((w) => w.id === Number(id))

  if(!work){
    return<p>データが見つかりません。</p>
  }
  return (
    <>
    <section className={`${styles['works']} ${styles['works-detail']}`}>
      <h2>{work.title}</h2>
        <div className={styles['mock-img']}>
          <img src={work.mockImg} alt={work.title} />
        </div>
          <a href={work.link} target="_blank" className={styles['work-icon']}>
            view site
            <span>
              <svg viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
            </span>
          </a>
          <h3>担当領域</h3>
          <p>{work.inCharge}</p>
          <h3>使用言語・スキル</h3>
          <p>{work.skills}</p>
          <h3>背景・課題</h3>
          <p>{work.task}</p>
          <h3>取り組み</h3>
          <p>{work.workOn}</p>
          <h3>結果</h3>
          <p>{work.result}</p>


          <Link to="/works/">一覧へ</Link>
    </section>

    </>
  );
}

export default Works;
