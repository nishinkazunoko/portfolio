import { Link } from 'react-router-dom';
import styles from './Header.module.css'
function Header() {
  return (
    <>
    <header className={styles.header}>
      <h1 className='cinzel'>
        <Link to="/">Kazuna Higuchi's portfolio</Link>
      </h1>
      {/* <nav>
        <ul>
          <li>
            <Link to="/profile/" className='cinzel'>Profile</Link>
          </li>
          <li>
          <Link to="/works" className='cinzel'>Works</Link>
          </li>
        </ul>
      </nav> */}
    </header>

    </>
  );
}

export default Header;
