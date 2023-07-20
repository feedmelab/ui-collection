import React, { useEffect, useRef } from 'react';
import './index.css';

const Moon: React.FC = () => {
  const moonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMoon = () => {
      const now = new Date();
      const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60;

      const moonriseSeconds = 22 * 60 * 60; // 22:00
      const moonsetSeconds = 7 * 60 * 60; // 7:00

      if (moonRef.current) {
        if (
          currentSeconds >= moonriseSeconds ||
          currentSeconds <= moonsetSeconds
        ) {
          // Durante la noche...

          // Duración de la noche en segundos
          const nightDurationInSeconds =
            24 * 60 * 60 - moonsetSeconds + moonriseSeconds;

          // Segundos transcurridos desde la puesta de la luna
          const elapsedSeconds =
            currentSeconds > moonriseSeconds
              ? currentSeconds - moonriseSeconds
              : 24 * 60 * 60 - moonriseSeconds + currentSeconds;

          // Porcentaje de la noche que ha pasado
          const elapsedNightPercentage =
            (elapsedSeconds / nightDurationInSeconds) * 100;

          // Posiciones actuales de la luna en los ejes X e Y (simulando una parábola)
          const moonPositionX = elapsedNightPercentage; // De 0% (izquierda) a 100% (derecha)
          const moonPositionY =
            -Math.pow(elapsedNightPercentage - 50, 2) / 25 + 100; // De 25% (medio) a 0% (arriba) a 25% (medio)

          // Tamaño de la luna
          let moonSize = '100px'; // Tamaño normal
          if (elapsedNightPercentage < 10 || elapsedNightPercentage > 90) {
            moonSize = '200px'; // Más grande cerca del amanecer y el atardecer
          }

          moonRef.current.style.bottom = `${moonPositionY}%`;
          moonRef.current.style.left = `${moonPositionX}%`;
          moonRef.current.style.opacity = '1';
          moonRef.current.style.width = moonSize;
          moonRef.current.style.height = moonSize;
        } else {
          // Durante el día...
          moonRef.current.style.bottom = '0%';
          moonRef.current.style.left = '100%';
          moonRef.current.style.opacity = '0';
          moonRef.current.style.width = '100px';
          moonRef.current.style.height = '100px';
        }
      }
    };

    updateMoon();
    const intervalId = setInterval(updateMoon, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className='moon' ref={moonRef}></div>;
};

export default Moon;
