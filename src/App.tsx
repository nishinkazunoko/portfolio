import { Routes , Route } from 'react-router-dom'
import { useState } from 'react'
import './assets/scss/resset.css'
import './assets/scss/style.css'
import Folders from './components/Folder/Folder'
import WorksList from './components/Works/WorksList'
import Profile from './components/Profile/Profile'
import Works from './components/Works/Works'
import Header from './components/Header/Header'
import { TrollBattleGame } from './components/MaigicWorld/TrollBattleGame'

function App() {
  
  return (
    <>
    <Header />
    <main className="portfolio">
      
      <Routes>
        <Route path='/' element={<Folders />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path='/works/' element={<WorksList />} />
        <Route path='/works/:id/' element={<Works />} />
        <Route path='/magicWorld/' element={<TrollBattleGame />} />
      </Routes>
    </main>
    </>
  )
}

export default App