import React, { useEffect } from 'react';
import FetchingMap from '../../apis/FetchingMap';

export default function Main() {
  useEffect(() => {
    FetchingMap();
  }, []); // 마운트 될때 사용할수 있도록 useEffect 사용

  return (
    <div
      id="Map"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    ></div>
  );
}
