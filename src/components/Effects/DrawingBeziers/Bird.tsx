import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import bird from '../../../assets/bird.gif';
import paloma from '../../../assets/paloma.gif';
import falcon from '../../../assets/falcon.gif';
import oca from '../../../assets/oca.gif';
import hawk from '../../../assets/hawk.gif';
import smallhawk from '../../../assets/smallhawk.gif';
import eagle from '../../../assets/eagle.gif';
import avio2 from '../../../assets/avio2.gif';
import avio3 from '../../../assets/avio3.gif';
import golondrines from '../../../assets/golondrines.gif';
import oques from '../../../assets/oques.gif';
import './bird.css';

type BirdFlying = {
  src: string;
  duration?: number;
  width?: number;
};

const Bird: React.FC = () => {
  const randomPlaneWidth = Math.round(Math.random() * 40);
  const randomYStart = Math.random() * 700;
  const birdArray: BirdFlying[] = [
    { src: bird, duration: 22000 },
    { src: falcon, duration: 22000, width: 40 },

    { src: avio3, duration: 39000, width: randomPlaneWidth },
    { src: smallhawk, duration: 50000, width: 40 },
    { src: paloma, duration: 100000 },
    { src: oca, duration: 200000 },
    { src: oques, duration: 300000, width: 30 },
    { src: hawk, duration: 100000 },
    { src: eagle, duration: 200000 },
    { src: avio2, duration: 400000, width: 30 },

    { src: golondrines, duration: 270000 },
  ];
  const selectedPosition = Math.floor(Math.random() * birdArray.length);
  const randomBird: BirdFlying = birdArray[selectedPosition];

  const [key, setKey] = useState(Math.random());
  const { x } = useSpring({
    from: {
      x: selectedPosition < 5 ? 0 : 1,
      scale: selectedPosition < 5 ? 0 : 1,
    },
    to: { x: selectedPosition < 5 ? 1 : -10, scale: 2 },
    config: { duration: randomBird.duration }, // Use the duration of the selected bird
    reset: true,
    onRest: () => {
      // set a new key after a random delay to restart the animation
      const delay = Math.random() * 1000; // random delay between 0 and 10 seconds
      setTimeout(() => setKey(Math.random()), delay);
    },
  });

  return (
    <animated.div
      className='bird'
      key={key}
      style={{
        position: 'absolute',
        zIndex: 9999999,
        height: '60px',
        width: `${randomBird.width || 30}px`,
        opacity: 0.95,

        // background: `url(${randomBird.src}) no-repeat center/cover`,
        transform: x.to(
          (xVal) =>
            `translate3d(${xVal * 100}vw, ${
              randomYStart + 10 * Math.sin((xVal * 100) / 10)
            }px, 0)`
        ),
      }}
    >
      <img src={randomBird.src} alt='' />
    </animated.div>
  );
};

export default Bird;
