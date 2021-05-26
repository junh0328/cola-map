import React, { useCallback } from 'react';
import { AimOutlined } from '@ant-design/icons';
import { useGetMyLoc } from '../../apis/useGetMyLoc';

const AimButton = () => {
  const getCurrentLocation = useCallback(() => {
    console.log('지도 상에 현재 위치를 불러옵니다.');
    useGetMyLoc();
  }, []);

  /* 
  const getCurrentLocation = useCallback(() => {
    console.log('지도 상에 현재 위치를 불러옵니다.');
    useGetMyLoc();
  }, []);
  */

  return (
    <div
      style={{
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 10000,
        bottom: '30%',
        right: '5%',
      }}
    >
      <AimOutlined
        style={{
          fontSize: '3rem',
          zIndex: 9999,
          background: '#fff',
          color: '#0F4C82',
          padding: 10,
          cursor: 'pointer',
          borderRadius: '50%',
        }}
        onClick={getCurrentLocation}
      />
    </div>
  );
};

export default AimButton;
