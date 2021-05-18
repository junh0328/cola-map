import React, { useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { MarkerIcon } from './style';
import ContentTop from '../../components/ContentTop';
import Map from '../../components/Map';

const Apply = () => {
  return (
    <>
      <ContentTop top={true} width={'100%'}>
        <CloseOutlined />
        <h1>가게 제보</h1>
      </ContentTop>
      <Map />
      <MarkerIcon>
        <img src="/images/marker.png" alt="marker" />
      </MarkerIcon>
    </>
  );
};

export default Apply;
