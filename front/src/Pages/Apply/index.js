import React, { useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { ApplyContentWrapper, ApplyButton } from './style';
import ContentTop from '../../components/ContentTop';
import Map from '../../components/Map';
import AddressView from '../../components/AddressView';

const Apply = () => {
  return (
    <>
      <ContentTop top={true} width={'100%'}>
        <CloseOutlined />
        <h1>가게 제보</h1>
      </ContentTop>
      <Map height={'small'} />
      <ApplyContentWrapper>
        <h3>제보하려는 가게의 위치</h3>
        <AddressView />
        <ApplyButton>제보하기</ApplyButton>
      </ApplyContentWrapper>
    </>
  );
};

export default Apply;
