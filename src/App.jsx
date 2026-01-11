import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Notes from './pages/Notes'
import NoteDetail from './pages/NoteDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:slug" element={<NoteDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
