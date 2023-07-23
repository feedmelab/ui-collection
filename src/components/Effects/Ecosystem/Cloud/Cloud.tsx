import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import './index.css';

interface CloudProps {
  numClouds?: number;
}

interface Cloud {
  x: number;
  y: number;
  rad: number;
  speed: number;
  color: [number, number, number];
}

const Cloud: React.FC<CloudProps> = ({
  numClouds = Math.floor(Math.random() * 25),
}) => {
  const sketchRef = useRef<any>();
  const seaHeight = 0;

  useEffect(() => {
    const sketch = (p5: p5) => {
      let clouds: Cloud[] = [];

      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight - 2 * seaHeight);
        p5.noStroke();
        (p5.clear as any)();

        // Generate clouds
        for (let i = 0; i < numClouds; i++) {
          let xStart = p5.random(p5.width);
          let y = p5.random(p5.height);

          for (
            let x = xStart;
            x < xStart + p5.random(60, 200);
            x += p5.random(10, 30)
          ) {
            clouds.push({
              x: x + p5.map(p5.noise(x), 0, 1, -15, 15),
              y: y + p5.map(p5.noise(y), 0, 1, -15, 15),
              rad: p5.random(120, 160), // Random diameter for variety
              speed: p5.random(0.5, 0.2), // Random speed for each cloud
              color: [p5.random(200, 255), p5.random(255, 255), 255], // Random color for each cloud
            });
          }
        }
      };

      p5.draw = () => {
        (p5.clear as any)();

        // Draw and move clouds
        for (let cloud of clouds) {
          p5.fill(cloud.color[0], cloud.color[1], cloud.color[2], 100);
          p5.ellipse(cloud.x, cloud.y, cloud.rad);
          cloud.x += cloud.speed; // Move cloud
          if (cloud.x - cloud.rad > p5.width) {
            cloud.x = -cloud.rad;
          }
        }
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, [numClouds, seaHeight]);

  return (
    <div
      ref={sketchRef}
      style={{ marginTop: seaHeight * 2 }}
      className='cloud'
    />
  );
};

export default Cloud;
