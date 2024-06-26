import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Researchers from './pages/ResearchersPage/ResearchersPage';
import Projects from './pages/ProjectsPage/ProjectsPage';
import Publications from './pages/PublicationsPage/PublicationsPage';
import './App.css'
import AddResearcherPage from './pages/AddResearcherPage/AddResearcherPage';
import AddProjectPage from './pages/AddProjectPage/AddProjectPage';
import AddPublicationPage from './pages/AddPublicationPage/AddPublicationPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Researchers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/add-researcher" element={<AddResearcherPage />} />
        <Route path="/add-project" element={<AddProjectPage />} />
        <Route path="/add-publication" element={<AddPublicationPage />} />
      </Routes>
    </>
  );
}

export default App;