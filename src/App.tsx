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
import Cloud from './components/Effects/Ecosystem/Cloud';
import Star from './components/Effects/Ecosystem/Star';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgb(140, 189, 245)');

  useEffect(() => {
    const startColor: [number, number, number] = [135, 206, 235]; // Sky Blue
    const middleColor: [number, number, number] = [135, 186, 280]; // Midnight Blue
    const endColor: [number, number, number] = [0, 0, 0]; // Black

    const interpolateColor = (
      color1: [number, number, number],
      color2: [number, number, number],
      factor: number
    ) => {
      const result = color1.slice();
      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
    };

    const updateBackgroundColor = () => {
      const now = new Date();
      let hours = now.getHours();

      // Ajuste las horas para que comience a las 6 AM y termine a las 6 PM
      if (hours < 6) {
        hours += 24; // Antes de las 6 AM se considera "noche del día anterior"
      }

      // Calculo del factor
      const factor = hours < 18 ? (hours - 6) / 12 : (hours - 18) / 6;

      // Interpolacion del color
      const currentColor =
        hours < 18
          ? interpolateColor(startColor, middleColor, factor)
          : interpolateColor(middleColor, endColor, factor);

      setBackgroundColor(
        `rgba(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]}, 1)`
      );
    };

    updateBackgroundColor();
    const intervalId = setInterval(updateBackgroundColor, 1000); // Actualizar cada minuto

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Router>
      <div className='wrapper-app' style={{ backgroundColor, height: '100vh' }}>
        <Cloud />
        <Header />
        <DrawingCanvas /> <Bird />
        <Star />
        <Sun />
        <Moon />
        <div className='main-component'>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/projects' element={<ProjectsPage />} />
              {/* <Route path='/cv' element={<CvPage />} /> */}
            </Routes>
          </main>
        </div>{' '}
        <Fish />
        <Pajaros />
        <DrawingBeziers />
      </div>
    </Router>
  );
};

export default App;
