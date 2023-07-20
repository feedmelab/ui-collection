import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import './index.css';

type SpeechRecognitionEvent = Event & {
  resultIndex: number;
  results: { [index: number]: { [index: number]: { transcript: string } } };
};

type SpeechRecognitionErrorEvent = ErrorEvent & {
  error: string;
};

const DrawingBeziers: React.FC = () => {
  const microphoneStreamRef = useRef<MediaStream | null>(null);

  const myRef = useRef<HTMLDivElement | null>(null);
  const volumeRef = useRef(1);

  useEffect(() => {
    let myP5: p5 | undefined;

    const sketch = (p: p5) => {
      let yoff = 0.0; // 2nd dimension of perlin noise

      p.setup = () => {
        p.createCanvas(p.windowWidth, 100);
        p.background(248, 248, 248, 0);
      };

      p.draw = () => {
        p.background(248, 248, 248, 0);
        p.stroke(0, 238, 215, 20.9);
        p.fill(0, 123, 205, 20.9);

        // Draw a polygon out of the wave points
        p.beginShape();

        let xoff = 0;

        // Iterate over horizontal pixels
        for (let x = 0; x <= p.width; x += 10) {
          // Calculate a y value according to noise, map to
          let y = p.map(p.noise(xoff, yoff), 0, 1, 2, 100); // Using the volume state here

          // Set the vertex
          p.vertex(x, y);
          // Increment x dimension for noise
          xoff += 0.05;
        }
        // increment y dimension for noise
        yoff += 0.01;
        p.vertex(p.width, p.height);
        p.vertex(0, p.height);
        p.endShape(p.CLOSE);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, 100);
      };
    };

    if (myRef && myRef.current) {
      myP5 = new p5(sketch, myRef.current);
    }

    return () => {
      myP5?.remove();
    };
  }, []);

  return (
    <div className='sea' ref={myRef}>
      <span className='save'>2023 @ Xavi Torner</span>
    </div>
  );
};

export default DrawingBeziers;
