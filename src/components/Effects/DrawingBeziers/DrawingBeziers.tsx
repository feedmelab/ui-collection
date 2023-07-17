// import React, { useRef, useEffect } from 'react';
// import p5 from 'p5';
// import './index.css';

// const DrawingBeziers: React.FC = () => {
//   const myRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     let myP5: p5 | undefined;

//     const sketch = (p: p5) => {
//       let yoff = 0.0; // 2nd dimension of perlin noise

//       p.setup = () => {
//         p.createCanvas(p.windowWidth, 100);
//         p.background(0);
//       };

//       p.draw = () => {
//         p.background(255);

//         p.stroke(0, 123, 255);
//         p.fill(0, 123, 255);
//         // Draw a polygon out of the wave points
//         p.beginShape();

//         let xoff = 0;

//         // Iterate over horizontal pixels
//         for (let x = 0; x <= p.width; x += 13) {
//           // Calculate a y value according to noise, map to
//           let y = p.map(p.noise(xoff, yoff), 0, 1, 1, 100);

//           // Set the vertex
//           p.vertex(x, y);
//           // Increment x dimension for noise
//           xoff += 0.05;
//         }
//         // increment y dimension for noise
//         yoff += 0.01;
//         p.vertex(p.width, p.height);
//         p.vertex(0, p.height);
//         p.endShape(p.CLOSE);
//       };

//       p.windowResized = () => {
//         p.resizeCanvas(p.windowWidth, 100);
//       };
//     };

//     if (myRef && myRef.current) {
//       myP5 = new p5(sketch, myRef.current);
//     }

//     return () => {
//       myP5?.remove();
//     };
//   }, []);

//   return <div className='sea' ref={myRef} />;
// };

// export default DrawingBeziers;
import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import './index.css';
const DrawingBeziers: React.FC = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [average, setAverage] = useState<number>(0);

  useEffect(() => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const updateAverage = () => {
          analyser.getByteTimeDomainData(dataArray);

          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += (dataArray[i] - 128) / 128;
          }
          setAverage(Math.abs(sum) / dataArray.length);

          requestAnimationFrame(updateAverage);
        };

        updateAverage();
      });

    let myP5: p5 | undefined;

    const sketch = (p: p5) => {
      let yoff = 0.0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, 100);
        p.background(248, 248, 248, 20);
      };

      p.draw = () => {
        p.background(248);
        p.stroke(0, 123, 235, 20.9);
        p.fill(0, 123, 255, 20.9);

        p.beginShape();

        let xoff = 0;

        for (let x = 0; x <= p.width; x += 10) {
          let y = p.map(
            p.noise(xoff, yoff),
            0,
            1,
            1 + average * 100, // amplify the average amplitude a bit
            100 + average * 100 // amplify the average amplitude a bit
          );

          p.vertex(x, y);
          xoff += 0.05;
        }

        yoff += 0.01;
        p.vertex(p.width, p.height);
        p.vertex(0, p.height);
        p.endShape(p.CLOSE);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    if (myRef && myRef.current) {
      myP5 = new p5(sketch, myRef.current);
    }

    return () => {
      myP5?.remove();
    };
  }, [average]);

  return <div ref={myRef} className='sea' />;
};

export default DrawingBeziers;
