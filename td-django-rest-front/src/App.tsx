import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Researchers from './pages/ResearchersPage/ResearchersPage';
import Projects from './pages/ProjectsPage/ProjectsPage';
import Publications from './pages/PublicationsPage/PublicationsPage';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Researchers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </>
  );
}

export default App;