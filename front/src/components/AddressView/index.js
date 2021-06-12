import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AddressViewer } from './style';

const AddressView = ({ style }) => {
  const { address, status } = useSelector((state) => state.map.userAddress);
  return (
    <AddressViewer style={style}>
      <b>{address && status === 'OK' ? address.address.address_name : `-`}</b>
    </AddressViewer>
  );
};

AddressView.propTypes = {
  style: PropTypes.object,
};

export default AddressView;
