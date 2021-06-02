import React from 'react';
import PropTypes from 'prop-types';
import { ApplyFormWrapper, ApplyFormContent, ApplyFormTitle, ApplyFormInput, ApplyFormSelect } from './style';
import AddressView from '../AddressView';

const ApplyForm = ({ isApplyForm }) => {
  return (
    <ApplyFormWrapper isApplyForm={isApplyForm.toString()}>
      <ApplyFormContent>
        <ApplyFormTitle>
          <b>가게위치</b>
        </ApplyFormTitle>
        <AddressView style={{ border: '1px solid #ddd' }} />
      </ApplyFormContent>
      <ApplyFormContent>
        <ApplyFormTitle>
          <b>가게이름</b>
          <ApplyFormInput placeholder="가게이름" />
        </ApplyFormTitle>
      </ApplyFormContent>
      <ApplyFormContent>
        <ApplyFormTitle>
          <b>카테고리</b>
          <ApplyFormSelect>
            <option>펩시</option>
            <option>코카콜라</option>
          </ApplyFormSelect>
        </ApplyFormTitle>
      </ApplyFormContent>
    </ApplyFormWrapper>
  );
};

ApplyForm.propTypes = {
  isApplyForm: PropTypes.bool,
};

export default ApplyForm;
