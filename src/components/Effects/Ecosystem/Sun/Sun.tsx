import React, { useEffect, useRef } from 'react';
import './index.css'; // Esto es para los estilos del componente

const Sun: React.FC = () => {
  const sunRef = useRef<HTMLDivElement | null>(null);

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
          // Durante el día...

          // Duración del día en segundos
          const dayDurationInSeconds = sunsetSeconds - sunriseSeconds;

          // Segundos transcurridos desde la salida del sol
          const elapsedSeconds = currentSeconds - sunriseSeconds;

          // Porcentaje del día que ha pasado
          const elapsedDayPercentage =
            (elapsedSeconds / dayDurationInSeconds) * 100;

          // Posiciones actuales del sol en los ejes X e Y (simulando una parábola)
          //const sunPositionX = elapsedDayPercentage; // De 0% (izquierda) a 100% (derecha)
          const sunPositionX = elapsedDayPercentage * 0.9;
          const sunPositionY =
            -Math.pow(elapsedDayPercentage - 50, 2) / 25 + 82; // De 0% (abajo) a 50% (medio) a 0% (abajo)

          // Tamaño del sol
          let sunSize = '100px'; // Tamaño normal
          if (elapsedDayPercentage < 10 || elapsedDayPercentage > 190) {
            sunSize = '200px'; // Más grande cerca del amanecer y el atardecer
          }

          // Color del sol
          let sunColor = 'rgb(255, 223, 0)'; // Amarillo
          if (elapsedDayPercentage > 30 && elapsedDayPercentage <= 60) {
            sunColor = 'rgb(255, 238, 0)'; // Naranja
          } else if (elapsedDayPercentage > 60) {
            sunColor = 'rgb(255, 166, 0)'; // Rojo
          }

          // Aplicar los cambios
          sunRef.current.style.bottom = `${sunPositionY}%`;
          sunRef.current.style.left = `${sunPositionX}%`;
          sunRef.current.style.backgroundColor = sunColor;
          sunRef.current.style.width = sunSize;
          sunRef.current.style.height = sunSize;
        } else {
          // Durante la noche...
          sunRef.current.style.bottom = '0%';
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
