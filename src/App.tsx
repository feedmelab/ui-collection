import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';
import ProjectsPage from './projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import DrawingCanvas from './components/Effects/DrawingCanvas/DrawingCanvas';

const App: React.FC = () => (
  <Router>
    <div className='container'>
      <DrawingCanvas />
      {/* <ProjectsPage /> */}

      <div>
        <Button url='/' id='home' text='HOME' />
        <Button url='/projects' id='PROJECTS' text='LAST PROJECTS' />
        <Button url='/cv' id='CV' text='CV' />
      </div>

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
