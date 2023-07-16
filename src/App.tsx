import './App.css';
import Button from './components/UI/Button';
import ProjectsPage from './projects/ProjectsPage';

const App: React.FC = () => (
  <div className='container'>
    {/* <ProjectsPage /> */}

    <div>
      <Button id='home' text='HOME' />
      <Button id='PROJECTS' text='LAST PROJECTS' />
      <Button id='CV' text='CV' />
    </div>

    <main></main>
  </div>
);

export default App;
