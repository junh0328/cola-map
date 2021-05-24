import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AddressViewer } from './style';

const AddressView = ({ style }) => {
  const { result, status } = useSelector((state) => state.map.address);

  return (
    <AddressViewer style={style}>
      <b>{result && status === 'OK' ? result.address.address_name : `-`}</b>
    </AddressViewer>
  );
};

AddressView.propTypes = {
  style: PropTypes.object,
};

export default AddressView;
