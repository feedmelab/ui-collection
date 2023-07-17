import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from '../src/assets/gh.png';
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
        <Button url='/play' id='play' text='PLAY' />
        <a
          href='https://github.com/feedmelab/ui-collection.git'
          target='_blank'
          rel='noopener'
          title='Download link for git project'
        >
          <img
            src={logo}
            alt='Logo that route to  github ui-project'
            width='17px'
          />
        </a>
      </div>

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* <Route path='/cv' element={<CvPage />} /> */}
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  </Router>
);

export default App;
