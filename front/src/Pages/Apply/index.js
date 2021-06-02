import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import { ApplyContentWrapper, ApplyButton, CenterMarker } from './style';

import { toggleApplyForm } from '../../reducers/apply';

import ContentTop from '../../components/ContentTop';
import Map from '../../components/Map';
import AddressView from '../../components/AddressView';
import ApplyForm from '../../components/ApplyForm';

const Apply = () => {
  const dispatch = useDispatch();
  const isApplyForm = useSelector((state) => state.apply.isApplyForm);

  const useToggle = () => {
    dispatch(toggleApplyForm());
  };
  return (
    <>
      <ContentTop top={true} width={'100%'}>
        {isApplyForm ? <LeftOutlined onClick={useToggle} /> : <CloseOutlined />}
        <h1>가게 제보</h1>
      </ContentTop>
      <Map />
      <CenterMarker />
      <ApplyContentWrapper>
        <h3>제보하려는 가게의 위치</h3>
        <AddressView />
        <ApplyButton onClick={useToggle}>제보하기</ApplyButton>
      </ApplyContentWrapper>
      <ApplyForm isApplyForm={isApplyForm} />
    </>
  );
};

export default Apply;
