import { useState } from 'react'
import './assets/scss/resset.css'
import './assets/scss/style.css'
import Bg from './components/Bg'
import Folders from './components/Folder'
import Wands from './components/Wand'

import { worksData as worksList } from './components/WorksList'

function App() {
  const [activeWindow, setActiveWindow] = useState<'profile' | 'works' | null>('profile');
  
  const [activeWorkId, setActiveWorkId] = useState<number | null>(null);

  const currentWork = worksList.find(w => w.id === activeWorkId);

  return (
    <>
      <main className='portfolio-wrap'>
        
        <Folders 
          onOpenProfile={() => setActiveWindow('profile')} 
          onOpenWorks={() => {
            setActiveWindow('works');
            setActiveWorkId(null); 
          }} 
        />

        {activeWindow === 'profile' && (
          <Bg title="Welcome.exe" onClose={() => setActiveWindow(null)}>
            <h2>Kazuna Higuchi</h2>
            <p className="win-role">Web Engineer</p>
            <p className="win-desc">
              フロントエンドエンジニアです
            </p>
          </Bg>
        )}

        {activeWindow === 'works' && (
          <Bg title="Works.exe" onClose={() => setActiveWindow(null)}>
            {activeWorkId === null ? (
              <div className="works-list-container">
                <h2>実績一覧</h2>
                <p className="win-role">クリックするとスクロール・詳細が見れるよ</p>
                <div className="scroll-box">
                  {worksList.map((work) => (
                    <div key={work.id} className="work-item-btn" onClick={() => setActiveWorkId(work.id)}>
                      📁 {work.title}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="works-detail-container">
                <button className="win-back-btn" onClick={() => setActiveWorkId(null)}>⬅ 戻る</button>
                <h2>{worksList.find(w => w.id === activeWorkId)?.title}</h2>
                <div className="win-content-inner">
                  <p className="win-desc">{worksList.find(w => w.id === activeWorkId)?.desc}</p>
                  <p><a href={worksList.find(w => w.id === activeWorkId)?.link} target='_blank'>view web site</a></p>
                  <p className="win-skills">{worksList.find(w => w.id === activeWorkId)?.skills}</p>

                </div>
              </div>
            )}
          </Bg>
        )}

        <Wands />

      </main>
    </>
  )
}

export default App;
