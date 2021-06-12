import { useState } from 'react';

export default function useUserLocation() {
  const [location, setLocation] = useState(null);

  // 위치 정보가 있으면 해당 위치로 맵 이동
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({ latitude, longitude });
    });
  }

  return { location };
}
