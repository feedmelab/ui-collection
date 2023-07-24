import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as ease from 'd3-ease';
import bottle_1 from '../../../assets/ampolla_1.png';
import bottle_2 from '../../../assets/ampolla_2.png';
import bottle_3 from '../../../assets/ampolla_3.png';
import bottle_4 from '../../../assets/ampolla_4.png';
import bottle_5 from '../../../assets/ampolla_5.png';
import bottle_6 from '../../../assets/ampolla_6.png';
import bottle_7 from '../../../assets/ampolla_7.png';
import bottle_8 from '../../../assets/ampolla_8.png';
import bottle_9 from '../../../assets/ampolla_9.png';
import llampuda from '../../../assets/llampuda.png';
import llobarro from '../../../assets/llobarro.png';
import marli from '../../../assets/marli.png';
import tonina from '../../../assets/tonina.png';
import peix from '../../../assets/peix.png';

interface FishProps {
  start?: number;
}

const Fish: React.FC<FishProps> = ({ start = 0 }) => {
  const initialPosition = Math.random() * window.innerWidth;
  const imageArray = [
    bottle_1,

    bottle_3,
    bottle_4,
    bottle_5,
    bottle_6,

    bottle_8,
    bottle_9,
    llampuda,
    llobarro,
    marli,
    tonina,
    peix,
  ];
  const randomImageURL: string =
    imageArray[Math.floor(Math.random() * imageArray.length)];
  const end: number = 2 + Math.random() * 4;
  const direction: number = Math.random() > 0.5 ? 1 : -1;
  const [jump, setJump] = useState(false);
  const rWidth: number = 20 + Math.random() * 30;

  const { bottom, left, opacity, rotate } = useSpring({
    from: {
      bottom: start,
      left: `${initialPosition}px`,
      opacity: 0,
      rotate: 0,
    },
    to: async (next) => {
      await next({
        bottom: end,
        opacity: 1,
        rotate: -30,
        left: `${initialPosition + 150 * direction}px`,
        config: { duration: 1000, easing: ease.easeCubicInOut },
      });

      await next({
        bottom: start,
        opacity: 0,
        rotate: 60,
        left: `${initialPosition + 200 * direction}px`,
        config: { duration: 800, easing: ease.easeCubicInOut },
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setJump(false);
    },
    reset: jump,
    onStart: () => setJump(true),
  });

  return (
    <animated.div
      className='peixet'
      style={{
        bottom: bottom.to((b) => `${b}rem`),
        left,
        width: `${rWidth}px`,
        height: `${rWidth}px`,
        opacity: bottom.to([start, end], [0, 1]),
        background: `url(${randomImageURL}) no-repeat center/cover`,
        transform:
          direction > 0
            ? bottom.to(
                (b) => `rotateY(180deg) rotate(${b >= end ? -10 : 0}deg)`
              )
            : bottom.to((b) => `rotate(${b <= end ? -10 : 0}deg)`),
      }}
    />
  );
};

export default Fish;
