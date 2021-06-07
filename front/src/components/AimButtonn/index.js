import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getLocation } from 'reducers/map';
import { AimButtonWrapper, CustomAim } from './style';

const AimButton = () => {
  const dispatch = useDispatch();

  const getCurrentLocation = useCallback(() => {
    dispatch(getLocation());
  }, []);

  return (
    <AimButtonWrapper>
      <CustomAim onClick={getCurrentLocation} />
    </AimButtonWrapper>
  );
};

export default AimButton;
