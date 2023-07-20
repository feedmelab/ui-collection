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

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        microphoneStreamRef.current = stream;
        // Añade el código para manejar el stream de audio aquí, usando microphoneStreamRef.current
      })
      .catch((err) => {
        console.log('No se puede acceder al micrófono', err);
      });

    return () => {
      microphoneStreamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);
  const myRef = useRef<HTMLDivElement | null>(null);
  const volumeRef = useRef(1);

  useEffect(() => {
    let myP5: p5 | undefined;

    const sketch = (p: p5) => {
      let yoff = 0.0; // 2nd dimension of perlin noise

      p.setup = () => {
        p.createCanvas(p.windowWidth, 100);
        p.background(248, 248, 248, 20);
      };

      p.draw = () => {
        p.background(248, 248, 248, 20);
        p.stroke(0, 23, 215, 20.9);
        p.fill(0, 123, 155, 20.9);

        // Draw a polygon out of the wave points
        p.beginShape();

        let xoff = 0;

        // Iterate over horizontal pixels
        for (let x = 0; x <= p.width; x += 10) {
          // Calculate a y value according to noise, map to
          let y = p.map(p.noise(xoff, yoff), 0, 1, 2, 100 + volumeRef.current); // Using the volume state here

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
  }, []); // Added volume to the dependency array

  // Solicita permiso y comienza a recoger datos de audio
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Speech Recognition API not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.start();

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      volumeRef.current = Math.min(transcript.length / 100, 1); // Ajusta el volumen basado en la longitud del discurso
    };

    recognition.onerror = (event: any) => {
      console.error('Speech Recognition Error: ', event.error);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div className='sea' ref={myRef}>
      <span className='save'>Save the globe</span>
    </div>
  );
};

export default DrawingBeziers;
