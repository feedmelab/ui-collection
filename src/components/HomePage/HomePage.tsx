import { ReactElement } from 'react';

const HomePage: React.FC = (): ReactElement => {
  return (
    <div className='container '>
      <h5>Download or clone allcode used in this app from:</h5>
      <a
        href='https://github.com/feedmelab/ui-collection.git'
        target='_blank'
        rel='noopener'
        title='Download link for git project'
      >
        <img
          src='public/assets/gh.png'
          alt='Logo that route to  github ui-project'
        />
      </a>
    </div>
  );
};

export default HomePage;
