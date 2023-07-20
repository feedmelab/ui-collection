import React, { useState } from 'react';
import bird from '../../../assets/bird.gif';

interface Position {
  x: number;
  y: number;
}

interface PajaroProps {
  position: Position;
  index: number;
}

const Pajaro: React.FC<PajaroProps> = ({ position }) => {
  // Quitar "index" si no lo estás utilizando
  const images = [bird];

  const [image, setImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        height: '30px',
        width: '30px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        transition: '0.5s',
      }}
    />
  );
};

export default Pajaro;
