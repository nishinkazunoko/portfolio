import { Routes , Route } from 'react-router-dom'
import { useState } from 'react'
import './assets/scss/resset.css'
import './assets/scss/style.css'
import Folders from './components/Folder'
import WorksList from './components/WorksList'
import Works from './components/Works'
function App() {
  
  return (
    <main className="portfolio">
      
      <Routes>
        <Route path='/' element={<Folders />} />
        <Route path='/works/' element={<WorksList />} />
        <Route path='/works/:id/' element={<Works />} />

      </Routes>
    </main>
  )
}

export default App