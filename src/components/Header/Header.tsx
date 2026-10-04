import { Link } from 'react-router-dom';
import styles from './Header.module.css'
function Header() {
  return (
    <>
    <header className={styles.header}>
      <h1 className='cinzel'>
        <Link to="/">Kazuna Higuchi's portfolio</Link>
      </h1>
    </header>

    </>
  );
}

export default Header;
