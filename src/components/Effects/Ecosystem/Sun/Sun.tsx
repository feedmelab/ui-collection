import React, { useEffect, useRef } from 'react';
import './index.css'; // Esto es para los estilos del componente

function interpolateColor(
  color1: [number, number, number],
  color2: [number, number, number],
  factor: number
) {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

const Sun: React.FC = () => {
  const sunRef = useRef<HTMLDivElement | null>(null);
  const startColor: [number, number, number] = [255, 223, 0]; // Amarillo
  const endColor: [number, number, number] = [255, 165, 0]; // Naranja
  useEffect(() => {
    const updateSun = () => {
      const now = new Date();
      const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60;

      const sunriseSeconds = 6 * 60 * 60; // 6:00
      const sunsetSeconds = 22 * 60 * 60; // 21:20

      if (sunRef.current) {
        if (
          currentSeconds >= sunriseSeconds &&
          currentSeconds <= sunsetSeconds
        ) {
          // Duración del día en segundos
          const dayDurationInSeconds = sunsetSeconds - sunriseSeconds;

          // Segundos transcurridos desde la salida del sol
          const elapsedSeconds = currentSeconds - sunriseSeconds;

          // Porcentaje del día que ha pasado
          const elapsedDayPercentage =
            ((currentSeconds - sunriseSeconds) /
              (sunsetSeconds - sunriseSeconds)) *
            100;

          // Posiciones actuales del sol en los ejes X e Y (simulando una parábola)
          const sunPositionX = elapsedDayPercentage * 0.9;
          const sunPositionY =
            -Math.pow(elapsedDayPercentage - 50, 2) / 25 + 92; // De 0% (abajo) a 50% (medio) a 0% (abajo)

          // Tamaño del sol
          let sunSize = `${(10 / elapsedDayPercentage) * 5 + 50}px`;
          console.log(sunSize); // Tamaño normal

          // Color del sol
          const currentColor = interpolateColor(
            startColor,
            endColor,
            elapsedDayPercentage / 100
          );

          // Aplicar los cambios
          sunRef.current.style.bottom = `${sunPositionY}%`;
          sunRef.current.style.left = `${sunPositionX}%`;
          sunRef.current.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
          sunRef.current.style.width = sunSize;
          sunRef.current.style.height = sunSize;
        } else {
          // Durante la noche...
          sunRef.current.style.bottom = '-90px';
          sunRef.current.style.left = '0%';
          sunRef.current.style.backgroundColor = 'darkgray';
          sunRef.current.style.width = '100px'; // Tamaño normal
          sunRef.current.style.height = '100px'; // Tamaño normal
        }
      }
    };

    updateSun();
    const intervalId = setInterval(updateSun, 1000); // Actualizar cada segundo

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    };
  }, []);

  return <div className='sun' ref={sunRef}></div>;
};

export default Sun;
