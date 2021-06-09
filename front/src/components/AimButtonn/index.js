import React, { useCallback } from 'react';
import { AimOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getLocation } from 'reducers/map';
import { AimButtonWrapper, CustomAim } from './style';

const AimButton = () => {
  const dispatch = useDispatch();

  const getCurrentLocation = useCallback(() => {
    dispatch(getLocation());
  }, []);

  /* 
  const getCurrentLocation = useCallback(() => {
    console.log('지도 상에 현재 위치를 불러옵니다.');
    useGetMyLoc();
  }, []);
  */

  return (
    <AimButtonWrapper>
      <CustomAim onClick={getCurrentLocation} />
    </AimButtonWrapper>
  );
};

export default AimButton;
