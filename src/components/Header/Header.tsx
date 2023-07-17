import Button from '../UI/Button/Button';
import logo from '../../assets/gh.png';
import { ReactElement } from 'react';
import './index.css';

const Header: React.FC = (): ReactElement => {
  return (
    <div className='header-wrapper'>
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
  );
};
export default Header;
