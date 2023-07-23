import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ProjectsPage from './projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import DrawingCanvas from './components/Effects/DrawingCanvas/DrawingCanvas';
import Header from './components/Header/Header';

//import JumpingFish from './components/Effects/DrawingBeziers';
import DrawingBeziers from './components/Effects/DrawingBeziers/DrawingBeziers';
import Fish from './components/Effects/DrawingBeziers/Fish';
import Bird from './components/Effects/DrawingBeziers/Bird';
import Pajaros from './components/Effects/DrawingBeziers/Pajaros';
import Sun from './components/Effects/Ecosystem/Sun';
import Moon from './components/Effects/Ecosystem/Moon';
import Cloud from './components/Effects/Ecosystem/Cloud/Cloud';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <DrawingCanvas />
      <Sun />
      <Moon />
      <Bird />
      <Cloud />
      <div className='main-component'>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            {/* <Route path='/cv' element={<CvPage />} /> */}
          </Routes>
        </main>
      </div>
      <Fish />
      {/* <Pajaros /> */}
      <DrawingBeziers />
    </Router>
  );
};

export default App;
