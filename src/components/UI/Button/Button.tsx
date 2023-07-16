import React, { ButtonHTMLAttributes } from 'react';

import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type = 'button',
  text = '+ INFO',
  onClick,
}: ButtonProps): React.ReactElement => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('Button clicked!', event.currentTarget);
  };
  return (
    <button type={type} onClick={onClick || handleClick} className='fadeIn'>
      <span className='fadeInUp'>{text}</span>
    </button>
  );
};

export default Button;
