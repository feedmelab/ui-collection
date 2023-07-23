import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import bird from '../../../assets/bird.gif';
import paloma from '../../../assets/paloma.gif';
import falcon from '../../../assets/falcon.gif';
import oca from '../../../assets/oca.gif';
import hawk from '../../../assets/hawk.gif';
import smallhawk from '../../../assets/smallhawk.gif';
import eagle from '../../../assets/eagle.gif';

type BirdFlying = {
  src: string;
  duration?: number;
};

const Bird: React.FC = () => {
  const randomYStart = Math.random() * 700;
  const birdArray: BirdFlying[] = [
    { src: bird, duration: 12000 },
    { src: falcon, duration: 22000 },
    { src: smallhawk, duration: 25000 },
    { src: paloma, duration: 100000 },
    { src: oca, duration: 200000 },
    { src: hawk, duration: 100000 },
    { src: eagle, duration: 200000 },
  ];
  const selectedPosition = Math.floor(Math.random() * birdArray.length);
  const randomBird: BirdFlying = birdArray[selectedPosition];

  const [key, setKey] = useState(Math.random());
  const { x } = useSpring({
    from: {
      x: selectedPosition < 3 ? 0 : 1,
      scale: selectedPosition < 3 ? 0 : 1,
    },
    to: { x: selectedPosition < 3 ? 1 : -10, scale: 2 },
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
      key={key}
      style={{
        position: 'absolute',
        zIndex: 9999999,
        width: 50,
        height: 50,
        opacity: 0.5,
        background: `url(${randomBird.src}) no-repeat center/cover`,
        transform: x.to(
          (xVal) =>
            `translate3d(${xVal * 100}vw, ${
              randomYStart + 10 * Math.sin((xVal * 100) / 10)
            }px, 0)`
        ),
      }}
    />
  );
};

export default Bird;
