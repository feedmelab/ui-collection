import React, { useEffect, useRef } from 'react';
import './index.css';

const Moon: React.FC = () => {
  const moonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMoon = () => {
      const now = new Date();
      const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60;

      const sunriseSeconds = 6 * 60 * 60; // 6:00
      const sunsetSeconds = 21 * 60 * 60 + 20 * 60; // 21:20

      if (moonRef.current) {
        if (
          currentSeconds >= sunsetSeconds ||
          currentSeconds <= sunriseSeconds
        ) {
          // Durante la noche...

          // Duración de la noche en segundos
          const nightDurationInSeconds =
            24 * 60 * 60 - sunsetSeconds + sunriseSeconds;

          // Segundos transcurridos desde la puesta del sol
          const elapsedSeconds =
            currentSeconds > sunsetSeconds
              ? currentSeconds - sunsetSeconds
              : 24 * 60 * 60 - sunsetSeconds + currentSeconds;

          // Porcentaje de la noche que ha pasado
          const elapsedNightPercentage =
            (elapsedSeconds / nightDurationInSeconds) * 100;

          // Posiciones actuales de la luna en los ejes X e Y (simulando una parábola)
          const moonPositionX = elapsedNightPercentage; // De 0% (izquierda) a 100% (derecha)
          const moonPositionY =
            -Math.pow(elapsedNightPercentage - 50, 2) / 25 + 75; // De 25% (medio) a 0% (arriba) a 25% (medio)

          moonRef.current.style.bottom = `${moonPositionY}%`;
          moonRef.current.style.left = `${moonPositionX}%`;
          moonRef.current.style.opacity = '1';
        } else {
          // Durante el día...
          moonRef.current.style.bottom = '0%';
          moonRef.current.style.left = '100%';
          moonRef.current.style.opacity = '0';
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
