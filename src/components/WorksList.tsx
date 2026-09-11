import { Link } from "react-router-dom";
import { worksData } from "./WorksData";

function Works() {
  return (
    <>
    <section className="works">
      <p>実績の一覧です</p>
      <ul>
      {worksData.map((work) => (
       <li key={work.id}>
        <Link to={`/works/${work.id}/`}>{work.title}</Link>
       </li>
      ))}
      </ul>

    </section>

    </>
  );
}

export default Works;
