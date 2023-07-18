import React, { useEffect, useState } from 'react';

export type FishProps = {
  x: number;
  y: number;
  size: number;
};

const JumpingFish: React.FC<FishProps> = ({ x, y, size }) => {
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + 1,
        y: prevPosition.y - 1,
      }));

      if (position.y < -100) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: size,
        height: size,
        backgroundColor: 'blue',
        borderRadius: '50%',
      }}
    />
  );
};

export default JumpingFish;
