import { Link } from 'react-router-dom';
import styles from './MagicWorld.module.css'

function MagicWorldEnter() {

  return (
    <>
    <div className={styles["magicWorld-enter"]}>
      <Link to="/magicWorld/">
        <p>
          魔法界
          <br />
          へ迷い込む
        </p>
        </Link>
    </div>
    </>
  );
}

export default MagicWorldEnter;
