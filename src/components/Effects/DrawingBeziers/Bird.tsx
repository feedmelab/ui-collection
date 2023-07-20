import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import bird from '../../../assets/bird.gif';
import paloma from '../../../assets/paloma.gif';

const Bird: React.FC = () => {
  const randomYStart = Math.random() * 700;
  const imageArray = [bird, paloma];
  const selectedPosition = Math.floor(Math.random() * imageArray.length);
  const randomImageURL: string = imageArray[selectedPosition];

  const [key, setKey] = useState(Math.random());
  const { x } = useSpring({
    from: { x: selectedPosition === 0 ? 0 : 1 },
    to: { x: selectedPosition === 0 ? 1 : -10 },
    config: { duration: selectedPosition === 0 ? 20000 : 18000 },
    reset: true,
    onRest: () => {
      // set a new key after a random delay to restart the animation
      const delay = Math.random() * 10000; // random delay between 0 and 10 seconds
      setTimeout(() => setKey(Math.random()), delay);
    },
  });
  console.log('A bird is flying');
  return (
    <animated.div
      key={key}
      style={{
        position: 'absolute',
        width: 50,
        height: 50,
        opacity: 0.5,
        background: `url(${randomImageURL}) no-repeat center/cover`,
        transform: x.to(
          (xVal) =>
            `translate3d(${xVal * 100}vw, ${
              randomYStart + 10 * Math.sin((xVal * 100) / 10)
            }px, 0)`
        ),
        filter:
          'invert(100%) sepia(20%) saturate(200%) hue-rotate(100deg) brightness(30%) contrast(60%)',
      }}
    />
  );
};

export default Bird;
