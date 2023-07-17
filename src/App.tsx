import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
const Button = React.lazy(
  () =>
    import('./components/UI/Button') as Promise<{
      default: React.ComponentType<{ url: string; id: string; text: string }>;
    }>
);

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
