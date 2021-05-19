import React, { useCallback } from 'react';
import { AimOutlined } from '@ant-design/icons';
import { AimButtonWrapper } from './style';
// import { useDispatch } from 'react-redux';
// import { useDisplayMark } from '../../apis/useDisplayMark';

const AimButton = () => {
  // const dispatch = useDispatch();
  // const displayMarker = useDisplayMark();

  const getCurrentLocation = useCallback(() => {
    alert('현재 위치 출력!');
  }, []);

  return (
    <AimButtonWrapper
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
    </AimButtonWrapper>
  );
};

export default AimButton;
