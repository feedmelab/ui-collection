import { Link } from 'react-router-dom';
import './index.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  url?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button = ({
  url = '#',
  text = '+ INFO',
  onClick,
}: ButtonProps): React.ReactElement => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    console.log('Button clicked!', event.currentTarget);
  };
  return (
    <Link to={url} onClick={onClick || handleClick} className='fadeIn'>
      <span className='fadeInUp'>{text}</span>
    </Link>
  );
};

export default Button;
