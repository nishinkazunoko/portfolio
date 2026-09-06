import type { ReactNode } from 'react';

interface BgFrame {
  title: string;       // ウィンドウのタイトル（Welcome.exe や Works.exe）
  onClose: () => void; // ❌ボタンを押した時の処理
  children: ReactNode; // ウィンドウの中身
}

function Bg({ title, onClose, children }: BgFrame) {
  return (
    <div className="win-window">
      <div className="win-titlebar">
        <span className="win-title">{title}</span>
        <div className="win-buttons">
          <button className="win-btn">ー</button>
          <button className="win-btn">🔲</button>
          <button className="win-btn" onClick={onClose}>✕</button>
        </div>
      </div>
      
      <div className="win-content">
        {children}
      </div>
    </div>
  );
}

export default Bg;
