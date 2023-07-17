import { ReactElement } from 'react';

const HomePage: React.FC = (): ReactElement => {
  const gf_logo = '../../assets/gh.png';
  return (
    <div className='container m-5'>
      <h5>Download or clone allcode used in this app from:</h5>
      <a
        href='https://github.com/feedmelab/ui-collection.git'
        target='_blank'
        rel='noopener'
        title='Download link for git project'
      >
        <img src={gf_logo} alt='Logo that route to  github ui-project' />
      </a>
    </div>
  );
};

export default HomePage;
