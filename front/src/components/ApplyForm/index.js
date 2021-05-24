import React from 'react';
import PropTypes from 'prop-types';
import { ApplyFormWrapper, ApplyFormContent, ApplyFormTitle } from './style';
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
    </ApplyFormWrapper>
  );
};

ApplyForm.propTypes = {
  isApplyForm: PropTypes.bool,
};

export default ApplyForm;
