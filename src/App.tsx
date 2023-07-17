import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ProjectsPage from './projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import DrawingCanvas from './components/Effects/DrawingCanvas/DrawingCanvas';
import Header from './components/Header/Header';

const App: React.FC = () => (
  <Router>
    <DrawingCanvas />
    <div className='container'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* <Route path='/cv' element={<CvPage />} /> */}
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
