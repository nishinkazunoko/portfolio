import { Link } from 'react-router-dom';
import folderImg from '../assets/images/folder.png' 
import Wands from './Wand'

function Folders() {
  return (
    <>
    <div className="folder-icons">
      <Link to="/proflie/" className="icon-item">
        <img src={folderImg} alt="自己紹介を見る"/>
        <span className="icon-label">自己紹介を見る</span>
      </Link>

      <Link to="/works/" className="icon-item">
        <img src={folderImg} alt="実績一覧を見る"/>
        <span className="icon-label">実績一覧を見る</span>
      </Link>

    </div>
    <Wands />

    </>
  );
}

export default Folders;
