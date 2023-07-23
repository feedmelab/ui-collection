import React, { useEffect, useRef, useState } from 'react';
import './index.css';

type Line = { x: number; y: number; alpha: number };

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const linesRef = useRef<Line[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('rgb(140, 189, 245)');

  useEffect(() => {
    const updateBackgroundColor = () => {
      const now = new Date();
      let hours = now.getHours();

      // Ajuste las horas para que comience a las 6 AM y termine a las 6 PM
      if (hours < 6) {
        hours += 24; // Antes de las 6 AM se considera "noche del día anterior"
      }
      const secondsInDay =
        (hours - 6) * 3600 + now.getMinutes() * 60 + now.getSeconds();

      // Cálculo del porcentaje del día que ha transcurrido
      const percentageOfDay = secondsInDay / (24 * 3600);

      // Cálculo de los valores de RGB para el color de fondo
      const red = Math.floor(240 - (240 - 29) * percentageOfDay);
      const green = Math.floor(240 - (240 - 29) * percentageOfDay);
      const blue = Math.floor(240 - (240 - 29) * percentageOfDay);
      const alpha = 0.3 * percentageOfDay;

      setBackgroundColor(`rgba(${red},${green},${blue},${alpha})`);
    };

    updateBackgroundColor();
    const intervalId = setInterval(updateBackgroundColor, 1000); // Actualizar cada minuto

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (context) {
      context.lineCap = 'round';
      context.strokeStyle = 'yellow';
      context.lineWidth = 10;
      context.shadowBlur = 100;
      context.shadowColor = 'red';
      contextRef.current = context;
    }

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (isDrawing) {
      document.addEventListener('mousemove', draw);
      document.addEventListener('mouseup', finishDrawing);
    } else {
      document.removeEventListener('mousemove', draw);
      document.removeEventListener('mouseup', finishDrawing);
    }
    return () => {
      document.removeEventListener('mousemove', draw);
      document.removeEventListener('mouseup', finishDrawing);
    };
  }, [isDrawing]);

  const startDrawing = ({ clientX, clientY }: React.MouseEvent) => {
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(clientX, clientY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const draw = ({ clientX, clientY }: MouseEvent) => {
    if (!isDrawing) {
      return;
    }
    linesRef.current.push({ x: clientX, y: clientY, alpha: 1 });
  };

  const animate = () => {
    const context = contextRef.current;
    if (!context) {
      return;
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    linesRef.current.forEach((line, i) => {
      context.strokeStyle = `rgba(55,99,125, ${line.alpha})`;
      context.shadowColor = `rgba(23, 55, 55, ${line.alpha * 2})`;
      context.lineWidth = 1 * line.alpha;
      context.shadowBlur = 155;
      context.beginPath();
      if (i !== 0) {
        context.moveTo(linesRef.current[i - 1].x, linesRef.current[i - 1].y);
      }
      context.lineTo(line.x, line.y);
      context.stroke();
      context.closePath();

      line.alpha -= 0.0833;
    });
    linesRef.current = linesRef.current.filter((line) => line.alpha > 0);
    requestAnimationFrame(animate);
  };
  useEffect(animate, []);

  return (
    <canvas
      onMouseMove={startDrawing}
      ref={canvasRef}
      className='drawing-canvas'
      style={{ backgroundColor }}
    />
  );
};

export default DrawingCanvas;
