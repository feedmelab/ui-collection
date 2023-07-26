import React, { useEffect, useState } from 'react';
import Pajaro from './Pajaro';

interface Position {
  x: number;
  y: number;
}

const Pajaros: React.FC = () => {
  const [blocks, setBlocks] = useState<Position[]>([]);
  const [isActive, setIsActive] = useState(true);
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const newBlocks = [];
    const ranBirds = Math.round(Math.random() * 14) + 1;
    for (let i = 0; i < ranBirds; i++) {
      newBlocks.push({ x: -50, y: (Math.random() * window.innerHeight) / 2 }); // Ajustar la posición y a un valor fijo
    }
    setBlocks(newBlocks);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks((currentBlocks) => {
        const updatedBlocks = currentBlocks.map((block) => {
          const distance = Math.hypot(
            block.x - mousePos.x,
            block.y - mousePos.y
          );

          if (distance < 200) {
            const newY = block.y + (mousePos.y > block.y ? -2 : 2);
            let newX = block.x;
            return {
              x: newX,
              y: newY,
            };
          }

          let newX = block.x + 2;
          return {
            x: newX,
            y: block.y,
          };
        });

        if (updatedBlocks.every((block) => block.x > window.innerWidth + 100)) {
          clearInterval(interval);
          setIsActive(false);

          setTimeout(() => {
            const newBlocks = [];
            for (let i = 0; i < 4; i++) {
              newBlocks.push({
                x: 10,
                y: (Math.random() * window.innerHeight) / 2,
              });
            }
            setBlocks(newBlocks);
            setIsActive(true);
          }, Math.random() * 15000);
        }

        return updatedBlocks;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [mousePos, blocks]); // remove blocks from the dependency array

  return (
    <div onMouseMove={handleMouseMove}>
      {isActive &&
        blocks.map((block, i) => <Pajaro key={i} position={block} index={i} />)}
    </div>
  );
};

export default Pajaros;
