import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo1 from './images/icon-github.png';
function Header() {
  return (
    <>
    <header className={styles.header}>
      <h1 className='cinzel'>
        <Link to="/">Kazuna Higuchi's portfolio</Link>
      </h1>
      <div className='ml-10'>
        <a href="https://github.com/nishinkazunoko" target='_blank'>
          <img src={logo1} alt="Githubのページをみる" width="40" height="40"/>
        </a>
      </div>
    </header>

    </>
  );
}

export default Header;
