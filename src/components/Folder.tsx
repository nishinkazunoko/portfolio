import folderImg from '../assets/images/folder.png' 

interface FoldersProps {
  onOpenProfile: () => void;
  onOpenWorks: () => void;
}

function Folders({ onOpenProfile, onOpenWorks }: FoldersProps) {
  return (
    <div className="desktop-icons">
      
      <div className="icon-item" onClick={onOpenProfile}>
        <img src={folderImg} alt="Profile" className="folder-icon" />
        <span className="icon-label">Profile.exe</span>
      </div>

      <div className="icon-item" onClick={onOpenWorks}>
        <img src={folderImg} alt="Works" className="folder-icon" />
        <span className="icon-label">Works.exe</span>
      </div>

    </div>
  );
}

export default Folders;
