import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import './index.css';

interface StarProps {
  numStars?: number;
}

const Star: React.FC<StarProps> = ({ numStars = 100 }) => {
  const sketchRef = useRef<any>();
  const now = new Date();
  let hours = now.getHours();

  // Adjust the hours so it starts at 6 AM and ends at 6 PM
  if (hours < 6) {
    hours += 24; // Before 6 AM is considered "night of the previous day"
  }

  // Calculate the percentage of the day that has passed
  const percentageOfDay = ((hours - 6) * 3600) / (12 * 3600);

  // Adjust the alpha based on the percentage of the day
  const alpha = 0.5 * percentageOfDay;
  useEffect(() => {
    const sketch = (p5: p5) => {
      let stars: { x: number; y: number; rad: number; bright: number }[] = [];

      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight / 1.2);
        p5.noStroke();

        // Generate stars
        for (let i = 0; i < numStars; i++) {
          stars.push({
            x: p5.random(p5.width),
            y: p5.random(p5.height),
            rad: p5.random(0.3, 3),
            bright: p5.random(
              percentageOfDay - 100,
              percentageOfDay + p5.random(0, percentageOfDay - 100)
            ),
          });
          console.log(
            '%: ',
            stars.every((t) => console.log(t))
          );
        }
      };

      p5.draw = () => {
        (p5.clear as any)();

        // Get the current time
        const now = new Date();
        let hours = now.getHours();

        // Define the start and end times for when the stars are visible
        const startHour = 21; // 9 PM
        const endHour = 6; // 6 AM

        let percentageOfNight;

        if (hours >= startHour || hours < endHour) {
          // We're currently in the interval when the stars are visible
          if (hours < endHour) {
            hours += 24; // Before 6 AM is considered "night of the previous day"
          }
          percentageOfNight =
            1 -
            ((hours - startHour) * 3600) / ((endHour + 24 - startHour) * 3600);
        } else {
          // We're currently in the interval when the stars are not visible
          percentageOfNight = 1;
        }

        // Adjust the alpha based on the percentage of the night
        const alpha = 255 * percentageOfNight;

        // Draw and move stars
        for (let star of stars) {
          p5.fill(255, 255, 0, alpha); // Adjust alpha based on time
          p5.ellipse(star.x, star.y, star.rad);

          // Shimmer effect
          if (p5.random() < 0.01) {
            star.rad = p5.random(0.8, 1.2);
          }
        }
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, [numStars]);

  return <div ref={sketchRef} className='stars' />;
};

export default Star;
