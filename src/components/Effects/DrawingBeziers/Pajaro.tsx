import React, { useState } from 'react';
import bird from '../../../assets/bird.gif';
import bird2 from '../../../assets/bird.gif';

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
  const randomSize = Math.floor(Math.random() * 30);
  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        height: randomSize,
        width: randomSize,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        transition: '0.5s',
        zIndex: Math.round(Math.random() * 5) + 6,
      }}
    />
  );
};

export default Pajaro;
