import { useParams, Link } from "react-router-dom";
import { worksData } from "./WorksData";

function Works() {
  const { id }= useParams()
  const work = worksData.find((w) => w.id === Number(id))

  if(!work){
    return<p>データが見つかりません。</p>
  }
  return (
    <>
    <section className="works">
      <p>実績の詳細です</p>
      <h2>{work.title}</h2>
          <p>{work.inCharge}</p>
          <p>{work.skills}</p>
          <p>{work.task}</p>
          <p>{work.workOn}</p>
          <p>{work.result}</p>
          <Link to="/works/">一覧へ</Link>
    </section>

    </>
  );
}

export default Works;
