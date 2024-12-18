
import { useEffect } from 'react';

export const useShakeDetector = (callback) => {
  useEffect(() => {
    let lastX, lastY, lastZ;
    const SHAKE_THRESHOLD = 15;

    const handleMotion = (event) => {
      const { accelerationIncludingGravity } = event;
      const { x, y, z } = accelerationIncludingGravity;

      if (typeof lastX !== "undefined") {
        const deltaX = Math.abs(x - lastX);
        const deltaY = Math.abs(y - lastY);
        const deltaZ = Math.abs(z - lastZ);

        if (deltaX + deltaY + deltaZ > SHAKE_THRESHOLD) {
          callback();
        }
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    window.addEventListener('devicemotion', handleMotion, true);

    return () => {
      window.removeEventListener('devicemotion', handleMotion, true);
    };
  }, [callback]);
};