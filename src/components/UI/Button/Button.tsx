import { Link } from 'react-router-dom';
import './index.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  url?: string;
  behaviour?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button = ({
  url = '#',
  text = '+ INFO',
  behaviour = false,
  onClick,
}: ButtonProps): React.ReactElement => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    console.log('Button clicked!', event.currentTarget);
  };
  return (
    <div>
      <Link
        to={url}
        onClick={onClick || handleClick}
        className='fadeIn'
        target={behaviour ? '_blank' : '_self'}
      >
        <span className='fadeInUp'>{text}</span>
      </Link>
    </div>
  );
};

export default Button;
