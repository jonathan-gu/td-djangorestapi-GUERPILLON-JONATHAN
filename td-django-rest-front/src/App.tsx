import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ResearchersPage from './pages/ResearchersPage/ResearchersPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage/PublicationsPage';
import './App.css'
import AddResearcherPage from './pages/AddResearcherPage/AddResearcherPage';
import AddProjectPage from './pages/AddProjectPage/AddProjectPage';
import AddPublicationPage from './pages/AddPublicationPage/AddPublicationPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import EditResearcherPage from './pages/EditResearcherPage/EditResearcherPage';
import EditProjectPage from './pages/EditProjectPage/EditProjectPage';
import EditPublicationPage from './pages/EditPublicationPage/EditPublicationPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/researchers" element={<ResearchersPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/add-researcher" element={<AddResearcherPage />} />
        <Route path="/add-project" element={<AddProjectPage />} />
        <Route path="/add-publication" element={<AddPublicationPage />} />
        <Route path="/edit-researcher/:id" element={<EditResearcherPage />} />
        <Route path="/edit-project/:id" element={<EditProjectPage />} />
        <Route path="/edit-publication/:id" element={<EditPublicationPage />} />
      </Routes>
    </>
  );
}

export default App;